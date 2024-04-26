import { cva } from 'class-variance-authority';
import { CardVars } from './Card.types';
import { camelToHyphen } from '../../../utils';
// @ts-ignore - mof overrides
import mofConfig from '/mofConfig';
import classNames from 'classnames';

const cards = mofConfig?.contentProps;
let customCardVariants: any = [];
if (cards) {
  customCardVariants = Object.entries(cards).map(([key]) => {
    return {
      [key]: `card-${camelToHyphen(key)}`,
    };
  });
}

const variantObject = Object.assign({}, ...customCardVariants);

// Card Variant Styles
export const card = cva('card', {
  variants: {
    variant: {
      primary: 'primary',
      overlay: 'overlay',
      ...variantObject,
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'primary',
  },
});

// card Props
export const cardVars: CardVars = (variant, classes) => {
  return {
    className: card({
      variant,
      className: classNames([classes]),
    }),
  };
};

export const mediaHolder = {
  className: classNames('card-media'),
};

export const backgroundMediaHolder = {
  className: 'card-media-bg',
};

export const cardContent = {
  className: classNames('card-content'),
};

export const cta = {
  className: 'card-cta',
};
