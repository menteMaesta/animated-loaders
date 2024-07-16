import React from 'react';
import { SvgIconProps } from 'shared/helpers';
import 'src/BloDuckSvg/BloDuckSvg.css';

const BloDuckSvg = ({
  className,
  size = 'default',
  ...props
}: SvgIconProps) => {
  const sizeStyle = {
    small: 'w-12',
    default: 'w-16',
    large: 'w-20',
  };

  return (
    <svg
      id='bloduck'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={[className, size ? sizeStyle[size] : []].join(' ')}
      {...props}
    >
      <path
        id='body'
        d='M7.09188 7.53921C9.0143 7.07785 11.0927 8.23593 11.8984 10.0037C12.5968 11.2402 12.9166 12.9448 11.9865 14.1505C10.9761 15.3687 9.26368 15.6413 7.76688 15.6022C6.37987 15.5274 4.80475 15.1081 4.05132 13.832C3.18196 12.495 3.57072 10.7303 4.44634 9.50134C5.08124 8.57994 5.97051 7.78075 7.09188 7.53921Z'
        fill='#FFCE2B'
      />
      <path
        id='eye'
        d='M7.37878 8.97366C7.58831 8.89531 7.69465 8.66194 7.6163 8.45242C7.53796 8.24289 7.30459 8.13654 7.09506 8.21489C6.88553 8.29324 6.77919 8.52661 6.85754 8.73614C6.93588 8.94566 7.16925 9.05201 7.37878 8.97366Z'
        fill='black'
      />
      <path
        id='mouth'
        d='M8.65479 9.88553C8.65479 9.88553 12.5471 2.66544 11.6608 9.69017C10.9832 9.01951 8.65479 9.88553 8.65479 9.88553Z'
        fill='#E8593A'
      />
    </svg>
  );
};
export default BloDuckSvg;
