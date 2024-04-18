import type { Meta, StoryObj } from "@storybook/react";
import data from "./__mockdata__.json";

import { BreadcrumbsModule } from "../";

const meta: Meta<typeof BreadcrumbsModule> = {
  component: BreadcrumbsModule,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BreadcrumbsModule>;

export const Breadcrumbs: Story = {
  args: {
    data,
  },
};
