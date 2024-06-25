import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FlowerLoader from './FlowerLoader';

const meta: Meta<typeof FlowerLoader> = {
  title: 'FlowerLoader',
  component: FlowerLoader,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
    text: { control: { type: 'text' } },
  },
};
export default meta;
type Story = StoryObj<typeof FlowerLoader>;

export const Default: Story = {
  args: {},
  render: ({ ...args }) => (
    <div className='w-full h-screen dark:bg-slate-700'>
      <FlowerLoader {...args} />
    </div>
  ),
};
