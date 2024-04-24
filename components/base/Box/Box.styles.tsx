import { cva } from 'class-variance-authority';
import { BoxVars } from './Box.types';
import classnames from 'classnames';

// box Base and Variant Styles
export const box = cva('box', {
  variants: {
    variant: {
      flex: ['flex flex-initial shrink-0'],
      block: ['block'],
      container: ['container m-auto'],
      section: '',
      header: '',
      footer: '',
    },
  },
  defaultVariants: {
    variant: 'flex',
  },
});

// box Props
export const boxVars: BoxVars = (variant, classes, styleProps) => {
  return {
    className: box({
      variant,
      className: classnames(classes),
    }),
    style: { ...styleProps },
  };
};
