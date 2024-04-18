const fade = {
  inactive: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      stiffness: 50,
      damping: 10,
    },
  },
};

export const slide = {
  variants: fade,
};

export const quoteWrapper = {
  variants: {
    inactive: {
      opacity: 0,
      scale: 0.9,
    },
    active: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 6,
      },
    },
  },
};

export const footer = {
  variants: {
    inactive: {},
    active: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
      },
    },
  },
};

const slowFadeUp = {
  inactive: {
    opacity: 0,
    y: 10,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 50,
    },
  },
};

export const author = {
  variants: slowFadeUp,
};

export const source = {
  variants: slowFadeUp,
};

export default {
  slide,
  quoteWrapper,
  footer,
  author,
  source,
};
