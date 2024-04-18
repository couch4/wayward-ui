import { cva } from "class-variance-authority";
import { CardVars } from "./Card.types";
import { camelToHyphen } from "../../../utils";
// @ts-ignore - mof overrides
import mofConfig from "/mofConfig";
import classNames from "classnames";

const cards = mofConfig?.contentProps;
let customCardVariants: any = [];
if (cards) {
  customCardVariants = Object.entries(cards).map(([key]) => {
    return {
      [key]: `card-${camelToHyphen(key)}`,
    };
  });
}

const variantObject = Object.assign({}, ...customCardVariants);

// Card Variant Styles
export const card = cva("card", {
  variants: {
    variant: {
      primary: "primary",
      overlay: "overlay",
      ...variantObject,
    },
    size: {
      sm: "sm",
      md: "md",
      lg: "lg",
      full: "full",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "primary",
  },
});

// card Props
export const cardVars: CardVars = (variant, size, classes) => {
  return {
    className: card({
      variant,
      size,
      className: classNames([classes]),
    }),
  };
};

export const mediaHolder = (size: any) => {
  return {
    className: classNames("card-media-holder", [size]),
  };
};

export const backgroundMediaHolder = {
  className: "media-holder-background",
};

export const cardContent = (size: any) => {
  return {
    className: classNames("card-content", [size]),
  };
};

export const cta = {
  className: "card-cta",
};
