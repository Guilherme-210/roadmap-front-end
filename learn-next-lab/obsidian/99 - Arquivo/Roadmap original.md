# Front-end com Next.js do zero ao nível Pleno (pessoal)

Organizei a trilha como um roadmap progressivo para sair do zero e chegar ao nível pleno em front-end com Next.js.

<aside>
🎯

**Objetivo:** dominar os fundamentos da Web, JavaScript, TypeScript, React e Next.js moderno, além das práticas profissionais esperadas de um desenvolvedor pleno.

</aside>

O foco principal será **Next.js 16 + App Router**. O **Pages Router continua suportado**, mas eu o colocaria depois, para você conseguir manter projetos legados sem gastar seu início estudando dois modelos simultaneamente. A documentação atual do Next organiza o App Router em torno de Server/Client Components, data fetching, mutations, caching, revalidation, Route Handlers, Proxy, otimizações e deployment.

# NÍVEL 4 — JavaScript ⚠️

## 4.1 — JavaScript básico

- [ ]  🔴 `let`, `const`, tipos primitivos, objetos, arrays e funções
- [ ]  🔴 Arrow Functions, operadores, condicionais, loops e Template Strings

## 4.2 — Arrays

- [ ]  🔴 `map`, `filter`, `find`, `findIndex`, `some`, `every`, `reduce`, `forEach`, `sort`, `includes`

## 4.3 — Objetos

- [ ]  🔴 destructuring, spread, rest, Object.keys/values/entries
- [ ]  🔴 optional chaining e nullish coalescing

## 4.4 — Funções

- [ ]  🔴 parâmetros, retorno, callbacks, funções de alta ordem, escopo e closures
- [ ]  🟡 Pure Functions e Currying

## 4.5 — JavaScript assíncrono

- [ ]  🔴 síncrono vs assíncrono, Promise, async/await e try/catch
- [ ]  🔴 `Promise.all` e `Promise.allSettled`
- [ ]  🟡 execução paralela/sequencial, Event Loop, Microtasks e Macrotasks

## 4.6 — APIs

- [ ]  🔴 Fetch API, métodos HTTP, erros, headers, JSON e AbortController

## 4.7 — Módulos

- [ ]  🔴 import/export, named/default export e ES Modules
- [ ]  🟡 dynamic import

## 4.8 — JavaScript avançado

- [ ]  🟡 Hoisting, Execution Context, Call Stack, Scope Chain e Closure
- [ ]  🟡 `this`, prototype, classes, getters/setters e immutability
- [ ]  🟡 shallow/deep copy e garbage collection

# NÍVEL 6 — TypeScript ⚠️

## 6.1 — Fundamentos

- [x]  🔴 Tipagem, inferência, tipos primitivos, arrays, objects, functions e optional properties

## 6.2 — Tipos importantes

- [ ]  🔴 union, intersection, literal types, type aliases e interfaces
- [ ]  🔴 null, undefined, unknown, never, void
- [ ]  ⚠️ entender por que evitar `any`

## 6.3 — Narrowing

- [ ]  🔴 typeof, instanceof, `in`, discriminated unions e type predicates
- [ ]  🟡 assertion functions

## 6.4 — Generics

- [ ]  🔴 generic functions/interfaces, constraints e defaults
- [ ]  🟡 inferência genérica

## 6.5 — Manipulação de tipos

- [ ]  🔴 `keyof`, `typeof`, indexed access, `as const`, `satisfies`
- [ ]  🟡 conditional, mapped, template literal types e `infer`

## 6.6 — Utility Types

- [ ]  🔴 Partial, Required, Pick, Omit, Record, Exclude, Extract, ReturnType e Parameters
- [ ]  🟡 Awaited

## 6.7 — Configuração

- [ ]  🔴 `tsconfig.json`, strict, paths e aliases
- [ ]  🟡 moduleResolution, target, lib e declarations

### Legenda

