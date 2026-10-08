"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";

const MEMBERS = [
  { name: "Ricardo", color: "#6C63FF" },
  { name: "Ana",     color: "#FF6B6B" },
  { name: "Bia",     color: "#4ECDC4" },
  { name: "Pedro",   color: "#FFB347" },
];

const INITIAL = [
  { id: 1, label: "Arroz 5kg",        qty: "1",  checked: true,  member: 1, category: "Básicos" },
  { id: 2, label: "Feijão carioca",   qty: "2",  checked: true,  member: 1, category: "Básicos" },
  { id: 3, label: "Leite integral",   qty: "6",  checked: false, member: 0, category: "Laticínios" },
  { id: 4, label: "Iogurte natural",  qty: "4",  checked: false, member: 2, category: "Laticínios" },
  { id: 5, label: "Frango",           qty: "2kg",checked: false, member: 3, category: "Carnes" },
  { id: 6, label: "Detergente",       qty: "3",  checked: false, member: 0, category: "Limpeza" },
  { id: 7, label: "Papel higiênico",  qty: "1",  checked: true,  member: 1, category: "Limpeza" },
];

export function FeaturesShoppingList() {
  const [items, setItems] = useState(INITIAL);

  const toggle = (id: number) =>
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, checked: !i.checked } : i));

  const pending  = items.filter((i) => !i.checked);
  const done     = items.filter((i) => i.checked);
  const total    = items.reduce((s, i) => s + (i.checked ? 0 : 1), 0);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-bold text-text-base text-lg">Lista do mercado</h3>
          <p className="text-xs text-text-muted mt-0.5">
            {total} item{total !== 1 ? "s" : ""} faltando · editada por Ana há 2min
          </p>
        </div>
        <div className="flex -space-x-1">
          {MEMBERS.map((m) => (
            <div key={m.name} className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-[9px] font-bold text-white"
              style={{ backgroundColor: m.color, borderColor: "var(--color-surface-2)" }} title={m.name}>
              {m.name[0]}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5 max-h-72 overflow-y-auto pr-1" style={{ scrollbarWidth: "thin" }}>
        {/* Pendentes */}
        {pending.map((item) => {
          const member = MEMBERS[item.member];
          return (
            <motion.div
              key={item.id}
              layout
              className="flex items-center gap-3 rounded-xl border border-border px-3.5 py-2.5 cursor-pointer"
              style={{ backgroundColor: "var(--color-surface)" }}
              onClick={() => toggle(item.id)}
              whileHover={{ y: -1, borderColor: member.color + "55" }}
            >
              <div className="w-4.5 h-4.5 rounded-md border-2 flex-shrink-0"
                style={{ borderColor: member.color, width: 18, height: 18 }} />
              <span className="flex-1 text-sm font-body text-text-base">{item.label}</span>
              <span className="text-xs font-mono text-text-muted">{item.qty}</span>
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
                style={{ backgroundColor: member.color }}>{member.name[0]}</div>
            </motion.div>
          );
        })}

        {/* Já no carrinho */}
        {done.length > 0 && (
          <>
            <p className="text-[10px] text-text-muted uppercase tracking-wider px-1 mt-2 mb-0.5">
              No carrinho ({done.length})
            </p>
            {done.map((item) => (
              <motion.div
                key={item.id}
                layout
                className="flex items-center gap-3 rounded-xl border border-border/50 px-3.5 py-2 cursor-pointer opacity-50"
                style={{ backgroundColor: "var(--color-surface)" }}
                onClick={() => toggle(item.id)}
              >
                <div className="w-4.5 h-4.5 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: MEMBERS[item.member].color, width: 18, height: 18 }}>
                  <Check size={10} className="text-white" strokeWidth={3} />
                </div>
                <span className="flex-1 text-sm font-body text-text-muted line-through">{item.label}</span>
                <span className="text-xs font-mono text-text-muted">{item.qty}</span>
              </motion.div>
            ))}
          </>
        )}
      </div>

      {/* Adicionar item */}
      <motion.button
        className="mt-4 w-full flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-2.5 text-sm text-text-muted hover:border-primary hover:text-primary transition-colors"
        whileTap={{ scale: 0.98 }}
      >
        <Plus size={14} /> Adicionar item à lista
      </motion.button>
    </div>
  );
}
