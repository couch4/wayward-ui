import { cva } from "class-variance-authority";
import { BoxVars } from "./Box.types";
import classnames from "classnames";

// box Base and Variant Styles
export const box = cva("box", {
  variants: {
    variant: {
      flex: ["flex flex-initial"],
      block: ["block"],
      container: ["container m-auto"],
      section: "",
      header: "",
      footer: "",
    },
  },
  defaultVariants: {
    variant: "flex",
  },
});

// box Props
export const boxVars: BoxVars = (variant, bgSrc, classes, styleProps) => {
  const baseStyles = [classes];

  let bg = {};
  if (bgSrc) {
    bg = {
      backgroundImage: `url(${bgSrc})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    };
  }

  return {
    className: box({
      variant,
      className: classnames(baseStyles),
    }),
    style: { ...styleProps, ...bg },
  };
};
