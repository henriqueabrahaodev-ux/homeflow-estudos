import type { Variants } from "framer-motion";

// ─── Durações ────────────────────────────────────────────────────────────────
export const duration = {
  instant: 0.1,
  fast:    0.2,
  normal:  0.35,
  slow:    0.6,
  story:   1.0,
  count:   1.5,
} as const;

// ─── Easings ─────────────────────────────────────────────────────────────────
export const ease = {
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
  snappy: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  spring: { type: "spring", stiffness: 300, damping: 30 },
  bounce: { type: "spring", stiffness: 400, damping: 17 },
} as const;

// ─── Variantes de entrada ─────────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.smooth } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ...ease.spring } },
};

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: ease.smooth } },
};

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: ease.smooth } },
};

// Entrada por letra (hero headline)
export const letterVariant: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: ease.smooth } },
};

export const letterContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.05 } },
};

// ─── Microinterações de hover ─────────────────────────────────────────────────
export const hoverCard = {
  whileHover: { y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" },
  transition:  { duration: duration.fast, ease: ease.smooth },
};

export const hoverButton = {
  whileHover: { scale: 1.03, boxShadow: "0 0 24px rgba(108,99,255,0.4)" },
  whileTap:   { scale: 0.97 },
  transition:  ease.spring,
};

// ─── Variantes nomeadas (para uso com o wrapper AnimateOnView) ───────────────
export const variants = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideLeft,
  slideRight,
} as const;

export type VariantName = keyof typeof variants;
