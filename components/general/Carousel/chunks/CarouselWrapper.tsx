import { FC, useContext, useRef, useState } from 'react';
import { Box, Stack } from '../../../../components';
import CarouselItem from './CarouselItem';
import { ICarouselWrapper } from '../Carousel.types';
import { PanInfo } from 'framer-motion';
import { useDimensions } from '../../../../hooks';
import { carouselCanvas, carouselWrapper } from '../Carousel.styles';
import { CarouselContext } from './';

// @ts-ignore
// const html = document.documentElement;

const CarouselWrapper: FC<ICarouselWrapper> = ({
  items,
  dragWidth,
  dragHeight = 0,
  gap,
  animationStyle,
  columnNum,
  crop,
  loop,
  variant,
  ...props
}) => {
  const canvasRef = useRef(null);
  const {
    width: canvasWidth,
    height: canvasHeight,
    screenWidth,
    screenHeight,
  } = useDimensions(canvasRef);
  const length = Math.floor((items.length - 1) / columnNum);
  const { currItem, direction, setCurrItem, isClickable, snap } =
    useContext(CarouselContext);
  const [isDragging, setIsDragging] = useState(false);
  const slideWidth = dragWidth + (gap || 0);
  const slideHeight = dragHeight + (gap || 0);

  const carouselItems = loop ? [...items, ...items] : items;

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
    // html.style.touchAction = "none";
    setIsDragging(true);
  };

  const endDrag: any = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
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
    // html.style.touchAction = "auto";
  };

  let offset = 0;
  if (typeof currItem === 'number') {
    offset = -currItem * slideWidth;
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
      left: screenWidth - canvasWidth,
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
        top: screenHeight - canvasHeight,
        bottom: 0,
      };
    }
  }

  return (
    <Box ref={canvasRef} {...carouselCanvas(crop)}>
      <Stack
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
