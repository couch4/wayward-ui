const { DefaultAzureCredential } = require("@azure/identity");
const { CdnManagementClient } = require("@azure/arm-cdn");

const subscriptionId =
  process.env.AZURE_SUBSCRIPTION_ID || "a8d474fa-c550-4ef4-8d3d-5b56f9b837e5";
const resourceGroupName = process.env.AZURE_RESOURCE_GROUP_NAME || "mofbb-qa";
const profileName = process.env.AZURE_CDN_PROFILE_NAME || "mofbb-cdn-verizon";
const endpointName = process.env.AZURE_FRONTEND_ENDPOINT_NAME;

const URL_CHUNK_SIZE = 3;
const IMAGE_CHUNK_SIZE = 10;

const DEV_MODE = false;

const PAGES_TO_LOAD = ["/", "/demo", "/modules", "/modules/misc/form-module"];

const loadRequestPostDataToCdnCache = async (req) => {
  let paths = null;
  if (req) {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    paths = JSON.parse(Buffer.concat(buffers).toString());

    if (paths && paths.length > 0) {
      const CDNPaths = [];

      paths.forEach((path) => {
        CDNPaths.push(path);
        CDNPaths.push("/isrobot" + path);
      });
      await purgeCdnCache(CDNPaths);
      findAndLoadMarkedPagesToCdnCache(CDNPaths);
    }
  }
};

const loadMarkedPagesToCdnCache = async () => {
  if (PAGES_TO_LOAD && PAGES_TO_LOAD.length > 0) {
    loadLinksToCdnCache(PAGES_TO_LOAD);
  }
};

const findAndLoadMarkedPagesToCdnCache = async (paths) => {
  if ((process.env.NODE_ENV === "production" || DEV_MODE) && endpointName) {
    const uniqueArray = [];
    paths.forEach((ele1) => {
      PAGES_TO_LOAD.forEach((ele2) => ele1 === ele2 && uniqueArray.push(ele1));
    });

    loadLinksToCdnCache(uniqueArray);
  }
};

const loadAssetsToCdnCache = async () => {
  if ((process.env.NODE_ENV === "production" || DEV_MODE) && endpointName) {
    console.info("[CU] CDN assets load started.");
    const assets = [];

    try {
      const homepapeRes = await fetch(
        `${process.env.RESOURCE_PATH || "https://qa.matterofform.com/"}`,
      );

      if (homepapeRes && homepapeRes.ok) {
        const homepape = await homepapeRes.text();
        const assetsLinks = [
          ...homepape.matchAll(/(?<=href="\/_next)[^"]+\.css/gm),
          ...homepape.matchAll(/(?<=src="\/_next)[^"]+\.js/gm),
        ];

        for await (const link of assetsLinks) {
          await fetch(process.env.RESOURCE_PATH + "_next" + link[0], {
            headers: { "x-cdn-load": "1", "x-cdn-load-refresh": "1" },
          });
          assets.push("/_next" + link[0]);
        }
      } else {
        console.error(
          `[CU] Error fetching ${
            process.env.API_URL || "https://qa-bb-api.matterofform.com/"
          }`,
        );
      }
    } catch (err) {
      console.error("[CU] Error occurred while loading assets", err);
    }

    try {
      const folders = [
        { path: "/_next/static/media/", dir: "./.next/static/media/" },
      ];

      const fs = require("fs");

      folders.forEach((folder) => {
        fs.readdirSync(folder.dir, { withFileTypes: true })

          .filter((item) => !item.isDirectory())
          .forEach((file) => {
            assets.push(folder.path + file.name);
          });
      });
    } catch (err) {
      console.error("[CU] Error occurred while loading assets", err);
    }

    try {
      await loadPaths(assets);
      console.info("[CU] CDN assets load completed.");
    } catch (err) {
      console.error("[CU] Error occurred while loading assets", err);
    }
  } else {
    console.info(
      "[CU] Skipping assets cache build, not production environment.",
    );
  }
};

