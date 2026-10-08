"use client";

import { motion } from "framer-motion";
import { variants, type VariantName } from "@/lib/motion";

interface AnimateOnViewProps {
  children: React.ReactNode;
  delay?: number;
  variant?: VariantName;
  className?: string;
  once?: boolean;
}

export function AnimateOnView({
  children,
  delay = 0,
  variant = "fadeUp",
  className,
  once = true,
}: AnimateOnViewProps) {
  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={selectedVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
