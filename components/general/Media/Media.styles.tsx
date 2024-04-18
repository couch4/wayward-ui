import classNames from "classnames";
// @ts-ignore - grabs variables from the root project's tailwind config
import mofConfig from "/mofConfig";

// @ts-ignore
const { contentProps } = mofConfig;
let contentVariant: string = "primary";

export const mediaHolder = (
  size: any,
  align: any,
  orientation: any,
  props: any,
) => {
  return {
    className: classNames(
      "media-holder",
      [size],
      [align],
      [orientation],
      [props.className],
    ),
  };
};

export const caption = (captionVariant: any) => {
  const textStyles = contentProps?.[contentVariant]?.textStyles?.caption || {
    textStyle: "p-sm",
  };

  return {
    className: classNames("caption", [captionVariant]),
    ...textStyles,
  };
};