- 🟢 **Concluido** — Feito.
- 🔴 **Essencial** — precisa dominar.
- 🟡 **Importante** — esperado de um desenvolvedor pleno.
- 🟣 **Avançado** — diferencia um pleno forte.
- 🔵 **Extra** — útil dependendo do projeto.
- ⛔ **Bloqueado** — depende de um pré-requisito para continuar.
- 🆘 **Preciso de ajuda** — dificuldade que exige apoio para avançar.
- ⚠️ **Revisar** — conteúdo que precisa de reforço ou mais prática.
- 💭 **Explorar depois** — dúvida ou ideia para investigar futuramente.

---

# NÍVEL 0 — Fundamentos de programação e ambiente 🟢

Antes de pensar em React ou Next.js.

## 0.1 — Lógica de programação

- [x]  🔴 Algoritmos
- [x]  🔴 Variáveis
- [x]  🔴 Tipos de dados
- [x]  🔴 Operadores
- [x]  🔴 Condicionais
- [x]  🔴 Loops
- [x]  🔴 Funções
- [x]  🔴 Arrays
- [x]  🔴 Objetos
- [x]  🔴 Estruturas de dados básicas
- [x]  🔴 Entrada e saída
- [x]  🔴 Tratamento de erros
- [x]  🟡 Recursividade
- [x]  🟡 Complexidade básica de algoritmos
- [x]  🟡 Big O — noções básicas

## 0.2 — Terminal

- [x]  🔴 Navegação entre diretórios
- [x]  🔴 Criar/remover/copiar arquivos
- [x]  🔴 Variáveis de ambiente
- [x]  🔴 PATH
- [x]  🔴 Executar programas pelo terminal
- [x]  🔴 PowerShell / Bash
- [x]  🟡 Git Bash
- [x]  🟡 WSL
- [x]  🔵 Comandos Linux básicos

## 0.3 — Node.js

- [x]  🔴 O que é Node.js
- [x]  🔴 Runtime
- [x]  🔴 Node vs navegador
- [x]  🔴 npm
- [x]  🔴 `package.json`
- [x]  🔴 `package-lock.json`
- [x]  🔴 Scripts npm
- [x]  🔴 dependencies
- [x]  🔴 devDependencies
- [x]  🔴 Semantic Versioning
- [x]  🔴 `node_modules`
- [x]  🔴 Instalação de pacotes
- [x]  🟡 npm vs pnpm vs yarn
- [x]  🟡 npx
- [x]  🟡 `.npmrc`
- [x]  🟡 lockfiles
- [x]  🟡 resolução de dependências
- [x]  🟡 ESM vs CommonJS
- [x]  🔵 workspaces

# NÍVEL 1 — Fundamentos da Web 💭

## 1.1 — Como a Web funciona

- [x]  🔴 Cliente e servidor
- [x]  🔴 Browser
- [x]  🔴 HTTP
- [x]  🔴 HTTPS
- [x]  🔴 Request
- [x]  🔴 Response
- [x]  🔴 URL
- [x]  🔴 Query parameters
- [x]  🔴 Headers
- [x]  🔴 Body
- [x]  🔴 Métodos HTTP: GET, POST, PUT, PATCH e DELETE
- [x]  🔴 Status HTTP: 2xx, 3xx, 4xx e 5xx
- [x]  🔴 JSON
- [ ]  🟡 DNS
- [ ]  🟡 TLS/SSL
- [x]  🟡 Cookies
- [x]  🟡 Cache HTTP
- [ ]  🟡 CORS
- [ ]  🟡 Content-Type
- [ ]  🟡 Authorization Header
- [ ]  🟡 CDN
- [ ]  🔵 HTTP/2
- [ ]  🔵 HTTP/3

# NÍVEL 2 — HTML 🟢

## 2.1 — HTML básico

- [x]  🔴 Estrutura HTML
- [x]  🔴 elementos e atributos
- [x]  🔴 headings, parágrafos e links
- [x]  🔴 imagens, listas e tabelas
- [x]  🔴 formulários, inputs, buttons, labels, selects e textarea

## 2.2 — HTML semântico

- [x]  🔴 `header`, `main`, `nav`, `section`, `article`, `aside`, `footer`

## 2.3 — Formulários

