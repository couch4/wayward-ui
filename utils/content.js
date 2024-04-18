// @ts-ignore - grabs variables from the root project's tailwind config
import twConfig from "/tailwind.config.ts";

const backUpBreakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

// @ts-ignore
const { screens: breakpoints } = twConfig?.theme?.extend;
const availBreakpoints = breakpoints
  ? Object.keys(breakpoints)
  : ["base", "sm", "md", "lg", "xl", "xxl"];

const breakpointVals = breakpoints || backUpBreakpoints;
delete breakpointVals.full;

export const stripHtml = (html) => {
  return html.replace(/(<([^>]+)>)/gi, "");
};

export const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();

  if (typeof window === "undefined") return null;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const loadLazyImage = (element) => {
  if (element) {
    element.querySelectorAll("*").forEach((item) => {
      if (item.getAttribute("data-srcset")) {
        item.setAttribute("srcset", item.getAttribute("data-srcset"));
        item.removeAttribute("data-srcset");
      }
      if (item.getAttribute("data-src")) {
        item.setAttribute("src", item.getAttribute("data-src"));
        item.removeAttribute("data-src");
      }
    });
    element.classList.add("lazy-loaded");
  }
};

export const containsMotionProps = (props) => {
  let containsMotionProps = false;
  if (
    props.initial ||
    props.animate ||
    props.variants ||
    props.transition ||
    props.whileHover ||
    props.whileTap ||
    props.whileFocus ||
    props.whileDrag ||
    props.whileInView ||
    props.motion
  ) {
    containsMotionProps = true;
  }

  return containsMotionProps;
};

export const splitArrayIntoChunks = (arr, chunkSize) => {
  return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
    arr.slice(index * chunkSize, index * chunkSize + chunkSize),
  );
};

export const extractAllOfType = (data, type) => {
  const flattened = [];

  function recurse(data) {
    Object.keys(data).forEach((key) => {
      const value = data[key];

      if (typeof value === "object" && value !== null && key !== "image") {
        recurse(value);
      } else if (key === type && value !== null) {
        flattened.push(value);
      }
    });
  }

  recurse(data, type);

  return [...new Set(flattened)];
};

const findLastNotGreater = (arr, value) => {
  let lastNotGreater = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      break;
    }
    lastNotGreater = arr[i];
  }

  return lastNotGreater;
};

export const getCurrentBreakpoint = (width) => {
  let currentBreakpoint = "base";

  const breakpointNums = Object.values(breakpointVals).map((breakpoint) => {
    if (!breakpoint.includes("%")) {
      return parseInt(breakpoint);
    }
  });

  const breakpointValue = findLastNotGreater(breakpointNums, width);

  if (breakpointValue > -1) {
    currentBreakpoint = Object.keys(breakpointVals).filter(
      (key) => breakpointVals[key] === `${breakpointValue}px`,
    )[0];
  }

  return currentBreakpoint;
};

export const getValueAtBreakpoint = (values, breakpoint, percentageOf) => {
  let value = values;
  if (typeof values === "object") {
    value = Object.values(values)[0];
    for (let i = 0; i < availBreakpoints.length; i++) {
      const val = availBreakpoints[i];
      if (values[val] && breakpoint !== "base") value = values[val];
      if (val === breakpoint) {
        break;
      }
    }
  }

  if (percentageOf) {
    let percentOfVal = value;
    if (typeof value === "number") {
      percentOfVal = value / percentageOf;
    }
    if (value.includes("%")) {
      const decimalise = parseInt(value.replace("%", "")) / 100;
      percentOfVal = decimalise * percentageOf;
    }
    return percentOfVal;
  }

  return value;
};

export const areArraysEqual = (a, b) => {
  return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
};

export const hasHTMLTags = (str) => {
  const regex = /<[^>]+>/;
  return regex.test(str);
};
