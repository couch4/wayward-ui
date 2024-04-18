import type { Meta, StoryObj } from "@storybook/react";
import { ArticleHeroModule } from "../";
import data from "./__mockData__.json";

const meta: Meta<typeof ArticleHeroModule> = {
  component: ArticleHeroModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleHeroModule>;

export const RichTextAndOneMediaModule: Story = {
  args: {
    data,
  },
};
