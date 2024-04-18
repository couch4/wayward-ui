import type { Meta, StoryObj } from "@storybook/react";
import { Box, Accordion } from "../../../components";
import data from "./__mock__.json";
// @ts-ignore
import Close from "../../../assets/icons/close.svg";
import {
  accordionContent,
  accordionClose,
  accordionPanel,
} from "../../../theme/motion";
// @ts-ignore
import twConfig from "/tailwind.config.ts";

// @ts-ignore
const theme = twConfig?.theme?.extend;
const accordionTextStyles = theme?.modules?.accordion;

const meta: Meta<typeof Accordion> = {
  component: Accordion as any,
  tags: ["autodocs"],
  parameters: {
    mode: "dark",
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const AccordionStack: Story = {
  args: {
    data,
    icon: <Close />,
    childAnims: {
      close: accordionClose,
      panel: accordionPanel,
      content: accordionContent,
    },
    textStyles: {
      itemTitle: "h1",
      itemDescription: "h3",
    },
  },
};
