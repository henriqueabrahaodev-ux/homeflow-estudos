"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppMockupUI } from "./AppMockupUI";

const PARTICLES = [
  { x: -60,  y: -40,  size: 8,  color: "#6C63FF", opacity: 0.7, dur: 3.2 },
  { x: 80,   y: -60,  size: 5,  color: "#FF6B6B", opacity: 0.5, dur: 2.8 },
  { x: -80,  y: 60,   size: 6,  color: "#4ECDC4", opacity: 0.6, dur: 3.6 },
  { x: 90,   y: 80,   size: 4,  color: "#FFB347", opacity: 0.5, dur: 2.5 },
  { x: -40,  y: 100,  size: 10, color: "#6C63FF", opacity: 0.4, dur: 4.0 },
  { x: 110,  y: 20,   size: 5,  color: "#4ECDC4", opacity: 0.6, dur: 3.1 },
  { x: -100, y: -20,  size: 7,  color: "#FFB347", opacity: 0.5, dur: 2.7 },
  { x: 50,   y: -100, size: 4,  color: "#FF6B6B", opacity: 0.4, dur: 3.8 },
  { x: 120,  y: -50,  size: 6,  color: "#6C63FF", opacity: 0.3, dur: 3.4 },
  { x: -120, y: 40,   size: 5,  color: "#4ECDC4", opacity: 0.5, dur: 2.9 },
  { x: 70,   y: 120,  size: 8,  color: "#FFB347", opacity: 0.4, dur: 3.3 },
  { x: -30,  y: -110, size: 4,  color: "#FF6B6B", opacity: 0.6, dur: 2.6 },
];

export function FloatingAppMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -80]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMouseOffset({
        x: (e.clientX - cx) / cx * -8,
        y: (e.clientY - cy) / cy * -6,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative flex items-center justify-center"
      style={{ y: parallaxY, width: 320, height: 480 }}
    >
      {/* Partículas orbitando */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            left: "50%",
            top: "50%",
            x: p.x,
            y: p.y,
          }}
          animate={{
            x: [p.x, p.x + 14, p.x - 8, p.x],
            y: [p.y, p.y - 10, p.y + 14, p.y],
            opacity: [p.opacity, p.opacity * 0.5, p.opacity],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Sombra dinâmica */}
      <motion.div
        className="absolute bottom-4 left-1/2 rounded-full blur-2xl"
        style={{ translateX: "-50%", width: 200, height: 20, backgroundColor: "#6C63FF" }}
        animate={{ opacity: [0.25, 0.45, 0.25], scaleX: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mockup flutuante */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          rotateX: mouseOffset.y * 0.5,
          rotateY: mouseOffset.x * 0.5,
          transformStyle: "preserve-3d",
          transform: `rotateX(${mouseOffset.y * 0.5}deg) rotateY(${mouseOffset.x * 0.5}deg)`,
        }}
      >
        <AppMockupUI />
      </motion.div>
    </motion.div>
  );
}
