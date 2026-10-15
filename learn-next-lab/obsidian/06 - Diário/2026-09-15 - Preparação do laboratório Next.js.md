# 2026-09-15 - Preparação do laboratório Next.js

[[Diário de estudo]] · [[Ambiente de prática - Next.js e dependências]]

## Pedido e resultado

O usuário criou o laboratório `next-lab` utilizando `pnpm` e solicitou a instalação e configuração das ferramentas fundamentais do roadmap:
- **Tailwind CSS v4** e **shadcn/ui** (preset moderno `base-nova` com Base UI e Lucide).
- **Gerenciamento de tema:** `next-themes`.
- **Estado de servidor e cache:** `@tanstack/react-query` e `@tanstack/react-query-devtools`.
- **Formulários e validação:** `react-hook-form`, `zod` e `@hookform/resolvers`.
- **Markdown:** `react-markdown`.
- **Formatação e linter:** `prettier`, `prettier-plugin-tailwindcss` e integração no `eslint.config.mjs` com `eslint-config-prettier`.
- **Providers:** Criação do `components/providers.tsx` com `QueryClientProvider` (evitando recriações com App Router) e `ThemeProvider`, integrados ao `app/layout.tsx`.

## Verificação

Validações executadas em `next-lab` com `pnpm`:
- `pnpm lint`: passou com 0 erros e 0 alertas.
- `pnpm format:check`: passou em todos os arquivos após formatação.
- `pnpm build`: compilação e TypeScript passaram com 100% de sucesso via Turbopack.

## Direcionamento e próximo passo

O ambiente `next-lab` está 100% operacional para os testes e exercícios. O próximo passo prático é iniciar o servidor de desenvolvimento (`pnpm dev`) e praticar a criação e uso de componentes.
