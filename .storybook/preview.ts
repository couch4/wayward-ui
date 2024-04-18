import type { Preview } from "@storybook/react";
import "../theme/styles/globals.css";
import config from "../tailwind.config";

const { screens }: any = config?.theme?.extend;
screens.full = "100%";

const customViewports = Object.entries(screens || {}).map(([key, value]) => {
  return {
    name: key,
    styles: {
      width: value,
      height: "100%",
    },
  };
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
      viewports: customViewports,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
