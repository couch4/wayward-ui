import classnames from "classnames";

export const RichTextAndOneMedia = (data: any, props?: any) => ({
  className: classnames([
    "rich-text-and-one-media",
    [data?.mediaAlignment?.toLowerCase()],
    [data?.mediaOrientation?.toLowerCase()],
    props?.className,
  ]),
});
