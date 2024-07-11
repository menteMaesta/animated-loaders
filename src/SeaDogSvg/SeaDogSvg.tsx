import React, { SVGProps } from 'react';
import 'src/SeaDogSvg/SeaDogSvg.css';

interface SeaDogSvgProps extends SVGProps<SVGSVGElement> {
  className?: string;
  'data-testid'?: string;
  size?: 'small' | 'default' | 'large';
}

const SeaDogSvg = ({
  className,
  size = 'default',
  ...props
}: SeaDogSvgProps) => {
  const sizeStyle = {
    small: 'w-12',
    default: 'w-16',
    large: 'w-20',
  };
  return (
    <svg
      id='sea-dog'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={[className, size ? sizeStyle[size] : []].join(' ')}
      {...props}
    >
      <path
        id='waves'
        d='M15.8411 15.2845C14.1123 16.0996 12.5819 12.7555 10.256 14.3434C8.23093 15.8134 7.21641 12.8403 4.69719 14.5815C2.93785 15.7861 2.66481 12.5255 0.188786 14.0099'
        stroke='currentColor'
      />
      <path
        id='body'
        d='M4.0979 14.8121C4.18794 14.5393 4.48682 13.5972 4.6125 13.2309C5.06948 12.0536 5.60126 10.6786 6.86645 10.1941C8.53687 9.79835 9.31379 11.6169 10.2028 12.6538C10.4547 13.0192 10.9965 13.7317 11.0758 13.8834C7.5 16.5 8 12.5 4.0979 14.8121Z'
        stroke='currentColor'
      />
      <path
        id='wisker1'
        d='M7.1204 10.9881C7.4524 11.0602 8.15586 11.0462 8.42697 11.1191'
        stroke='currentColor'
      />
      <path
        id='wisker2'
        d='M6.92254 11.6422C7.48915 11.8617 8.09285 12.2257 8.50811 12.3428'
        stroke='currentColor'
      />
      <path
        id='wisker3'
        d='M5.83215 10.8555C5.27051 10.4076 4.71201 10.4474 3.96668 9.9859'
        stroke='currentColor'
      />
      <path
        id='wisker4'
        d='M5.41085 11.3473C4.53473 11.1742 4.11508 11.1783 3.35485 10.9928'
        stroke='currentColor'
      />
      <path
        id='nose'
        d='M7.96889 10.0263C8.10713 10.2249 7.76665 10.4536 7.30323 10.6149C6.83981 10.7762 6.17068 10.8944 6.03244 10.6958C5.8942 10.4972 6.21363 9.9976 6.68872 9.8543C7.09401 9.73205 7.83065 9.82769 7.96889 10.0263Z'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        id='eye'
        d='M8.524 15.5561C8.524 16.1346 9.00834 16.5856 9.581 16.5856C9.00251 16.5856 8.51556 16.1346 8.51556 15.5561C8.51556 14.9776 9.00251 14.4907 9.581 14.4907C8.99035 14.4907 8.524 14.9776 8.524 15.5561Z'
        stroke='currentColor'
      />
    </svg>
  );
};
export default SeaDogSvg;
