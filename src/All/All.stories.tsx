import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SvgIconProps } from 'shared/helpers';
import FlowerSvg from 'src/FlowerSvg/FlowerSvg.tsx';
import AnglerFishSvg from 'src/AnglerFishSvg/AnglerFishSvg.tsx';
import CatTailSvg from 'src/CatTailSvg/CatTailSvg.tsx';
import BloDuckSvg from 'src/BloDuckSvg/BloDuckSvg.tsx';
import SeaDogSvg from 'src/SeaDogSvg/SeaDogSvg';
import StarsSvg from 'src/StarsSvg/StarsSvg.tsx';
import GhostCatSvg from 'src/GhostCatSvg/GhostCatSvg.tsx';

const meta: Meta<SvgIconProps> = {
  title: 'All Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'All animated icons available',
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
type Story = StoryObj<SvgIconProps>;

/**
 * Showcase of all icons with their names for easy identification
 */
export const Default: Story = {
  render: ({ ...args }) => (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '0.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem',
          borderRadius: '0.3rem',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      >
        <AnglerFishSvg {...args} />
        <span style={{ marginTop: '0.5rem' }}>AnglerFishSvg</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem',
          borderRadius: '0.3rem',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      >
        <CatTailSvg {...args} />
        <span style={{ marginTop: '0.5rem' }}>CatTailSvg</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem',
          borderRadius: '0.3rem',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      >
        <FlowerSvg {...args} />
        <span style={{ marginTop: '0.5rem' }}>FlowerSvg</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem',
          borderRadius: '0.3rem',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      >
        <SeaDogSvg {...args} />
        <span style={{ marginTop: '0.5rem' }}>SeaDogSvg</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem',
          borderRadius: '0.3rem',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      >
        <StarsSvg {...args} />
        <span style={{ marginTop: '0.5rem' }}>StarsSvg</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem',
          borderRadius: '0.3rem',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      >
        <GhostCatSvg {...args} />
        <span style={{ marginTop: '0.5rem' }}>GhostCatSvg</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem',
          borderRadius: '0.3rem',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      >
        <BloDuckSvg {...args} />
        <span style={{ marginTop: '0.5rem' }}>BloDuckSvg</span>
      </div>
    </div>
  ),
};
