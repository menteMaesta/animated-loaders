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
        d='M7.10778 10.6497C7.10778 10.6497 7.08842 10.5854 7.12309 10.6146C7.15776 10.6439 7.11151 10.6486 7.11151 10.6486C7.11151 10.6486 7.16715 10.6307 7.13596 10.6728C7.10478 10.7149 7.10276 10.6501 7.10276 10.6501C7.10276 10.6501 7.11254 10.7105 7.08451 10.6795C7.05649 10.6484 7.09783 10.6624 7.09783 10.6624C7.09783 10.6624 7.05466 10.645 7.08171 10.6271C7.10875 10.6091 7.10778 10.6497 7.10778 10.6497Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        id='star2'
        d='M10.4312 7.34859C10.4312 7.34859 10.4175 7.30072 10.4507 7.32644C10.4839 7.35217 10.4304 7.35231 10.4304 7.35231C10.4304 7.35231 10.5108 7.3375 10.4653 7.38535C10.4197 7.43319 10.4341 7.35579 10.4341 7.35579C10.4341 7.35579 10.4297 7.42699 10.3967 7.39044C10.3636 7.35389 10.432 7.34554 10.432 7.34554C10.432 7.34554 10.3684 7.36068 10.4015 7.32617C10.4347 7.29166 10.4312 7.34859 10.4312 7.34859Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        id='star1'
        d='M5.28091 4.76857C5.28091 4.76857 5.26313 4.70934 5.30561 4.73862C5.34809 4.7679 5.28602 4.7737 5.28602 4.7737C5.28602 4.7737 5.35219 4.76371 5.31319 4.80574C5.27419 4.84782 5.26535 4.77557 5.26535 4.77557C5.26535 4.77557 5.27831 4.83199 5.2542 4.80094C5.23008 4.76988 5.26872 4.76325 5.26872 4.76325C5.26872 4.76325 5.19282 4.77155 5.22768 4.73794C5.26254 4.70434 5.28091 4.76857 5.28091 4.76857Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default StarsSvg;
