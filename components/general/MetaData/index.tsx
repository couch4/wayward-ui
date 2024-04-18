// ts-nocheck
import Head from "next/head";
import Script from "next/script";

const Metadata = ({ metadata }: any) => {
  if (!metadata) return;

  const vanillaScripts = metadata.headSectionScripts
    .map((s) => {
      if (!s || s === "") return null;
      return s.replace(/<script[^>]*>/g, "").replace(/<\/script>/g, "");
    })
    .join("\n");

  const scriptSrcs: any[] = [];
  metadata.headSectionScripts.forEach((s: any) => {
    if (s && s !== "") {
      scriptSrcs.push(
        // @ts-ignore
        .../src\s*=\s*"([^"]+)/g
          .exec(s)
          .filter((res) => !res.startsWith("src=")),
      );
    }
  });

  return (
    <>
      {scriptSrcs.map((script, index) => (
        <Script key={index} src={script} defer />
      ))}

      <Head>
        <title>{metadata.pageTitle}</title>
        <meta name="keywords" content={metadata.metaKeywords} />
        <meta name="description" content={metadata.metaDescription} />
        <meta property="og:url" content={metadata.absolutePageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.openGraphPageTitle} />
        <meta
          property="og:description"
          content={metadata.openGraphDescription}
        />
        <meta property="og:image" content={metadata.openGraphImageUrl} />
        <link rel="canonical" href={metadata.canonicalLink} />

        {metadata.hideFromSearch && <meta name="robots" content="noindex" />}

        {metadata.headSectionScripts &&
          metadata.headSectionScripts.length > 0 && (
            <script
              dangerouslySetInnerHTML={{
                __html: vanillaScripts,
              }}
            />
          )}

        {metadata.structuredDataTags.map((element: any, index: number) => (
          <script
            key={index}
            type="application/ld+json"
            id="structuredDataTags"
          >
            {element}
          </script>
        ))}

        <script
          async
          type="text/javascript"
          src="https://sdk.selfbook.com/selfbook.js?hotelId=31239&apiKey=Hijr0ZK9QQVXfMUGTM338YUHybn9USxYBBg"
          id="selfbook_jssdk"
        ></script>

        {metadata.favicon?.imageUrl && (
          <link rel="icon" type="image/png" href={metadata.favicon.imageUrl} />
        )}
      </Head>
    </>
  );
};

export default Metadata;
