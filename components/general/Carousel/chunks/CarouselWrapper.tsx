import { FC, useContext, useState } from 'react';
import { Box, Stack } from '../../../../components';
import CarouselItem from './CarouselItem';
import { ICarouselWrapper } from '../Carousel.types';
import { PanInfo } from 'framer-motion';
import { carouselCanvas, carouselWrapper } from '../Carousel.styles';
import { CarouselContext } from './';

// @ts-ignore
// const html = document.documentElement;

const CarouselWrapper: FC<ICarouselWrapper> = ({
  items,
  dragWidth,
  dragHeight,
  gap,
  animationStyle,
  columnNum,
  crop,
  loop,
  variant,
  ...props
}) => {
  const length = Math.floor((items.length - 1) / columnNum);
  const { currItem, setCurrItem, isClickable } = useContext(CarouselContext);
  const [isDragging, setIsDragging] = useState(false);
  const slideWidth = dragWidth + (gap || 0);

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
    const { velocity } = info;
    const vel = velocity.x;
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

  let x = 0;
  if (typeof currItem === 'number') {
    x = -currItem * slideWidth;
  }

  return (
    <Box {...carouselCanvas(crop)}>
      <Stack
        direction="row"
        drag={length > 0 ? 'x' : false}
        onDragEnd={endDrag}
        onDragStart={startDrag}
        animate={{ x }}
        dragConstraints={{ left: x, right: x, top: 0, bottom: 0 }}
        {...carouselWrapper(gap, animationStyle, isDragging)}
        {...props}
      >
        {renderItems}
      </Stack>
    </Box>
  );
};

export default CarouselWrapper;
