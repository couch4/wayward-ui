import type { Meta, StoryObj } from "@storybook/react";
import { ModuleBase, Text } from "components";
import data from "./__mockdata__.json";

const meta: Meta<typeof ModuleBase> = {
  component: ModuleBase,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ModuleBase>;

export const Module: Story = {
  args: {
    data,
    children: (
      <>
        <Text text={data.moduleName} textStyle="h4" />
        <Text text={data.moduleId} />
      </>
    ),
  },
};
