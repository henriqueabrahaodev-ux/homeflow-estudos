"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name:        string;
  description: string;
  monthly:     number | null;
  annual:      number | null;
  isAnnual:    boolean;
  features:    PricingFeature[];
  highlighted: boolean;
  cta:         string;
  badge?:      string;
  delay?:      number;
}

function AnimatedCheck({ included, delay = 0 }: { included: boolean; delay?: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
      {included ? (
        <svg ref={ref} viewBox="0 0 14 12" width={16} height={16} fill="none">
          <motion.path
            d="M1.5 6L5.5 10L12.5 1.5"
            stroke="#6C63FF"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.45, delay, ease: [0.4, 0, 0.2, 1] }}
          />
        </svg>
      ) : (
        <span className="w-3 h-0.5 rounded-full bg-border block" />
      )}
    </span>
  );
}

function FlipPrice({ value, prefix = "R$ " }: { value: number | null; prefix?: string }) {
  return (
    <div className="flex items-end gap-1" style={{ perspective: 400 }}>
      {value === null ? (
        <span className="font-display font-bold text-4xl text-text-base">Grátis</span>
      ) : (
        <>
          <span className="text-lg text-text-muted font-body mb-1">{prefix}</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={value}
              className="font-display font-bold text-4xl text-text-base font-mono"
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              style={{ display: "inline-block", transformOrigin: "center top" }}
            >
              {value.toFixed(2).replace(".", ",")}
            </motion.span>
          </AnimatePresence>
          <span className="text-sm text-text-muted font-body mb-1.5">/mês</span>
        </>
      )}
    </div>
  );
}

export function PricingCard({
  name, description, monthly, annual, isAnnual,
  features, highlighted, cta, badge, delay = 0,
}: PricingCardProps) {
  const price = isAnnual ? annual : monthly;

  return (
    <motion.div
      className="relative flex flex-col rounded-card border p-7 gap-6"
      style={{
        backgroundColor: highlighted ? "var(--color-surface-2)" : "var(--color-surface)",
        borderColor:      highlighted ? "var(--color-primary)" : "var(--color-border)",
        boxShadow:        highlighted ? "0 0 40px rgba(108,99,255,0.18)" : "none",
      }}
      initial={{ opacity: 0, y: 28, scale: highlighted ? 1.02 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: highlighted ? 1.03 : 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4, boxShadow: highlighted
        ? "0 0 50px rgba(108,99,255,0.28), 0 20px 40px rgba(0,0,0,0.25)"
        : "0 20px 40px rgba(0,0,0,0.2)" }}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-primary px-4 py-1 text-xs font-bold text-white whitespace-nowrap">
          {badge}
        </span>
      )}

      <div>
        <h3 className="font-display font-bold text-xl text-text-base mb-1">{name}</h3>
        <p className="text-sm text-text-muted">{description}</p>
      </div>

      <FlipPrice value={price} />

      {isAnnual && monthly !== null && (
        <p className="text-xs text-green -mt-4">
          Economize R${((monthly - (annual ?? 0)) * 12).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} por ano
        </p>
      )}

      <motion.button
        className="w-full rounded-pill py-3.5 text-sm font-body font-semibold transition-colors"
        style={{
          backgroundColor: highlighted ? "var(--color-primary)" : "transparent",
          color:            highlighted ? "white" : "var(--color-primary)",
          border:           highlighted ? "none" : "1.5px solid var(--color-primary)",
        }}
        whileHover={{ scale: 1.02, boxShadow: highlighted ? "0 0 20px rgba(108,99,255,0.4)" : "none" }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {cta}
      </motion.button>

      <ul className="flex flex-col gap-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3">
            <AnimatedCheck included={f.included} delay={delay + i * 0.06} />
            <span className={`text-sm font-body ${f.included ? "text-text-base" : "text-text-muted"}`}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
