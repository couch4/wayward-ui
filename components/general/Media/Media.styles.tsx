import classNames from 'classnames';
// @ts-ignore - grabs variables from the root project's tailwind config
import config from '/wayward.config';

// @ts-ignore
const { contentProps } = config;
let contentVariant: string = 'primary';

export const mediaHolder = (align: any, orientation: any, props: any) => {
  return {
    className: classNames('media', [align], [orientation], [props.className]),
  };
};

export const caption = (captionVariant: any) => {
  const textStyles = contentProps?.[contentVariant]?.textStyles?.caption || {
    textStyle: 'p-sm',
  };

  return {
    className: classNames('caption', [captionVariant]),
    ...textStyles,
  };
};
