import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, Image } from '../../../components';
// @ts-ignore
import Arrow from '../../../assets/icons/chevron.svg';

const urls: any = [
  'https://base.matterofform.com/media/1zudodgf/frans-ruiter-phnfcr2eh00-unsplash.jpg?width=1000&format=webp',
  'https://base.matterofform.com/media/uziesd2a/anthony-delanoix-cfi7_hcxecu-unsplash.jpg?width=1000&format=webp',
  'https://base.matterofform.com/media/44lnxixr/a7f1ed2ef6b95603a7fe9591043396e2.jpeg?width=1000&format=webp',
  'https://base.matterofform.com/media/uziesd2a/anthony-delanoix-cfi7_hcxecu-unsplash.jpg?width=1000&format=webp',
  'https://base.matterofform.com/media/44lnxixr/a7f1ed2ef6b95603a7fe9591043396e2.jpeg?width=1000&format=webp',
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
