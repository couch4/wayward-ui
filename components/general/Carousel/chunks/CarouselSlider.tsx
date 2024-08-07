import { FC, useContext, useState } from 'react';
import { Box } from '../../../../components';
import { useDimensions } from '../../../../hooks';
import { clickBox, sliderScrub } from '../Carousel.styles';
import { CarouselContext } from './';

let lastKnownSliderPos = 0;

const CarouselSlider: FC<any> = ({
  length,
  animationStyle = 'default',
  sliderContainer,
}) => {
  const { currItem, setCurrItem } = useContext(CarouselContext);
  const [isDragging, setIsDragging] = useState(false);
  const { width = 0 } = useDimensions(sliderContainer);

  const startDrag = () => {
    lastKnownSliderPos = currItem * (width / length);
    setIsDragging(true);
  };

  const snapToStep = (currX: number) => {
    const newStep = Math.floor((currX / width) * length);
    const newItem = Math.min(Math.max(newStep, 0), length - 1);
    setCurrItem(newItem);
  };

  const whileDrag = (event: any) => {
    snapToStep(event.x);
  };

  const endDrag: any = (event: any) => {
    snapToStep(event.x);
    setIsDragging(false);
  };

  let x = 0;
  if (typeof currItem === 'number') {
    const newX = currItem * (width / length);
    x = Math.min(Math.max(newX, 0), width - width / length);
  }

  return (
    <>
      <Box
        {...sliderScrub(length, isDragging, animationStyle)}
        drag={length > 1 ? 'x' : false}
        onDragStart={startDrag}
        onDragEnd={endDrag}
        onDrag={whileDrag}
        animate={isDragging ? { x: lastKnownSliderPos } : { x }}
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={{
          left: 0,
          right: width - width / length,
          top: 0,
          bottom: 0,
        }}
      />
      <ClickAreas onClickArea={setCurrItem} length={length} />
    </>
  );
};

export default CarouselSlider;

const ClickAreas = ({ onClickArea, length }: any) => {
  const array = Array.from({ length }, (_, index) => index);

  return array.map((index: number) => (
    <Box
      key={`clickArea_${index}`}
      onClick={() => onClickArea(index)}
      {...clickBox(index, length)}
    />
  ));
};
