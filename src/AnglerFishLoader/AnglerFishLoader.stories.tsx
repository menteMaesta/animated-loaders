import type { Meta, StoryObj } from '@storybook/react';
import AnglerFishLoader from './AnglerFishLoader';

const meta: Meta<typeof AnglerFishLoader> = {
  title: 'AnglerFishLoader',
  component: AnglerFishLoader,
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
type Story = StoryObj<typeof AnglerFishLoader>;

/**
 * This is how AnglerFishLoader component looks like out of the box, no custom size or text
 */
export const Default: Story = {
  render: ({ ...args }) => (
    <div className='mt-8  py-8 w-full dark:bg-slate-700'>
      <AnglerFishLoader {...args} />
    </div>
  ),
  play: async ({}) => {},
};
