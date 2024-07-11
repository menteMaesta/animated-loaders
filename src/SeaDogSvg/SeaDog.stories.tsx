import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { waitForTimeout } from 'shared/helpers.ts';
import SeaDogSvg from 'src/SeaDogSvg/SeaDogSvg.tsx';
import LoaderWrapper, {
  LoaderWrapperProps,
} from 'src/LoaderWrapper/LoaderWrapper.tsx';
import * as LoaderWrapperStories from 'src/LoaderWrapper/LoaderWrapper.stories.tsx';
import 'shared/stories.css';

const { text, textProps, ...parentProps } =
  LoaderWrapperStories.Default.args || {};

type SeaDogSvgPropsAndLoader = React.ComponentProps<typeof SeaDogSvg> & {
  text?: LoaderWrapperProps['text'];
  textProps?: LoaderWrapperProps['textProps'];
  parentProps?: Omit<LoaderWrapperProps, 'text' | 'textProps'>;
};
const meta: Meta<SeaDogSvgPropsAndLoader> = {
  title: 'SeaDogSvg',
  component: SeaDogSvg,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'A sea dog themed animated svg icon with customizable size',
    },
  },
  argTypes: {
    className: { control: { type: 'text' } },
  },
};
export default meta;
type Story = StoryObj<SeaDogSvgPropsAndLoader>;

/**
 * This is how SeaDogSvg component looks like out of the box with default size
 */
export const Default: Story = {
  args: {
    'data-testid': 'seadog-icon',
  },
  render: ({ ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <SeaDogSvg {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const seaDogSvg = getByTestId('seadog-icon');
    const waves = canvasElement.querySelector('#sea-dog #waves') as HTMLElement;
    const body = canvasElement.querySelector('#sea-dog #body') as HTMLElement;
    const eye = canvasElement.querySelector('#sea-dog #eye') as HTMLElement;

    const wavesInitial = getComputedStyle(waves).d;
    const bodyInitial = getComputedStyle(body).d;
    const eyeInitial = getComputedStyle(eye).d;

    await step('Icon renders', async () => {
      expect(seaDogSvg).toBeInTheDocument();
      expect(waves).toBeInTheDocument();
      expect(body).toBeInTheDocument();
      expect(eye).toBeInTheDocument();
    });
    await waitForTimeout(1000);
    await step('Icon animates', async () => {
      expect(getComputedStyle(waves).d).not.toEqual(wavesInitial);
      expect(getComputedStyle(body).d).not.toEqual(bodyInitial);
      expect(getComputedStyle(eye).d).not.toEqual(eyeInitial);
    });
  },
};

/**
 * This is how SeaDogSvg component looks like inside loader wrapper
 */
export const WithLoader: Story = {
  args: {
    text,
    textProps,
    parentProps,
    'data-testid': 'seadog-svg',
    className: 'filledIcon',
  },
  render: ({ text, textProps, parentProps, ...args }) => (
    <div className='mt-8 py-8 w-full justify-center flex'>
      <LoaderWrapper text={text} textProps={textProps} {...parentProps}>
        <SeaDogSvg {...args} />
      </LoaderWrapper>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);
    const loader = getByTestId(
      parentProps?.['data-testid'] || 'loader-wrapper',
    );
    const seaDog = getByTestId('seadog-svg');
    const text = getByTestId(textProps?.['data-testid'] || 'text');

    await waitForTimeout(1000);
    expect(loader).toBeInTheDocument();
    expect(seaDog).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  },
};
