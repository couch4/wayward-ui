import { FC, useContext } from 'react';
import { Box, Stack } from '../../../../components';
import { carouselThumbs, thumb } from '../Carousel.styles';
import { CarouselContext } from './';

const CarouselThumbs: FC<any> = ({ animationStyle = 'default' }) => {
  const { setCurrItem, items } = useContext(CarouselContext);

  return (
    <Stack {...carouselThumbs}>
      <Thumbs onClickThumb={setCurrItem} items={items} />
    </Stack>
  );
};

export default CarouselThumbs;

const Thumbs: FC<any> = ({ onClickThumb, items }) => {
  return items.map((item: any, index: number) => {
    let newItem = item;

    if (typeof item === 'object') {
      const newProps = {
        ...item.props,
        sizes: '200px',
        imageSizes: '200px',
        backgroundImaageSizes: '200px',
      };

      newItem = { ...item, props: newProps };
    }

    return (
      <Box
        key={`thumb_${index}`}
        onClick={() => onClickThumb(index)}
        {...thumb}
      >
        {newItem}
      </Box>
    );
  });
};
