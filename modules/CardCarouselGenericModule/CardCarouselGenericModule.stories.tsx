import type { Meta, StoryObj } from "@storybook/react";
import { CardCarouselGenericModule } from "../";
// @ts-ignore
import Arrow from "../../assets/icons/zhaArrow.svg";
import data from "./__mockdata__.json";
import moduleConfig from "./CardCarouselGenericModule.config";

declare const window: {
  innerWidth: number;
  addEventListener: any;
  removeEventListener: any;
};

const meta: Meta<typeof CardCarouselGenericModule> = {
  component: CardCarouselGenericModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardCarouselGenericModule>;

export const CardCarouselGeneric: Story = {
  args: {
    data,
    ...moduleConfig,
  },
};
