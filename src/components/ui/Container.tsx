import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'default',
  ...props
}) => {
  const sizes = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-7xl lg:max-w-[90rem]',
  };

  return (
    <div
      className={cn('mx-auto px-6 sm:px-8 md:px-12 w-full', sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};
