import { ComponentPropsWithoutRef } from 'react';

export interface LoaderWrapperProps extends ComponentPropsWithoutRef<'div'> {
  text?: string;
  textProps?: ComponentPropsWithoutRef<'p'> & { 'data-testid'?: string };
  'data-testid'?: string;
}

const LoaderWrapper = ({
  text = 'Loading...',
  textProps,
  children,
  className,
  ...props
}: LoaderWrapperProps) => {
  const { className: textClassName, ...textRest } = textProps || {};
  return (
    <div
      className={
        'w-full h-full ' +
        'flex flex-col ' +
        'items-center justify-center ' +
        'dark:text-white ' +
        className
      }
      {...props}
    >
      {children}
      <p
        {...textRest}
        className={'text-center animate-pulse pt-1 ' + textClassName}
      >
        {text}
      </p>
    </div>
  );
};
export default LoaderWrapper;
