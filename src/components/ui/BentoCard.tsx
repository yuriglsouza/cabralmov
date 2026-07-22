"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  darkBg?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className,
  colSpan = "col-span-1",
  darkBg = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className={twMerge(
        clsx(
          "rounded-3xl p-7 md:p-9 flex flex-col justify-between transition-all duration-300 relative overflow-hidden",
          darkBg
            ? "bg-charcoal text-cream shadow-xl shadow-charcoal/10 border border-charcoal/50"
            : "glass-card organic-shadow text-charcoal hover:border-terracotta/20 hover:shadow-xl",
          colSpan,
          className
        )
      )}
    >
      {children}
    </motion.div>
  );
};
