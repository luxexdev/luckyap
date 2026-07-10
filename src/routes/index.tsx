import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codex.ai — IA para programadores que enviam código" },
      {
        name: "description",
        content:
          "Codex.ai é o copiloto de IA para desenvolvedores: revisa, refatora e explica código em qualquer stack, direto no seu editor e terminal.",
      },
      { property: "og:title", content: "Codex.ai — IA para programadores" },
      {
        property: "og:description",
        content:
          "Copiloto de IA que revisa, refatora e explica código em qualquer stack.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const CODE_LINES = [
  { p: "$ ", c: "codex explain ./auth/session.ts", cls: "text-neon" },
  { p: "", c: "→ analisando 128 linhas em 0.4s", cls: "text-muted-foreground" },
  { p: "", c: "→ detectados 2 riscos: race condition, token leak", cls: "text-muted-foreground" },
  { p: "$ ", c: "codex fix --apply", cls: "text-neon" },
  { p: "", c: "✔ patch aplicado · testes passando (24/24)", cls: "text-primary" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Logos />
      <Features />
      <CodeShowcase />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            {"</>"}
          </span>
          <span>codex.ai</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Recursos</a>
          <a href="#pricing" className="hover:text-foreground">Preços</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
          <a href="https://github.com" className="hover:text-foreground">GitHub</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden text-sm text-muted-foreground hover:text-foreground sm:block">
            Entrar
          </a>
          <a
            href="#pricing"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            Começar grátis
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  const full = "codex generate --from='// TODO: cache com redis' ";
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div
        className="absolute inset-x-0 top-0 h-[500px] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.78 0.18 165 / 0.25), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32">
        <div className="mx-auto max-w-3xl text-center animate-float-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
            v2.4 · agora com agentes autônomos
          </div>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            A IA que{" "}
            <span className="text-primary glow-text">pensa em código</span>,
            não em prosa.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Copiloto de IA feito para devs sérios. Revisa PRs, refatora
            legado, escreve testes e explica qualquer stack — direto no
            terminal, editor ou CI.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Começar grátis →
            </a>
            <a
              href="#features"
              className="rounded-md border border-border bg-card px-6 py-3 font-mono text-sm text-foreground transition hover:border-primary/50"
            >
              $ curl codex.ai/install | sh
            </a>
          </div>
        </div>

        {/* Terminal mock */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-chart-4/70" style={{ background: "oklch(0.75 0.15 80)" }} />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">~/proyecto — codex</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="text-neon">
                $ {typed}
                <span className="cursor-blink">▊</span>
              </div>
              {CODE_LINES.map((l, i) => (
                <div key={i} className={l.cls}>
                  <span className="text-neon">{l.p}</span>
                  {l.c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  const items = ["TypeScript", "Python", "Rust", "Go", "Swift", "Kotlin", "Elixir"];
  return (
    <section className="border-y border-border/60 bg-card/30 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Fluente em toda a sua stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-lg font-medium text-muted-foreground">
          {items.map((i) => (
            <span key={i} className="transition hover:text-foreground">{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    t: "Code review em segundos",
    d: "Analisa PRs inteiros, aponta bugs, vazamentos e problemas de performance antes do merge.",
    icon: "⌘",
  },
  {
    t: "Refatoração segura",
    d: "Reescreve módulos legados mantendo comportamento. Diff explicado linha a linha.",
    icon: "↻",
  },
  {
    t: "Testes automáticos",
    d: "Gera unit, integration e E2E com cobertura real. Detecta edge cases que você esqueceu.",
    icon: "✓",
  },
  {
    t: "Agentes no CI",
    d: "Rode agentes em pipelines: geram changelogs, atualizam docs e abrem PRs sozinhos.",
    icon: "◈",
  },
  {
    t: "Contexto do repo inteiro",
    d: "Indexa milhões de linhas. Entende sua arquitetura, convenções e decisões passadas.",
    icon: "◐",
  },
  {
    t: "Privacidade real",
    d: "Zero-retention. Rode local com modelos open-source ou na nossa cloud SOC 2.",
    icon: "☗",
  },
];

function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">// features</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Ferramentas afiadas para quem escreve código de verdade.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.t}
              className="group relative bg-card p-8 transition hover:bg-card/60"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-md bg-neon-soft font-mono text-lg text-primary">
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeShowcase() {
  return (
    <section className="border-t border-border/60 bg-card/20 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">// diff review</p>
          <h2 className="text-4xl font-bold tracking-tight">
            Ela lê o diff antes de você.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada PR recebe uma revisão com contexto do repositório: convenções
            do time, dependências afetadas, testes que quebraram e sugestões
            aplicáveis com um clique.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Sugere fixes aplicáveis com diff pronto",
              "Detecta secrets vazados e SQL injection",
              "Roda em GitHub, GitLab e Bitbucket",
            ].map((l) => (
              <li key={l} className="flex items-start gap-3">
                <span className="mt-1 text-primary">▸</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-xl border border-border bg-background font-mono text-xs shadow-2xl">
          <div className="border-b border-border bg-card px-4 py-2 text-muted-foreground">
            src/auth/session.ts · +12 −8
          </div>
          <pre className="overflow-x-auto p-5 leading-relaxed">
            <code>
              <span className="text-muted-foreground">  1 </span><span className="text-accent">export async function</span> validateSession(token: string) {"{"}
              {"\n"}<span className="text-muted-foreground">  2 </span>  <span className="text-destructive">- const user = await db.users.findFirst({"{"} token {"}"})</span>
              {"\n"}<span className="text-muted-foreground">  3 </span>  <span className="text-primary">+ const hashed = await hashToken(token)</span>
              {"\n"}<span className="text-muted-foreground">  4 </span>  <span className="text-primary">+ const user = await db.users.findFirst({"{"} tokenHash: hashed {"}"})</span>
              {"\n"}<span className="text-muted-foreground">  5 </span>  <span className="text-primary">+ if (!user || user.expiresAt {"<"} Date.now()) return null</span>
              {"\n"}<span className="text-muted-foreground">  6 </span>  <span className="text-accent">return</span> user
              {"\n"}<span className="text-muted-foreground">  7 </span>{"}"}
              {"\n\n"}<span className="text-neon">▎ codex</span> <span className="text-muted-foreground">tokens em plaintext são um risco — sugerido hash + expiração.</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    n: "Hacker",
    p: "R$ 0",
    d: "Pra experimentar em projetos pessoais.",
    f: ["200 requests/mês", "1 repositório", "CLI + editor", "Comunidade Discord"],
    cta: "Começar",
    hi: false,
  },
  {
    n: "Pro",
    p: "R$ 89",
    s: "/mês",
    d: "Pra devs que enviam código todo dia.",
    f: [
      "Requests ilimitados",
      "Repositórios ilimitados",
      "Agentes no CI/CD",
      "Modelos avançados (GPT-5, Claude, Gemini)",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro",
    hi: true,
  },
  {
    n: "Team",
    p: "R$ 39",
    s: "/dev/mês",
    d: "Pra squads que precisam de contexto compartilhado.",
    f: ["Tudo do Pro", "Contexto compartilhado do repo", "SSO + SAML", "Zero retention", "SLA 99.9%"],
    cta: "Falar com vendas",
    hi: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">// pricing</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Preço honesto. Sem lockin.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.n}
              className={`relative rounded-xl border p-8 transition ${
                p.hi
                  ? "border-primary bg-card shadow-glow"
                  : "border-border bg-card/40"
              }`}
            >
              {p.hi && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-foreground">
                  Recomendado
                </span>
              )}
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                {p.n}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.p}</span>
                {p.s && <span className="text-sm text-muted-foreground">{p.s}</span>}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.f.map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">✓</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 block rounded-md px-4 py-2.5 text-center text-sm font-medium transition ${
                  p.hi
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border bg-background hover:border-primary/50"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Meu código é usado pra treinar modelos?", a: "Não. Zero retention por padrão. Você também pode rodar com modelos open-source localmente." },
  { q: "Funciona com que editores?", a: "VS Code, Cursor, Neovim, JetBrains, Zed e via CLI em qualquer terminal." },
  { q: "Quais modelos vocês usam?", a: "GPT-5, Claude Opus 4, Gemini 2.5 Pro e modelos locais (Llama, DeepSeek Coder). Você escolhe por tarefa." },
  { q: "Posso cancelar quando quiser?", a: "Sim. Sem contrato, sem fidelidade. Cobrança mensal ou anual (com 20% de desconto)." },
];

function Faq() {
  return (
    <section id="faq" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-3 text-center font-mono text-xs uppercase tracking-widest text-primary">// faq</p>
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">Perguntas frequentes</h2>
        <div className="divide-y divide-border rounded-xl border border-border bg-card/40">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between text-base font-medium">
                {f.q}
                <span className="font-mono text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-card to-background p-10 text-center shadow-glow">
          <h3 className="text-3xl font-bold tracking-tight">Pronto pra codar mais rápido?</h3>
          <p className="mt-3 text-muted-foreground">Grátis pra sempre no plano Hacker. Sem cartão.</p>
          <a
            href="#pricing"
            className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Instalar codex.ai →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-muted-foreground sm:flex-row">
        <span>© 2026 codex.ai — feito por devs, pra devs.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Docs</a>
          <a href="#" className="hover:text-foreground">Status</a>
          <a href="#" className="hover:text-foreground">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
