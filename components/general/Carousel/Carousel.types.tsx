import React, { ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
import { carousel } from "./Carousel.styles";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface CarouselProps
  extends HTMLAndMotionProps,
    VariantProps<typeof carousel> {
  items?: any;
  loop?: boolean;
  animationStyle?: "default" | "elegant" | "bouncy" | "slow" | "superSlow";
  gap?: number;
  width?: number | string | Record<string, any>;
  height?: number | string | Record<string, any>;
  controls?: {
    show?: boolean;
    directionComponent: ReactNode;
  };
  columns?: number | string | Record<string, any>;
  showPagination?: boolean;
  paginationType?: "dots" | "numbers" | "leadingZeroNumbers" | "slider";
  paginationStyle?: any;
  align?: "left" | "center";
  crop?: boolean;
  isClickable?: boolean;
  itemAnimationVariant?:
    | "default"
    | "elegant"
    | "bouncy"
    | "slow"
    | "superSlow"
    | "none";
  inactiveWidth?: number | string | Record<string, any>;
  inactiveHeight?: number | string | Record<string, any>;
}

export type CarouselVars = (
  variant: CarouselProps["variant"],
  size: CarouselProps["size"],
  width: CarouselProps["width"],
  height: CarouselProps["height"],
  className: CarouselProps["className"],
) => Record<any, any>;

export interface ICarouselWrapper {
  items: CarouselProps["items"];
  animationStyle: CarouselProps["animationStyle"];
  dragWidth: number;
  dragHeight?: number;
  gap: number;
  crop: boolean;
  loop?: boolean;
  columnNum: number;
  variant: CarouselProps["variant"];
}

export interface ICarouselItem {
  index: number;
  item: any;
  width: number;
  height?: number;
  slideWidth: number;
  length: number;
  loop?: boolean;
  columnNum: number;
  onClick: (index: number) => void;
  animationStyle: CarouselProps["animationStyle"];
  variant: CarouselProps["variant"];
}

export type CarouselDirection = "prev" | "next";

export interface ICarouselControls {
  controls: CarouselProps["controls"];
  length: number;
  width: number;
}

export interface ICarouselPagination {
  length: number;
  paginationType: CarouselProps["paginationType"];
  paginationStyle?: any;
}
