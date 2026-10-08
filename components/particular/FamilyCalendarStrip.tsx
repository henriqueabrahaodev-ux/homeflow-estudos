"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface CalendarEvent {
  memberName: string;
  memberColor: string;
  time: string;
  label: string;
}

interface CalendarDay {
  date: number;
  weekday: string;
  isToday?: boolean;
  events: CalendarEvent[];
}

const WEEK: CalendarDay[] = [
  { date: 6,  weekday: "Seg", events: [
    { memberName: "Ricardo", memberColor: "#6C63FF", time: "09h", label: "Reunião" },
    { memberName: "Ana",     memberColor: "#FF6B6B", time: "18h", label: "Academia" },
  ]},
  { date: 7,  weekday: "Ter", events: [
    { memberName: "Bia",     memberColor: "#4ECDC4", time: "16h", label: "Ballet" },
    { memberName: "Pedro",   memberColor: "#FFB347", time: "19h", label: "Mercado" },
  ]},
  { date: 8,  weekday: "Qua", isToday: true, events: [
    { memberName: "Ana",     memberColor: "#FF6B6B", time: "14h", label: "Médico" },
    { memberName: "Ricardo", memberColor: "#6C63FF", time: "20h", label: "Cinema" },
  ]},
  { date: 9,  weekday: "Qui", events: [
    { memberName: "Bia",     memberColor: "#4ECDC4", time: "16h", label: "Natação" },
  ]},
  { date: 10, weekday: "Sex", events: [
    { memberName: "Pedro",   memberColor: "#FFB347", time: "15h", label: "Dentista" },
    { memberName: "Ana",     memberColor: "#FF6B6B", time: "18h", label: "Academia" },
    { memberName: "Ricardo", memberColor: "#6C63FF", time: "21h", label: "Jantar" },
  ]},
  { date: 11, weekday: "Sáb", events: [
    { memberName: "Bia",     memberColor: "#4ECDC4", time: "10h", label: "Aniversário" },
  ]},
  { date: 12, weekday: "Dom", events: [
    { memberName: "Família", memberColor: "#6B7280", time: "12h", label: "Almoço" },
  ]},
];

export function FamilyCalendarStrip() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintsRef} className="overflow-hidden rounded-card">
      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        className="flex gap-3 px-1 pb-2 cursor-grab active:cursor-grabbing select-none"
        style={{ width: "max-content" }}
      >
        {WEEK.map((day, colIdx) => (
          <motion.div
            key={day.date}
            className="flex flex-col gap-2 w-[120px] flex-shrink-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: colIdx * 0.07, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Cabeçalho do dia */}
            <div
              className="flex flex-col items-center rounded-xl py-2 px-3 gap-0.5"
              style={{
                backgroundColor: day.isToday ? "rgba(108,99,255,0.12)" : "transparent",
                border: day.isToday ? "1px solid var(--color-primary)" : "1px solid var(--color-border)",
              }}
            >
              <span className="text-xs text-text-muted font-body">{day.weekday}</span>
              <span
                className="text-lg font-display font-bold"
                style={{ color: day.isToday ? "var(--color-primary)" : "var(--color-text)" }}
              >
                {day.date}
              </span>
            </div>

            {/* Eventos */}
            <div className="flex flex-col gap-1.5">
              {day.events.map((ev, evIdx) => (
                <motion.div
                  key={`${ev.memberName}-${evIdx}`}
                  className="flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-xs font-body text-white"
                  style={{ backgroundColor: ev.memberColor + "CC" }}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: colIdx * 0.07 + evIdx * 0.05 + 0.2 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <span className="font-mono text-[10px] opacity-80">{ev.time}</span>
                  <span className="truncate">{ev.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
