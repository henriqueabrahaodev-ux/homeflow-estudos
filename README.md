# HomeFlow — A casa toda em sincronia.

Landing page de um app fictício de organização familiar, criada como projeto prático do curso de Claude da Anthropic. O objetivo foi explorar como prompts bem estruturados e humanizados produzem resultados radicalmente diferentes de prompts genéricos.

## O conceito

O projeto tem duas rotas que contam essa história visualmente:

| Rota | Descrição |
|------|-----------|
| `/` | Landing page construída com prompts detalhados, identidade visual própria, animações e copy humanizado |
| `/sem-prompt` | A mesma aplicação como seria gerada por um prompt genérico — gradiente azul-roxo, emoji como ícones, "plataforma robusta", "ecossistema integrado" |

O contraste entre as duas páginas é o argumento.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** com tokens CSS customizados
- **Framer Motion** para animações (`prefers-reduced-motion` respeitado)
- **Shadcn/ui** como base acessível
- **canvas-confetti** no Hero e CTA final
- Fontes: Syne (display), Inter (body), JetBrains Mono (dados numéricos)

## Seções da landing principal

1. **Hero** — headline animada letra por letra, mockup 3D flutuante, partículas de fundo
2. **Problem** — cards de caos doméstico com mensagens reais da família
3. **Features** — tabs interativas com preview animado por funcionalidade
4. **Social Proof** — contadores animados + depoimentos em formato de bolha de WhatsApp
5. **Pricing** — toggle mensal/anual com animação de flip nos preços
6. **CTA Final** — parallax com headline grande e confetti ao clicar
7. **Footer** — mapa de links com ícones SVG inline

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` para a landing principal e `http://localhost:3000/sem-prompt` para a versão gerada por prompt genérico.

## Identidade visual

```css
--color-bg:       #0D0F14;  /* quase preto azulado */
--color-primary:  #6C63FF;  /* roxo vibrante */
--color-accent:   #FF6B6B;  /* coral */
--color-warm:     #FFB347;  /* laranja mel */
--color-green:    #4ECDC4;  /* teal */
```

---

Projeto desenvolvido como parte dos estudos de prompting com Claude — Anthropic.
