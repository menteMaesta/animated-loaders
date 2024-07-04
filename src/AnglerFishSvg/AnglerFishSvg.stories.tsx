import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AnglerFishSvg from 'src/AnglerFishSvg/AnglerFishSvg.tsx';

const meta: Meta<typeof AnglerFishSvg> = {
  title: 'AnglerFishSvg',
  component: AnglerFishSvg,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'An anglerfish themed loading spinner with customizable text and size',
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
type Story = StoryObj<typeof AnglerFishSvg>;

/**
 * This is how AnglerFishSvg component looks like out of the box, no custom size or text
 */
export const Default: Story = {
  render: ({ ...args }) => (
    <div className='mt-8 py-8 w-full'>
      <AnglerFishSvg {...args} />
    </div>
  ),
  play: async ({}) => {},
};
