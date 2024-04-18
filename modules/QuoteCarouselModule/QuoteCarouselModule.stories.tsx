import type { Meta, StoryObj } from "@storybook/react";
import { QuoteCarouselModule } from "../";
// @ts-ignore
import Arrow from "../../assets/icons/zhaArrow.svg";
import data from "./__mockdata__.json";

const meta: Meta<typeof QuoteCarouselModule> = {
  component: QuoteCarouselModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuoteCarouselModule>;

export const QuoteCarousel: Story = {
  args: {
    data,
    carouselProps: {
      controls: {
        show: true,
        directionComponent: <Arrow />,
      },
      showPagination: true,
      paginationType: "leadingZeroNumbers",
      animationStyle: "elegant",
      paginationStyle: {
        textStyle: "i-xs",
      },
    },
    textStyles: {
      quote: {
        textStyle: "h3",
      },
    },
  },
};
