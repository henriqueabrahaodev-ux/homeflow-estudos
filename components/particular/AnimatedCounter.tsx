"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.5,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1], // easeOut expo
      onUpdate: (v) => setDisplayed(v.toFixed(decimals)),
    });

    return () => controls.stop();
  }, [isInView, target, duration, decimals]);

  return (
    <span
      ref={ref}
      className={cn("font-mono tabular-nums", className)}
    >
      {prefix}
      {displayed}
      {suffix}
    </span>
  );
}
