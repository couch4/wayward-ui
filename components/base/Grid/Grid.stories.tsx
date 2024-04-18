import type { Meta, StoryObj } from "@storybook/react";
import { Box, Grid } from "../../../components";
import { animControllerInView, fadeInUp } from "../../../theme/motion";

const meta: Meta<typeof Grid> = {
  component: Grid,
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
type Story = StoryObj<typeof Grid>;

const renderMockSquares = ["blue", "pink", "purple", "teal"].map(
  (color, i: number) => {
    return (
      <Box
        key={`gridItem${i}`}
        className={`rounded-3xl h-40 bg-${color}-500`}
      />
    );
  }
);

export const SimpleGrid: Story = {
  args: {
    rows: 2,
    cols: 2,
    gap: 5,
    children: renderMockSquares,
  },
};

const renderAnimatedMockSquares = ["blue", "pink", "purple", "teal"].map(
  (color, i: number) => {
    return (
      <Box
        key={`gridItem${i}`}
        className={`rounded-3xl h-40 bg-${color}-500`}
        {...fadeInUp}
      />
    );
  }
);

export const AnimatedGrid: Story = {
  args: {
    rows: 2,
    cols: 2,
    gap: 5,
    children: renderAnimatedMockSquares,
    ...animControllerInView(),
  },
};

const renderMockColSpannedSquares = [
  "blue",
  "pink",
  "purple",
  "teal",
  "blue",
  "teal",
].map((color, i: number) => {
  const colSpan = i === 0 ? "col-span-3" : "";

  return (
    <Box
      key={`gridItem${i}`}
      className={`rounded-3xl h-40 bg-${color}-500 ${colSpan}`}
    />
  );
});

export const SpannedColGrid: Story = {
  args: {
    rows: 3,
    cols: 3,
    gap: 5,
    children: renderMockColSpannedSquares,
  },
};

const renderMockRowSpannedSquares = [
  "blue",
  "pink",
  "purple",
  "teal",
  "blue",
  "teal",
].map((color, i: number) => {
  const isSpan = i === 0;
  const rowSpan = isSpan ? "row-span-2" : "";
  const cellHeight = isSpan ? "h-full" : "h-40";

  return (
    <Box
      key={`gridItem${i}`}
      className={`rounded-3xl ${cellHeight} bg-${color}-500 ${rowSpan}`}
    />
  );
});

export const SpannedRowGrid: Story = {
  args: {
    rows: 3,
    cols: 4,
    gap: 5,
    children: renderMockRowSpannedSquares,
  },
};

const renderMockSpannedSquares = ["blue", "pink", "purple", "teal", "blue"].map(
  (color, i: number) => {
    const isSpan = i === 0;
    const rowSpan = isSpan ? "row-span-2" : "";
    const colSpan = isSpan ? "col-span-2" : "";
    const cellHeight = isSpan ? "h-full" : "h-60";

    return (
      <Box
        key={`gridItem${i}`}
        className={`rounded-3xl ${cellHeight} bg-${color}-500 ${rowSpan} ${colSpan}`}
      />
    );
  }
);

export const SpannedRowAndColGrid: Story = {
  args: {
    rows: 3,
    cols: 4,
    gap: 5,
    children: renderMockSpannedSquares,
  },
};
