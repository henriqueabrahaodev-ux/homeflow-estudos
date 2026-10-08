"use client";

import { motion } from "framer-motion";
import { letterContainer, letterVariant } from "@/lib/motion";

const HEADLINE = "A casa toda em sincronia.";

export function HeroHeadline() {
  const words = HEADLINE.split(" ");

  return (
    <motion.h1
      className="font-display font-extrabold text-text-base leading-[1.05] tracking-[-0.03em]"
      style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
      variants={letterContainer}
      initial="hidden"
      animate="visible"
      aria-label={HEADLINE}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap mr-[0.22em]">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              variants={letterVariant}
              className="inline-block"
              // stagger offset global = (wi * chars_per_word + ci)
              // controlado pelo letterContainer staggerChildren
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
