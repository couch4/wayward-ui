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
import './Carousel.css';

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
  crop,
  direction,
) => {
  const heightVals = height ? { height } : {};
  const widthVals = width ? { width } : {};

  return {
    className: carousel({
      variant,
      size,
      className: classNames(classes, { crop }, [direction]),
    }),
    style: {
      ...widthVals,
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
  snap: boolean,
  direction: 'horizontal' | 'vertical',
  isActive: boolean,
) => {
  const addOffset = loop
    ? {
        transform: `translateX(${offset}px)`,
      }
    : '';

  const snapWidth =
    snap && direction === 'horizontal' ? { width: `${width}px` } : {};
  const snapHeight =
    snap && direction === 'vertical'
      ? { height: `${width}px`, width: '100%' }
      : {};

  return {
    className: classNames(
      'carousel-item',
      { 'variable-size': !snap },
      { active: isActive },
    ),
    style: {
      ...style,
      ...snapWidth,
      ...snapHeight,
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

export const carouselThumbs = {
  className: 'carousel-pagination-thumbs',
};

export const thumb = {
  className: 'carousel-pagination-thumbs-item',
};
