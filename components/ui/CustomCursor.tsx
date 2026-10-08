"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  // Ponto pequeno — segue imediatamente
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Círculo maior — lag suave
  const circleX = useSpring(dotX, { stiffness: 150, damping: 20 });
  const circleY = useSpring(dotY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    setMounted(true);
    if (!window.matchMedia("(hover: hover)").matches) return;

    const handleMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.closest("a") !== null;
      const isBtn  = target.closest("button") !== null;
      setIsHoveringLink(isLink && !isBtn);
      setIsHoveringButton(isBtn);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseover", handleOver);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [dotX, dotY, isVisible]);

  if (!mounted || !window.matchMedia("(hover: hover)").matches) return null;

  return (
    <>
      {/* Ponto pequeno — imediato */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-primary"
        style={{
          width: 6,
          height: 6,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Círculo maior — com lag */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border border-primary"
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width:           isHoveringButton ? 0 : isHoveringLink ? 40 : 28,
          height:          isHoveringButton ? 0 : isHoveringLink ? 40 : 28,
          backgroundColor: isHoveringLink ? "rgba(108,99,255,0.15)" : "transparent",
          borderColor:     isHoveringLink ? "var(--color-primary)" : "rgba(108,99,255,0.5)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Label "Clique" ao hover em botão */}
      {isHoveringButton && (
        <motion.div
          className="pointer-events-none fixed z-[9999] rounded-pill bg-primary px-3 py-1 text-xs font-body text-white"
          style={{
            x: circleX,
            y: circleY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          Clique
        </motion.div>
      )}
    </>
  );
}
