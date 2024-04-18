import type { Meta, StoryObj } from "@storybook/react";
import data from "./__mockdata__.json";
import { HeadingSideModule } from "../";

const meta: Meta<typeof HeadingSideModule> = {
  component: HeadingSideModule,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HeadingSideModule>;

export const HeadingSide: Story = {
  args: {
    data,
  },
};
