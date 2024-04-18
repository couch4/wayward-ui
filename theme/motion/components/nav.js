export const navPanelWrapperAnimations = (attach) => {
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

export const navPanelAnimations = (attach) => ({
  variants: {
    inactive: {
      opacity: 0,
      height: attach ? "auto" : 0,
    },
    active: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        delay: 0.2,
        damping: 20,
        stiffness: 150,
      },
    },
  },
});

export const navItemAnimations = (index) => ({
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
});

export const navImageAnimations = {
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
