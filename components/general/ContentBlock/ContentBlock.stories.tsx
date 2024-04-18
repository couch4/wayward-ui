import type { Meta, StoryObj } from "@storybook/react";
import { ContentBlock } from "../../../components";
import { ContentBlockProps } from "./ContentBlock.types";

const data: ContentBlockProps["data"] = {
  preHeading: "Editorial",
  headingTitle: "Blog Article Title",
  subHeading: "07.07.2023 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 15 minutes",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. ",
  primaryCta: {
    text: "View article",
    href: "www.google.com",
  },
  variant: "primary",
};

const meta: Meta<typeof ContentBlock> = {
  component: ContentBlock,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContentBlock>;

export const ContentBlockGeneric: Story = {
  args: {
    data,
  },
};
