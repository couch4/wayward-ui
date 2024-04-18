import classNames from "classnames";
import defaultMotion from "./QuoteCarouselModule.motion";

export const quoteModule = (props?: any, motion?: any) => ({
  className: classNames("quote-carousel", props.className),
  ...motion,
});

export const quoteContainer = (motion?: any) => ({
  className: "quote-container",
  ...motion,
});

export const quoteSlide = (motion?: any) => ({
  className: "quote-slide",
  ...defaultMotion?.slide,
  ...motion,
});

export const quoteWrapper = (motion?: any) => ({
  className: "quote-carousel",
  ...defaultMotion?.quoteWrapper,
  ...motion,
});

export const quoteLeft = (motion?: any, textStyles?: Record<string, any>) => ({
  className: "quote-left",
  ...motion,
  ...textStyles,
});

export const quoteMain = (motion?: any, textStyles?: Record<string, any>) => ({
  className: "quote-main",
  ...motion,
  ...textStyles,
});

export const quoteRight = (motion?: any, textStyles?: Record<string, any>) => ({
  className: "quote-right",
  ...motion,
  ...textStyles,
});

export const quoteFooter = (motion?: any) => ({
  className: "quote-footer",
  ...defaultMotion?.footer,
  ...motion,
});

export const quoteAuthor = (
  motion?: any,
  textStyles?: Record<string, any>,
) => ({
  className: "quote-author",
  ...defaultMotion?.author,
  ...motion,
  ...textStyles,
});

export const quoteSource = (
  motion?: any,
  textStyles?: Record<string, any>,
) => ({
  className: "quote-source",
  ...defaultMotion?.source,
  ...motion,
  ...textStyles,
});
