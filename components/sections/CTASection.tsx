"use client";

import { useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import confetti from "canvas-confetti";
import { letterContainer, letterVariant } from "@/lib/motion";

const HEADLINE_LINE1 = "Sua casa merece";
const HEADLINE_LINE2 = "mais do que um grupo";
const HEADLINE_LINE3 = "no WhatsApp.";

const BG_PARTICLES = [
  { x: "10%", y: "20%", size: 180, color: "#6C63FF", opacity: 0.06 },
  { x: "80%", y: "60%", size: 240, color: "#FF6B6B", opacity: 0.05 },
  { x: "50%", y: "80%", size: 160, color: "#4ECDC4", opacity: 0.07 },
  { x: "25%", y: "70%", size: 120, color: "#FFB347", opacity: 0.06 },
  { x: "90%", y: "10%", size: 100, color: "#6C63FF", opacity: 0.08 },
];

function AnimatedLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.span
      className="block"
      variants={letterContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delayChildren: delay }}
    >
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap mr-[0.22em]">
          {word.split("").map((char, ci) => (
            <motion.span key={ci} variants={letterVariant} className="inline-block">
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const handleConfetti = useCallback(() => {
    const fire = (angle: number, origin: { x: number; y: number }) =>
      confetti({
        particleCount: 80,
        spread: 55,
        angle,
        origin,
        colors: ["#6C63FF", "#FF6B6B", "#4ECDC4", "#FFB347", "#E8EAF0"],
        disableForReducedMotion: true,
      });
    fire(60,  { x: 0.3, y: 0.6 });
    fire(120, { x: 0.7, y: 0.6 });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-section-mobile md:py-section flex items-center"
      style={{ backgroundColor: "var(--color-bg)", minHeight: "70vh" }}
    >
      {/* Blobs de parallax */}
      {BG_PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[80px] pointer-events-none"
          style={{
            left:            p.x,
            top:             p.y,
            width:           p.size,
            height:          p.size,
            backgroundColor: p.color,
            opacity:         p.opacity,
            y:               i % 2 === 0 ? y1 : y2,
            translateX:      "-50%",
            translateY:      "-50%",
          }}
        />
      ))}

      {/* Linha de grade sutil */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-10">

        {/* Headline grande 3 linhas */}
        <h2
          className="font-display font-extrabold tracking-[-0.03em] text-text-base leading-tight"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          aria-label={`${HEADLINE_LINE1} ${HEADLINE_LINE2} ${HEADLINE_LINE3}`}
        >
          <AnimatedLine text={HEADLINE_LINE1} delay={0} />
          <AnimatedLine text={HEADLINE_LINE2} delay={0.3} />
          <span className="block" style={{ color: "var(--color-primary)" }}>
            <AnimatedLine text={HEADLINE_LINE3} delay={0.65} />
          </span>
        </h2>

        <motion.p
          className="text-xl text-text-muted max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Comece grátis hoje. Sua família agradece amanhã.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <motion.button
            onClick={handleConfetti}
            className="rounded-pill bg-primary text-white font-body font-semibold px-10 py-5 text-lg"
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(108,99,255,0.55)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            Começar grátis — é agora 🏠
          </motion.button>

          <p className="text-sm text-text-muted">
            Sem cartão. Sem burocracia.
          </p>
        </motion.div>

        {/* Decoração: linha de brilho horizontal */}
        <motion.div
          className="w-full max-w-xs h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)" }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />
      </div>
    </section>
  );
}
