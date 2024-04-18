import classNames from "classnames";

export const carouselWrapper = (props?: any, motion?: any) => ({
  className: classNames("focus-carousel", props.className),
  ...motion,
});

export const carouselContent = (motion?: any) => ({
  className: classNames("focus-carousel-content"),
  ...motion,
});

export const carouselTag = (motion?: any, textStyle?: Record<string, any>) => ({
  className: classNames("focus-carousel-tag"),
  ...motion,
  ...textStyle,
});

export const carouselHeading = (
  motion?: any,
  textStyle?: Record<string, any>,
) => ({
  className: classNames("focus-carousel-heading"),
  ...motion,
  ...textStyle,
});

export const carouselDescription = (
  motion?: any,
  textStyle?: Record<string, any>,
) => ({
  className: classNames("focus-carousel-description"),
  ...motion,
  ...textStyle,
});
