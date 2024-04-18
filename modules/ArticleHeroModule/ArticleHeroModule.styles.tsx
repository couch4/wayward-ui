import classnames from "classnames";

export const articleHero = (
  props: any,
  bgImage: any,
  colourString: string,
) => ({
  className: classnames(
    "article-hero",
    [props.className],
    {
      "no-image": !bgImage,
    },
    [colourString && colourString.length > 0 && `typology-${colourString}`],
  ),
});
