import type { Preview } from '@storybook/react';
import '../theme/styles/globals.css';
import config from '../tailwind.config';
import { themes } from '@storybook/theming';

const { screens }: any = config?.theme?.extend;
screens.full = '100%';

const customViewports = Object.entries(screens || {}).map(([key, value]) => {
  return {
    name: key,
    styles: {
      width: value,
      height: '100%',
    },
  };
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      viewports: customViewports,
      theme: themes.dark,
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
      theme: themes.dark,
    },
  },
};

export default preview;
