import { cva } from "class-variance-authority";
import { ButtonVars } from "./Button.types";
import classNames from "classnames";
import { camelToHyphen } from "../../../utils";
// @ts-ignore - mof overrides
import mofConfig from "/mofConfig";

const buttons = mofConfig.button;
let customButtonVariants: any = [];
if (buttons) {
  customButtonVariants = Object.keys(buttons).map((key: string) => {
    return {
      [key]: `button-${camelToHyphen(key)}`,
    };
  });
}

const variantObject = Object.assign({}, ...customButtonVariants);

// Button Base and Variant Styles
export const button = cva("button", {
  variants: {
    variant: {
      primary: "button-primary",
      secondary: "button-secondary",
      nav: "nav-button",
      ...variantObject,
    },
    size: {
      sm: "sm",
      md: "md",
      lg: "lg",
      full: "full",
    },
    theme: {
      light: "light",
      dark: "dark",
    },
  },
  // example compond variant
  // compoundVariants: [
  //   { variant: "primary", size: ["md", "full"], class: "uppercase" },
  // ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// Button Props
export const buttonVars: ButtonVars = (variant, size, linkType, classes) => {
  return {
    className: button({
      variant,
      size,
      className: classNames(classes, { external: linkType === "External" }),
    }),
  };
};
