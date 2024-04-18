import classNames from "classnames";

export const moduleWrapper = (props: any, cardType: string) => ({
  className: classNames(
    "listing-grid",
    [props.className],
    [cardType?.toLowerCase()],
  ),
});

export const gridWrapper = (motion: any) => ({
  className: "listing-grid-wrapper",
  ...motion,
});
