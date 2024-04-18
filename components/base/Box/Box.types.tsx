import React from "react";
import { type VariantProps } from "class-variance-authority";
import { box } from "./Box.styles";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface BoxProps extends HTMLAndMotionProps, VariantProps<typeof box> {
  bgSrc?: string;
  motion?: boolean;
}

export type BoxVars = (
  variant: BoxProps["variant"],
  bgSrc: BoxProps["bgSrc"],
  className: BoxProps["className"],
  styleProps: any,
) => Record<any, any>;
