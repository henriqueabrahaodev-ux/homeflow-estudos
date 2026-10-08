"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { x: "8%",  y: "15%", size: 6,  color: "#6C63FF", opacity: 0.45, dur: 4.2, dx: 18, dy: -14 },
  { x: "85%", y: "10%", size: 4,  color: "#FF6B6B", opacity: 0.4,  dur: 3.5, dx: -12, dy: 20 },
  { x: "92%", y: "70%", size: 8,  color: "#4ECDC4", opacity: 0.5,  dur: 5.1, dx: -20, dy: -10 },
  { x: "5%",  y: "80%", size: 5,  color: "#FFB347", opacity: 0.4,  dur: 3.8, dx: 16, dy: -18 },
  { x: "45%", y: "5%",  size: 4,  color: "#6C63FF", opacity: 0.3,  dur: 4.5, dx: -10, dy: 22 },
  { x: "70%", y: "85%", size: 7,  color: "#FF6B6B", opacity: 0.35, dur: 3.2, dx: 14, dy: -16 },
  { x: "20%", y: "55%", size: 5,  color: "#4ECDC4", opacity: 0.3,  dur: 4.8, dx: 20, dy: 12 },
  { x: "78%", y: "40%", size: 4,  color: "#FFB347", opacity: 0.45, dur: 3.6, dx: -18, dy: -8 },
  { x: "35%", y: "90%", size: 6,  color: "#6C63FF", opacity: 0.35, dur: 4.0, dx: 10, dy: -20 },
  { x: "60%", y: "20%", size: 5,  color: "#4ECDC4", opacity: 0.4,  dur: 5.3, dx: -14, dy: 16 },
  { x: "12%", y: "35%", size: 4,  color: "#FF6B6B", opacity: 0.3,  dur: 3.9, dx: 22, dy: 10 },
  { x: "88%", y: "55%", size: 7,  color: "#FFB347", opacity: 0.4,  dur: 4.4, dx: -16, dy: -12 },
];

export function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
          }}
          animate={{
            x:       [0, p.dx, -p.dx * 0.5, 0],
            y:       [0, p.dy, p.dy * 0.3, 0],
            opacity: [p.opacity, p.opacity * 0.5, p.opacity * 0.8, p.opacity],
            scale:   [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration:   p.dur,
            repeat:     Infinity,
            ease:       "easeInOut",
            delay:      i * 0.22,
          }}
        />
      ))}

      {/* Glow de fundo sutil no centro */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] pointer-events-none"
        style={{ width: 600, height: 400, backgroundColor: "rgba(108,99,255,0.06)" }}
      />
    </div>
  );
}