const loadLinksToCdnCache = async (links) => {
  if (process.env.NODE_ENV === "production" || DEV_MODE) {
    const urlSet = new Set();
    const imageSet = new Set();

    console.info("[CU] CDN HTML load started for paths:", links);

    for await (const link of links) {
      try {
        const url = new URL(
          link || "",
          !link.startsWith("http:") && !link.startsWith("https:")
            ? "http://fake-base.com"
            : undefined,
        );
        let pathname = url.pathname;
        if (pathname === "/") {
          pathname = "/index.html";
        } else if (pathname.endsWith("/")) {
          pathname = pathname.slice(0, -1);
        }

        const htmlRes = await fetch(
          process.env.RESOURCE_PATH + pathname + url.search + url.hash,
          {
            headers: { "x-cdn-load": "1", "x-cdn-load-refresh": "1" },
          },
        );

        urlSet.add(pathname + url.search + url.hash);

        const html = await htmlRes.text();

        if (html) {
          const sectionMatch = html.match(/<section.*?>(.+?)<\/section>/gi);
          if (sectionMatch) {
            const firstSection = [...sectionMatch];
            const srcsets = [...firstSection[0].matchAll(/srcset="(.+?)"/gim)];

            srcsets.forEach((srcset) => {
              const srcsetArray = srcset[1].split(" ");

              srcsetArray.forEach((image) => {
                if (
                  image.startsWith("/media") &&
                  image.includes("format=webp")
                ) {
                  imageSet.add(image);
                }
              });
            });
          }
        }
      } catch (err) {
        console.error("[CU] Error occurred while fetch HTML content", err);
      }
    }

    const urlChunkSet = new Set();
    let counter = 0;
    for await (const path of urlSet) {
      counter++;
      urlChunkSet.add(path);
      if (urlChunkSet.size === URL_CHUNK_SIZE || counter === links.length) {
        try {
          await loadPaths(Array.from(urlChunkSet));
        } catch (err) {
          console.error("[CU] Error occurred while loading HTML content", err);
        }
        await delay(10000);
        urlChunkSet.clear();

        console.info(
          `[CU] CDN HTML load ${
            counter !== links.length
              ? Math.round((counter * 100) / links.length)
              : 100
          }% compleate`,
        );
      }
    }

    // load images
    const imageChunkSet = new Set();
    const imageList = Array.from(imageSet);
    if (imageList.length > 0) {
      console.info("[CU] CDN image load started.");
      counter = 0;
      for await (const image of imageList) {
        counter++;
        imageChunkSet.add(image);
        await fetch(process.env.RESOURCE_PATH + image);
        if (
          imageChunkSet.size === IMAGE_CHUNK_SIZE ||
          counter === imageList.length
        ) {
          try {
            await loadPaths(Array.from(imageChunkSet));
            imageChunkSet.clear();
          } catch (err) {
            console.error("[CU] Error occurred while loading images", err);
          }
          console.info(
            `[CU] CDN image load ${
              counter !== imageList.length
                ? Math.round((counter * 100) / imageList.length)
                : 100
            }% compleate`,
          );
        }
      }
    }

    console.info("[CU] CDN cache load completed.");
  } else {
    console.info("[CU] Skipping cache build, not production environment.");
  }
};

const purgeCdnCache = async (contentPaths = ["/*"]) => {
  if ((process.env.NODE_ENV === "production" || DEV_MODE) && endpointName) {
    // purge all
    console.info("[CU] CDN purge started for contentPaths: ", contentPaths);

    try {
      var cdnClient = getCdnClient();
      await cdnClient.endpoints.beginPurgeContentAndWait(
        resourceGroupName,
        profileName,
        endpointName,
        {
          contentPaths,
        },
      );

      console.info("[CU] CDN purge completed.");
    } catch (err) {
      console.error("[CU] Error occurred while purging CDN Cache", err);
    }
  } else {
    console.info("[CU] Skipping CDN purge, not production environment.");
  }
};

async function loadPaths(contentPaths) {
  if (
    (contentPaths &&
      contentPaths.length > 0 &&
      process.env.NODE_ENV === "production") ||
    DEV_MODE
  ) {
    var cdnClient = getCdnClient();
    const urlSet = [];
    if (contentPaths.length > 50) {
      let counter = 0;
      let urlChunkSet = [];
      contentPaths.forEach((path) => {
        urlChunkSet.push(path);
        counter++;
        if (urlChunkSet.length === 49 || counter === contentPaths.length) {
          urlSet.push([...urlChunkSet]);
          urlChunkSet = [];
        }
      });
    } else {
      urlSet.push([...contentPaths]);
    }
    for await (const urlChunk of urlSet) {
      await cdnClient.endpoints.beginLoadContentAndWait(
        resourceGroupName,
        profileName,
        endpointName,
        { contentPaths: urlChunk },
        { requestOptions: { "x-cdn-load": "1" } },
      );
    }
  }
}

function getCdnClient() {
  return new CdnManagementClient(new DefaultAzureCredential(), subscriptionId);
}

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

exports.purgeCdnCache = purgeCdnCache;
exports.loadAssetsToCdnCache = loadAssetsToCdnCache;
exports.loadLinksToCdnCache = loadLinksToCdnCache;
exports.loadMarkedPagesToCdnCache = loadMarkedPagesToCdnCache;
exports.loadRequestPostDataToCdnCache = loadRequestPostDataToCdnCache;
