import React from 'react';
import { cn } from '@/lib/utils';

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  className,
  dark = false,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-block text-[0.75rem] font-semibold uppercase tracking-[0.12em] mb-3 select-none',
        dark ? 'text-sage-soft' : 'text-olive',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
