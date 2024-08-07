import { FC, useContext, useRef } from 'react';
import { Box, Stack, Text } from '../../../../components';
import { ICarouselPagination } from '../Carousel.types';
import { getFormattedValue } from '../../../../utils';
import {
  carouselPagination,
  carouselPaginationStep,
  carouselPaginationStepClickArea,
} from '../Carousel.styles';
import { CarouselContext, CarouselSlider, CarouselThumbs } from './';
import { types } from 'util';

const CarouselPagination: FC<ICarouselPagination> = ({
  length,
  animationStyle = 'default',
  paginationType = 'dots',
  paginationStyle,
  ...props
}) => {
  const { currItem, setCurrItem } = useContext(CarouselContext);
  const paginationRef = useRef(null);
  const isSlider = paginationType === 'slider';

  const handleClick = (index: number) => {
    setCurrItem(index);
  };

  if (length < 2) return null;

  const indexer = Array.from({ length }, (v, i) => i);
  const renderDots = indexer.map((i: number) => {
    const isActive = currItem === i;
    const number = getFormattedValue(i, paginationType) as string;

    let paginationItem = (
      <Box variant="block" {...carouselPaginationStep(isActive, 'dots')} />
    );
    if (paginationType !== 'dots') {
      paginationItem = (
        <Text
          text={number}
          {...carouselPaginationStep(isActive, 'numbers', paginationStyle)}
        />
      );
    }

    return (
      <Box
        key={`pagination${i}`}
        {...carouselPaginationStepClickArea}
        onClick={() => handleClick(i)}
      >
        {paginationItem}
      </Box>
    );
  });

  const types = {
    dots: renderDots,
    numbers: renderDots,
    slider: (
      <CarouselSlider
        animationStyle={animationStyle}
        sliderContainer={paginationRef}
        length={length}
      />
    ),
    thumbs: <CarouselThumbs animationStyle={animationStyle} />,
  };

  const allProps = {
    ...carouselPagination,
    ...props,
  };

  return (
    <Stack ref={paginationRef} direction="row" {...allProps}>
      {types[paginationType as 'dots']}
    </Stack>
  );
};

export default CarouselPagination;
