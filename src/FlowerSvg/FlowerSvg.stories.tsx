import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { waitForTimeout } from 'shared/helpers.ts';
import FlowerSvg from 'src/FlowerSvg/FlowerSvg.tsx';
import LoaderWrapper, {
  LoaderWrapperProps,
} from 'src/LoaderWrapper/LoaderWrapper.tsx';
import * as LoaderWrapperStories from 'src/LoaderWrapper/LoaderWrapper.stories.tsx';

type FlowerSvgPropsAndLoader = React.ComponentProps<typeof FlowerSvg> & {
  text?: string;
  textProps?: LoaderWrapperProps['textProps'];
  parentProps?: Omit<LoaderWrapperProps, 'text' | 'textProps'>;
};

const { text, textProps, ...parentProps } =
  LoaderWrapperStories.Default.args || {};

const meta: Meta<FlowerSvgPropsAndLoader> = {
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
  },
};
export default meta;
type Story = StoryObj<FlowerSvgPropsAndLoader>;

/**
 * This is how FlowerSvg component looks like out of the box with default size
 */
export const Default: Story = {
  args: {
    'data-testid': 'flowers',
  },
  render: ({ ...args }) => (
    <div className='mt-8 py-8 w-full flex justify-center'>
      <FlowerSvg {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const flowerSvg = getByTestId('flowers');
    const left = canvasElement.querySelector('#left') as HTMLElement;
    const center = canvasElement.querySelector('#center') as HTMLElement;
    const right = canvasElement.querySelector('#right') as HTMLElement;
    const initialLeft = getComputedStyle(left).transform;
    const initialCenter = getComputedStyle(center).transform;
    const initialRight = getComputedStyle(right).transform;

    await step('FlowerSvg renders', async () => {
      expect(flowerSvg).toBeInTheDocument();
      expect(left).toBeInTheDocument();
      expect(center).toBeInTheDocument();
      expect(right).toBeInTheDocument();
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
 * This is how FlowerSvg component looks like inside the LoaderWrapper
 */
export const WithLoader: Story = {
  args: {
    'data-testid': 'flowers',
    className: 'svg-custom-class',
    parentProps,
    textProps,
    text,
    size: 'small',
  },
  render: ({ text, textProps, parentProps, ...args }) => (
    <div className='mt-8 py-8 w-full'>
      <LoaderWrapper text={text} textProps={textProps} {...parentProps}>
        <FlowerSvg {...args} />
      </LoaderWrapper>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const loader = getByTestId(
      parentProps?.['data-testid'] || 'loader-wrapper',
    );
    const flowers = getByTestId('flowers');
    const text = getByTestId(textProps?.['data-testid'] || 'text');

    await step('LoaderWrapper renders with CatTailSvg inside', async () => {
      expect(loader).toBeInTheDocument();
      expect(flowers).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
  },
};
