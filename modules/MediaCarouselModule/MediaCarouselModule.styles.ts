import classNames from "classnames";

export const mediaCarousel = (props: any, motion?: any) => ({
  className: classNames("media-carousel", props.className),
  ...motion,
});
