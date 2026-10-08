"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ChaosToOrderCardProps {
  className?: string;
}

export function ChaosToOrderCard({ className = "" }: ChaosToOrderCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative cursor-pointer ${className}`}
      style={{ width: 280, height: 360, perspective: 1000 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Frente — Caos */}
        <div
          className="absolute inset-0 rounded-card border border-border p-5 flex flex-col gap-3 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            backgroundColor: "var(--color-surface)",
            boxShadow: flipped ? "none" : "0 0 0 1px var(--color-border)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-text-muted font-body">grupo da familia 🤦</span>
          </div>

          {/* Post-its caóticos */}
          {[
            { text: "Pagar conta luz!!", color: "#FFB347", rotate: -3, top: "60px", left: "20px" },
            { text: "Bia — ballet quinta ou sexta??", color: "#FF6B6B", rotate: 5, top: "110px", left: "50px" },
            { text: "Parcela carro = dia 10", color: "#4ECDC4", rotate: -7, top: "170px", left: "15px" },
            { text: "mercado R$ 380 quem foi?", color: "#6C63FF", rotate: 4, top: "220px", left: "60px" },
          ].map((note) => (
            <div
              key={note.text}
              className="absolute px-2.5 py-2 text-xs font-body text-background rounded shadow-md"
              style={{
                backgroundColor: note.color,
                transform: `rotate(${note.rotate}deg)`,
                top: note.top,
                left: note.left,
                maxWidth: 180,
                zIndex: 1,
              }}
            >
              {note.text}
            </div>
          ))}

          <div className="mt-auto pt-32">
            <p className="text-xs text-text-muted text-center">Passe o mouse para resolver</p>
          </div>
        </div>

        {/* Verso — Ordem */}
        <div
          className="absolute inset-0 rounded-card border p-5 flex flex-col gap-3"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-primary)",
            boxShadow: "0 0 24px rgba(108,99,255,0.2)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-green" />
            <span className="text-xs text-green font-body font-medium">HomeFlow</span>
          </div>

          {[
            { label: "Conta de luz",      value: "R$ 189",   color: "#6C63FF", done: true },
            { label: "Ballet da Bia",      value: "Quinta 16h", color: "#4ECDC4", done: false },
            { label: "Parcela do carro",   value: "Dia 10",   color: "#FFB347", done: false },
            { label: "Mercado — Ana",      value: "R$ 380",   color: "#FF6B6B", done: true },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 py-1.5 border-b border-border last:border-0">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs font-body text-text-base flex-1">{item.label}</span>
              <span className="font-mono text-xs" style={{ color: item.color }}>{item.value}</span>
              {item.done && <span className="text-green text-xs">✓</span>}
            </div>
          ))}

          <div className="mt-auto flex items-center gap-1.5">
            <span className="text-xs text-text-muted">Tudo em</span>
            <span className="text-xs font-bold text-primary">um lugar</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
