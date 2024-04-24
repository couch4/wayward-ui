import type { Meta, StoryObj } from '@storybook/react';
import { Box, Media } from '../../../components';

const imageProps = {
  imageUrl:
    'https://cdn-zhweb-qa-media.azureedge.net/api/v1/media/53kgzguw/refargotohp-1azkcg0c38a-unsplash.jpg?width=696&format=webp',
  imageAlt: 'Image alt text',
  caption: 'Example of a caption',
  isSvg: false,
};
const videoProps = {
  coverImage: {
    imageUrl:
      'https://zhweb-qa-f-app.azurewebsites.net/media/11tbjmi2/kychan-ccfo0o_ltsy-unsplash.jpg',
    imageAlt: 'This will be the alt text',
    isSvg: false,
  },
  vimeoId: '889428749',
  youtubeId: '',
  autoPlay: true,
  allowFullscreen: false,
  loop: true,
  controls: false,
};

/**  This is the media component */
const meta: Meta<typeof Media> = {
  component: Media,
  // tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
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
        <Box className="w-full h-[20rem] bg-gray-500 [&>*:first-child]:w-full">
          <Story />
        </Box>
      );
    },
  ],
  args: {
    data: imageProps,
    responsive: true,
  },
};

export const MediaVideo: Story = {
  decorators: [
    (Story) => {
      return (
        <Box className="w-full h-[20rem] bg-gray-500 [&>*:first-child]:w-full">
          <Story />
        </Box>
      );
    },
  ],
  args: {
    data: videoProps,
  },
};
