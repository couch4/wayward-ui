import type { Meta, StoryObj } from "@storybook/react";
import { RichTextModule } from "../";
import data from "./__mockData__.json";

const meta: Meta<typeof RichTextModule> = {
  component: RichTextModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RichTextModule>;

export const RichText: Story = {
  args: {
    data,
  },
};
