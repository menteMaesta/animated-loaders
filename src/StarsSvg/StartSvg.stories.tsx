import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { waitForTimeout } from 'shared/helpers.ts';
import StarsSvg from 'src/StarsSvg/StarsSvg.tsx';
import LoaderWrapper, {
  LoaderWrapperProps,
} from 'src/LoaderWrapper/LoaderWrapper.tsx';
import * as LoaderWrapperStories from 'src/LoaderWrapper/LoaderWrapper.stories.tsx';

const { text, textProps, ...parentProps } =
  LoaderWrapperStories.Default.args || {};

type StarsSvgPropsAndLoader = React.ComponentProps<typeof StarsSvg> & {
  text?: LoaderWrapperProps['text'];
  textProps?: LoaderWrapperProps['textProps'];
  parentProps?: Omit<LoaderWrapperProps, 'text' | 'textProps'>;
};
const meta: Meta<StarsSvgPropsAndLoader> = {
  title: 'StarsSvg',
  component: StarsSvg,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'A stars themed animated svg icon with customizable size',
    },
  },
  argTypes: {
    className: { control: { type: 'text' } },
  },
};
export default meta;
type Story = StoryObj<StarsSvgPropsAndLoader>;

/**
 * This is how StarsSvg component looks like out of the box with default size
 */
export const Default: Story = {
  args: {
    'data-testid': 'stars-icon',
  },
  render: ({ ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <StarsSvg {...args} />
    </div>
  ),
  play: async ({}) => {},
};

/**
 * This is how StarsSvg component looks like inside loader wrapper
 */
export const WithLoader: Story = {
  args: {
    text,
    textProps,
    parentProps,
    'data-testid': 'stars-svg',
    className: 'filledIcon',
  },
  render: ({ text, textProps, parentProps, ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <LoaderWrapper text={text} textProps={textProps} {...parentProps}>
        <StarsSvg {...args} />
      </LoaderWrapper>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);
    const loader = getByTestId(
      parentProps?.['data-testid'] || 'loader-wrapper',
    );
    const seaDog = getByTestId('stars-svg');
    const text = getByTestId(textProps?.['data-testid'] || 'text');

    await waitForTimeout(1000);
    expect(loader).toBeInTheDocument();
    expect(seaDog).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  },
};
