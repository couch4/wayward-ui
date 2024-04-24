import classNames from "classnames";

export const listingGrid = (type: any, motion: any) => ({
  className: classNames("listing-grid-content", [type?.toLowerCase()]),
  initial: "inactive",
  animate: "active",
  exit: "inactive",
  variants: {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  ...motion,
});
