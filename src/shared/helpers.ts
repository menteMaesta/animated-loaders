import { SVGProps } from 'react';

export const waitForTimeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'large';
  'data-testid'?: string;
}
