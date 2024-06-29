import React, { SVGProps } from 'react';
import LoaderWrapper, {
  LoaderWrapperProps,
} from '../LoaderWrapper/LoaderWrapper';
import './IcecreamLoader.css';

interface IcecreamLoaderProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'large';
  'data-testid'?: string;
  text?: LoaderWrapperProps['text'];
  textProps?: LoaderWrapperProps['textProps'];
  parentProps?: Omit<LoaderWrapperProps, 'text' | 'textProps'>;
  coneClassName?: string;
  scoopFirstClassName?: string;
  scoopMiddleClassName?: string;
  scoopLastClassName?: string;
}

const IcecreamLoader = ({
  className,
  text,
  textProps,
  parentProps,
  size = 'default',
  coneClassName = '',
  scoopFirstClassName = '',
  scoopMiddleClassName = '',
  scoopLastClassName = '',
  ...props
}: IcecreamLoaderProps) => {
  const sizeStyle = {
    small: 'w-7',
    default: 'w-9',
    large: 'w-14',
  };

  return (
    <LoaderWrapper text={text} textProps={textProps} {...parentProps}>
      <svg
        viewBox='-0.03 -1.4 1.4 4.5'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={[className, size ? sizeStyle[size] : []].join(' ')}
        {...props}
      >
        <path
          id='cone'
          d='M0.635345 3.12138L0.172852 2.07141L1.16041 2.07043L0.635345 3.12138Z'
          fill='currentColor'
          strokeWidth={0.0354403}
          strokeLinecap='round'
          strokeLinejoin='round'
          className={
            coneClassName
              ? coneClassName
              : 'stroke-black ' + 'stroke-[0.005rem] ' + 'fill-white '
          }
        />
        <path
          id='scoop-first'
          d='M0.207744 2.076C0.147118 2.08534 0.111741 2.15975 0.0465809 2.15055C-0.0228591 2.12295 -0.00421577 2.01317 0.0349842 1.95637C0.0733842 1.86304 -0.076242 1.48867 0.399161 1.27278C0.564319 1.20011 0.754605 1.21287 0.924551 1.26074C1.12869 1.3282 1.26738 1.52848 1.29493 1.73689C1.30873 1.81649 1.30186 1.89786 1.29906 1.97745C1.32862 2.03238 1.36861 2.1392 1.27408 2.15226C1.20437 2.14826 1.1535 2.0773 1.07966 2.08943C0.998835 2.1089 0.936915 2.17184 0.871908 2.22037C0.817975 2.2665 0.754525 2.32492 0.677369 2.30598C0.606542 2.29398 0.554052 2.2373 0.528342 2.17317C0.498555 2.0993 0.412218 2.06425 0.35021 2.12345C0.28553 2.15878 0.249613 2.11945 0.213003 2.07332'
          fill='currentColor'
          className={
            scoopFirstClassName
              ? scoopFirstClassName
              : 'stroke-black ' + 'stroke-[0.005rem] ' + 'fill-white '
          }
        />
        <path
          id='scoop-middle'
          d='M0.207744 1.47322C0.147118 1.48255 0.111741 1.55696 0.0465809 1.54776C-0.0228591 1.52016 -0.00421577 1.41039 0.0349842 1.35359C0.0733842 1.26026 -0.076242 0.88589 0.399161 0.669997C0.564319 0.59733 0.754605 0.610086 0.924551 0.657953C1.12869 0.725419 1.26738 0.925695 1.29493 1.13411C1.30873 1.21371 1.30186 1.29508 1.29906 1.37467C1.32862 1.4296 1.36861 1.53642 1.27408 1.54947C1.20437 1.54547 1.1535 1.47451 1.07966 1.48665C0.998835 1.50611 0.936915 1.56905 0.871908 1.61759C0.817975 1.66372 0.754525 1.72213 0.677369 1.7032C0.606542 1.6912 0.554052 1.63452 0.528342 1.57039C0.498555 1.49652 0.412218 1.46146 0.35021 1.52066C0.28553 1.556 0.249613 1.51667 0.213003 1.47053'
          fill='currentColor'
          className={
            scoopMiddleClassName
              ? scoopMiddleClassName
              : 'stroke-black ' + 'stroke-[0.005rem] ' + 'fill-white '
          }
        />
        <path
          id='scoop-last'
          d='M0.207744 0.854445C0.147118 0.863779 0.111741 0.93819 0.0465809 0.92899C-0.0228591 0.90139 -0.00421577 0.791616 0.0349842 0.734816C0.0733842 0.641483 -0.076242 0.267116 0.399161 0.0512225C0.564319 -0.0214441 0.754605 -0.00868841 0.924551 0.0391783C1.12869 0.106645 1.26738 0.306921 1.29493 0.515334C1.30873 0.594934 1.30186 0.676307 1.29906 0.755894C1.32862 0.810827 1.36861 0.917645 1.27408 0.930699C1.20437 0.926699 1.1535 0.85574 1.07966 0.867873C0.998835 0.88734 0.936915 0.95028 0.871908 0.998814C0.817975 1.04495 0.754525 1.10336 0.677369 1.08443C0.606542 1.07243 0.554052 1.01575 0.528342 0.951613C0.498555 0.877747 0.412218 0.84269 0.35021 0.90189C0.28553 0.937223 0.249613 0.897893 0.213003 0.85176'
          fill='currentColor'
          className={
            scoopLastClassName
              ? scoopLastClassName
              : 'stroke-black ' + 'stroke-[0.005rem] ' + 'fill-white '
          }
        />
      </svg>
    </LoaderWrapper>
  );
};
export default IcecreamLoader;
