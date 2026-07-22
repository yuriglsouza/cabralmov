import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "terracotta" | "sage" | "charcoal" | "linen";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "sage",
  className,
  icon,
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300";

  const variants = {
    sage: "bg-sage/10 text-sage-dark border-sage/20",
    terracotta: "bg-terracotta/10 text-terracotta border-terracotta/20",
    charcoal: "bg-charcoal/5 text-charcoal border-charcoal/15",
    linen: "bg-linen text-charcoal/80 border-stone-300/40",
  };

  return (
    <span className={twMerge(clsx(baseStyles, variants[variant], className))}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
