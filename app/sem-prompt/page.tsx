import type { Metadata } from "next";
import { features, testimonials, plans } from "./_data";

export const metadata: Metadata = {
  title: "HomeApp — A Solução para sua Família",
  description: "A plataforma robusta e integrada para organizar sua família.",
};

const s = {
  page: { minHeight: "100vh", background: "#fff", color: "#333", fontFamily: "system-ui,-apple-system,sans-serif", cursor: "auto" } as React.CSSProperties,
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 40px", borderBottom: "1px solid #eee", background: "#fff" } as React.CSSProperties,
  navLinks: { display: "flex", gap: "24px", alignItems: "center" } as React.CSSProperties,
  hero: { textAlign: "center" as const, padding: "80px 40px", background: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)" },
  heroPlaceholder: { margin: "48px auto 0", width: "640px", maxWidth: "100%", height: "320px", background: "rgba(255,255,255,0.12)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", border: "2px dashed rgba(255,255,255,0.25)", fontSize: "1rem" } as React.CSSProperties,
  section: (bg: string) => ({ padding: "80px 40px", background: bg }) as React.CSSProperties,
  grid: (cols: string) => ({ display: "grid", gridTemplateColumns: cols, gap: "24px", maxWidth: "1000px", margin: "0 auto" }) as React.CSSProperties,
  card: (border?: string) => ({ background: "#fff", padding: "32px 24px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", border: border ?? "1px solid #eee" }) as React.CSSProperties,
  btn: (bg: string, color: string, border?: string) => ({ background: bg, color, border: border ?? "none", padding: "10px 28px", borderRadius: "4px", fontWeight: 600, cursor: "pointer", fontSize: "1rem" }) as React.CSSProperties,
};

export default function SemPromptPage() {
  return (
    <div style={s.page}>
      {/* Navbar */}
      <nav style={s.nav}>
        <span style={{ fontWeight: 700, fontSize: "1.25rem", color: "#007bff" }}>HomeApp</span>
        <div style={s.navLinks}>
          {["Funcionalidades", "Preços", "Contato"].map((l) => (
            <a key={l} href="#" style={{ color: "#555", textDecoration: "none" }}>{l}</a>
          ))}
          <button style={s.btn("#007bff", "#fff")}>Entrar</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={s.hero}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#fff", marginBottom: "16px", lineHeight: 1.2 }}>
          A Solução Completa para Organizar sua Família
        </h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "580px", margin: "0 auto 32px", lineHeight: 1.6 }}>
          Nossa plataforma robusta e integrada oferece um ecossistema completo de ferramentas inovadoras para transformar a gestão familiar.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button style={s.btn("#fff", "#667eea")}>Começar agora</button>
          <button style={s.btn("transparent", "#fff", "2px solid #fff")}>Saiba mais</button>
        </div>
        <div style={s.heroPlaceholder}>[Imagem do Aplicativo]</div>
      </section>

      {/* Features */}
      <section style={s.section("#f8f9fa")}>
        <SectionHeader title="Nossas Funcionalidades" sub="Tudo que você precisa em uma única plataforma" />
        <div style={s.grid("repeat(auto-fit,minmax(220px,1fr))")}>
          {features.map((f) => (
            <div key={f.icon} style={{ ...s.card(), textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "8px", color: "#222", letterSpacing: "normal", fontFamily: "system-ui,-apple-system,sans-serif" }}>{f.title}</h3>
              <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={s.section("#fff")}>
        <SectionHeader title="O que nossos clientes dizem" />
        <div style={s.grid("repeat(auto-fit,minmax(260px,1fr))")}>
          {testimonials.map((t) => (
            <div key={t.name} style={s.card()}>
              <div style={{ color: "#ffc107", marginBottom: "10px" }}>★★★★★</div>
              <p style={{ color: "#555", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "14px" }}>&ldquo;{t.text}&rdquo;</p>
              <span style={{ fontWeight: 600, fontSize: "0.8rem", color: "#999" }}>— {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={s.section("#f8f9fa")}>
        <SectionHeader title="Planos e Preços" sub="Escolha o plano ideal para sua família" />
        <div style={s.grid("repeat(auto-fit,minmax(240px,1fr))")}>
          {plans.map((p) => (
            <div key={p.name} style={{ ...s.card(p.highlighted ? "2px solid #007bff" : undefined), textAlign: "center", boxShadow: p.highlighted ? "0 4px 20px rgba(0,123,255,0.18)" : undefined }}>
              {p.highlighted && (
                <div style={{ background: "#007bff", color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "4px 12px", borderRadius: "99px", display: "inline-block", marginBottom: "12px", letterSpacing: "0.05em" }}>
                  MAIS POPULAR
                </div>
              )}
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px", color: "#222", letterSpacing: "normal", fontFamily: "system-ui,-apple-system,sans-serif" }}>{p.name}</h3>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: p.highlighted ? "#007bff" : "#333", marginBottom: "2px" }}>{p.price}</div>
              <div style={{ color: "#aaa", fontSize: "0.8rem", marginBottom: "20px" }}>{p.period}</div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px", textAlign: "left" }}>
                {p.features.map((feat) => (
                  <li key={feat} style={{ padding: "7px 0", color: "#555", fontSize: "0.875rem", borderBottom: "1px solid #f0f0f0" }}>
                    ✓ {feat}
                  </li>
                ))}
              </ul>
              <button style={{ ...s.btn(p.highlighted ? "#007bff" : "#fff", p.highlighted ? "#fff" : "#007bff", "2px solid #007bff"), width: "100%" }}>
                Assinar agora
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ ...s.section("#007bff"), textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", marginBottom: "14px" }}>
          Pronto para transformar sua família?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "28px", fontSize: "1.05rem" }}>
          Junte-se a milhares de famílias que já utilizam nossa plataforma inovadora.
        </p>
        <button style={s.btn("#fff", "#007bff")}>Começar gratuitamente</button>
      </section>

      {/* Footer */}
      <footer style={{ background: "#333", color: "#ccc", padding: "40px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["Sobre nós", "Funcionalidades", "Preços", "Contato", "Privacidade"].map((l) => (
            <a key={l} href="#" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.875rem" }}>{l}</a>
          ))}
        </div>
        <p style={{ fontSize: "0.8rem", color: "#777" }}>© 2024 HomeApp. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <h2 style={{ fontSize: "1.875rem", fontWeight: 700, marginBottom: "8px", color: "#222", letterSpacing: "normal", fontFamily: "system-ui,-apple-system,sans-serif" }}>{title}</h2>
      {sub && <p style={{ color: "#666" }}>{sub}</p>}
    </div>
  );
}
