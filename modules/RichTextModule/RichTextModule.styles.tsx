import classnames from "classnames";

export const richText = (props?: any) => ({
  className: classnames(["rich-text", props?.className]),
});
