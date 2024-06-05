import type { Meta, StoryObj } from '@storybook/react';
import { Box, Media } from '../../../components';

const imageProps = {
  image: {
    src: 'https://cdn-zhweb-qa-media.azureedge.net/api/v1/media/53kgzguw/refargotohp-1azkcg0c38a-unsplash.jpg?width=696&format=webp',
    alt: 'Image alt text',
    caption: 'Example of a caption',
  },
};
const videoProps = {
  image: {
    src: 'https://zhweb-qa-f-app.azurewebsites.net/media/11tbjmi2/kychan-ccfo0o_ltsy-unsplash.jpg',
    alt: 'This will be the alt text',
  },
  video: {
    src: '889428749',
    type: 'vimeo',
    autoPlay: true,
    loop: true,
    allowFullscreen: false,
    allowControls: false,
    allowSound: false,
  },
};

const fullscreenSplice = {
  video: {
    ...videoProps.video,
    allowFullscreen: true,
  },
};

const videoPropsFullscreen = {
  ...videoProps,
  ...fullscreenSplice,
};

/**  This is the media component */
const meta: Meta<typeof Media> = {
  component: Media,
  // tags: ["autodocs"],
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
      controls: { exclude: ['style'] },
      story: {
        iframeHeight: 400,
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Media>;

export const MediaImage: Story = {
  decorators: [
    (Story) => {
      return (
        <Box className="w-[calc(100vw/2)] h-[calc(100vh/2)] bg-gray-500 [&>*:first-child]:w-full relative">
          <Story />
        </Box>
      );
    },
  ],
  args: {
    data: imageProps,
    responsive: true,
    imageSizes: '50vw',
  },
};

export const MediaVideoInline: Story = {
  decorators: [
    (Story) => {
      return (
        <Box className="w-[calc(100vw/2)] h-[calc(100vh/2)] bg-gray-500 [&>*:first-child]:w-full relative">
          <Story />
        </Box>
      );
    },
  ],
  args: {
    data: videoProps,
  },
};

export const MediaVideoFullscreen: Story = {
  decorators: [
    (Story) => {
      return (
        <Box className="w-[calc(100vw/2)] h-[calc(100vh/2)] bg-gray-500 [&>*:first-child]:w-full relative">
          <Story />
        </Box>
      );
    },
  ],
  args: {
    data: videoPropsFullscreen,
  },
};
