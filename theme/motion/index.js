// components
export * from "./components/accordion";
export * from "./components/carousel";
export * from "./components/contentBlock";
export * from "./components/nav";

// modules
export * from "./modules/CardListingGridModule";

// default presets

export const animController = (
  active = false,
  delay = 0,
  staggerChildren = 0.2,
) => ({
  initial: "inactive",
  animate: active ? "active" : "inactive",
  variants: {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
      },
    },
  },
});

export const animControllerInView = (delay = 0, staggerChildren = 0.2) => ({
  initial: "inactive",
  whileInView: "active",
  variants: {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
      },
    },
  },
});

const easeIn = {
  type: "spring",
  damping: 25,
};

const bounceIn = {
  type: "spring",
  stiffness: 500,
};

export const fadeInUp = {
  variants: {
    inactive: {
      y: 50,
      opacity: 0,
    },
    active: {
      y: 0,
      opacity: 1,
      transition: easeIn,
    },
  },
};

export const fadeInLeft = {
  variants: {
    inactive: {
      x: 50,
      opacity: 0,
    },
    active: {
      x: 0,
      opacity: 1,
      transition: easeIn,
    },
  },
};

export const fadeInRight = {
  variants: {
    inactive: {
      x: -50,
      opacity: 0,
    },
    active: {
      x: 0,
      opacity: 1,
      transition: easeIn,
    },
  },
};

export const scaleIn = {
  variants: {
    inactive: {
      scale: 0,
      opacity: 0,
    },
    active: {
      scale: 1,
      opacity: 1,
      transition: easeIn,
    },
  },
};

export const springIn = {
  variants: {
    inactive: {
      scale: 0,
      opacity: 0,
    },
    active: {
      scale: 1,
      opacity: 1,
      transition: bounceIn,
    },
  },
};
