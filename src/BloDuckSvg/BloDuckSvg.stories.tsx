import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { waitForTimeout } from 'shared/helpers.ts';
import BloDuckSvg from 'src/BloDuckSvg/BloDuckSvg.tsx';
import LoaderWrapper, {
  LoaderWrapperProps,
} from 'src/LoaderWrapper/LoaderWrapper.tsx';
import * as LoaderWrapperStories from 'src/LoaderWrapper/LoaderWrapper.stories.tsx';

const { text, textProps, ...parentProps } =
  LoaderWrapperStories.Default.args || {};

type BloDuckSvgPropsAndLoader = React.ComponentProps<typeof BloDuckSvg> & {
  text?: LoaderWrapperProps['text'];
  textProps?: LoaderWrapperProps['textProps'];
  parentProps?: Omit<LoaderWrapperProps, 'text' | 'textProps'>;
};
const meta: Meta<BloDuckSvgPropsAndLoader> = {
  title: 'BloDuckSvg',
  component: BloDuckSvg,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Animated icon of a blob turning into a blob duck',
    },
  },
  argTypes: {
    className: { control: { type: 'text' } },
  },
};
export default meta;
type Story = StoryObj<BloDuckSvgPropsAndLoader>;

/**
 * This is how Bloduck component looks like out of the box with default size
 */
export const Default: Story = {
  args: {
    'data-testid': 'bloduck-icon',
  },
  render: ({ ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <BloDuckSvg {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const bloDuckSvg = getByTestId('bloduck-icon');
    const body = canvasElement.querySelector('#bloduck #body') as HTMLElement;
    const eye = canvasElement.querySelector('#bloduck #eye') as HTMLElement;
    const mouth = canvasElement.querySelector('#bloduck #mouth') as HTMLElement;

    const initialBody = getComputedStyle(body).d;
    const initialEye = getComputedStyle(eye).transform;
    const initialMouth = getComputedStyle(mouth).transform;

    await step('Bloduck renders', async () => {
      expect(bloDuckSvg).toBeInTheDocument();
      expect(body).toBeInTheDocument();
      expect(eye).toBeInTheDocument();
      expect(mouth).toBeInTheDocument();
    });
    await waitForTimeout(1000);
    await step('Bloduck animates', async () => {
      expect(getComputedStyle(body).d).not.toEqual(initialBody);
      expect(getComputedStyle(eye).transform).not.toEqual(initialEye);
      expect(getComputedStyle(mouth).transform).not.toEqual(initialMouth);
    });
  },
};

/**
 * This is how Bloduck component looks like inside a loader wrapper with custom text
 */
export const WithLoader: Story = {
  args: {
    'data-testid': 'bloduck-icon',
    text,
    textProps,
    parentProps,
  },
  render: ({ text, textProps, parentProps, ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <LoaderWrapper text={text} textProps={textProps} {...parentProps}>
        <BloDuckSvg {...args} />
      </LoaderWrapper>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const loader = getByTestId(
      parentProps?.['data-testid'] || 'loader-wrapper',
    );
    const bloduck = getByTestId('bloduck-icon');
    const text = getByTestId(textProps?.['data-testid'] || 'text');

    await step('LoaderWrapper renders with CatTailSvg inside', async () => {
      expect(loader).toBeInTheDocument();
      expect(bloduck).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
  },
};
