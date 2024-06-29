import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { waitForTimeout } from '../shared/helpers';
import IcecreamLoader from './IcecreamLoader';

const meta: Meta<typeof IcecreamLoader> = {
  title: 'IcecreamLoader',
  component: IcecreamLoader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'An icecream-themed loading spinner with customizable text and size',
    },
  },
  argTypes: {
    className: { control: { type: 'text' } },
    size: {
      control: { type: 'select', options: ['small', 'default', 'large'] },
    },
  },
};
export default meta;
type Story = StoryObj<typeof IcecreamLoader>;

/**
 * This is how IcecreamLoader component looks like out of the box, no custom size or text
 */
export const Default: Story = {
  args: {
    'data-testid': 'icecream-loader',
    textProps: { 'data-testid': 'loader-text' },
  },
  render: ({ ...args }) => (
    <div className='mt-8  py-8 w-full dark:bg-slate-700'>
      <IcecreamLoader {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const loader = getByTestId('icecream-loader');
    const text = getByTestId('loader-text');
    const topScoop = canvasElement.querySelector('#scoop-first') as HTMLElement;
    const middleScoop = canvasElement.querySelector(
      '#scoop-middle',
    ) as HTMLElement;
    const bottomScoop = canvasElement.querySelector(
      '#scoop-last',
    ) as HTMLElement;
    const cone = canvasElement.querySelector('#cone') as HTMLElement;

    const initialTopScoop = getComputedStyle(topScoop).transform;
    const initialMiddleScoop = getComputedStyle(middleScoop).transform;
    const initialBottomScoop = getComputedStyle(bottomScoop).transform;
    const initialCone = getComputedStyle(cone).transform;

    await step('IcecreamLoader renders', async () => {
      expect(loader).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Loading...');
      expect(topScoop).toBeInTheDocument();
      expect(middleScoop).toBeInTheDocument();
      expect(bottomScoop).toBeInTheDocument();
      expect(cone).toBeInTheDocument();
    });

    await step('IcecreamLoader animates', async () => {
      await waitForTimeout(4 * 1000); //wait for 4 seconds for the animation to be in progress
      expect(getComputedStyle(topScoop).transform).not.toEqual(initialTopScoop);
      expect(getComputedStyle(middleScoop).transform).not.toEqual(
        initialMiddleScoop,
      );
      expect(getComputedStyle(bottomScoop).transform).not.toEqual(
        initialBottomScoop,
      );
      expect(getComputedStyle(cone).transform).toEqual(initialCone);
    });
  },
};
