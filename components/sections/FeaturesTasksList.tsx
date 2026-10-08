"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const MEMBERS = [
  { name: "Ricardo", color: "#6C63FF" },
  { name: "Ana",     color: "#FF6B6B" },
  { name: "Bia",     color: "#4ECDC4" },
  { name: "Pedro",   color: "#FFB347" },
];

const TASKS = [
  { id: 1, label: "Pagar conta de luz",      member: 0, done: true,  due: "Hoje" },
  { id: 2, label: "Buscar Bia no ballet",    member: 1, done: false, due: "Hoje 16h" },
  { id: 3, label: "Fazer compras do mercado",member: 3, done: false, due: "Amanhã" },
  { id: 4, label: "Agendar revisão do carro",member: 0, done: false, due: "Sex" },
  { id: 5, label: "Pagar mensalidade escola",member: 1, done: true,  due: "Pago" },
  { id: 6, label: "Reservar restaurante",    member: 0, done: false, due: "Sab 19h" },
];

export function FeaturesTasksList() {
  const [tasks, setTasks] = useState(TASKS);

  const toggle = (id: number) =>
    setTasks((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t));

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-bold text-text-base text-lg">Tarefas da semana</h3>
        <span className="text-xs text-text-muted font-mono">
          {tasks.filter((t) => t.done).length}/{tasks.length} feitas
        </span>
      </div>

      {/* Progresso */}
      <div className="h-1 rounded-full bg-surface-2 mb-5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-green))" }}
          animate={{ width: `${(tasks.filter((t) => t.done).length / tasks.length) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <AnimatePresence mode="popLayout">
          {tasks.map((task) => {
            const member = MEMBERS[task.member];
            return (
              <motion.div
                key={task.id}
                layout
                className="flex items-center gap-3 rounded-xl border border-border p-3.5 cursor-pointer group"
                style={{ backgroundColor: "var(--color-surface)" }}
                onClick={() => toggle(task.id)}
                whileHover={{ y: -2, borderColor: member.color + "66" }}
                transition={{ duration: 0.15 }}
              >
                {/* Checkbox */}
                <motion.div
                  className="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0"
                  animate={{
                    backgroundColor: task.done ? member.color : "transparent",
                    borderColor:     task.done ? member.color : "var(--color-border)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatePresence>
                    {task.done && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Check size={11} className="text-white" strokeWidth={3} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Texto */}
                <span
                  className="flex-1 text-sm font-body transition-colors"
                  style={{ color: task.done ? "var(--color-text-muted)" : "var(--color-text)",
                           textDecoration: task.done ? "line-through" : "none" }}
                >
                  {task.label}
                </span>

                {/* Due + avatar */}
                <span className="text-[10px] font-mono text-text-muted">{task.due}</span>
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: member.color }}
                  title={member.name}
                >
                  {member.name[0]}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
