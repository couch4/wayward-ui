import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../components";
import { CardProps } from "./Card.types";

const data: CardProps["data"] = {
  image: {
    imageUrl:
      "https://media.idorchester.com/api/v1/media/ox4khfi1/le-meurice-facade-5.jpg",
    caption: "One-by-one logo",
    imageAlt: "A simple One-by-one logo stock for testing purposes. ",
    mediaId: 1382,
    isSvg: false,
    isVideo: false,
  },
  preHeading: "Editorial",
  headingTitle: "Blog Article Title",
  subHeading: "07.07.2023 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 15 minutes",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. ",
  primaryCta: "View article",
};

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    mode: "dark",
  },
  argTypes: {
    size: {
      option: ["sm", "md", "lg"],
    },
    variant: {
      options: ["primary", "overlay"],
    },
  },
  args: {
    size: "lg",
    variant: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardGeneric: Story = {
  args: {
    data,
    variant: "generic",
  },
};

export const CardOverlay: Story = {
  args: {
    data,
    variant: "overlay",
  },
};