- [x]  🔴 `form`, `action`, `method`
- [x]  🔴 validação HTML, required, min/max, pattern, autocomplete
- [x]  🟡 fieldset e legend

## 2.4 — Acessibilidade HTML

- [x]  🔴 Semântica, teclado, foco, label, alt, landmarks e hierarquia de títulos
- [x]  🟡 ARIA e atributos `aria-*`

# NÍVEL 3 — CSS 🟢

## 3.1 — CSS básico

- [x]  🔴 Seletores, propriedades, classes, pseudo-classes e pseudo-elements
- [x]  🔴 Cascade, specificity e inheritance

## 3.2 — Box Model

- [x]  🔴 width, height, margin, padding, border, box-sizing

## 3.3 — Layout

- [x]  🔴 Flexbox completo
- [x]  🔴 CSS Grid completo
- [x]  🟡 auto-fit e auto-fill

## 3.4 — Responsividade

- [x]  🔴 Mobile First, Media Queries, Breakpoints e unidades responsivas
- [x]  🔴 Imagens responsivas
- [x]  🟡 Container Queries

## 3.5 — CSS moderno

- [x]  🔴 CSS Variables, `calc`, `min`, `max`, `clamp`
- [x]  🟡 nesting, logical properties, `aspect-ratio`, `object-fit`, sticky, transitions e animations

## 3.6 — Arquitetura CSS

- [ ]  🟡 CSS Modules, Design Tokens, tema e Dark Mode
- [ ]  🔵 BEM, Sass, Tailwind CSS e CSS-in-JS

# NÍVEL 5 — Git e GitHub/Azure DevOps 🟢

## 5.1 — Git

- [x]  🔴 repository, clone, init, status, add, commit, push, pull e fetch
- [x]  🔴 branch, checkout/switch, merge, conflitos e `.gitignore`

## 5.2 — Git profissional

- [x]  🔴 Pull Request, Code Review, merge, squash e rebase
- [x]  🟡 cherry-pick, revert, reset, reflog, tags e releases

## 5.3 — Workflow

- [x]  🟡 Conventional Commits, Feature/Release Branches e Hotfix
- [x]  🟡 Git Flow, Trunk-based Development e CI/CD associado a PRs

# NÍVEL 7 — React

## 7.1 — Fundamentos do React

- [x]  🔴 JSX, componentes, props, children, composição e eventos
- [ ]  🔴 renderização condicional, listas, `key`, estado e imutabilidade

## 7.2 — Hooks fundamentais

- [ ]  🔴 `useState`, `useEffect`, `useContext`, `useRef`
- [ ]  🟡 `useReducer`, `useMemo`, `useCallback` e Custom Hooks

## 7.3 — Estado

- [ ]  🔴 estado local, lifting state up, derived state e state colocation
- [ ]  🔴 controlled/uncontrolled components e Context API
- [ ]  🟡 reducers

## 7.4 — Effects

- [ ]  🔴 ciclo de vida, dependências, cleanup e stale closures
- [ ]  🔴 quando usar e quando não usar `useEffect`

## 7.5 — Renderização

- [ ]  🔴 render, re-render, reconciliação, component tree e state preservation
- [ ]  🟡 batching e hydration

## 7.6 — React intermediário

- [ ]  🔴 composição e Compound Components
- [ ]  🟡 Render Props, Portals, Error Boundaries, Lazy Loading e Suspense

## 7.7 — React 19

- [ ]  🟡 `use`, Actions, `useActionState`, `useOptimistic`, `useTransition`, `useDeferredValue`
- [ ]  🟣 Server Components e Server Functions
- [ ]  🔵 Activity, View Transitions e React Compiler

# NÍVEL 8 — Next.js básico

## 8.1 — Introdução

- [ ]  🔴 O que é Next.js, React vs Next.js, Framework vs Library e Full-stack Framework
- [ ]  🔴 App Router
- [ ]  🟡 Pages Router

## 8.2 — Criando projetos

- [ ]  🔴 `create-next-app`, TypeScript, ESLint, aliases e estrutura inicial
- [ ]  🔴 `next dev`, `next build` e `next start`

