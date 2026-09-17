# Prática e Exercícios do Roadmap

[[Bem-vindo|← Início]]

Esta é a central de exercícios práticos do roadmap. Cada subnível das notas em [[Roadmap completo|01 - Roadmap]] possui um exercício de fixação correspondente, criado utilizando o [[Modelo - Exercício]].

---

## Estrutura do Ambiente de Prática

Todos os exercícios práticos compartilham o mesmo projeto Next.js em `next-lab/`, localizado na raiz do repositório (`roadmap-front-end`).

- **Análise da Quantidade:** Antes de gerar exercícios para um subnível, analisa-se a amplitude do conteúdo para definir se ele exige 1 ou mais exercícios complementares.
- **Localização no Cofre:** `obsidian/03 - Prática/<Nome do Nível>/` (ex.: `03 - Prática/Nível 07 - React/`)
- **Imutabilidade e Versões:** Se um subnível já tiver um exercício, o antigo não é alterado/apagado; novos exercícios alteram apenas o sufixo (ex.: `React - Exercício 01 - {novo nome}`).
- **Convenção de Rotas:** `/exercicios/<tecnologia-ou-modulo>/<subnivel-nome>`
- **Documentação do Ambiente:** [[Ambiente de prática - Next.js e dependências]]
- **Guia de Rotas do App:** `next-lab/app/exercicios/README.md`

---

## Índice de Exercícios por Nível

### Nível 00 — Fundamentos de programação e ambiente
- [[Fundamentos - Exercício 01 - Calculadora de console]] — **Subnível 0.1**; proposto; variáveis, tipos primitivos, operadores e I/O.
- [[Fundamentos - Exercício 02 - Validador de dados]] — **Subnível 0.2**; proposto; estruturas de controle, loops e try/catch.
- [[Fundamentos - Exercício 03 - Gerenciador de tarefas CLI]] — **Subnível 0.3**; proposto; funções, escopo, coleções e pilhas/filas.
- [[Fundamentos - Exercício 04 - Analisador de complexidade]] — **Subnível 0.4**; proposto; recursão, algoritmos e análise Big O.
- [[Fundamentos - Exercício 05 - Navegação e automação no terminal]] — **Subnível 0.5**; proposto; comandos de navegação, arquivos, PATH e scripts.
- [[Fundamentos - Exercício 06 - Anatomia de um projeto Node.js]] — **Subnível 0.6**; proposto; runtime Node.js, package.json, SemVer e ESM vs CJS.

### Nível 01 — Fundamentos da Web
- [[Web - Exercício 01 - Mapa da arquitetura web]] — **Subnível 1.1**; proposto; modelo cliente-servidor, browser engines, DNS e CDNs.
- [[Web - Exercício 02 - Inspetor de requisições HTTP]] — **Subnível 1.2**; proposto; protocolo HTTP/HTTPS, TLS/SSL, requests/responses e headers.
- [[Web - Exercício 03 - Laboratório de métodos e status]] — **Subnível 1.3**; proposto; verbos CRUD, semântica/idempotência e faixas de status.
- [[Web - Exercício 04 - Explorador de cookies e CORS]] — **Subnível 1.4**; proposto; cookies, authorization, política de mesma origem/CORS e cache.

### Nível 02 — HTML
- [[HTML - Exercício 01 - Página de perfil]] — **Subnível 2.1**; proposto; estrutura HTML, headings, mídias, listas, tabelas e formulários.
- [[HTML - Exercício 02 - Refatoração semântica]] — **Subnível 2.2**; proposto; eliminação de div soup com header, main, nav, section, article, aside e footer.
- [[HTML - Exercício 03 - Formulário de cadastro validado]] — **Subnível 2.3**; proposto; formulário com constraint validation nativa, fieldset e autocomplete.
- [[HTML - Exercício 04 - Auditoria de acessibilidade]] — **Subnível 2.4**; proposto; a11y, foco por teclado, landmarks, atributos aria-* e auditoria Lighthouse.

