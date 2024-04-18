import type { Meta, StoryObj } from "@storybook/react";
import { Box, ContentBlock } from "../../../components";

const meta: Meta<typeof Box> = {
  component: Box,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const PlainBox: Story = {
  args: {
    className: "rounded-3xl w-40 h-40 bg-blue-500",
  },
};

export const AnimatedBox: Story = {
  args: {
    className: "rounded-3xl w-40 h-40 bg-blue-500",
    // animation props
    initial: "inactive",
    animate: "active",
    variants: {
      inactive: {
        x: 0,
      },
      active: {
        x: 400,
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          type: "spring",
          damping: 20,
          stiffness: 400,
        },
      },
    },
  },
};

const data: any = {
  preHeading: "Editorial",
  headingTitle: "Blog Article Title",
  subHeading: "07.07.2023 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 15 minutes",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. ",
  primaryCta: "View article",
  variant: "primary",
};

export const Container: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "container",
    className:
      "bg-white pt-10 border-dashed border-blue-400 border-r-4 border-l-4 h-[28rem]",
    children: <ContentBlock data={data} />,
  },
};

export const Section: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "section",
    className: "bg-white",
    children: <ContentBlock data={data} />,
  },
};
