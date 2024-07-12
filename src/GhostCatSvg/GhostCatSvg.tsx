import React, { SVGProps } from 'react';
import 'src/GhostCatSvg/GhostCatSvg.css';

interface GhostCatSvgProps extends SVGProps<SVGSVGElement> {
  className?: string;
  'data-testid'?: string;
  size?: 'small' | 'default' | 'large';
}

const GhostCatSvg = ({
  className,
  size = 'default',
  ...props
}: GhostCatSvgProps) => {
  const sizeStyle = {
    small: 'w-16',
    default: 'w-20',
    large: 'w-24',
  };

  return (
    <svg
      id='ghost-cat'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={[className, size ? sizeStyle[size] : ''].join(' ')}
      {...props}
    >
      <path
        id='body'
        d='M2.84592 11.9421C3.63174 10.0593 5.34787 6.3465 6.0946 2.19586C6.0946 2.19586 6.54074 2.53775 7.11686 3.85802L9.46933 4.38612C9.46933 4.38612 9.7372 3.72575 10.3575 2.63377C10.8924 2.44662 12.2962 7.53075 12.7043 12.8118C10.7161 11.4255 9.58855 12.6545 8.89577 13.4207C7.45432 12.1022 6.86488 11.3068 5.15178 12.6201C5.0131 12.3424 4.51128 11.3072 3.08615 11.8308C3.04544 11.8495 3.00686 11.8677 2.96184 11.8898C2.92038 11.9103 2.87808 11.9211 2.84592 11.9421Z'
        stroke='currentColor'
      />
      <path
        id='eye1'
        d='M7.31306 6.06037L6.46437 5.53418'
        stroke='currentColor'
      />
      <path
        id='eye2'
        d='M9.31599 6.28104L10.2156 5.85669'
        stroke='currentColor'
      />
      <path
        id='mouth'
        d='M6.99382 7.45944C6.99382 7.45944 7.75504 7.76695 8.09565 7.04291C8.09565 7.04291 8.27719 7.69508 9.0506 7.57756'
        stroke='currentColor'
      />
    </svg>
  );
};
export default GhostCatSvg;
