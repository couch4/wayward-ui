import type { Meta, StoryObj } from "@storybook/react";
import { RichTextAndOneMediaModule } from "../";
import data from "./__mockData__.json";
import dataYT from "./__mockDataYouTube__.json";
import dataSrc from "./__mockDataSrc__.json";
import dataAuto from "./__mockDataAutoplay__.json";

const meta: Meta<typeof RichTextAndOneMediaModule> = {
  component: RichTextAndOneMediaModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RichTextAndOneMediaModule>;

export const RichTextAndOneMediaVimeo: Story = {
  args: {
    data,
  },
};

export const RichTextAndOneMediaYoutube: Story = {
  args: {
    data: dataYT,
  },
};

export const RichTextAndOneMediaSrc: Story = {
  args: {
    data: dataSrc,
  },
};

export const RichTextAndOneMediaVimeoAutoplay: Story = {
  args: {
    data: dataAuto,
  },
};
