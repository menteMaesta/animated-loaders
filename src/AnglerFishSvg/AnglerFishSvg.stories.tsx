import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { waitForTimeout } from 'shared/helpers.ts';
import AnglerFishSvg from 'src/AnglerFishSvg/AnglerFishSvg.tsx';
import LoaderWrapper, {
  LoaderWrapperProps,
} from 'src/LoaderWrapper/LoaderWrapper.tsx';
import * as LoaderWrapperStories from 'src/LoaderWrapper/LoaderWrapper.stories.tsx';

type AnglerFishSvgPropsAndLoader = React.ComponentProps<
  typeof AnglerFishSvg
> & {
  text?: LoaderWrapperProps['text'];
  textProps?: LoaderWrapperProps['textProps'];
  parentProps?: Omit<LoaderWrapperProps, 'text' | 'textProps'>;
};

const { text, textProps, ...parentProps } =
  LoaderWrapperStories.Default.args || {};

const meta: Meta<AnglerFishSvgPropsAndLoader> = {
  title: 'AnglerFishSvg',
  component: AnglerFishSvg,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'An anglerfish themed loading spinner with customizable size',
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
type Story = StoryObj<AnglerFishSvgPropsAndLoader>;

/**
 * This is how AnglerFishSvg component looks like out of the box with default size
 */
export const Default: Story = {
  args: { 'data-testid': 'angler-fish' },
  render: ({ ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <AnglerFishSvg {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const anglerFish = getByTestId('angler-fish');
    const lamp = canvasElement.querySelector(
      '#angler-fish #lamp',
    ) as HTMLElement;
    const initialLamp = getComputedStyle(lamp).d;
    const initialAngler = getComputedStyle(anglerFish).transform;

    await step('Icon renders', async () => {
      expect(anglerFish).toBeInTheDocument();
      expect(lamp).toBeInTheDocument();
    });
    await waitForTimeout(1000);
    await step('Lamp wages', async () => {
      expect(getComputedStyle(lamp).d).not.toEqual(initialLamp);
    });
    await step('Body bounces', async () => {
      expect(getComputedStyle(anglerFish).transform).not.toEqual(initialAngler);
    });
  },
};

/**
 * This is how AnglerFishSvg component looks like inside loader wrapper
 */
export const WithLoader: Story = {
  args: {
    text,
    textProps,
    parentProps,
    'data-testid': 'angler-fish',
  },
  render: ({ text, textProps, parentProps, ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <LoaderWrapper text={text} textProps={textProps} {...parentProps}>
        <AnglerFishSvg {...args} />
      </LoaderWrapper>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);
    const anglerFish = getByTestId('angler-fish');
    const loader = getByTestId(
      parentProps?.['data-testid'] || 'loader-wrapper',
    );
    const text = getByTestId(textProps?.['data-testid'] || 'text');

    expect(anglerFish).toBeInTheDocument();
    expect(loader).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  },
};
