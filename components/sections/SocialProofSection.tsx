"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { AnimatedCounter } from "@/components/particular/AnimatedCounter";
import { WhatsAppTestimonial, TESTIMONIALS } from "@/components/particular/WhatsAppTestimonial";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { AnimateOnView } from "@/components/animations/AnimateOnView";

const STATS = [
  {
    prefix:  "",
    target:  2400,
    suffix:  "+",
    label:   "famílias organizadas",
    detail:  "e crescendo todo dia",
    color:   "var(--color-primary)",
  },
  {
    prefix:  "R$ ",
    target:  12000,
    suffix:  "",
    label:   "economizados por mês",
    detail:  "em média por família",
    color:   "var(--color-warm)",
  },
  {
    prefix:  "",
    target:  4.8,
    suffix:  "★",
    decimals: 1,
    label:   "de avaliação",
    detail:  "nas lojas de apps",
    color:   "var(--color-green)",
  },
];

export function SocialProofSection() {
  return (
    <>
      <SectionDivider variant="wave" fromColor="var(--color-bg)" toColor="var(--color-surface)" />

      <section className="py-section-mobile md:py-section" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Eyebrow */}
          <AnimateOnView variant="fadeUp" className="text-center mb-4">
            <span className="inline-block rounded-pill border border-border bg-surface-2 px-4 py-1.5 text-sm text-text-muted">
              Quem já usa
            </span>
          </AnimateOnView>

          <AnimateOnView variant="fadeUp" delay={0.1} className="text-center mb-16">
            <h2
              className="font-display font-bold text-text-base tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              A casa ficou mais tranquila.<br />
              <span style={{ color: "var(--color-accent)" }}>Para mais de 2.400 famílias.</span>
            </h2>
          </AnimateOnView>

          {/* Counters */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center gap-2 rounded-card border border-border p-8"
                style={{ backgroundColor: "var(--color-bg)" }}
                whileHover={{ y: -4, borderColor: stat.color + "55", boxShadow: `0 12px 32px rgba(0,0,0,0.25)` }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="text-5xl font-mono font-bold tracking-tight"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </div>
                <p className="font-display font-semibold text-text-base text-lg">{stat.label}</p>
                <p className="text-sm text-text-muted">{stat.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Depoimentos WhatsApp */}
          <AnimateOnView variant="fadeUp" delay={0.05} className="text-center mb-10">
            <p className="text-text-muted text-lg">
              Não precisamos convencer — eles já contaram pra gente.
            </p>
          </AnimateOnView>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="w-full max-w-sm">
                <WhatsAppTestimonial data={t} delay={i * 0.15} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <SectionDivider variant="diagonal" fromColor="var(--color-surface)" toColor="var(--color-bg)" flip />
    </>
  );
}
