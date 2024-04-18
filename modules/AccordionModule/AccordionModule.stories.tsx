import type { Meta, StoryObj } from "@storybook/react";
import { AccordionModule } from "../";
// @ts-ignore
import Close from "../../assets/icons/close.svg";
import {
  accordionContent,
  accordionClose,
  accordionPanel,
} from "../../theme/motion";
import data from "./__mockdata__.json";

declare const window: {
  innerWidth: number;
  addEventListener: any;
  removeEventListener: any;
};

const meta: Meta<typeof AccordionModule> = {
  component: AccordionModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionModule>;

export const Accordion: Story = {
  args: {
    data,
    accordionIcon: <Close />,
    moduleAnims: {
      close: accordionClose,
      panel: accordionPanel,
      content: accordionContent,
    },
    textStyles: {
      itemTitle: "h3",
      itemDescription: "p",
      tag: "text-xs",
      headingTitle: "h1",
    },
  },
};
