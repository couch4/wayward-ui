// import { getPlaiceholder } from "plaiceholder";
// declare const document: any;

export const getQueryByName = (str: string, key: string) => {
  const queryString = str;
  const regex = new RegExp("[?&]" + key + "=([^&#]*)");
  const matched = queryString.match(regex);
  return matched ? matched[1] : "";
};

export const stripQueryString = (
  str: string = "",
  andRemoveFirstSlash = false,
) => {
  const urlWithoutParams = str.replace(/\?.*$/, "");
  let url = urlWithoutParams;
  if (andRemoveFirstSlash && urlWithoutParams[0] === "/") {
    url = urlWithoutParams.substring(1);
  }
  return url;
};

// export const toDataURL = (url: string): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     if (!document) {
//       reject(new Error("Document is not available"));
//       return;
//     }

//     // @ts-ignore
//     const image = new Image();
//     image.src = url;
//     image.crossOrigin = "Anonymous";

//     image.onload = function () {
//       const canvas = document.createElement("canvas");
//       const context = canvas.getContext("2d");
//       canvas.width = image.width;
//       canvas.height = image.height;

//       console.log(canvas, context);

//       context.drawImage(image, 0, 0);

//       resolve(canvas.toDataURL());
//       return;
//     };

//     image.onerror = function () {
//       reject(new Error("Failed to load image"));
//     };
//   });
// };

// export const toBlurredURL = async (url: string) => {
//   const buffer = await fetch(url).then(async (res) => {
//     return Buffer.from(await res.arrayBuffer());
//   });

//   const { base64 } = await getPlaiceholder(buffer);

//   return base64;
// };
