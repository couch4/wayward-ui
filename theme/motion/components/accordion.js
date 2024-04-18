export const accordionPanel = {
  variants: {
    inactive: {
      opacity: 0,
      height: 0,
    },
    active: {
      opacity: 1,
      height: "auto",
    },
  },
  transition: {
    type: "spring",
    damping: 20,
    stiffness: 100,
  },
};

export const accordionClose = {
  variants: {
    inactive: {
      rotate: 45,
    },
    active: {
      rotate: 90,
    },
  },
};

export const accordionContent = {
  variants: {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  },
};
