"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth={0}/>
    </svg>
  );
}

function IconX({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function IconYoutube({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function IconGithub({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

const LINKS = [
  {
    heading: "Produto",
    items: ["Funcionalidades", "Calendário", "Finanças", "Tarefas", "Lista de compras", "Preços"],
  },
  {
    heading: "Empresa",
    items: ["Sobre nós", "Blog", "Imprensa", "Carreiras", "Parcerias"],
  },
  {
    heading: "Suporte",
    items: ["Central de ajuda", "Contato", "Status", "Privacidade", "Termos de uso"],
  },
  {
    heading: "Comunidade",
    items: ["Famílias no HomeFlow", "Indicar amigos", "Programa de afiliados", "Changelog"],
  },
];

const SOCIALS = [
  { icon: IconInstagram, label: "Instagram" },
  { icon: IconX,         label: "Twitter / X" },
  { icon: IconYoutube,   label: "YouTube" },
  { icon: IconGithub,    label: "GitHub" },
];

export function FooterSection() {
  return (
    <footer style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Grade de links */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {LINKS.map((col) => (
            <motion.div key={col.heading} variants={fadeUp} className="flex flex-col gap-4">
              <h4 className="font-display font-bold text-sm text-text-base tracking-wider uppercase">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-body text-text-muted transition-colors hover:text-text-base group flex items-center gap-1.5"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-200 rounded-full" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Linha divisória */}
        <div className="h-px" style={{ backgroundColor: "var(--color-border)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">

          {/* Logo + tagline */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold text-white font-display"
              style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-green))" }}
            >
              H
            </div>
            <div>
              <p className="font-display font-bold text-text-base">HomeFlow</p>
              <p className="text-xs text-text-muted">🏠 A casa te espera.</p>
            </div>
          </motion.div>

          {/* Redes sociais */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {SOCIALS.map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-text-muted border border-border"
                style={{ backgroundColor: "var(--color-bg)" }}
                whileHover={{ scale: 1.1, borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-xs text-text-muted"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            © 2026 HomeFlow. Feito com ☕ no Brasil.
          </motion.p>
        </div>

      </div>
    </footer>
  );
}
