import type { Meta, StoryObj } from "@storybook/react";
import { HeroLeftAlignedModule } from "../";

const data: any = {
  headingTitle: {
    heading: "<p>Projects</p>",
    htag: "",
  },
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
  tag: "13 typologies",
};

// TODO:
// Handle data from BE
// Display infoTags array

/* The real data From BE
  "backgroundMedia": {
    "imageUrl": "/media/nm4aowig/zha_1.jpg",
    "title": "",
    "description": "",
    "imageAlt": "",
    "mediaId": 1201,
    "isSvg": false,
    "isVideo": false
  },
  "infoTags": [
    "13 typologies",
    "60+ ongoing projects",
    "200+ awards"
  ]
*/

const meta: Meta<typeof HeroLeftAlignedModule> = {
  component: HeroLeftAlignedModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroLeftAlignedModule>;

export const HeroLeftAligned: Story = {
  args: {
    data,
  },
};
