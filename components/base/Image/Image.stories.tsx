import type { Meta, StoryObj } from '@storybook/react';
import { Box, Image, Stack, Text } from '../../../components';
// @ts-ignore
import localImage from '../../../assets/images/zhaCarousel1.jpg';

const imageUrlWithQuery =
  'https://cdn-zhweb-qa-media.azureedge.net/api/v1/media/53kgzguw/refargotohp-1azkcg0c38a-unsplash.jpg?width=696&format=webp';
const imageUrlWithoutQuery =
  'https://cdn-zhweb-qa-media.azureedge.net/api/v1/media/53kgzguw/refargotohp-1azkcg0c38a-unsplash.jpg';
const imageUrlWithFocalPoint =
  'https://qa-api.zaha-hadid.com/media/bwzfe0he/01667_cp_n101337.jpg?rxy=0.8771146616541353,0.20592004721792143';
const svgSrc =
  'http://165.232.45.12:8055/assets/3b2af8a6-035d-4ef1-ad8c-fe584689ed0f';

const meta: Meta<typeof Image> = {
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Image>;

export const ExplicitWidthAndHeight: Story = {
  args: {
    src: imageUrlWithoutQuery,
    width: 800,
    height: 600,
    priority: true,
    blurDataURL: `${imageUrlWithoutQuery}?width=80&height=60`,
    placeholder: 'blur',
  },
};

export const FillContainer: Story = {
  decorators: [
    (Story) => {
      return (
        <Stack direction="column" gap={5}>
          <Text
            text="Responsive in container, set as relative. (400 x 400)"
            textStyle="h6"
          />
          <Box className="w-[400px] h-[400px] bg-gray-200 relative">
            <Story />
          </Box>
        </Stack>
      );
    },
  ],
  args: {
    src: imageUrlWithoutQuery,
    responsive: true,
  },
};

export const Responsive: Story = {
  args: {
    src: imageUrlWithQuery,
    priority: true,
    responsive: true,
  },
};

export const FocalPoint: Story = {
  decorators: [
    (Story) => {
      return (
        <Box className="w-[800px] h-[1000px] bg-gray-200 relative">
          <Story />
        </Box>
      );
    },
  ],
  args: {
    src: imageUrlWithFocalPoint,
    priority: true,
    responsive: true,
  },
};

export const StaticallyImportedImage: Story = {
  args: {
    src: localImage.src,
    width: localImage.width,
    height: localImage.height,
    sizes: '(min-width: 808px) 50vw, 100vw',
  },
};

export const SVG: Story = {
  args: {
    src: svgSrc,
    style: { color: 'black', width: '20rem', height: '20rem' },
  },
};
