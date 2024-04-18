import React from "react";
import { type VariantProps } from "class-variance-authority";
import { card } from "./Card.styles";
import { TextProps } from "../../../components";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface CardProps
  extends HTMLAndMotionProps,
    VariantProps<typeof card> {
  data:
    | {
        image?: {};
        backgroundImage?: {};
        backgroundMedia?: {};

        preHeading?: string;
        headingTitle?: string;
        subHeading?: string;
        description?: string;
        info?: string;
        infoTags?: string;
        primaryCta?: string;
        secondaryCta?: string;
        mediaAlignment?: any;
        mediaOrientation?: any;
      }
    | any;
  priority?: boolean;
  childAnims?: Record<string, any>;
  imageSizes?: string;
  backgroundImageSizes?: string;
  imageQuality?: any;
  backgroundImageQuality?: any;
  richText?: boolean;
}

export type CardVars = (
  variant: CardProps["variant"],
  size: CardProps["size"],
  className: CardProps["className"],
) => Record<any, any>;

export interface CardGenericProps {
  className?: Record<string, string>;
  size: CardProps["size"];
  data: {
    preHeading: string;
    headingTitle: string;
    subHeading: string;
    description: string;
    primaryCta: string;
  };
}
