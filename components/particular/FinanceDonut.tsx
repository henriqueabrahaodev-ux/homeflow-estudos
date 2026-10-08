"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "./AnimatedCounter";

interface Slice {
  label: string;
  value: number;
  color: string;
  emoji: string;
}

const DEFAULT_SLICES: Slice[] = [
  { label: "Mercado",    value: 1280, color: "#6C63FF", emoji: "🛒" },
  { label: "Escola",     value: 890,  color: "#4ECDC4", emoji: "📚" },
  { label: "Lazer",      value: 430,  color: "#FFB347", emoji: "🎬" },
  { label: "Conta Fixa", value: 750,  color: "#FF6B6B", emoji: "🏠" },
  { label: "Outros",     value: 220,  color: "#6B7280", emoji: "✨" },
];

const R = 70;
const CX = 100;
const CY = 100;
const STROKE = 24;
const CIRC = 2 * Math.PI * R;

export function FinanceDonut({ slices = DEFAULT_SLICES }: { slices?: Slice[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const total = slices.reduce((s, sl) => s + sl.value, 0);
  let offset = 0;

  return (
    <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
      {/* SVG Donut */}
      <div className="relative flex-shrink-0">
        <svg ref={ref} width={200} height={200} viewBox="0 0 200 200">
          {/* Track */}
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="#1F2433" strokeWidth={STROKE} />

          {slices.map((slice, i) => {
            const portion = slice.value / total;
            const sliceOffset = offset;
            offset += portion;

            const dashArray  = `${portion * CIRC} ${CIRC}`;
            const dashOffset = -(sliceOffset * CIRC - CIRC / 4);
            const isHov      = hovered === i;
            const isFaded    = hovered !== null && !isHov;

            return (
              <motion.circle
                key={slice.label}
                cx={CX} cy={CY} r={R}
                fill="none"
                stroke={slice.color}
                strokeWidth={isHov ? STROKE + 4 : STROKE}
                strokeLinecap="round"
                style={{ strokeDashoffset: dashOffset }}
                initial={{ strokeDasharray: `0 ${CIRC}`, opacity: 0 }}
                animate={isInView ? {
                  strokeDasharray: dashArray,
                  opacity: isFaded ? 0.3 : 1,
                  strokeWidth: isHov ? STROKE + 6 : STROKE,
                } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
                className="cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              />
            );
          })}
        </svg>

        {/* Centro */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-xs text-text-muted font-body">Total</span>
          <span className="text-lg font-bold font-mono text-text-base leading-tight">
            R$&nbsp;<AnimatedCounter target={total} />
          </span>
        </div>
      </div>

      {/* Legenda */}
      <div className="flex flex-col gap-2.5 justify-center">
        {slices.map((slice, i) => (
          <motion.div
            key={slice.label}
            className="flex items-center gap-2.5 cursor-default"
            animate={{ opacity: hovered !== null && hovered !== i ? 0.4 : 1 }}
            transition={{ duration: 0.15 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: slice.color }}
            />
            <span className="text-sm text-text-muted font-body">
              {slice.emoji} {slice.label}
            </span>
            <span className="font-mono text-sm text-text-base ml-auto pl-4">
              R${slice.value.toLocaleString("pt-BR")}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
