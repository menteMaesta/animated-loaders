import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import LoaderWrapper from 'src/LoaderWrapper/LoaderWrapper.tsx';

const meta: Meta<typeof LoaderWrapper> = {
  title: 'LoaderWrapper',
  component: LoaderWrapper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Wrapper that converts animated icons into page loaders',
    },
  },
  argTypes: {
    className: { control: { type: 'text' } },
    text: { control: { type: 'text' } },
  },
};
export default meta;
type Story = StoryObj<typeof LoaderWrapper>;

/**
 * This component wraps its children applying centering styles and a loading message.
 */
export const Default: Story = {
  args: {
    'data-testid': 'loader-wrapper',
    className: 'parent-custom-class',
    textProps: {
      className: 'text-custom-class',
      'data-testid': 'text',
    },
    text: 'Preparing the images...',
  },
  render: ({ ...args }) => (
    <div className='mt-8 py-8 w-full'>
      <LoaderWrapper {...args}>children</LoaderWrapper>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const loaderWrapper = getByTestId('loader-wrapper');
    const text = getByTestId('text');

    step('Loader renders with custom text and classes', async () => {
      expect(loaderWrapper).toBeInTheDocument();
      expect(loaderWrapper).toHaveClass('parent-custom-class');
      expect(text).toHaveClass('text-custom-class');
      expect(text).toHaveTextContent('Preparing the images...');
    });
  },
};
