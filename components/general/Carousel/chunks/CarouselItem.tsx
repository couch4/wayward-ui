import { FC, useContext } from 'react';
import { Media } from '../../../../components';
import { ICarouselItem } from '../Carousel.types';
import { itemHolder } from '../Carousel.styles';
import {
  carouselFocusAnimation,
  carouselBookcaseAnimation,
  carouselFadeAndScaleAnimation,
  carouselJaggedAnimation,
} from '../Carousel.motion';
import { CarouselContext } from './';
import { getValueAtBreakpoint } from '../../../../utils';

let offset = 0;

const CarouselItem: FC<ICarouselItem> = ({
  index,
  item,
  width,
  height,
  length,
  columnNum,
  loop = false,
  animationStyle,
  slideWidth,
  variant,
  ...props
}) => {
  const { currItem, inactiveWidth, inactiveHeight, breakpoint } =
    useContext(CarouselContext);
  let isActive = currItem === index;
  const newInactiveWidth = getValueAtBreakpoint(
    inactiveWidth,
    breakpoint,
    width,
  );
  const newInactiveHeight = getValueAtBreakpoint(
    inactiveHeight,
    breakpoint,
    height,
  );

  if (loop) {
    const itemsLength = length + 1;
    const fullLength = itemsLength * 2;
    const groupOffset = Math.floor((currItem - index - 1) / fullLength);

    // reorders stack to faux infinte scroll
    offset = slideWidth * (fullLength * groupOffset + itemsLength);
    isActive = currItem - fullLength * groupOffset - itemsLength === index;
  }

  const itemAnimation = {
    primary: { initial: 'inactive', animate: isActive ? 'active' : 'inactive' },
    focus: carouselFocusAnimation(animationStyle, isActive, offset, loop),
    bookcase: carouselBookcaseAnimation(animationStyle, isActive, offset, loop),
    fadeInAndScale: carouselFadeAndScaleAnimation(
      animationStyle,
      isActive,
      offset,
      loop,
    ),
    jagged: carouselJaggedAnimation(
      animationStyle,
      index <= currItem,
      width,
      height,
      newInactiveWidth,
      newInactiveHeight,
    ),
    none: {},
  };

  const allProps = {
    ...itemHolder(width / columnNum, offset, (props as any).style, loop),
    ...props,
    src: typeof item === 'string' ? item : '',
    // @ts-ignore
    ...itemAnimation[variant],
  };

  return <Media {...allProps}>{item.type ? item : null}</Media>;
};

export default CarouselItem;
