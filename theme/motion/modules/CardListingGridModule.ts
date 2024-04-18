export const cardListingAnims = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.4,
      },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

export const cardListingHolderAnims = {};
