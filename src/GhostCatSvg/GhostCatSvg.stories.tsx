import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { waitForTimeout } from 'shared/helpers.ts';
import GhostCatSvg from 'src/GhostCatSvg/GhostCatSvg.tsx';
import LoaderWrapper, {
  LoaderWrapperProps,
} from 'src/LoaderWrapper/LoaderWrapper.tsx';
import * as LoaderWrapperStories from 'src/LoaderWrapper/LoaderWrapper.stories.tsx';

const { text, textProps, ...parentProps } =
  LoaderWrapperStories.Default.args || {};

type GhostCatSvgPropsAndLoader = React.ComponentProps<typeof GhostCatSvg> & {
  text?: LoaderWrapperProps['text'];
  textProps?: LoaderWrapperProps['textProps'];
  parentProps?: Omit<LoaderWrapperProps, 'text' | 'textProps'>;
};
const meta: Meta<GhostCatSvgPropsAndLoader> = {
  title: 'GhostCatSvg',
  component: GhostCatSvg,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'A ghost cat themed animated svg icon with customizable size',
    },
  },
  argTypes: {
    className: { control: { type: 'text' } },
  },
};
export default meta;
type Story = StoryObj<GhostCatSvgPropsAndLoader>;

/**
 * This is how GhostCatSvg component looks like out of the box with default size
 */
export const Default: Story = {
  args: {
    'data-testid': 'ghost-cat-icon',
  },
  render: ({ ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <GhostCatSvg {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const ghostCat = getByTestId('ghost-cat-icon');
    const ghostBody = canvasElement.querySelector(
      '#ghost-cat #body',
    ) as SVGPathElement;
    const initialBody = getComputedStyle(ghostBody).d;

    await step('GhostCatSvg rendered', () => {
      expect(ghostCat).toBeInTheDocument();
      expect(ghostBody).toBeInTheDocument();
    });
    await waitForTimeout(1000);
    await step('GhostCatSvg animated', () => {
      expect(getComputedStyle(ghostBody).d).not.toEqual(initialBody);
    });
  },
};

/**
 * This is how GhostCatSvg component looks like inside loader wrapper
 */
export const WithLoader: Story = {
  args: {
    text,
    textProps,
    parentProps,
    'data-testid': 'ghost-cat-icon',
  },
  render: ({ text, textProps, parentProps, ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <LoaderWrapper text={text} textProps={textProps} {...parentProps}>
        <GhostCatSvg {...args} />
      </LoaderWrapper>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);
    const loader = getByTestId(
      parentProps?.['data-testid'] || 'loader-wrapper',
    );
    const ghostCat = getByTestId('ghost-cat-icon');
    const text = getByTestId(textProps?.['data-testid'] || 'text');

    await waitForTimeout(1000);
    expect(loader).toBeInTheDocument();
    expect(ghostCat).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  },
};
