"use client";

import { motion } from "framer-motion";

type DividerVariant = "wave" | "wave-steep" | "diagonal" | "blob";

interface SectionDividerProps {
  variant?: DividerVariant;
  fromColor?: string;
  toColor?: string;
  animate?: boolean;
  className?: string;
  flip?: boolean;
}

const paths: Record<DividerVariant, string> = {
  wave:       "M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z",
  "wave-steep": "M0,0 C150,80 350,0 600,60 C850,120 1050,20 1200,60 L1200,80 L0,80 Z",
  diagonal:   "M0,80 L1200,20 L1200,80 L0,80 Z",
  blob:       "M0,40 C100,10 250,70 400,30 C550,-10 700,60 900,30 C1000,15 1100,50 1200,40 L1200,80 L0,80 Z",
};

export function SectionDivider({
  variant = "wave",
  fromColor = "var(--color-bg)",
  toColor = "var(--color-surface)",
  animate = false,
  className = "",
  flip = false,
}: SectionDividerProps) {
  const path = paths[variant];

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: 80, transform: flip ? "scaleY(-1)" : "none" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id={`divider-grad-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        {animate ? (
          <motion.path
            d={path}
            fill={`url(#divider-grad-${variant})`}
            animate={{
              d: [
                path,
                paths["wave-steep"],
                path,
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : (
          <path d={path} fill={`url(#divider-grad-${variant})`} />
        )}
      </svg>
    </div>
  );
}
