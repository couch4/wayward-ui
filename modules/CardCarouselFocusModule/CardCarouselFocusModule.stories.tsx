import type { Meta, StoryObj } from "@storybook/react";
import { CardCarouselFocusModule } from "../";
// @ts-ignore
import Arrow from "../../assets/icons/zhaArrow.svg";
import data from "./__mockdata__.json";

declare const window: {
  innerWidth: number;
  addEventListener: any;
  removeEventListener: any;
};

const meta: Meta<typeof CardCarouselFocusModule> = {
  component: CardCarouselFocusModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardCarouselFocusModule>;

export const CardCarouselFocus: Story = {
  args: {
    data,
    carouselProps: {
      animationStyle: "elegant",
      controls: {
        show: true,
        directionComponent: <Arrow />,
      },
      paginationType: "leadingZeroNumbers",
      showPagination: true,
      gap: 5,
      height: 500,
      crop: false,
    },
    getItems: () => [],
  },
};