### Nível 03 — CSS
- [[CSS - Exercício 01 - Estilização de cartão de perfil]] — **Subnível 3.1**; proposto; seletores, especificidade sem !important, herança e pseudo-elementos.
- [[CSS - Exercício 02 - Laboratório do Box Model]] — **Subnível 3.2**; proposto; border-box vs content-box, colapso de margens e reset universal.
- [[CSS - Exercício 03 - Dashboard com Flexbox e Grid]] — **Subnível 3.3**; proposto; diagramação macro com Grid e micro com Flexbox, auto-fit vs auto-fill.
- [[CSS - Exercício 04 - Layout responsivo mobile-first]] — **Subnível 3.4**; proposto; mobile-first, media queries, imagens responsivas e Container Queries.
- [[CSS - Exercício 05 - Painel com variáveis e animações]] — **Subnível 3.5**; proposto; CSS variables, clamp(), nesting nativo, logical properties e keyframes.
- [[CSS - Exercício 06 - Sistema de design com tokens]] — **Subnível 3.6**; proposto; tokens de design, CSS Modules e alternador de tema claro/escuro.

### Nível 04 — JavaScript
- [[JavaScript - Exercício 01 - Conversor de unidades]] — **Subnível 4.1**; proposto; sintaxe moderna ES6+, arrow functions e template strings.
- [[JavaScript - Exercício 02 - Transformador de dados com arrays]] — **Subnível 4.2**; proposto; pipeline de métodos funcionais de array e imutabilidade.
- [[JavaScript - Exercício 03 - Construtor de perfil com objetos]] — **Subnível 4.3**; proposto; destructuring, spread/rest, Object.entries e operadores ?. e ??.
- [[JavaScript - Exercício 04 - Fábrica de funções utilitárias]] — **Subnível 4.4**; proposto; higher-order functions, closures, funções puras e currying.
- [[JavaScript - Exercício 05 - Agregador de APIs assíncrono]] — **Subnível 4.5**; proposto; Promises, async/await, Promise.all vs allSettled e Event Loop.
- [[JavaScript - Exercício 06 - Cliente HTTP com Fetch]] — **Subnível 4.6**; proposto; Fetch API nativa, tratamento de status, erros e AbortController.
- [[JavaScript - Exercício 07 - Refatoração para módulos ES]] — **Subnível 4.7**; proposto; ES Modules, barrel files e code splitting com dynamic import.
- [[JavaScript - Exercício 08 - Explorador de protótipos e classes]] — **Subnível 4.8**; proposto; hoisting, this, herança prototipal, structuredClone e GC.

### Nível 05 — Git e GitHub - Azure DevOps
- [[Git - Exercício 01 - Repositório do zero]] — **Subnível 5.1**; proposto; fluxo diário do Git, criação de branches e resolução de conflitos de merge.
- [[Git - Exercício 02 - Simulação de fluxo profissional]] — **Subnível 5.2**; proposto; rebase interativo, squash, cherry-pick, revert, reset e reflog.
- [[Git - Exercício 03 - Workflow com Conventional Commits]] — **Subnível 5.3**; proposto; padronização de commits, Git Flow vs Trunk-Based e CI/CD.

### Nível 06 — TypeScript
- [[TypeScript - Exercício 01 - Tipagem de domínio]] — **Subnível 6.1**; proposto; inferência estática, primitivos, tuplas e propriedades opcionais.
- [[TypeScript - Exercício 02 - Modelagem com tipos compostos]] — **Subnível 6.2**; proposto; union, intersection, interfaces vs types e eliminação do any.
- [[TypeScript - Exercício 03 - Guardas de tipo e narrowing]] — **Subnível 6.3**; proposto; afunilamento com guardas, discriminated unions e type predicates.
- [[TypeScript - Exercício 04 - Funções e interfaces genéricas]] — **Subnível 6.4**; proposto; generics reutilizáveis, generic constraints (extends) e defaults.
- [[TypeScript - Exercício 05 - Tipos derivados e mapeados]] — **Subnível 6.5**; proposto; keyof, typeof, as const, satisfies, mapped types e infer.
- [[TypeScript - Exercício 06 - Utilitários de tipo aplicados]] — **Subnível 6.6**; proposto; Partial, Required, Pick, Omit, Record, ReturnType e Awaited.
- [[TypeScript - Exercício 07 - Configuração profissional do tsconfig]] — **Subnível 6.7**; proposto; tsconfig.json, modo strict, path aliases e moduleResolution.

