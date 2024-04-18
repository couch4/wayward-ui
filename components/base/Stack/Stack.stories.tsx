import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Box, Button, Stack, Text } from "../../../components";
import {
  animControllerInView,
  fadeInLeft,
  fadeInUp,
  springIn,
} from "../../../theme/motion";

const mockCopy =
  "Example of a block of copy. Have added 'my-10' to this block to get more aesthetical spacing above and below, but generally you'd set the gap on the encasing stack for consistency.";

const meta: Meta<typeof Stack> = {
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    gap: {
      control: {
        type: "range",
        min: 0,
        max: 20,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const handleStackClick = action("stack CTA clicked");

export const VerticalStack: Story = {
  args: {
    className: "w-1/2",
    direction: "column",
    gap: 2,
    children: [
      <Text key="vStack0" text="Example heading" textStyle="h1" />,
      <Text key="vStack1" text="Example of a subheading" textStyle="h5" />,
      <Text key="vStack2" text={mockCopy} textStyle="copy" className="my-10" />,
      <Button key="vStack3" text="Click here" onClick={handleStackClick} />,
    ],
  },
};

export const HorizontalStack: Story = {
  args: {
    direction: "row",
    gap: 2,
    children: [
      <Box key="hStack0" className="rounded-3xl h-40 bg-blue-500" />,
      <Box key="hStack1" className="rounded-3xl h-40 bg-pink-500" />,
      <Box key="hStack2" className="rounded-3xl h-40 bg-purple-500" />,
      <Box key="hStack3" className="rounded-3xl h-40 bg-teal-500" />,
    ],
  },
};

export const AnimatedVerticalStack: Story = {
  args: {
    className: "w-1/2",
    direction: "column",
    gap: 2,
    children: [
      <Text
        key="vStack0"
        text="Example heading"
        textStyle="h1"
        {...fadeInUp}
      />,
      <Text
        key="vStack1"
        text="Example of a subheading"
        textStyle="h5"
        {...fadeInUp}
      />,
      <Text
        key="vStack2"
        text={mockCopy}
        textStyle="copy"
        className="my-10"
        {...fadeInUp}
      />,
      <Button
        key="vStack3"
        text="Click here"
        onClick={handleStackClick}
        {...fadeInUp}
      />,
    ],
    ...animControllerInView(),
  },
};

export const AnimatedHorizontalStack: Story = {
  args: {
    direction: "row",
    gap: 2,
    children: [
      <Box
        key="hStack0"
        className="rounded-3xl h-40 bg-blue-500"
        {...fadeInLeft}
      />,
      <Box
        key="hStack1"
        className="rounded-3xl h-40 bg-pink-500"
        {...fadeInLeft}
      />,
      <Box
        key="hStack2"
        className="rounded-3xl h-40 bg-purple-500"
        {...fadeInLeft}
      />,
      <Box
        key="hStack3"
        className="rounded-3xl h-40 bg-teal-500"
        {...fadeInLeft}
      />,
    ],
    className: "overflow-visible",
    ...animControllerInView(),
  },
};

export const AnimatedHorizontalStack_SpringIn: Story = {
  args: {
    direction: "row",
    gap: 2,
    children: [
      <Box
        key="hStack0"
        className="rounded-3xl h-40 bg-blue-500"
        {...fadeInLeft}
      />,
      <Box
        key="hStack1"
        className="rounded-3xl h-40 bg-pink-500"
        {...fadeInLeft}
      />,
      <Box
        key="hStack2"
        className="rounded-3xl h-40 bg-purple-500"
        {...springIn}
      />,
      <Box
        key="hStack3"
        className="rounded-3xl h-40 bg-teal-500"
        {...springIn}
      />,
    ],
    className: "overflow-visible",
    ...animControllerInView(),
  },
};
