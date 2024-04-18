// @ts-nocheck
const wrapper = (isOpen: boolean) => ({
  initial: "closed",
  animate: isOpen ? "open" : "closed",
  variants: {
    closed: {
      opacity: 0,
      height: 0,
    },
    open: {
      opacity: 1,
      height: "auto",
    },
  },
  transition: {
    type: "spring",
    damping: 25,
    stiffness: 200,
  },
});

const zhaNavPanelWrapperAnimations = (attach) => {
  if (attach) {
    return {
      variants: {
        inactive: {
          opacity: 0,
          height: 0,
          transition: {
            type: "spring",
            delay: 0.5,
          },
        },
        active: {
          opacity: 1,
          height: "auto",
          transition: {
            type: "spring",
          },
        },
      },
    };
  }

  return {
    variants: {
      inactive: {
        opacity: 0,
      },
      active: {
        opacity: 1,
        transition: {
          type: "spring",
        },
      },
    },
  };
};

const zhaNavPanelAnimations = (attach) => ({
  variants: {
    inactive: {
      opacity: 0,
      //   paddingTop: 0,
      //   paddingBottom: 0,
      height: attach ? "auto" : 0,
    },
    active: {
      opacity: 1,
      height: "auto",
      //   paddingTop: '1rem',
      //   paddingBottom: '1rem',
      transition: {
        type: "spring",
        delay: 0.2,
        damping: 20,
        stiffness: 150,
      },
    },
  },
});

const zhaNavItemAnimations = (index) => ({
  variants: {
    inactive: {
      opacity: 0,
      y: 20,
    },
    active: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        delay: 0.3 + index * 0.2,
      },
    },
  },
  whileHover: "hovered",
});

const zhaNavImageAnimations = {
  variants: {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.5,
        damping: 20,
        stiffness: 150,
      },
    },
  },
};

const navArrowHover = {
  initial: {
    rotate: 0,
  },
  variants: {
    hovered: {
      rotate: -45,
    },
  },
};

const slideRight = (width, currTier) => {
  const xPos = -currTier * width;

  return {
    animate: {
      x: xPos,
      height: "auto",
    },
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
    },
  };
};

const meganav = {
  variants: {
    closed: {
      opacity: 0,
      height: 0,
    },
    open: {
      opacity: 1,
      height: "auto",
    },
  },
  transition: {
    type: "spring",
    damping: 35,
    stiffness: 290,
  },
};

const navItem = {
  variants: {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  },
};

const spanRow = (currTier: number, navWidth: number, offset: number) => {
  let width = navWidth - (currTier / 3) * navWidth;
  if (offset > 0) {
    width = navWidth;
  }

  return {
    initial: "inactive",
    animate: "active",
    variants: {
      inactive: {
        opacity: 0,
        width: 0,
      },
      active: {
        opacity: 1,
        width,
        transition: {
          opacity: {
            delay: 0.1,
          },
          type: "spring",
          damping: 30,
          stiffness: 200,
        },
      },
    },
  };
};

const slideRightWrapper = (height) => {
  return {
    animate: height,
  };
};

const headerMotion = {
  wrapper,
  meganav,
  panel: zhaNavPanelAnimations,
  panelWrapper: zhaNavPanelWrapperAnimations,
  item: zhaNavItemAnimations,
  image: zhaNavImageAnimations,
  slideRight,
  slideRightWrapper,
  navItem,
  spanRow,
};

export default headerMotion;
