import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import FlowerLoader from './FlowerLoader';

const meta: Meta<typeof FlowerLoader> = {
  title: 'FlowerLoader',
  component: FlowerLoader,
  argTypes: {
    className: { control: { type: 'text' } },
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
    text: { control: { type: 'text' } },
  },
};
export default meta;
type Story = StoryObj<typeof FlowerLoader>;

export const Default: Story = {
  args: {
    'data-testid': 'flower-loader',
  },
  render: ({ ...args }) => (
    <div className='w-full h-screen dark:bg-slate-700'>
      <FlowerLoader {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    // Function to wait for a specified time
    const waitForTimeout = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const { getByTestId, getByText } = within(canvasElement);
    const flowerLoader = getByTestId('flower-loader');
    const left = canvasElement.querySelector('#left') as HTMLElement;
    const center = canvasElement.querySelector('#center') as HTMLElement;
    const right = canvasElement.querySelector('#right') as HTMLElement;
    const initialLeft = getComputedStyle(left).transform;
    const initialCenter = getComputedStyle(center).transform;
    const initialRight = getComputedStyle(right).transform;

    await step('FlowerLoader renders', async () => {
      expect(flowerLoader).toBeInTheDocument();
      expect(getByText('Loading...')).toBeInTheDocument();
    });
    await waitForTimeout(2 * 1000); //wait for 2 seconds for the animation to complete
    await step('FlowerLoader animation completes', async () => {
      expect(getComputedStyle(left).transform).not.toEqual(initialLeft);
      expect(getComputedStyle(center).transform).not.toEqual(initialCenter);
      expect(getComputedStyle(right).transform).not.toEqual(initialRight);
    });
  },
};

export const WitCustomClassNames: Story = {
  args: {
    'data-testid': 'flower-loader',
    className: 'svg-custom-class',
    parentProps: { className: 'parent-custom-class', 'data-testid': 'parent' },
    textProps: { className: 'text-custom-class', 'data-testid': 'text' },
  },
  render: ({ ...args }) => (
    <div className='w-full h-screen dark:bg-slate-700'>
      <FlowerLoader {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const flowerLoader = getByTestId('flower-loader');
    const parent = getByTestId('parent');
    const text = getByTestId('text');

    step('FlowerLoader renders with custom class names', async () => {
      expect(flowerLoader).toBeInTheDocument();
      expect(parent).toHaveClass('parent-custom-class');
      expect(text).toHaveClass('text-custom-class');
    });
  },
};
