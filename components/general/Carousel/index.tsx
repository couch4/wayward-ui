import { forwardRef, Ref, useRef, useState } from 'react';
import { CarouselProps } from './Carousel.types';
import { carouselVars } from './Carousel.styles';
import { Stack } from '../../../components';
import {
  CarouselContext,
  CarouselControls,
  CarouselPagination,
  CarouselWrapper,
} from './chunks';
import { getValueAtBreakpoint } from '../../../utils';
import { useDimensions } from '../../../hooks';

export const Carousel = forwardRef(
  (
    {
      className,
      variant = 'primary',
      size,
      items = [],
      loop = false,
      animationStyle = 'default',
      gap = 0,
      width: propsWidth = '100%',
      height: propsHeight,
      controls,
      showPagination = false,
      paginationType = 'dots',
      crop = false,
      columns = 1,
      isClickable = false,
      itemAnimationVariant = 'default',
      paginationStyle,
      inactiveWidth = '100%',
      inactiveHeight = '100%',
      direction = 'horizontal',
      snap = true,
      ...props
    }: CarouselProps,
    ref: Ref<CarouselProps>,
  ) => {
    const [currItem, setCurrItem] = useState(0);
    const carouselWrapperRef = ref || useRef();
    const { width, height, breakpoint } = useDimensions(carouselWrapperRef);

    const carouselWidth = getValueAtBreakpoint(propsWidth, breakpoint);
    const carouselHeight = propsHeight
      ? getValueAtBreakpoint(propsHeight, breakpoint)
      : null;
    const columnNum = getValueAtBreakpoint(columns, breakpoint);

    if (items.length === 0) return null;

    const allProps = {
      ...carouselVars(
        variant,
        size,
        carouselWidth,
        carouselHeight,
        className,
        crop,
        direction,
      ),
      ...props,
    };

    const carouselPages = Math.ceil(items.length / columnNum);

    return (
      // @ts-ignore
      <Stack ref={carouselWrapperRef} {...allProps}>
        <CarouselContext.Provider
          value={{
            currItem,
            setCurrItem,
            isClickable,
            itemAnimationVariant,
            inactiveWidth,
            inactiveHeight,
            breakpoint,
            snap,
            direction,
            carouselWidth: width,
            items,
          }}
        >
          <CarouselWrapper
            items={items}
            gap={gap}
            dragWidth={width}
            dragHeight={height}
            columnNum={columnNum}
            animationStyle={animationStyle}
            crop={crop}
            loop={loop}
            variant={variant}
          />
          {carouselPages > 1 && (
            <CarouselControls
              controls={controls}
              length={carouselPages}
              width={width}
              loop={loop}
            />
          )}
          {showPagination && !loop && carouselPages > 1 && (
            <CarouselPagination
              length={carouselPages}
              paginationType={paginationType}
              paginationStyle={paginationStyle}
              animationStyle={animationStyle}
            />
          )}
        </CarouselContext.Provider>
      </Stack>
    );
  },
);

Carousel.displayName = 'Carousel';
