import { cva } from 'class-variance-authority';
import { CarouselVars } from './Carousel.types';
import {
  carouselAnimationDefault,
  carouselAnimationElegant,
  carouselAnimationBouncy,
  carouselAnimationSlow,
  carouselAnimationSuperSlow,
} from './Carousel.motion';
import classNames from 'classnames';

const transition = {
  default: carouselAnimationDefault,
  elegant: carouselAnimationElegant,
  bouncy: carouselAnimationBouncy,
  slow: carouselAnimationSlow,
  superSlow: carouselAnimationSuperSlow,
};

// Carousel Variant Styles
export const carousel = cva('carousel', {
  variants: {
    variant: {
      primary: 'primary',
      focus: 'focus',
      bookcase: 'bookcase',
      fadeInAndScale: 'fade-in-and-scale',
      jagged: 'jagged',
    },
    size: {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});

// Carousel Props
export const carouselVars: CarouselVars = (
  variant,
  size,
  width,
  height,
  classes,
) => {
  const heightVals = height ? { height } : {};

  return {
    className: carousel({
      variant,
      size,
      className: classNames(classes),
    }),
    style: {
      width,
      ...heightVals,
    },
  };
};

export const carouselCanvas = (crop: boolean) => ({
  className: classNames('carousel-canvas', { crop }),
});

export const carouselWrapper = (
  gap: number,
  animationStyle = 'default',
  isDragging = false,
) => {
  return {
    className: classNames('carousel-wrapper', { dragging: isDragging }),
    style: { gap: `${gap}px` },
    transition: transition[animationStyle as 'default'],
  };
};

export const itemHolder: any = (
  width: number,
  offset: number,
  style: any,
  loop: boolean,
) => {
  const addOffset = loop
    ? {
        transform: `translateX(${offset}px)`,
      }
    : '';

  return {
    className: `carousel-item`,
    style: {
      ...style,
      width: `${width}px`,
      ...addOffset,
    },
  };
};

export const carouselControlsHolder = (width: number) => ({
  className: `carousel-control-wrapper`,
  style: {
    width: `${width}px`,
  },
});

export const carouselControl = (dir: 'prev' | 'next', hide: boolean) => {
  return {
    className: classNames('carousel-control', [dir], { hide: hide }),
  };
};

export const carouselPagination = {
  className: 'carousel-pagination',
};

export const carouselPaginationStep = (
  isActive: boolean,
  type: string,
  textStyles?: any,
) => {
  return {
    className: classNames(
      [`carousel-pagination-${type === 'dots' ? 'step' : 'number'}`],
      { active: isActive },
    ),
    ...textStyles,
  };
};

export const carouselPaginationStepClickArea = {
  className: 'carousel-pagination-step-click-area',
};

export const clickBox = (index: number, length: number) => ({
  className: 'clickbox',
  style: {
    width: `${100 / length}%`,
    height: '100%',
    position: 'absolute' as const,
    left: `${(100 / length) * index}%`,
    zIndex: -1,
  },
});

export const sliderScrub = (
  length: number,
  isDragging: boolean,
  animationStyle = 'default',
) => ({
  className: classNames('carousel-pagination-scrub', {
    dragging: isDragging,
  }),
  style: {
    width: `${100 / length}%`,
  },
  transition: transition[animationStyle as 'default'],
});
