"use client";

import { motion } from "framer-motion";
import { Zap, Calendar, ShoppingCart, CreditCard } from "lucide-react";
import { staggerContainer } from "@/lib/motion";
import { ProblemCard } from "./ProblemCard";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { AnimateOnView } from "@/components/animations/AnimateOnView";

const CARDS = [
  {
    icon:      Zap,
    iconColor: "#FFB347",
    question:  "Quem pagou a conta de luz esse mês? Achei que era você…",
    sender:    "Ricardo",
    time:      "20:14",
    reactions: ["😅 3", "❓ 2"],
  },
  {
    icon:      Calendar,
    iconColor: "#4ECDC4",
    question:  "Bia tem ballet ou natação quinta? Tô no trânsito e preciso saber agora.",
    sender:    "Ana",
    time:      "17:32",
    reactions: ["🤦 4", "📅 1"],
  },
  {
    icon:      ShoppingCart,
    iconColor: "#6C63FF",
    question:  "Quanto gastamos no mercado em agosto? Parece que gastamos muito mais que julho.",
    sender:    "Pedro",
    time:      "22:05",
    reactions: ["😬 5", "💸 3"],
  },
  {
    icon:      CreditCard,
    iconColor: "#FF6B6B",
    question:  "A parcela do carro vence quando mesmo? Acho que é dia 10, ou 15?",
    sender:    "Ana",
    time:      "09:41",
    reactions: ["⚠️ 2", "🙈 4"],
  },
];

export function ProblemSection() {
  return (
    <>
      <SectionDivider
        variant="wave"
        fromColor="var(--color-bg)"
        toColor="var(--color-surface)"
        animate
      />

      <section
        className="py-section-mobile md:py-section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Eyebrow */}
          <AnimateOnView variant="fadeUp" className="text-center mb-4">
            <span className="inline-block rounded-pill border border-border bg-surface-2 px-4 py-1.5 text-sm text-text-muted">
              Parece familiar?
            </span>
          </AnimateOnView>

          {/* Título */}
          <AnimateOnView variant="fadeUp" delay={0.1} className="text-center mb-4">
            <h2 className="font-display font-bold text-text-base tracking-[-0.03em] text-balance"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Toda família tem um grupo<br />
              <span style={{ color: "var(--color-accent)" }}>cheio de perguntas sem resposta.</span>
            </h2>
          </AnimateOnView>

          <AnimateOnView variant="fadeUp" delay={0.2} className="text-center mb-16">
            <p className="text-lg text-text-muted max-w-xl mx-auto">
              Não porque ninguém liga — mas porque a informação nunca está no mesmo lugar.
            </p>
          </AnimateOnView>

          {/* Grid de cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {CARDS.map((card, i) => (
              <ProblemCard key={i} {...card} delay={i * 0.1} />
            ))}
          </motion.div>

          {/* Resolução */}
          <AnimateOnView variant="scaleIn" delay={0.2} className="mt-16 text-center">
            <div
              className="inline-flex flex-col items-center gap-3 rounded-card border border-primary/30 px-8 py-6"
              style={{ backgroundColor: "rgba(108,99,255,0.06)" }}
            >
              <span className="text-3xl">🏠</span>
              <p className="font-display font-bold text-text-base text-xl tracking-tight">
                A HomeFlow coloca tudo isso em um único painel.
              </p>
              <p className="text-text-muted text-sm max-w-sm">
                Sua família toda na mesma página — sem grupo de WhatsApp, sem post-it na geladeira.
              </p>
            </div>
          </AnimateOnView>
        </div>
      </section>

      <SectionDivider
        variant="wave-steep"
        fromColor="var(--color-surface)"
        toColor="var(--color-bg)"
        flip
      />
    </>
  );
}
