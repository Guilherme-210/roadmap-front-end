---
tipo: aprendizado
criado: "2026-09-15"
---

# Ambiente de prática - Next.js e dependências

[[Bem-vindo]] · [[Prática]] · [[Organização - Repositório, cofre e projeto Next.js]]

## Estado atual

O usuário renomeou a raiz para roadmap-front-end e solicitou o aplicativo em next. A estrutura agora tem obsidian e next lado a lado. Todos os exercícios usarão esse mesmo aplicativo. A tentativa de instalação desta sessão é a nova criação autorizada após o cancelamento anterior.

## Como iniciar

Abra um terminal em F:\Obsidian\roadmap-front-end e execute:

```powershell
cd next
npm run dev
```

Abra http://localhost:3000. O ambiente já tem as dependências instaladas. Em outro computador, use npm ci dentro de next para reproduzir o lockfile. Para os testes de navegador, instale o Chromium com npx playwright install chromium.

## Dependências escolhidas

| Ferramentas                      | Finalidade                              | Roadmap            |
| -------------------------------- | --------------------------------------- | ------------------ |
| Next.js 16, React 19, TypeScript | Aplicativo e componentes tipados        | Níveis 6–16        |
| Tailwind CSS 4                   | Estilização                             | Níveis 3 e 29      |
| shadcn/ui, Radix UI, Lucide      | Componentes de interface e ícones       | Níveis 25 e 29     |
| next-themes                      | Tema do sistema e suporte a modo escuro | Níveis 3 e 29      |
| TanStack Query                   | Consultas e cache no cliente            | Níveis 11, 18 e 30 |
| React Hook Form, Zod, resolvers  | Formulários e validação                 | Nível 17           |
| Vitest e Testing Library         | Testes de lógica e componentes          | Nível 26           |
| Playwright e Chromium            | Testes de navegação                     | Nível 26           |
| ESLint e Prettier                | Qualidade e formatação                  | Nível 33           |

Os componentes shadcn iniciais são Button, Card, Input, Label, Textarea, Badge, Separator e Skeleton. Tema e QueryClientProvider estão configurados. Formulários e consultas reais serão feitos nos exercícios.

## O que não precisa ser instalado agora

O roadmap apresenta alternativas. Não é necessário usar TanStack Query e SWR, vários gerenciadores de estado, duas ferramentas de testes unitários ou dois ORMs no mesmo exercício. Banco de dados, autenticação, CMS, internacionalização e observabilidade dependem de objetivos e configurações que serão definidos quando chegarmos a esses assuntos.

## Compatibilidade e manutenção

O lockfile guarda as versões resolvidas. Vite 7 e plugin React 5 foram selecionados para evitar conflito com Babel 7 na ferramenta shadcn. ESLint 9 foi mantido por compatibilidade com os plugins do Next.js, embora o npm sinalize fim de suporte; reavaliar quando esses plugins suportarem ESLint 10. Não foram utilizados --force ou --legacy-peer-deps para ocultar conflitos.

## Primeiro exercício

[[React - Exercício 01 - Cartão de estudo]] continua aguardando sua tentativa.

- **Rota:** /exercicios/react/01-cartao-estudo.
- **Arquivo:** next/src/app/exercicios/react/01-cartao-estudo/page.tsx, relativo à raiz do projeto.
- **Orientação:** o arquivo já exporta App; substitua o conteúdo de apoio pela sua tentativa conforme o enunciado.
- **Importante:** os testes iniciais verificam o ambiente, não a solução. Não há cartões resolvidos por antecipação.

## Validação do ambiente

Validações executadas em 2026-09-15:

- ESLint: passou, sem avisos de código.
- TypeScript: passou.
- Vitest: 2 testes passaram (link do exercício e interação de botão por teclado).
- Prettier: formatação conferida.
- Build de produção: passou, com página inicial e rota do exercício.
- Playwright/Chromium: 1 teste de navegação passou, sem erros de página capturados.
- Dependências: npm ls --all terminou com sucesso; opcionais não utilizados ou de outros sistemas operacionais não precisam ser instalados.
- Auditoria das dependências de produção: nenhuma vulnerabilidade reportada no momento da consulta.

O servidor usado no teste foi encerrado pelo Playwright. Para estudar, inicie npm run dev. Esses resultados verificam a preparação do ambiente; não validam sua solução do exercício.

## Compreensão e próximo passo

- **Conteúdo apresentado:** organização do aplicativo e finalidade das dependências.
- **Prática do usuário:** ainda não apresentada nesta sessão.
- **Próximo passo:** iniciar o servidor e tentar o exercício de componentes e JSX.
- **Checklists:** instalação não marca assuntos como aprendidos.

O guia completo e os comandos estão no README.md dentro de next, acessível pelo editor do projeto.

## Fontes

- [Next.js](https://nextjs.org/docs/app/getting-started/installation)
- [shadcn/ui com Next.js](https://ui.shadcn.com/docs/installation/next)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Testes com Vitest](https://nextjs.org/docs/app/guides/testing/vitest)
- [Testes com Playwright](https://nextjs.org/docs/app/guides/testing/playwright)

