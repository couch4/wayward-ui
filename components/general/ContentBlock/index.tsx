import { capitalise } from '../../../utils/formatting';
import { forwardRef, Ref } from 'react';
import { ContentBlockProps } from './ContentBlock.types';
import { emptyContentBlockAnim } from '../../../theme/motion';
import Primary from './variants/Primary';

export const ContentBlock = forwardRef(
  (
    {
      variant = 'primary',
      data,
      motion = emptyContentBlockAnim,
      richText = false,
      ...props
    }: ContentBlockProps,
    ref: Ref<ContentBlockProps>,
  ) => {
    if (!data) return null;

    // not detected by build step - will work out later
    // const Content = require(`./variants/${capitalise(variant)}`).default;

    const Content = Primary;

    return (
      <Content
        ref={ref}
        variant={variant}
        data={data}
        motion={motion}
        richText={richText}
        {...props}
      />
    );
  },
);

ContentBlock.displayName = 'ContentBlock';
