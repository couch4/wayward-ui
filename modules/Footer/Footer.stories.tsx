import type { Meta, StoryObj } from "@storybook/react";
import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Twitter from "@/assets/icons/twitter.svg";
import { Footer } from "../";
import data from "./__mockData__.json";

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterModule: Story = {
  args: {
    data,
    socialIcons: {
      instagram: <Instagram />,
      facebook: <Facebook />,
      x: <Twitter />,
    },
  },
};
