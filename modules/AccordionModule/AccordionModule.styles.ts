import classNames from "classnames";

export const accordion = (childAnims: any, props: any) => ({
  className: classNames("accordion", props.className),
  ...childAnims.module,
});

export const accordionWrapper = (childAnims: any) => ({
  className: "accordion-wrapper",
  ...childAnims.accordionMain,
});

export const accordionTag = (
  textStyles: Record<string, any>,
  childAnims: any,
) => ({
  className: classNames("accordion-tag"),
  ...textStyles,
  ...childAnims.accordionTag,
});

export const accordionHeading = (
  textStyles: Record<string, any>,
  childAnims: any,
) => ({
  className: classNames("accordion-heading"),
  ...textStyles,
  ...childAnims.accordionHeading,
});
