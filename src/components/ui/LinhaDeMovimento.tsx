"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LinhaDeMovimentoProps {
  className?: string;
  variant?: 'hero' | 'divider' | 'cta';
  color?: string;
}

export const LinhaDeMovimento: React.FC<LinhaDeMovimentoProps> = ({
  className,
  variant = 'hero',
  color = '#5C6842',
}) => {
  if (variant === 'divider') {
    return (
      <div className={cn('w-full flex justify-center items-center py-8 overflow-hidden select-none', className)}>
        <svg
          viewBox="0 0 1200 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-5xl h-8 md:h-12 text-olive opacity-40"
          aria-hidden="true"
        >
          <path
            d="M0 30 C 300 5, 500 55, 700 25 C 900 -5, 1100 50, 1200 30"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'cta') {
    return (
      <svg
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('absolute inset-0 w-full h-full pointer-events-none text-olive opacity-25 select-none', className)}
        aria-hidden="true"
      >
        <path
          d="M -50 150 C 150 10, 350 190, 550 40 C 700 -20, 800 120, 850 60"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  // Variant === 'hero'
  return (
    <div className={cn('absolute inset-0 pointer-events-none select-none overflow-hidden z-0', className)}>
      <svg
        viewBox="0 0 1000 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-olive opacity-30 md:opacity-40"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <motion.path
          d="M -100 280 C 150 40, 400 360, 650 120 C 850 -40, 950 300, 1100 160"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </svg>
    </div>
  );
};
