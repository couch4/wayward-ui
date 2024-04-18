// @ts-ignore - grabs variables from the root project's tailwind config
import twConfig from "/tailwind.config.ts";

// @ts-ignore
const { screens: breakpoints } = twConfig?.theme?.extend;
const availBreakpoints = breakpoints
  ? Object.keys(breakpoints)
  : ["base", "sm", "md", "lg", "xl", "xxl"];

const defaultSettings = {
  attachTo: "bottom",
  persistOn: "click",
  direction: "column",
  motion: {
    item: {},
    panel: {},
    icon: {},
  },
  textStyle: {
    textStyle: "p",
  },
  icon: {},
  imageSizes: "100vw",
  imageQuality: 80,
  imagePriority: true,
  scrollable: false,
  disableImages: false,
};

/* 
remaps the nav data from the backend and adds a few helpers for us to target in both JS and CSS
*/

export const remapNavData = (data: any, state = true, level = 0) => {
  const newContent = {
    isVisible: state,
    isActive: false,
    navStyle: level === 0 ? "main-nav" : `sub-nav level-${level}`,
  };

  return data.map((item: any, index: number) => {
    const newItem = { ...item, ...newContent, level, index };

    if (item.navItems && item.navItems.length > 0) {
      return {
        ...newItem,
        navItems: remapNavData(item.navItems, false, level + 1),
      };
    } else {
      return newItem;
    }
  });
};

const findHighestValue = (obj: any, key: string) => {
  let highestValue = 0;

  function traverse(obj: any) {
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] === "object") {
          traverse(obj[property]);
        } else if (
          property === key &&
          typeof obj[property] === "number" &&
          obj[property] > highestValue
        ) {
          highestValue = obj[property];
        }
      }
    }
  }

  traverse(obj);

  return highestValue;
};

/* 
below is code to traverse through a config settings object for the nav.
The schema will be similar to the default settings above, but generally need to match a breakpoint, 
so the nav knows how to structure itself at any given breakpoint. 
it builds from the base up, so if you don't add a breakpoint for "md", it'll use the last provided breakpoint.
*/

const getLatestValue = (level: number, props: any, key: string) => {
  const values = props?.[key];
  let value = {};
  if (Array.isArray(values) && values.length > 0) {
    value = {
      [key]: values[level] ? values[level] : values[values.length - 1],
    };
  } else if (values !== undefined) {
    value = {
      [key]: values,
    };
  }

  return value;
};

const modifyLevelLayout = (levelSettings: any, props: any, level: number) => {
  const newPersist = getLatestValue(level, props, "persistOn");
  const newDirection = getLatestValue(level, props, "direction");
  const newAttach = getLatestValue(level, props, "attachTo");
  const newMotion = getLatestValue(level, props, "motion");
  const newIcon = getLatestValue(level, props, "icon");
  const newText = getLatestValue(level, props, "textStyle");
  const newScrollable = getLatestValue(level, props, "scrollable");
  const newImageSizes = getLatestValue(level, props, "imageSizes");
  const newImageQuality = getLatestValue(level, props, "imageQuality");
  const newImagePriority = getLatestValue(level, props, "imagePriority");
  const newDisableImages = getLatestValue(level, props, "disableImages");

  return {
    ...levelSettings, // last breakpoints settings, followed by next breakpoint overrides - (if exist)
    ...newPersist,
    ...newDirection,
    ...newAttach,
    ...newMotion,
    ...newIcon,
    ...newText,
    ...newScrollable,
    ...newImageSizes,
    ...newImageQuality,
    ...newImagePriority,
    ...newDisableImages,
  };
};

const modifyLayout = (array: any, props: any) => {
  return array.map((val: any, i: number) => {
    return modifyLevelLayout(val, props, i);
  });
};

const getBreakpointLayout = (array: any, props: any, breakpoint: string) => {
  if (props && props[breakpoint]) {
    return modifyLayout(array, props[breakpoint]);
  } else {
    return array;
  }
};

export const setupNav = (props: any, state: any, breakpoint: any) => {
  const navLevel = findHighestValue(state, "level");

  const baseIndex = availBreakpoints.indexOf("base");

  if (baseIndex === 0) {
    availBreakpoints.shift();
  }

  const getLastBreakpointIndex =
    breakpoint === "base" ? 0 : availBreakpoints.indexOf(breakpoint);

  let defaultArray: any = [];
  for (let i = 0; i < navLevel + 1; i++) {
    defaultArray.push(defaultSettings);
  }

  if (getLastBreakpointIndex < 0) return null;

  let breakpointArray = defaultArray;
  for (let i = 0; i < getLastBreakpointIndex + 1; i++) {
    breakpointArray = getBreakpointLayout(
      breakpointArray,
      props,
      availBreakpoints[i],
    );
  }

  return breakpointArray;
};
