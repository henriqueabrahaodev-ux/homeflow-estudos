"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TestimonialData {
  senderName: string;
  senderColor: string;
  senderMessage: string;
  replyMessage: string;
  time: string;
}

interface WhatsAppTestimonialProps {
  data: TestimonialData;
  delay?: number;
}

function Tick() {
  return (
    <span className="text-[10px]" style={{ color: "#4ECDC4" }}>✓✓</span>
  );
}

export function WhatsAppTestimonial({ data, delay = 0 }: WhatsAppTestimonialProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const bubbleVariant = (extra = 0) => ({
    hidden:  { opacity: 0, y: 12, scale: 0.96 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: {
        delay: delay + extra,
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  });

  return (
    <div
      ref={ref}
      className="rounded-[20px] overflow-hidden border border-border"
      style={{ backgroundColor: "#0B141A", maxWidth: 340 }}
    >
      {/* Header WhatsApp */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: data.senderColor }}
        >
          {data.senderName[0]}
        </div>
        <div>
          <p className="text-sm font-medium text-white leading-none">{data.senderName}</p>
          <p className="text-xs text-white/40 mt-0.5">online</p>
        </div>
      </div>

      {/* Mensagens */}
      <div className="p-4 flex flex-col gap-2">
        {/* Bolha enviada (mensagem do usuário) */}
        <motion.div
          className="self-end max-w-[85%]"
          variants={bubbleVariant(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div
            className="rounded-[16px] rounded-tr-sm px-3.5 py-2 text-sm text-white leading-relaxed"
            style={{ backgroundColor: "#005C4B" }}
          >
            {data.senderMessage}
          </div>
          <div className="flex items-center justify-end gap-1 mt-0.5 pr-1">
            <span className="text-[10px] text-white/40">{data.time}</span>
            <Tick />
          </div>
        </motion.div>

        {/* Bolha recebida (HomeFlow) */}
        <motion.div
          className="self-start max-w-[85%]"
          variants={bubbleVariant(0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div
            className="rounded-[16px] rounded-tl-sm px-3.5 py-2 text-sm leading-relaxed"
            style={{ backgroundColor: "#1F2C34", color: "#E8EAF0" }}
          >
            <span className="block text-xs font-medium mb-0.5" style={{ color: "#4ECDC4" }}>
              HomeFlow 🏠
            </span>
            {data.replyMessage}
          </div>
          <span className="text-[10px] text-white/30 ml-1">
            {data.time.replace(/(\d+):(\d+)/, (_, h, m) => `${h}:${String(+m + 2).padStart(2, "0")}`)}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

// Dados prontos para uso
export const TESTIMONIALS: TestimonialData[] = [
  {
    senderName:    "Mariana S.",
    senderColor:   "#FF6B6B",
    senderMessage: "Minha família era um caos total. A gente ficava brigando sobre quem tinha pago o quê. Agora todo mundo vê a mesma conta no HomeFlow.",
    replyMessage:  "Conta de luz de outubro: R$ 189 — paga por Ricardo em 05/10. Próxima parcela do carro: dia 10. 👍",
    time:          "19:47",
  },
  {
    senderName:    "Carlos M.",
    senderColor:   "#6C63FF",
    senderMessage: "Eu perguntava no grupo todo dia 'Bia tem aula quinta ou sexta?' A minha esposa ficava louca comigo. HomeFlow resolveu.",
    replyMessage:  "Bia — Ballet: toda quinta às 16h e sábado às 10h. Quem busca: Ana (qui) e você (sáb). 📅",
    time:          "21:03",
  },
  {
    senderName:    "Fernanda L.",
    senderColor:   "#4ECDC4",
    senderMessage: "Economizamos R$ 400 no primeiro mês só de entender onde o dinheiro estava indo. A gente gastava demais no delivery sem perceber.",
    replyMessage:  "Gasto com delivery em setembro: R$ 680. Em outubro (com planejamento): R$ 280. Economia: R$ 400. 💪",
    time:          "08:22",
  },
];
