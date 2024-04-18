import type { Meta, StoryObj } from "@storybook/react";
import { RichTextAndTwoMediaModule } from "../";
import data from "./__mockData__.json";

const meta: Meta<typeof RichTextAndTwoMediaModule> = {
  component: RichTextAndTwoMediaModule,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RichTextAndTwoMediaModule>;

export const RichTextAndTwoMedia: Story = {
  args: {
    data,
  },
};
