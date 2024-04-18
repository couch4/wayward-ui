import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "../../../components";
import data from "./__mockdata__.json";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const ButtonGroupRow: Story = {
  args: {
    primaryProps: data.primaryCta,
    secondaryProps: {
      ...data.secondaryCta,
      className: "border !border-black !text-black justify-center",
    },
    direction: "row",
    gap: 6,
  },
};

export const ButtonGroupColumn: Story = {
  args: {
    primaryProps: { ...data.primaryCta, className: "w-full justify-center" },
    secondaryProps: {
      ...data.secondaryCta,
      className: "w-full border !border-black !text-black justify-center",
    },
    direction: "column",
    gap: 4,
  },
};
