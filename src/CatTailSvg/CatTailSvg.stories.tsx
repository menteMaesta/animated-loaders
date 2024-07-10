import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { waitForTimeout } from 'shared/helpers.ts';
import CatTailSvg from 'src/CatTailSvg/CatTailSvg.tsx';
import LoaderWrapper, {
  LoaderWrapperProps,
} from 'src/LoaderWrapper/LoaderWrapper.tsx';
import * as LoaderWrapperStories from 'src/LoaderWrapper/LoaderWrapper.stories.tsx';

const { text, textProps, ...parentProps } =
  LoaderWrapperStories.Default.args || {};

type CatTailSvgPropsAndLoader = React.ComponentProps<typeof CatTailSvg> & {
  text?: LoaderWrapperProps['text'];
  textProps?: LoaderWrapperProps['textProps'];
  parentProps?: Omit<LoaderWrapperProps, 'text' | 'textProps'>;
};
const meta: Meta<CatTailSvgPropsAndLoader> = {
  title: 'CatTailSvg',
  component: CatTailSvg,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Animated icon of a cat waging its tail',
    },
  },
  argTypes: {
    className: { control: { type: 'text' } },
  },
};
export default meta;
type Story = StoryObj<CatTailSvgPropsAndLoader>;

/**
 * Svg animated icon of a cat waging its tail up and down.
 */
export const Default: Story = {
  args: {
    'data-testid': 'cat-tail-icon',
  },
  render: ({ ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <CatTailSvg {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const catTailSvg = getByTestId('cat-tail-icon');
    const body = canvasElement.querySelector('#cat-tail #body') as HTMLElement;
    const backLeg = canvasElement.querySelector(
      '#cat-tail #back-leg',
    ) as HTMLElement;
    const frontLeg = canvasElement.querySelector(
      '#cat-tail #leg',
    ) as HTMLElement;

    const initialBody = getComputedStyle(body).d;
    const initialBackLeg = getComputedStyle(backLeg).d;
    const initialFrontLeg = getComputedStyle(frontLeg).d;

    await step('CatTailSvg renders', async () => {
      expect(catTailSvg).toBeInTheDocument();
      expect(body).toBeInTheDocument();
    });
    await waitForTimeout(1 * 1000);
    await step('CatTailSvg animation moves', async () => {
      expect(initialBody).not.toEqual(getComputedStyle(body).d);
      expect(initialBackLeg).not.toEqual(getComputedStyle(backLeg).d);
      expect(initialFrontLeg).not.toEqual(getComputedStyle(frontLeg).d);
    });
  },
};

/**
 * The cat icon is now inside LoaderWrapper converting it in a loading screen.
 */
export const WithLoader: Story = {
  args: {
    text,
    textProps,
    parentProps,
    'data-testid': 'cat-tail-svg',
  },
  render: ({ text, textProps, parentProps, ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <LoaderWrapper text={text} textProps={textProps} {...parentProps}>
        <CatTailSvg {...args} />
      </LoaderWrapper>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const loader = getByTestId('loader-wrapper');
    const cat = getByTestId('cat-tail-svg');
    const text = getByTestId(textProps?.['data-testid'] || 'text');

    await step('LoaderWrapper renders with CatTailSvg inside', async () => {
      expect(loader).toBeInTheDocument();
      expect(cat).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
  },
};