### Nível 07 — React
- [[React - Exercício 01 - Cartão de estudo]] — **Subnível 7.1**; proposto; cobertura integral dos fundamentos em etapas.
- [[React - Exercício 02 - Hooks fundamentais]] — **Subnível 7.2**; proposto; central de sessões de estudo.
- [[React - Exercício 03 - Organização do estado]] — **Subnível 7.3**; proposto; quadro de estudos com edição e resumo.
- [[React - Exercício 04 - Effects e sincronização]] — **Subnível 7.4**; proposto; sala de estudo com conexão e busca.
- [[React - Exercício 05 - Renderização e identidade]] — **Subnível 7.5**; proposto; laboratório de renderização dos cartões.
- [[React - Exercício 06 - Composição e carregamento]] — **Subnível 7.6**; proposto; painel de detalhes extensível.
- [[React - Exercício 07 - Recursos do React 19]] — **Subnível 7.7**; proposto; central de estudos com operações assíncronas.

### Outros Níveis do Roadmap (Aguardando criação de exercícios por subnível)
*À medida que os exercícios forem sendo criados para cada subnível dos arquivos em `01 - Roadmap`, adicione os links abaixo:*
- **[[Nível 08 - Next.js básico]]** (Subníveis 8.1 a 8.4)
- **[[Nível 09 - Routing no Next.js]]** (Subníveis 9.1 a 9.4)
- **[[Nível 10 - Server Components e Client Components]]** (Subníveis 10.1 a 10.4)
- **[[Nível 11 - Data Fetching]]** (Subníveis 11.1 a 11.4)
- **[[Nível 12 - Rendering]]** (Subníveis 12.1 a 12.3)
- **[[Nível 13 - Cache e Revalidation]]** (Subníveis 13.1 a 13.3)
- **[[Nível 14 - Streaming e Suspense]]** (Subníveis 14.1 a 14.2)
- **[[Nível 15 - Mutação de dados]]** (Subníveis 15.1 a 15.3)
- **[[Nível 16 - Route Handlers e APIs]]** (Subníveis 16.1 a 16.3)
- **[[Nível 17 - Formulários profissionais]]** (Subníveis 17.1 a 17.3)
- **[[Nível 18 - Gerenciamento de estado]]** (Subníveis 18.1 a 18.3)
- **[[Nível 19 - Tratamento de erros]]** (Subníveis 19.1 a 19.3)
- **[[Nível 20 - Autenticação e autorização]]** (Subníveis 20.1 a 20.3)
- **[[Nível 21 - Proxy]]** (Subníveis 21.1 a 21.2)
- **[[Nível 22 - SEO e Metadata]]** (Subníveis 22.1 a 22.3)
- **[[Nível 23 - Imagens, fontes e assets]]** (Subníveis 23.1 a 23.3)
- **[[Nível 24 - Performance]]** (Subníveis 24.1 a 24.4)
- **[[Nível 25 - Acessibilidade]]** (Subníveis 25.1 a 25.3)
- **[[Nível 26 - Testes]]** (Subníveis 26.1 a 26.3)
- **[[Nível 27 - Segurança Front-end - Next.js]]** (Subníveis 27.1 a 27.3)
- **[[Nível 28 - Arquitetura de projetos]]** (Subníveis 28.1 a 28.3)
- **[[Nível 29 - Componentização profissional]]** (Subníveis 29.1 a 29.3)
- **[[Nível 30 - Integração com APIs profissionais]]** (Subníveis 30.1 a 30.3)
- **[[Nível 31 - Environment e configuração]]** (Subníveis 31.1 a 31.2)
- **[[Nível 32 - Build e Deployment]]** (Subníveis 32.1 a 32.3)
- **[[Nível 33 - Qualidade de código]]** (Subníveis 33.1 a 33.2)
- **[[Nível 34 - Debugging]]** (Subníveis 34.1 a 34.3)
- **[[Nível 35 - Observabilidade]]** (Subníveis 35.1 a 35.2)
- **[[Nível 36 - Internacionalização]]** (Subníveis 36.1 a 36.2)
- **[[Nível 37 - Next.js avançado]]** (Subníveis 37.1 a 37.3)
- **[[Nível 38 - Pages Router]]** (Subníveis 38.1 a 38.3)
- **[[Nível 39 - Banco de dados para Front-end Next.js]]** (Subníveis 39.1 a 39.2)
- **[[Nível 40 - Ferramentas de um desenvolvedor pleno]]** (Subníveis 40.1 a 40.2)
- **[[Nível 41 - Habilidades que diferenciam Júnior de Pleno]]** (Subníveis 41.1 a 41.3)
- **[[Nível 42 - Extras para um Pleno forte]]** (Subníveis 42.1 a 42.9)
