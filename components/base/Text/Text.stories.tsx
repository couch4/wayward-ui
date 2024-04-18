import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../../components";

const meta: Meta<typeof Text> = {
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    textStyle: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const DisplayTextLarge: Story = {
  args: {
    textStyle: "display-lg",
    text: "Display text - large",
  },
};

export const DisplayTextMedium: Story = {
  args: {
    textStyle: "display-md",
    text: "Display text - medium",
  },
};

export const DisplayTextSmall: Story = {
  args: {
    textStyle: "display-sm",
    text: "Display text - small",
  },
};

export const Heading1: Story = {
  args: {
    textStyle: "h1",
    text: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    textStyle: "h2",
    text: "Heading 2",
  },
};

export const Heading3: Story = {
  args: {
    textStyle: "h3",
    text: "Heading 3",
  },
};

export const Heading4: Story = {
  args: {
    textStyle: "h4",
    text: "Heading 4",
  },
};

export const Heading5: Story = {
  args: {
    textStyle: "h5",
    text: "Heading 5",
  },
};

export const Heading6: Story = {
  args: {
    textStyle: "h6",
    text: "Heading 6",
  },
};

export const ParagraphLg: Story = {
  args: {
    textStyle: "p-lg",
    text: "Lorem ipsum lamat salmat, etc...",
  },
};

export const Paragraph: Story = {
  args: {
    textStyle: "p",
    text: "Lorem ipsum lamat salmat, etc...",
  },
};

export const ParagraphSm: Story = {
  args: {
    textStyle: "p-sm",
    text: "Lorem ipsum lamat salmat, etc...",
  },
};

export const ParagraphXs: Story = {
  args: {
    textStyle: "p-xs",
    text: "Lorem ipsum lamat salmat, etc...",
  },
};

export const ParagraphXxs: Story = {
  args: {
    textStyle: "p-xxs",
    text: "Lorem ipsum lamat salmat, etc...",
  },
};

export const Interactive: Story = {
  args: {
    textStyle: "i",
    text: "Interactive text",
  },
};

export const InteractiveSmall: Story = {
  args: {
    textStyle: "i-sm",
    text: "Interactive text",
  },
};

export const InteractiveXs: Story = {
  args: {
    textStyle: "i-xs",
    text: "Interactive text",
  },
};

export const Link: Story = {
  args: {
    link: {
      text: "Click me!",
      href: "https://www.google.com",
      target: "_blank",
    },
  },
};
