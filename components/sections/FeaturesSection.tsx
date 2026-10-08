"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, PiggyBank, CheckSquare, ShoppingCart } from "lucide-react";
import { AnimateOnView } from "@/components/animations/AnimateOnView";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { FamilyCalendarStrip } from "@/components/particular/FamilyCalendarStrip";
import { FinanceDonut } from "@/components/particular/FinanceDonut";
import { FeaturesTasksList } from "./FeaturesTasksList";
import { FeaturesShoppingList } from "./FeaturesShoppingList";

const TABS = [
  { id: "calendar", label: "Calendário",  icon: Calendar,     color: "#4ECDC4",
    cta: "Organizar a agenda da família" },
  { id: "finance",  label: "Finanças",    icon: PiggyBank,    color: "#FFB347",
    cta: "Quero controlar o dinheiro da casa" },
  { id: "tasks",    label: "Tarefas",     icon: CheckSquare,  color: "#6C63FF",
    cta: "Começar grátis" },
  { id: "shopping", label: "Compras",     icon: ShoppingCart, color: "#FF6B6B",
    cta: "Começar grátis" },
] as const;

const CONTENT: Record<string, React.ReactNode> = {
  calendar: <FamilyCalendarStrip />,
  finance:  <FinanceDonut />,
  tasks:    <FeaturesTasksList />,
  shopping: <FeaturesShoppingList />,
};

const DESCRIPTIONS: Record<string, string> = {
  calendar: "Todo mundo vê a semana inteira. Quem busca, quem leva, quem esquece — tudo ali.",
  finance:  "A conta do mercado, a parcela do carro, o streaming que ninguém usa. Tudo junto.",
  tasks:    "Cada tarefa tem um dono. Ninguém precisa perguntar no grupo quem vai fazer o quê.",
  shopping: "A lista que todo mundo edita ao mesmo tempo. Sem duplicar, sem esquecer.",
};

const slideVariants = {
  enter:  (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:   (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export function FeaturesSection() {
  const [active, setActive] = useState(0);
  const prevIdx = useRef(0);
  const direction = active - prevIdx.current;

  const handleTab = (i: number) => {
    prevIdx.current = active;
    setActive(i);
  };

  const tab = TABS[active];

  return (
    <>
      <SectionDivider variant="wave" fromColor="var(--color-bg)" toColor="var(--color-surface)" />

      <section className="py-section-mobile md:py-section" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-6">

          <AnimateOnView variant="fadeUp" className="text-center mb-4">
            <span className="inline-block rounded-pill border border-border bg-surface-2 px-4 py-1.5 text-sm text-text-muted">
              Tudo em um lugar
            </span>
          </AnimateOnView>

          <AnimateOnView variant="fadeUp" delay={0.1} className="text-center mb-14">
            <h2 className="font-display font-bold text-text-base tracking-[-0.03em] text-balance"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Quatro ferramentas.<br />
              <span style={{ color: "var(--color-primary)" }}>Uma casa em sincronia.</span>
            </h2>
          </AnimateOnView>

          {/* Tab bar */}
          <AnimateOnView variant="fadeUp" delay={0.15}>
            <div className="flex justify-center mb-10">
              <div className="relative flex gap-1 rounded-card bg-surface-2 p-1.5 border border-border">
                {TABS.map((t, i) => {
                  const Icon = t.icon;
                  const isActive = i === active;
                  return (
                    <button
                      key={t.id}
                      onClick={() => handleTab(i)}
                      className="relative z-10 flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-body font-medium transition-colors"
                      style={{ color: isActive ? "white" : "var(--color-text-muted)" }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="tab-pill"
                          className="absolute inset-0 rounded-xl"
                          style={{ backgroundColor: t.color + "22", border: `1px solid ${t.color}55` }}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <Icon size={15} style={{ color: isActive ? t.color : "currentColor" }}
                        className="relative z-10 flex-shrink-0" />
                      <span className="relative z-10 hidden sm:inline">{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </AnimateOnView>

          {/* Conteúdo da tab */}
          <div className="relative overflow-hidden min-h-[340px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="w-full"
              >
                <div className="flex flex-col items-center gap-6 px-2">
                  <p className="text-text-muted text-center max-w-md text-base">
                    {DESCRIPTIONS[tab.id]}
                  </p>
                  <div className="w-full rounded-card border border-border p-6 md:p-8"
                    style={{ backgroundColor: "var(--color-bg)" }}>
                    {CONTENT[tab.id]}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA contextual */}
          <AnimateOnView variant="fadeUp" delay={0.1} className="flex justify-center mt-10">
            <motion.button
              className="inline-flex items-center gap-2 rounded-pill border border-primary/40 px-8 py-3.5 text-sm font-body font-medium text-primary"
              style={{ backgroundColor: tab.color + "12" }}
              whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${tab.color}33` }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {tab.cta} →
            </motion.button>
          </AnimateOnView>

        </div>
      </section>

      <SectionDivider variant="blob" fromColor="var(--color-surface)" toColor="var(--color-bg)" flip />
    </>
  );
}
