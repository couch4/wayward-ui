import type { Meta, StoryObj } from "@storybook/react";
import { Media } from "../../../components";

const imageProps = {
  imageUrl:
    "https://cdn-zhweb-qa-media.azureedge.net/api/v1/media/53kgzguw/refargotohp-1azkcg0c38a-unsplash.jpg?width=696&format=webp",
  imageAlt: "Image alt text",
  isSvg: false,
};
const videoProps = {
  coverImage: {
    imageUrl:
      "https://zhweb-qa-f-app.azurewebsites.net/media/11tbjmi2/kychan-ccfo0o_ltsy-unsplash.jpg",
    caption: "Kychan CCFO0O LTSY Unsplash",
    imageAlt: "This will be the alt text",
    mediaId: 1330,
    isSvg: false,
    isVideo: false,
  },
  vimeoId: "889428749",
  autoPlay: true,
  allowFullscreen: false,
  loop: true,
  controls: false,
};

/**  This is the media component */
const meta: Meta<typeof Media> = {
  component: Media,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Media>;

export const MediaImage: Story = {
  args: {
    data: imageProps,
    responsive: true,
    style: {
      width: "100%",
      height: "100vh",
    },
  },
};

export const MediaVideo: Story = {
  args: {
    data: videoProps,
    style: {
      width: "100%",
      height: "100vh",
    },
  },
};
