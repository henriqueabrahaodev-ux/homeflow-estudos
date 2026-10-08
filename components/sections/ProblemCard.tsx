"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  icon: LucideIcon;
  iconColor: string;
  question: string;
  sender: string;
  time: string;
  reactions: string[];
  delay?: number;
}

export function ProblemCard({
  icon: Icon,
  iconColor,
  question,
  sender,
  time,
  reactions,
  delay = 0,
}: ProblemCardProps) {
  return (
    <motion.div
      className="relative rounded-card border border-border p-5 flex flex-col gap-4 overflow-hidden"
      style={{ backgroundColor: "var(--color-surface)" }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px ${iconColor}33` }}
    >
      {/* Glow de cor no canto */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: iconColor + "18", transform: "translate(30%, -30%)" }}
      />

      {/* Header estilo grupo de WhatsApp */}
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: iconColor }}
        >
          {sender[0]}
        </div>
        <span className="text-xs font-medium text-text-muted">{sender}</span>
        <span className="text-xs text-text-muted ml-auto opacity-60">{time}</span>
      </div>

      {/* Ícone com tremor */}
      <div className="flex items-start gap-3">
        <motion.div
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: iconColor + "22" }}
          animate={{
            rotate: [0, -3, 3, -2, 2, 0],
            x:      [0, -1, 1, -1, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 3.5,
            ease: "easeInOut",
          }}
        >
          <Icon size={20} style={{ color: iconColor }} strokeWidth={2} />
        </motion.div>

        {/* Pergunta — em primeira pessoa */}
        <p className="text-base font-body text-text-base leading-snug pt-1.5">
          {question}
        </p>
      </div>

      {/* Reações do grupo */}
      <div className="flex items-center gap-2 pt-1 border-t border-border">
        {reactions.map((r, i) => (
          <span
            key={i}
            className="text-xs rounded-pill bg-surface-2 border border-border px-2 py-0.5"
          >
            {r}
          </span>
        ))}
        <span className="text-[10px] text-text-muted ml-auto opacity-60">
          Grupo família 😅
        </span>
      </div>
    </motion.div>
  );
}
