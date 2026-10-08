"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { fadeUp, duration, ease } from "@/lib/motion";
import { HeroHeadline } from "./HeroHeadline";
import { HeroParticles } from "./HeroParticles";
import { FloatingAppMockup } from "@/components/particular/FloatingAppMockup";
import { FamilyAvatarCluster } from "@/components/particular/FamilyAvatarCluster";

const FAMILY_MEMBERS = [
  { name: "Ricardo", color: "#6C63FF", nextEvent: "Reunião 15h" },
  { name: "Ana",     color: "#FF6B6B", nextEvent: "Academia 18h" },
  { name: "Bia",     color: "#4ECDC4", nextEvent: "Ballet 16h" },
  { name: "Pedro",   color: "#FFB347", nextEvent: "Futebol 17h" },
];

export function HeroSection() {
  const handleCTAClick = useCallback(() => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.55 },
      colors: ["#6C63FF", "#FF6B6B", "#4ECDC4", "#FFB347", "#E8EAF0"],
      disableForReducedMotion: true,
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <HeroParticles />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-section-mobile md:py-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Coluna esquerda — copy */}
        <div className="flex flex-col gap-7">
          {/* Badge */}
          <motion.div
            className="inline-flex self-start items-center gap-2 rounded-pill border border-border bg-surface px-4 py-2 text-sm text-text-muted"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.normal, ease: ease.smooth }}
          >
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            Novo: lista de compras colaborativa
          </motion.div>

          {/* Headline letra por letra */}
          <HeroHeadline />

          {/* Subtítulo */}
          <motion.p
            className="text-lg text-text-muted font-body leading-relaxed max-w-md"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            Finanças, calendário e tarefas —<br />
            <span className="text-text-base font-medium">todo mundo vê a mesma coisa.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.7 }}
          >
            <motion.button
              onClick={handleCTAClick}
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary text-white font-body font-semibold px-8 py-4 text-base"
              whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(108,99,255,0.5)" }}
              whileTap={{ scale: 0.97 }}
              transition={ease.spring}
            >
              Começar grátis
              <span className="text-lg">→</span>
            </motion.button>

            <motion.button
              className="inline-flex items-center justify-center gap-2 rounded-pill border border-border text-text-muted font-body px-8 py-4 text-base hover:border-primary hover:text-text-base transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={ease.spring}
            >
              Ver como funciona
            </motion.button>
          </motion.div>

          {/* Avatares + prova social */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.0 }}
          >
            <FamilyAvatarCluster
              members={FAMILY_MEMBERS}
              label="Mais de 2.400 famílias organizadas"
            />
          </motion.div>
        </div>

        {/* Coluna direita — mockup */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: ease.smooth }}
        >
          <FloatingAppMockup />
        </motion.div>
      </div>

      {/* Linha gradiente na base */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)" }}
      />
    </section>
  );
}
