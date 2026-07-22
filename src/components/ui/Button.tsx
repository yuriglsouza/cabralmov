"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/siteConfig';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  isWhatsappLink?: boolean;
  whatsappMessage?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  isWhatsappLink = false,
  whatsappMessage,
  target,
  rel,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    primary:
      'bg-olive text-paper hover:bg-[#4E5937] shadow-warm hover:shadow-warm-hover active:scale-[0.98]',
    secondary:
      'bg-ink text-paper hover:bg-[#25251C] shadow-warm active:scale-[0.98]',
    outline:
      'border border-olive text-olive hover:bg-olive hover:text-paper active:scale-[0.98]',
    ghost:
      'text-ink hover:bg-sage-soft/40 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs uppercase tracking-wider',
    md: 'px-6 py-3 text-sm tracking-wide font-medium',
    lg: 'px-8 py-4 text-base tracking-wide font-semibold',
  };

  const computedHref = isWhatsappLink
    ? siteConfig.getWhatsappLink(whatsappMessage)
    : href;

  if (computedHref) {
    const isExternal = computedHref.startsWith('http') || isWhatsappLink;
    return (
      <motion.a
        href={computedHref}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
