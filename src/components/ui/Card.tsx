import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'paper' | 'white' | 'dark' | 'sage';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'white',
  ...props
}) => {
  const variants = {
    white: 'bg-white text-ink border border-sage-soft/30 shadow-warm hover:shadow-warm-hover',
    paper: 'bg-paper text-ink border border-sage-soft/40 shadow-warm',
    dark: 'bg-ink text-paper border border-white/10 shadow-2xl',
    sage: 'bg-sage-soft/20 text-ink border border-sage-soft/50',
  };

  return (
    <div
      className={cn(
        'rounded-xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
