"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateOnView } from "@/components/animations/AnimateOnView";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PricingCard } from "./PricingCard";

const PLANS = [
  {
    name:        "Gratuito",
    description: "Para testar com a família antes de se comprometer.",
    monthly:     null,
    annual:      null,
    cta:         "Começar grátis",
    highlighted: false,
    features: [
      { text: "Até 3 membros",              included: true  },
      { text: "Calendário básico",          included: true  },
      { text: "Lista de compras",           included: true  },
      { text: "Finanças compartilhadas",    included: false },
      { text: "Relatórios mensais",         included: false },
      { text: "Lembretes automáticos",      included: false },
      { text: "Suporte prioritário",        included: false },
    ],
  },
  {
    name:        "Família",
    description: "Para a casa que quer parar de perguntar no grupo do WhatsApp.",
    monthly:     19.90,
    annual:      15.90,
    cta:         "Testar 14 dias grátis",
    highlighted: true,
    badge:       "Mais popular",
    features: [
      { text: "Membros ilimitados",         included: true  },
      { text: "Calendário completo",        included: true  },
      { text: "Lista de compras",           included: true  },
      { text: "Finanças compartilhadas",    included: true  },
      { text: "Relatórios mensais",         included: true  },
      { text: "Lembretes automáticos",      included: false },
      { text: "Suporte prioritário",        included: false },
    ],
  },
  {
    name:        "Família+",
    description: "Para quem quer a casa no automático, do mercado às contas.",
    monthly:     34.90,
    annual:      27.90,
    cta:         "Testar 14 dias grátis",
    highlighted: false,
    features: [
      { text: "Tudo do plano Família",      included: true  },
      { text: "Lembretes automáticos",      included: true  },
      { text: "Suporte prioritário",        included: true  },
      { text: "Integração com bancos",      included: true  },
      { text: "Exportar relatórios PDF",    included: true  },
      { text: "App offline",               included: true  },
      { text: "Múltiplas casas / repúblicas", included: true },
    ],
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <SectionDivider variant="wave" fromColor="var(--color-bg)" toColor="var(--color-surface)" />

      <section className="py-section-mobile md:py-section" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-6xl mx-auto px-6">

          <AnimateOnView variant="fadeUp" className="text-center mb-4">
            <span className="inline-block rounded-pill border border-border bg-surface-2 px-4 py-1.5 text-sm text-text-muted">
              Planos e preços
            </span>
          </AnimateOnView>

          <AnimateOnView variant="fadeUp" delay={0.1} className="text-center mb-10">
            <h2 className="font-display font-bold text-text-base tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Quanto custa ter a casa organizada?<br />
              <span style={{ color: "var(--color-warm)" }}>Menos que um jantar fora.</span>
            </h2>
          </AnimateOnView>

          {/* Toggle mensal/anual */}
          <AnimateOnView variant="scaleIn" delay={0.15} className="flex justify-center mb-14">
            <div className="inline-flex items-center gap-4 rounded-pill bg-surface-2 border border-border p-1.5 px-3">
              <button
                onClick={() => setIsAnnual(false)}
                className="px-4 py-2 text-sm font-body rounded-pill transition-all"
                style={{
                  backgroundColor: !isAnnual ? "var(--color-primary)" : "transparent",
                  color:            !isAnnual ? "white" : "var(--color-text-muted)",
                }}
              >
                Mensal
              </button>

              <motion.div
                className="relative flex items-center cursor-pointer"
                onClick={() => setIsAnnual((v) => !v)}
              >
                <div
                  className="w-11 h-6 rounded-full transition-colors"
                  style={{ backgroundColor: isAnnual ? "var(--color-primary)" : "var(--color-border)" }}
                >
                  <motion.div
                    className="w-5 h-5 bg-white rounded-full mt-0.5"
                    animate={{ x: isAnnual ? 22 : 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  />
                </div>
              </motion.div>

              <button
                onClick={() => setIsAnnual(true)}
                className="px-4 py-2 text-sm font-body rounded-pill transition-all flex items-center gap-2"
                style={{
                  backgroundColor: isAnnual ? "var(--color-primary)" : "transparent",
                  color:            isAnnual ? "white" : "var(--color-text-muted)",
                }}
              >
                Anual
                <span className="text-[10px] rounded-pill px-2 py-0.5 font-bold"
                  style={{ backgroundColor: "var(--color-green)", color: "#0D0F14" }}>
                  -20%
                </span>
              </button>
            </div>
          </AnimateOnView>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan, i) => (
              <PricingCard
                key={plan.name}
                {...plan}
                isAnnual={isAnnual}
                delay={i * 0.1}
              />
            ))}
          </div>

          <AnimateOnView variant="fadeUp" delay={0.3} className="text-center mt-10">
            <p className="text-sm text-text-muted">
              Sem taxa de cancelamento. Sem cartão de crédito para começar grátis.
            </p>
          </AnimateOnView>

        </div>
      </section>

      <SectionDivider variant="wave-steep" fromColor="var(--color-surface)" toColor="var(--color-bg)" flip />
    </>
  );
}
