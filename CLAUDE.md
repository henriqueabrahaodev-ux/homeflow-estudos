# HomeFlow — CLAUDE.md

## Identidade do Produto
**Nome:** HomeFlow  
**Tagline:** "A casa toda em sincronia."  
**Proposta:** App de organização familiar — finanças compartilhadas, calendário por membro da família, tarefas, lista de compras e painel da casa em tempo real.  
**Público:** Famílias modernas, casais com filhos, repúblicas organizadas. Pessoas que sentem que "a casa virou caos" e precisam de visibilidade.

---

## Identidade Visual

### Paleta de Cores (tokens obrigatórios)
```css
--color-bg:          #0D0F14;   /* fundo principal: quase preto azulado */
--color-surface:     #13161E;   /* cards e painéis */
--color-surface-2:   #1C2030;   /* hover, bordas suaves */
--color-primary:     #6C63FF;   /* roxo vibrante — cor principal */
--color-accent:      #FF6B6B;   /* coral — urgência, destaque */
--color-warm:        #FFB347;   /* laranja mel — finanças, conquistas */
--color-green:       #4ECDC4;   /* teal — calendário, saúde */
--color-text:        #E8EAF0;   /* texto principal */
--color-text-muted:  #6B7280;   /* texto secundário */
--color-border:      #1F2433;   /* bordas */
```

### Tipografia
- **Display / Headlines:** `Syne` (Google Fonts) — peso 700–800, tracking negativo `-0.03em`
- **Body / UI:** `Inter` — peso 400–500
- **Código / Dados numéricos:** `JetBrains Mono` — para valores financeiros e timestamps
- **Regra:** headlines nunca devem ter mais de 8 palavras na linha principal.

### Espaçamento
- Grid: 12 colunas, gap 24px
- Seção padding: `120px` vertical (desktop), `64px` (mobile)
- Border-radius padrão: `16px` (cards), `999px` (badges/pills)

---

## Stack & Arquitetura

```
next.js 14 (app router)
typescript
tailwind css
framer-motion (animações)
shadcn/ui (base acessível, customizada)
lucide-react (ícones)
```

### Estrutura de pastas
```
/app
  /page.tsx              ← landing page principal
/components
  /ui                    ← shadcn base
  /sections              ← cada seção da landing
  /animations            ← wrappers de animação reutilizáveis
  /particular            ← componentes únicos do projeto
/styles
  /globals.css
  /tokens.css            ← variáveis CSS acima
/lib
  /motion.ts             ← variantes framer-motion centralizadas
```

---

## Seções da Landing Page (em ordem)

1. **Hero** — headline animada letra por letra, app mockup 3D flutuando, partículas de fundo
2. **Problem** — cards de caos doméstico com animação stagger
3. **Features** — tabs interativas com preview animado de cada funcionalidade
4. **Calendar Preview** — mockup do calendário com avatares por pessoa, scroll horizontal
5. **Finance Preview** — donut chart animado com dados fake da família
6. **Social Proof** — depoimentos em formato de "bolha de WhatsApp"
7. **Pricing** — toggle mensal/anual com animação de flip
8. **CTA Final** — parallax com headline grande e confetti ao clicar
9. **Footer** — mapa de links + assinatura com emoji da casa 🏠

---

## Regras Absolutas (não negociáveis)

### Visual
- Dark theme obrigatório. Light mode opcional por toggle.
- NUNCA usar gradiente roxo genérico sem textura ou detalhe adicional.
- SEMPRE que houver um card, ele deve ter micro-animação de hover (lift + glow sutil).
- Avatares dos membros da família: sempre com cor única por pessoa (não foto).
- Dados numéricos sempre em `JetBrains Mono`.

### Copy & Tom
- Proibido: "solução inovadora", "plataforma robusta", "ecossistema integrado".
- Permitido: linguagem de casa — "a conta do mercado", "quem pega a Bia na escola", "a parcela do carro".
- Headlines devem causar reconhecimento imediato: o leitor deve pensar "isso acontece na minha casa".
- CTA principal: "Começar grátis" (nunca "Saiba mais" sozinho).

### Código
- Componentes em TypeScript, sempre tipados.
- Animações com `framer-motion`, nunca CSS keyframes inline para animações complexas.
- Nenhum componente com mais de 150 linhas; dividir em sub-componentes se passar.
- `prefers-reduced-motion` respeitado em todos os wrappers de animação.
- Mobile-first. Testar em 375px antes de qualquer breakpoint maior.

### Anti-genérico
- Antes de finalizar qualquer seção, rodar a skill `anti-generic-review`.
- Se um componente parecer que poderia estar em qualquer outro site de SaaS, ele precisa de mais detalhe ou contexto familiar.
