export const isExternalLink = (link) => {
  if (link) {
    const { href } = link;
    return (
      href &&
      (href.toLowerCase().startsWith("http://") ||
        href.toLowerCase().startsWith("https://") ||
        href.toLowerCase().startsWith("//") ||
        href.toLowerCase().startsWith("mailto:"))
    );
  }
  return true;
};

export const openLink = (router, link) => {
  if (typeof window === "undefined") return null;

  if (link) {
    const { href, target } = link;
    if (target && target === "_blank") {
      window.open(href, "_blank").focus();
    } else if (isExternalLink(link)) {
      window.location.href = href;
    } else {
      router.push(href);
    }
  }
};

export const isValidHttpUrl = (string = "") => {
  let url = null;

  if (string && string.length > 0) {
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
  } else {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

// convert absolute URLs to relative if same host
export const convertAbsoluteLinkToRelative = (link) => {
  if (link && isExternalLink(link)) {
    let currentHost = null;
    let currentHostUrl = null;
    if (process.env.NODE_ENV === "development") {
      currentHost = process.env.DEV_FRONTEND_HOST;
    } else {
      if (typeof window === "undefined") {
        currentHost = process.env.RESOURCE_PATH;
      } else {
        currentHost = window?.location?.origin;
      }
    }

    try {
      currentHostUrl = new URL(currentHost);
    } catch (e) {
      console.warn("Invalid URL: " + currentHost);
    }

    if (currentHostUrl) {
      let linkUrl = null;

      try {
        linkUrl = new URL(link.href);
      } catch (e) {
        console.warn("Invalid URL: " + link.href);
      }
      if (linkUrl) {
        if (currentHostUrl.host === linkUrl.host) {
          return { ...link, href: linkUrl.pathname + linkUrl.search };
        }
      }
    }
  }

  return link;
};
