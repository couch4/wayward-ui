import { cva } from "class-variance-authority";
import { ButtonGroupVars } from "./ButtonGroup.types";

// buttonGroup Variant Styles
export const buttonGroup = cva("button-group", {
  variants: {
    direction: {
      row: "row",
      column: "column",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    direction: "row",
  },
});

// buttonGroup Props
export const buttonGroupVars: ButtonGroupVars = (direction, classes) => {
  const baseStyles = `${classes ? classes : ""}`;

  return {
    className: buttonGroup({
      direction,
      className: baseStyles,
    }),
  };
};
