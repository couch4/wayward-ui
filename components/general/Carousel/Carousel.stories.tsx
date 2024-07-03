import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, Image } from '../../../components';
// @ts-ignore
import Arrow from '../../../assets/icons/chevron.svg';

const urls: any = [
  'https://images.pexels.com/photos/14850976/pexels-photo-14850976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/258393/pexels-photo-258393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/20988839/pexels-photo-20988839/free-photo-of-glenfinnan-viaduct-in-scotland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3698327/pexels-photo-3698327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/19434724/pexels-photo-19434724/free-photo-of-view-of-the-bridge-of-sighs-in-oxford-england-united-kingdom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/7065481/pexels-photo-7065481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/20141298/pexels-photo-20141298/free-photo-of-national-museum-of-scotland-in-edinburgh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2716774/pexels-photo-2716774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

const items = urls.map((url: string, i: number) => {
  return (
    <Image
      key={`image${i}`}
      alt={`image${i}`}
      src={url}
      sizes="(max-width: 800px) 100vw, 60vw"
      priority
      responsive
    />
  );
});

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    align: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    variant: {
      options: ['primary', 'focus', 'bookcase'],
    },
  },
  args: {
    animationStyle: 'default',
    variant: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const DefaultCarousel: Story = {
  args: {
    items,
    controls: {
      show: true,
      directionComponent: <Arrow />,
    },
    showPagination: true,
    crop: true,
    gap: 0,
    width: 661,
    height: 441,
  },
};

export const UncroppedCarousel: Story = {
  args: {
    items,
    controls: {
      show: true,
      directionComponent: <Arrow />,
    },
    showPagination: true,
    crop: false,
    gap: 100,
    width: 661,
    height: 441,
  },
};

export const FocusCarousel: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    items,
    controls: {
      show: true,
      directionComponent: <Arrow />,
    },
    showPagination: true,
    crop: false,
    gap: 0,
    variant: 'focus',
    width: 661,
    height: 441,
  },
};

export const BookcaseLoopingCarousel: Story = {
  args: {
    items,
    controls: {
      show: true,
      directionComponent: <Arrow />,
    },
    showPagination: true,
    crop: false,
    loop: true,
    variant: 'bookcase',
    width: 661,
    height: 441,
  },
};

export const CarouselWithSlider: Story = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    className: 'carousel-slider',
    items,
    controls: {
      show: true,
      directionComponent: <Arrow />,
    },
    showPagination: true,
    paginationType: 'slider',
    gap: 10,
    width: window.innerWidth * 0.5 - 45,
    height: window.innerHeight * 0.5,
  },
};

export const ImageSlider: Story = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    items,
    snap: false,
    gap: 10,
    height: window.innerHeight * 0.5,
  },
};

export const CarouselVertical: Story = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    items,
    direction: 'vertical',
    gap: 10,
    width: window.innerWidth * 0.5 - 45,
    height: window.innerHeight * 0.5,
  },
};
