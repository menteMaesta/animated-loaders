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

    const initialTopScoop = getComputedStyle(topScoop).opacity;
    const initialMiddleScoop = getComputedStyle(middleScoop).opacity;
    const initialBottomScoop = getComputedStyle(bottomScoop).opacity;
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
      await waitForTimeout(1.5 * 1000); //wait for 1.5 seconds for the animation to be in progress
      expect(getComputedStyle(topScoop).opacity).not.toEqual(initialTopScoop);
      expect(getComputedStyle(middleScoop).opacity).not.toEqual(
        initialMiddleScoop,
      );
      expect(getComputedStyle(bottomScoop).opacity).not.toEqual(
        initialBottomScoop,
      );
      await waitForTimeout(1.4 * 1000);
      expect(getComputedStyle(cone).transform).not.toEqual(initialCone);
    });
  },
};

/**
 * This is how IcecreamLoader component looks like with custom styles
 */
export const CustomStyle: Story = {
  args: {
    'data-testid': 'icecream-loader',
    textProps: { 'data-testid': 'loader-text' },
    coneClassName: 'fill-slate-500',
    scoopFirstClassName: 'fill-slate-200',
    scoopMiddleClassName: 'fill-slate-400',
    scoopLastClassName: 'fill-slate-500',
  },
  render: ({ ...args }) => (
    <div className='mt-8  py-8 w-full dark:bg-slate-700'>
      <IcecreamLoader {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const topScoop = canvasElement.querySelector('#scoop-first') as HTMLElement;
    const middleScoop = canvasElement.querySelector(
      '#scoop-middle',
    ) as HTMLElement;
    const bottomScoop = canvasElement.querySelector(
      '#scoop-last',
    ) as HTMLElement;
    const cone = canvasElement.querySelector('#cone') as HTMLElement;

    await step('IcecreamLoader applies custom styles', async () => {
      expect(topScoop).toHaveClass('fill-slate-200');
      expect(middleScoop).toHaveClass('fill-slate-400');
      expect(bottomScoop).toHaveClass('fill-slate-500');
      expect(cone).toHaveClass('fill-slate-500');
    });
  },
};
