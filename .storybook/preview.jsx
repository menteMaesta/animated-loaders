/** @type { import('@storybook/react').Preview } */
import '../src/shared/main.css';

import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
      dataAttribute: 'data-theme',
    }),
  ],
};

export default preview;
