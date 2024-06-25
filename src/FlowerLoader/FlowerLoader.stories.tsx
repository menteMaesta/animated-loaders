import FlowerLoader from './FlowerLoader';
import React from 'react';

export default {
  title: 'FlowerLoader',
  component: FlowerLoader,
};

export const Default = {
  render: () => (
    <div className='w-full h-screen dark:bg-slate-700'>
      <FlowerLoader />
    </div>
  ),
};

export const Small = {
  render: () => (
    <div className='w-full h-screen dark:bg-slate-700'>
      <FlowerLoader size='small' />
    </div>
  ),
};

export const Large = {
  render: () => (
    <div className='w-full h-screen dark:bg-slate-700'>
      <FlowerLoader size='large' />
    </div>
  ),
};
