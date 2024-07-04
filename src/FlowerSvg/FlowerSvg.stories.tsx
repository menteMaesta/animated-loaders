import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { waitForTimeout } from '../shared/helpers';
import FlowerSvg from './FlowerSvg';

const meta: Meta<typeof FlowerSvg> = {
  title: 'FlowerSvg',
  component: FlowerSvg,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A flower-themed loading spinner with customizable text and size',
    },
  },
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
type Story = StoryObj<typeof FlowerSvg>;

/**
 * This is how FlowerSvg component looks like out of the box, no custom size or text
 */
export const Default: Story = {
  args: {
    'data-testid': 'flower-loader',
  },
  render: ({ ...args }) => (
    <div className='mt-8 py-8 w-full'>
      <FlowerSvg {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId, getByText } = within(canvasElement);
    const flowerSvg = getByTestId('flower-loader');
    const left = canvasElement.querySelector('#left') as HTMLElement;
    const center = canvasElement.querySelector('#center') as HTMLElement;
    const right = canvasElement.querySelector('#right') as HTMLElement;
    const initialLeft = getComputedStyle(left).transform;
    const initialCenter = getComputedStyle(center).transform;
    const initialRight = getComputedStyle(right).transform;

    await step('FlowerSvg renders', async () => {
      expect(flowerSvg).toBeInTheDocument();
      expect(getByText('Loading...')).toBeInTheDocument();
    });
    await waitForTimeout(2 * 1000); //wait for 2 seconds for the animation to complete
    await step('FlowerSvg animation completes', async () => {
      expect(getComputedStyle(left).transform).not.toEqual(initialLeft);
      expect(getComputedStyle(center).transform).not.toEqual(initialCenter);
      expect(getComputedStyle(right).transform).not.toEqual(initialRight);
    });
  },
};

/**
 * This is how FlowerSvg component looks like with custom size and text
 */
export const WitCustomClassNames: Story = {
  args: {
    'data-testid': 'flower-loader',
    className: 'svg-custom-class',
    parentProps: { className: 'parent-custom-class', 'data-testid': 'parent' },
    textProps: {
      className: 'text-custom-class',
      'data-testid': 'text',
    },
    text: 'Preparing the images...',
    size: 'small',
  },
  render: ({ ...args }) => (
    <div className='mt-8 py-8 w-full'>
      <FlowerSvg {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const flowerSvg = getByTestId('flower-loader');
    const parent = getByTestId('parent');
    const text = getByTestId('text');

    step('FlowerSvg renders with custom class names', async () => {
      expect(flowerSvg).toBeInTheDocument();
      expect(parent).toHaveClass('parent-custom-class');
      expect(text).toHaveClass('text-custom-class');
    });
  },
};
