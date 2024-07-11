import React, { SVGProps } from 'react';
import 'src/StarsSvg/StarsSvg.css';

interface StarsSvgProps extends SVGProps<SVGSVGElement> {
  className?: string;
  'data-testid'?: string;
  size?: 'small' | 'default' | 'large';
}

const StarsSvg = ({ className, size = 'default', ...props }: StarsSvgProps) => {
  const sizeStyle = {
    small: 'w-12',
    default: 'w-16',
    large: 'w-20',
  };
  return (
    <svg
      id='stars'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={[className, size ? sizeStyle[size] : ''].join(' ')}
      {...props}
    >
      <path
        id='star3'
        d='M6.46669 11.8912C6.46669 11.8912 6.44733 11.8269 6.48199 11.8561C6.51666 11.8854 6.47042 11.8901 6.47042 11.8901C6.47042 11.8901 6.52605 11.8722 6.49487 11.9143C6.46368 11.9564 6.46166 11.8916 6.46166 11.8916C6.46166 11.8916 6.47144 11.952 6.44341 11.921C6.41539 11.8899 6.45673 11.9039 6.45673 11.9039C6.45673 11.9039 6.41356 11.8866 6.44061 11.8686C6.46766 11.8506 6.46669 11.8912 6.46669 11.8912Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        id='star2'
        d='M11.6026 7.37135C11.6026 7.37135 11.5889 7.32348 11.6221 7.34921C11.6553 7.37494 11.6018 7.37508 11.6018 7.37508C11.6018 7.37508 11.6822 7.36027 11.6367 7.40811C11.5911 7.45596 11.6055 7.37856 11.6055 7.37856C11.6055 7.37856 11.6011 7.44975 11.5681 7.41321C11.535 7.37666 11.6034 7.36832 11.6034 7.36832C11.6034 7.36832 11.5398 7.38345 11.5729 7.34894C11.6061 7.31443 11.6026 7.37135 11.6026 7.37135Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        id='star1'
        d='M4.10856 4.22884C4.10856 4.22884 4.09078 4.16961 4.13326 4.19889C4.17575 4.22817 4.11368 4.23396 4.11368 4.23396C4.11368 4.23396 4.17984 4.224 4.14084 4.26602C4.10184 4.30811 4.09301 4.23583 4.09301 4.23583C4.09301 4.23583 4.10596 4.29226 4.08185 4.2612C4.05774 4.23015 4.09638 4.22352 4.09638 4.22352C4.09638 4.22352 4.02047 4.23181 4.05533 4.1982C4.09019 4.16461 4.10856 4.22884 4.10856 4.22884Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default StarsSvg;