## 8.3 — Estrutura

- [ ]  🔴 `/app`, `/public`, `next.config.ts`, `tsconfig.json`, `.env`
- [ ]  🟡 `/src`

## 8.4 — File conventions

- [ ]  🔴 `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`
- [ ]  🟡 `template.tsx`, `default.tsx`, `forbidden.tsx`, `unauthorized.tsx`, `proxy.ts`

# NÍVEL 9 — Routing no Next.js

- [ ]  🔴 File-system Routing, Nested Routes e Layouts
- [ ]  🔴 Rotas dinâmicas `[id]`, `[slug]`, `[...slug]`, `[[...slug]]` e `params`
- [ ]  🔴 Route Groups
- [ ]  🔴 `<Link>`, Prefetch, Client-side Navigation e hooks de navegação
- [ ]  🔴 URL como estado: filtros, busca e paginação
- [ ]  🟣 Parallel Routes, Intercepting Routes, modals, redirects e rewrites

# NÍVEL 10 — Server Components e Client Components

- [ ]  🔴 Server Components: execução, async components, acesso a dados e composição
- [ ]  🔴 Client Components: `'use client'`, state, effects, Browser APIs e eventos
- [ ]  🔴 Server/Client Boundary, serialização e composição correta
- [ ]  🟡 RSC Payload, Hydration e Streaming
- [ ]  🟣 Funcionamento interno de RSC

# NÍVEL 11 — Data Fetching

- [ ]  🔴 Fetch no servidor com async Server Components
- [ ]  🔴 Requests paralelas, sequenciais, waterfall e `Promise.all`
- [ ]  🔴 Fetch no cliente, Loading, Error, Refetch e Race Conditions
- [ ]  🟡 Server State com TanStack Query e SWR
- [ ]  🟡 TanStack Query: QueryClient, useQuery, useMutation, queryKey, staleTime, gcTime, invalidation, optimistic updates, retries e paginação
- [ ]  🟣 Hydration/Dehydration

# NÍVEL 12 — Rendering

- [ ]  🔴 CSR
- [ ]  🔴 SSR
- [ ]  🔴 SSG
- [ ]  🔴 Dynamic Rendering
- [ ]  🔴 ISR e Revalidation
- [ ]  🔴 Saber escolher entre Static, Dynamic, Cached, Uncached, ISR e Streaming

# NÍVEL 13 — Cache e Revalidation

- [ ]  🔴 Cache, Stale Data, Invalidation, Revalidation e TTL
- [ ]  🔴 Cache de dados, UI, rotas e Request Memoization
- [ ]  🔴 `revalidatePath` e `revalidateTag`
- [ ]  🟡 `updateTag` e CDN Caching
- [ ]  🟣 Cache Components, `'use cache'`, `cacheLife`, `cacheTag`, `use cache: private`
- [ ]  🔵 `use cache: remote`
- [ ]  🔴 Estratégias de cache e invalidação

# NÍVEL 14 — Streaming e Suspense

- [ ]  🔴 Loading UI, `loading.tsx`, Skeletons e `<Suspense>`
- [ ]  🔴 Streaming, Granular Streaming e Suspense Boundaries
- [ ]  🟡 Selective Hydration

# NÍVEL 15 — Mutação de dados

- [ ]  🔴 `'use server'`, Server Functions, Server Actions e Mutations
- [ ]  🔴 Forms, validação, erros, Pending State, Revalidation e Redirects
- [ ]  🟡 `useOptimistic`, Optimistic Updates e Rollback
- [ ]  🟡 `useActionState`, Pending, Success e Error

# NÍVEL 16 — Route Handlers e APIs

- [ ]  🔴 `route.ts`, GET, POST, PUT, PATCH e DELETE
- [ ]  🔴 Request, Response, NextRequest, NextResponse, Headers, Cookies, JSON e Status Codes
- [ ]  🟡 BFF, Proxy de APIs, esconder tokens, composição, validação e transformação

# NÍVEL 17 — Formulários profissionais

