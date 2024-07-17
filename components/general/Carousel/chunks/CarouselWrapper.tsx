import { FC, useContext, useEffect, useRef, useState } from 'react';
import { Box, Stack } from '../../../../components';
import CarouselItem from './CarouselItem';
import { ICarouselWrapper } from '../Carousel.types';
import { PanInfo } from 'framer-motion';
import { useDimensions } from '../../../../hooks';
import { carouselCanvas, carouselWrapper } from '../Carousel.styles';
import { CarouselContext } from './';
import { isMobile } from 'react-device-detect';

// @ts-ignore
let html: any;

const CarouselWrapper: FC<ICarouselWrapper> = ({
  items,
  dragWidth,
  dragHeight = 0,
  gap = 0,
  animationStyle,
  columnNum,
  crop,
  loop,
  variant,
  ...props
}) => {
  const wrapperRef = useRef(null);
  const { width: wrapperWidth, height: wrapperHeight } =
    useDimensions(wrapperRef);
  const length = Math.floor((items.length - 1) / columnNum);
  const { currItem, direction, setCurrItem, isClickable, snap } =
    useContext(CarouselContext);
  const [isDragging, setIsDragging] = useState(false);
  const slideWidth = dragWidth + gap * columnNum;
  const slideHeight = dragHeight + gap;

  const carouselItems = loop ? [...items, ...items] : items;

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [wrapperWidth, dragWidth]);

  if (typeof window !== 'undefined') {
    html = document.documentElement;
  }

  const handleItemClick = (index: number) => {
    !loop && isClickable && setCurrItem(index);
  };

  const renderItems = carouselItems.map((val: any, i: number) => {
    return (
      <CarouselItem
        key={`carouselItem_${i}`}
        item={val}
        index={i}
        width={dragWidth}
        height={dragHeight}
        slideWidth={slideWidth}
        slideHeight={slideHeight}
        columnNum={columnNum}
        length={length}
        animationStyle={animationStyle}
        variant={variant}
        loop={loop}
        onClick={() => handleItemClick(i)}
      />
    );
  });

  const startDrag = () => {
    if (html && isMobile) {
      html.style.touchAction = 'none';
    }
    setIsDragging(true);
  };

  const endDrag: any = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (html && isMobile) {
      html.style.touchAction = 'auto';
    }

    if (!snap) return;
    const { velocity } = info;
    let vel = velocity.x;
    if (direction === 'vertical') {
      vel = velocity.y;
    }
    const fastEnough = Math.abs(vel) > 5;

    if (fastEnough && typeof currItem === 'number') {
      const delta = vel > 0 ? -1 : 1;
      const next = currItem + delta;

      if (next !== currItem) {
        const croppedVal = loop ? next : Math.max(0, Math.min(length, next));

        setCurrItem(croppedVal);
      }
    }

    setIsDragging(false);
  };

  let offset = 0;
  if (typeof currItem === 'number') {
    const newOffset = -currItem * slideWidth;
    offset = Math.min(Math.max(newOffset, -length * slideWidth), 0);
  }

  let animateOffset: any = { x: offset };
  if (direction === 'vertical') {
    animateOffset = { y: offset };
  }

  const dragDir = direction === 'vertical' ? 'y' : 'x';

  let dragConstraints = {
    left: offset,
    right: offset,
    top: 0,
    bottom: 0,
  };

  if (!snap && direction === 'horizontal') {
    dragConstraints = {
      left: dragWidth - wrapperWidth,
      right: 0,
      top: 0,
      bottom: 0,
    };
  }

  if (direction === 'vertical') {
    dragConstraints = {
      left: 0,
      right: 0,
      top: offset,
      bottom: offset,
    };

    if (!snap) {
      dragConstraints = {
        left: 0,
        right: 0,
        top: dragHeight - wrapperHeight,
        bottom: 0,
      };
    }
  }

  return (
    <Box {...carouselCanvas(crop)}>
      <Stack
        ref={wrapperRef}
        direction={direction === 'vertical' ? 'column' : 'row'}
        drag={length > 0 ? dragDir : false}
        onDragEnd={endDrag}
        onDragStart={startDrag}
        animate={animateOffset}
        dragConstraints={dragConstraints}
        {...carouselWrapper(gap, animationStyle, isDragging)}
        {...props}
      >
        {renderItems}
      </Stack>
    </Box>
  );
};

export default CarouselWrapper;
