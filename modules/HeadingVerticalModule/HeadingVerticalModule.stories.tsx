import type { Meta, StoryObj } from "@storybook/react";
import { HeadingVerticalModule } from "../";

const data: any = {
  headingTitle: {
    heading: "<p>News</p>",
    htag: "h2",
  },
  description:
    "<p>Copy to be decided elementum egestas in nostra ac parturient a semper donec odio imperdiet imperdiet erat mus nec vestibulum parturient a etiam aenean.</p>",
  image: {
    imageUrl:
      "https://zhweb-qa-f-app.azurewebsites.net/media/wotgyell/adrian-cuj-o_9ymcy0bag-unsplash.jpg",
    title: "",
    description: "",
    imageAlt: "",
    mediaId: 1229,
    isSvg: false,
    isVideo: false,
  },
  anchor: "",
  anchorDisplayName: "",
  paddingTop: "small",
  paddingBottom: "small",
};

const meta: Meta<typeof HeadingVerticalModule> = {
  component: HeadingVerticalModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeadingVerticalModule>;

export const HeadingVertical: Story = {
  args: {
    data,
  },
};