- [ ]  🔴 Controlled, Uncontrolled, FormData e Validation
- [ ]  🟡 React Hook Form completo
- [ ]  🟡 Zod completo
- [ ]  🟡 RHF + Zod, API/Server Actions, erros, Upload e multipart/form-data

# NÍVEL 18 — Gerenciamento de estado

- [ ]  🔴 Local, Derived, URL, Form, Server e Global Client State
- [ ]  🔴 React State e Context API
- [ ]  🟡 TanStack Query
- [ ]  🔵 Zustand, Redux Toolkit e Jotai
- [ ]  🔴 Saber quando não usar estado global

# NÍVEL 19 — Tratamento de erros

- [ ]  🔴 try/catch, erros esperados/inesperados e API Errors
- [ ]  🔴 `error.tsx`, `not-found.tsx`, `notFound()` e Redirects
- [ ]  🟡 Global Error, `forbidden` e `unauthorized`

# NÍVEL 20 — Autenticação e autorização

- [ ]  🔴 Authentication, Authorization, Session, Cookie, JWT, Access/Refresh Token
- [ ]  🟡 OAuth e OpenID Connect
- [ ]  🔴 Proteção de páginas, autenticação/autorização no servidor e cookies seguros
- [ ]  🟡 Proxy, Auth.js/NextAuth, RBAC e Permissions

# NÍVEL 21 — Proxy

- [ ]  🔴 `proxy.ts`, Matchers, Redirect, Rewrite e Headers
- [ ]  🟡 autenticação, internacionalização e execução antes de rotas
- [ ]  🔴 Quando usar e quando não usar

# NÍVEL 22 — SEO e Metadata

