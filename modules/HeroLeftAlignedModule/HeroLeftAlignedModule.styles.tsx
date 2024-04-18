import classnames from "classnames";

export const HeroLeftAligned = (props: any) => ({
  className: classnames(["hero-left-aligned", props.className]),
});
