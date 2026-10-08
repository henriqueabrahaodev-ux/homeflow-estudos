// Sub-componente visual do mockup do app — interface interna
export function AppMockupUI() {
  return (
    <div
      className="rounded-[20px] overflow-hidden border border-white/10 select-none"
      style={{ width: 280, backgroundColor: "#13161E", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
    >
      {/* Barra de status */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <span className="text-[10px] font-mono text-white/40">09:41</span>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[3,4,4,3].map((h, i) => (
              <div key={i} className="w-1 rounded-sm bg-white/40" style={{ height: h * 2 }} />
            ))}
          </div>
          <div className="w-4 h-2 rounded-sm border border-white/30 relative">
            <div className="absolute inset-0.5 left-0.5 right-1 bg-green rounded-sm" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 pb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-white/40 font-body">Boa tarde,</p>
          <p className="text-sm font-display font-bold text-white">Família Silva 🏠</p>
        </div>
        <div className="flex -space-x-1">
          {["#6C63FF","#FF6B6B","#4ECDC4","#FFB347"].map((c, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-[8px] font-bold text-white"
              style={{ backgroundColor: c, borderColor: "#13161E" }}
            >
              {["R","A","B","P"][i]}
            </div>
          ))}
        </div>
      </div>

      {/* Card de saldo */}
      <div className="mx-3 mb-3 rounded-xl p-3" style={{ background: "linear-gradient(135deg, #6C63FF22, #4ECDC422)", border: "1px solid #6C63FF33" }}>
        <p className="text-[9px] text-white/40 font-body mb-0.5">Saldo do mês</p>
        <p className="text-xl font-mono font-bold text-white">R$ 4.280</p>
        <div className="flex gap-2 mt-2">
          <span className="text-[9px] text-green">↑ Entradas R$ 8.500</span>
          <span className="text-[9px] text-accent">↓ Saídas R$ 4.220</span>
        </div>
      </div>

      {/* Lista de tarefas */}
      <div className="px-3 pb-2">
        <p className="text-[9px] text-white/40 font-body mb-1.5 uppercase tracking-wider">Hoje</p>
        {[
          { label: "Pagar conta de luz",  color: "#6C63FF", done: true },
          { label: "Buscar Bia no ballet", color: "#4ECDC4", done: false },
          { label: "Ir ao mercado",       color: "#FFB347", done: false },
        ].map((task) => (
          <div key={task.label} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
            <div
              className="w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ backgroundColor: task.done ? task.color : "transparent", border: `1.5px solid ${task.color}` }}
            >
              {task.done && <span className="text-[8px] text-white">✓</span>}
            </div>
            <span
              className="text-[10px] font-body"
              style={{ color: task.done ? "#6B7280" : "#E8EAF0", textDecoration: task.done ? "line-through" : "none" }}
            >
              {task.label}
            </span>
          </div>
        ))}
      </div>

      {/* Nav bar */}
      <div className="flex items-center justify-around px-2 py-2 border-t border-white/5">
        {[["🏠","Início"], ["📅","Agenda"], ["💰","Finanças"], ["✅","Tarefas"]].map(([icon, name]) => (
          <div key={name} className="flex flex-col items-center gap-0.5">
            <span className="text-sm">{icon}</span>
            <span className="text-[8px] font-body" style={{ color: name === "Início" ? "#6C63FF" : "#6B7280" }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