- [ ]  🔴 SEO, title, description, canonical, robots e sitemap
- [ ]  🔴 Metadata API, `metadata`, `generateMetadata`, Open Graph e Twitter Cards
- [ ]  🟡 robots.txt, sitemap.xml, favicon, manifest, JSON-LD e [Schema.org](http://Schema.org)
- [ ]  🟣 Dynamic OG Images e `ImageResponse`

# NÍVEL 23 — Imagens, fontes e assets

- [ ]  🔴 `next/image`, responsive images, remote images, lazy loading e LCP
- [ ]  🟡 Placeholders e Image Loaders
- [ ]  🔴 `next/font`, Google Fonts, fontes locais, preload e CLS
- [ ]  🔴 `/public`, SVG, favicon e scripts externos

# NÍVEL 24 — Performance

- [ ]  🔴 Core Web Vitals: LCP, CLS e INP
- [ ]  🟡 TTFB e FCP
- [ ]  🔴 evitar renders desnecessários e State Colocation
- [ ]  🟡 Memoization, `useMemo`, `useCallback` e React Compiler
- [ ]  🔴 Server Components, Image/Font Optimization, Streaming, Suspense, Lazy Loading, Dynamic Imports, Caching e Prefetch
- [ ]  🟡 Bundle Analysis, Package Optimization, Chrome DevTools, Lighthouse e Profiler

# NÍVEL 25 — Acessibilidade

- [ ]  🔴 WCAG, HTML semântico, teclado, foco, screen readers e contraste
- [ ]  🔴 formulários, labels, mensagens de erro e Links vs Buttons
- [ ]  🔴 ARIA: principais atributos
- [ ]  🟡 axe, Lighthouse, NVDA e VoiceOver

# NÍVEL 26 — Testes

- [ ]  🔴 Pirâmide de testes, Unitário, Integração, E2E, Mocks e Fixtures
- [ ]  🔴 Vitest/Jest
- [ ]  🔴 React Testing Library
- [ ]  🟡 Playwright
- [ ]  🔴 Saber o que testar e escolher Unitário vs Integração vs E2E

# NÍVEL 27 — Segurança Front-end / Next.js

- [ ]  🔴 XSS, CSRF, CORS, Injection, exposição de Secrets e Open Redirects
- [ ]  🟡 Clickjacking
- [ ]  🔴 Environment Variables, `NEXT_PUBLIC_*`, Secrets Server-side e validação
- [ ]  🔴 Cookies HttpOnly, Secure e SameSite
- [ ]  🟡 CSP e Security Headers

# NÍVEL 28 — Arquitetura de projetos

- [ ]  🔴 organização por components, features, hooks, services, utils, schemas, types, constants, providers e config
- [ ]  🔴 Separação de responsabilidades
- [ ]  🟡 Composition, Container/Presentation, Custom Hooks, Service Layer, Repository, Adapter, Factory e Provider
- [ ]  🟡 Dependency Inversion e Feature-based Architecture
- [ ]  🔴 DRY, KISS e YAGNI
- [ ]  🟡 SOLID, Separation of Concerns e Clean Code

# NÍVEL 29 — Componentização profissional

- [ ]  🔴 Responsabilidade, Composition, Props API, evitar Prop Drilling e Reusabilidade
- [ ]  🔴 Controlled e Compound Components
- [ ]  🟡 Polymorphic Components
- [ ]  🟡 Design Systems: Tokens, Typography, Spacing, Colors, Variants, Themes e Dark Mode
- [ ]  🟡 MUI e Tailwind
- [ ]  🔵 shadcn/ui, Chakra e Radix UI

# NÍVEL 30 — Integração com APIs profissionais

- [ ]  🔴 REST: Endpoints, DTO, Query Params, filtros, paginação, ordenação, Upload e Download
- [ ]  🔴 Loading, Empty/Error State, Retry, Timeout, Debounce, Race Conditions e Cancelamento
- [ ]  🟡 Optimistic Updates
- [ ]  🔵 GraphQL, WebSockets e Server-Sent Events

# NÍVEL 31 — Environment e configuração

- [ ]  🔴 `.env`, `.env.local`, Environment Variables, ambientes e Secrets
- [ ]  🔴 `NEXT_PUBLIC`
- [ ]  🔴 `next.config.ts`: images, redirects, rewrites, headers e environment
- [ ]  🟡 basePath, output, transpilePackages, typedRoutes, reactCompiler e Turbopack

# NÍVEL 32 — Build e Deployment

- [ ]  🔴 Development/Production Build, `next build` e erros de build
- [ ]  🔴 Vercel
- [ ]  🟡 Node Server, Docker, Self-hosting, CDN e Reverse Proxy
- [ ]  🟡 CI/CD: pipelines, build, lint, tests, deploy, preview environments e rollback
- [ ]  🟡 GitHub Actions
- [ ]  🔵 Azure Pipelines

# NÍVEL 33 — Qualidade de código

- [ ]  🔴 ESLint, TypeScript Strict, Prettier, Lint, Formatting e Code Review
- [ ]  🟡 Husky, lint-staged, pre-commit hooks, commitlint e Conventional Commits

# NÍVEL 34 — Debugging

- [ ]  🔴 Browser DevTools: Console, Network, Elements, Application e Sources
- [ ]  🔴 React DevTools e Components
- [ ]  🟡 Profiler
- [ ]  🔴 Logs server/client, Build Errors, Hydration Errors, Boundary Errors e Cache Problems
- [ ]  🟡 Source Maps

# NÍVEL 35 — Observabilidade

- [ ]  🟡 Logging, Error Tracking, Metrics e Traces
- [ ]  🟡 Sentry, OpenTelemetry, Analytics e Web Vitals
- [ ]  🟡 `instrumentation.ts`, Instrumentation Client e `useReportWebVitals`

# NÍVEL 36 — Internacionalização

- [ ]  🟡 i18n, Locales, Tradução, moedas, datas e Timezone
- [ ]  🟡 Routing internacionalizado
- [ ]  🔵 next-intl

# NÍVEL 37 — Next.js avançado

- [ ]  🟣 RSC, Streaming, Suspense, Partial Rendering, Hydration e Selective Hydration
- [ ]  🟣 Cache Components, `use cache`, cacheLife, cacheTag, updateTag e ISR
- [ ]  🟣 Prefetching, Partial Prefetching, Instant Navigation, Preserving UI State e Preventing Flash
- [ ]  🟣 BFF, Multi-tenant, Multi-zones e Self-hosting
- [ ]  🔵 Adapters e Custom Servers
- [ ]  🟣 Turbopack e Server vs Client Bundle
- [ ]  🟡 Code Splitting, Tree Shaking, Bundle Size e Package Optimization

# NÍVEL 38 — Pages Router

- [ ]  🟡 `/pages`, `_app.tsx`, `_document.tsx`
- [ ]  🟡 `getServerSideProps`, `getStaticProps`, `getStaticPaths`
- [ ]  🟡 API Routes e `next/router`
- [ ]  🟡 diferenças para App Router e migração Pages → App Router

# NÍVEL 39 — Banco de dados para Front-end Next.js

- [ ]  🟡 SQL básico, tabelas, PK/FK, relacionamentos e joins
- [ ]  🟡 Migrations e Transactions
- [ ]  🔵 Prisma
- [ ]  🔵 Drizzle

# NÍVEL 40 — Ferramentas de um desenvolvedor pleno

- [ ]  🔴 VS Code, Git, Browser DevTools, Postman/Insomnia, npm/pnpm, ESLint, Prettier e React DevTools
- [ ]  🟡 Docker, Figma Dev Mode, GitHub/GitLab/Azure DevOps, CI/CD e Swagger/OpenAPI

# NÍVEL 41 — Habilidades que diferenciam Júnior de Pleno

- [ ]  🔴 Entender requisitos, Edge Cases, quebrar tarefas e estimar impacto
- [ ]  🔴 Escolher Server/Client Component, onde buscar dados, cache, estado e componentização
- [ ]  🔴 Ler código de terceiros, trabalhar em projetos grandes, refatorar e identificar dívida técnica
- [ ]  🔴 Investigar, reproduzir e encontrar causa raiz de bugs
- [ ]  🔴 Pull Requests, Code Review, Git, comunicação técnica e documentação
- [ ]  🔴 TypeScript, testes, acessibilidade, performance, segurança e SEO

# NÍVEL 42 — Extras para um Pleno forte

## PWA

- [ ]  🔵 Service Workers, Manifest, Offline, Installability e Caching

## MDX e CMS

- [ ]  🔵 Markdown, MDX, Strapi, Contentful, Sanity e WordPress Headless

## Storybook

- [ ]  🔵 Stories, Component Documentation e Visual Testing

## Monorepos

- [ ]  🔵 pnpm workspaces, Turborepo, Shared Packages e Shared UI

## Microfrontends

- [ ]  🔵 Conceitos, vantagens, problemas e Module Federation

## Docker

- [ ]  🔵 Dockerfile, Containers, Images, Multi-stage Builds e Docker Compose

## Realtime e APIs

- [ ]  🔵 WebSockets, Notifications, Chat, GraphQL e Apollo

## Uploads

- [ ]  🔵 Multipart, Signed URLs, S3, Progress e Validation

## Feature Flags

- [ ]  🔵 Rollout, A/B e Feature Toggles

---

# Ordem geral de estudo

## Fundamentos

- [ ]  Lógica → Web/HTTP → HTML → CSS → JavaScript → Git → TypeScript

## React

- [ ]  React básico → Hooks → Estado → Effects → React avançado → React 19

## Next.js

- [ ]  App Router → Routing → Layouts → Server/Client Components → Data Fetching → Rendering → Streaming/Suspense → Cache/Revalidation → Server Actions → Route Handlers → Forms → State Management

## Profissional

- [ ]  APIs → Authentication → Authorization → Security → SEO → Accessibility → Performance → Testing → Architecture → Design System → CI/CD → Deployment → Observability

## Avançado

- [ ]  Cache Components → RSC Internals → Parallel/Intercepting Routes → Prefetching avançado → BFF → Turbopack → Multi-tenant/Multi-zones → Pages Router/legados

<aside>
🏁

**Critério de chegada ao nível pleno:** conseguir decidir onde uma funcionalidade será renderizada, como buscar e cachear dados, onde manter o estado, como estruturar componentes, como proteger e testar a aplicação e como analisar performance e acessibilidade.

</aside>