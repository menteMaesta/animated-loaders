import { Preview } from '@storybook/react';
import 'src/shared/main.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['All Icons', '*'],
      },
    },
  },
  decorators: [],
};

export default preview;
