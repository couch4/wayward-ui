import classNames from "classnames";

export const richTextWithMedia = (props: any) => ({
  className: classNames(["rich-text-and-two-media", props.className]),
});

export const richTextContent = {
  className: "rich-text-and-two-media-content",
  rich: true,
};
