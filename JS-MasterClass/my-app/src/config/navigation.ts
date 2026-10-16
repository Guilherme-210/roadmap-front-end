import { JS_MASTERCLASS_LESSONS } from "@/data/courses/javascript-masterclass";

export interface NavigationSubItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavigationSection {
  id: string;
  label: string;
  href: string;
  badge?: string;
  description?: string;
  subItems: NavigationSubItem[];
}

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
  dropdown?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

export interface SocialLinkItem {
  id: string;
  label: string;
  href: string;
  icon: "github" | "youtube" | "x" | "linkedin" | "discord";
}

export interface FooterColumn {
  title: string;
  links: Array<{
    label: string;
    href: string;
    badge?: string;
  }>;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  versionBadge: string;
  currentYear: number;
}

export const SITE_CONFIG: SiteConfig = {
  name: "JS MasterClass",
  shortName: "JS.mc",
  tagline: "Do fundamento à arquitetura avançada em JavaScript",
  description: "Plataforma de especialização em JavaScript, TypeScript e arquitetura moderna de software.",
  versionBadge: "v2.0",
  currentYear: 2026,
};

/**
 * Subitens de aulas gerados diretamente da grade das 25 aulas do Rodrigo Branas
 */
const COURSE_LESSON_SUBITEMS: NavigationSubItem[] = [
  {
    id: "hub-cursos",
    label: "Aulas JS (Hub)",
    href: "/aulas/java-script",
    description: "Visão geral das formações e cursos de JavaScript",
  },
  {
    id: "grade-curso",
    label: "Grade do Curso",
    href: "/aulas/java-script/java-script-masterclass",
    badge: "28 Aulas",
    description: "Grade curricular completa de Rodrigo Branas",
  },
  ...JS_MASTERCLASS_LESSONS.map((lesson) => ({
    id: `lesson-${lesson.slug}`,
    label: `${lesson.number}. ${lesson.title}`,
    href: `/aulas/java-script/java-script-masterclass/${lesson.slug}`,
    badge: lesson.type === "pdf" ? "PDF" : undefined,
    description: lesson.introduction,
  })),
];

/**
 * Mapa Completo do Site (SITE_MAP)
 * Estrutura hierárquica oficial para MainNavigation, SubNavigation e NavigationDrawer
 */
export const SITE_MAP: NavigationSection[] = [
  {
    id: "aulas",
    label: "Cursos & Aulas",
    href: "/aulas/java-script",
    badge: "28 Aulas",
    description: "Formações completas e aulas práticas de JavaScript e TypeScript",
    subItems: COURSE_LESSON_SUBITEMS,
  },
  {
    id: "playground",
    label: "Playground",
    href: "/playground",
    badge: "Live",
    description: "Ambiente interativo de execução isolada em JavaScript",
    subItems: [
      {
        id: "playground-root",
        label: "Playground Livre",
        href: "/playground",
        description: "Editor Monaco completo com console e controles em tempo real",
      },
      {
        id: "demo-map",
        label: "Demo: Array.map",
        href: "/playground?demo=map",
        description: "Transformação funcional e mapeamento de dados",
      },
      {
        id: "demo-boolean",
        label: "Demo: Booleans",
        href: "/playground?demo=boolean",
        description: "Coerção estrita, truthy, falsy e operadores lógicos",
      },
      {
        id: "demo-number",
        label: "Demo: Números & IEEE",
        href: "/playground?demo=number",
        description: "Ponto flutuante, precisão e limites de representação",
      },
      {
        id: "demo-object",
        label: "Demo: Objetos & Protos",
        href: "/playground?demo=object",
        description: "Manipulação de chaves, protótipos e referências",
      },
      {
        id: "demo-async",
        label: "Demo: Async/Await",
        href: "/playground?demo=async",
        description: "Promises e fluxo assíncrono moderno",
      },
    ],
  },
  {
    id: "documentacao",
    label: "Documentação",
    href: "/javascript",
    description: "Guias didáticos e referências com laboratórios interativos",
    subItems: [
      {
        id: "doc-map",
        label: "Array.prototype.map()",
        href: "/javascript",
        description: "Documentação completa do método funcional",
      },
      {
        id: "doc-signature",
        label: "Sintaxe & Parâmetros",
        href: "/javascript#concept",
        description: "Assinatura formal e contratos de argumentos",
      },
      {
        id: "doc-playground",
        label: "Laboratório Interativo",
        href: "/javascript#playground",
        description: "Editor embutido para experimentar o método map",
      },
      {
        id: "doc-best-practices",
        label: "Boas Práticas",
        href: "/javascript#best-practices",
        description: "Diretrizes de performance e imutabilidade",
      },
      {
        id: "doc-functional",
        label: "Métodos Funcionais",
        href: "/javascript#functional",
        description: "Combinações com filter, reduce e flatMap",
      },
    ],
  },
  {
    id: "formacoes",
    label: "Formações",
    href: "#formacoes",
    badge: "Novo",
    description: "Trilhas de especialização para engenheiros front-end",
    subItems: [
      {
        id: "formacao-core-js",
        label: "JavaScript Core & V8",
        href: "#formacao-js",
        description: "Mecanismos internos, memória e event loop",
      },
      {
        id: "formacao-typescript",
        label: "TypeScript Avançado",
        href: "#formacao-ts",
        description: "Generics, conditional types e tipagem estrita",
      },
      {
        id: "formacao-arquitetura",
        label: "Arquitetura Front-End",
        href: "#formacao-arq",
        description: "Design modular, micro frontends e componentização",
      },
      {
        id: "formacao-patterns",
        label: "Design Patterns em JS",
        href: "#formacao-patterns",
        description: "Padrões de projeto clássicos e modernos em ECMAScript",
      },
    ],
  },
  {
    id: "roadmap",
    label: "Roadmap",
    href: "#roadmap",
    description: "Guia passo a passo de progressão na carreira front-end",
    subItems: [
      {
        id: "road-iniciante",
        label: "Trilha 01: Fundamentos",
        href: "#roadmap-fundamentos",
        description: "Sintaxe, tipos primitivos, estruturas condicionais e funções",
      },
      {
        id: "road-dom",
        label: "Trilha 02: DOM & Navegador",
        href: "#roadmap-dom",
        description: "Eventos, manipulação de árvore e APIs web nativas",
      },
      {
        id: "road-es6",
        label: "Trilha 03: ES6+ Moderno",
        href: "#roadmap-es6",
        description: "Módulos, desestruturação, classes e recursos contemporâneos",
      },
      {
        id: "road-v8",
        label: "Trilha 04: Assincronismo & V8",
        href: "#roadmap-v8",
        description: "Microtasks, Macrotasks, Call Stack e garbage collection",
      },
      {
        id: "road-pro",
        label: "Trilha 05: Engenheiro Sênior",
        href: "#roadmap-pro",
        description: "Performance, observabilidade, SSR e escalabilidade",
      },
    ],
  },
  {
    id: "desafios",
    label: "Desafios",
    href: "#desafios",
    description: "Desafios práticos e exercícios de código com correção",
    subItems: [
      {
        id: "desafio-ex1",
        label: "Exercício 1: Tipos Primitivos",
        href: "/aulas/java-script/java-script-masterclass/exercicio-1",
        description: "Exercício prático do curso JavaScript MasterClass",
      },
      {
        id: "desafio-ex1-correcao",
        label: "Correção do Exercício 1",
        href: "/aulas/java-script/java-script-masterclass/correcao-do-exercicio-1",
        description: "Resolução em vídeo comentada passo a passo",
      },
      {
        id: "desafio-coercao",
        label: "Lab: Coerção Extrema",
        href: "#desafio-coercao",
        description: "Pegadinhas de conversão de tipos em JavaScript",
      },
      {
        id: "desafio-clone",
        label: "Lab: Deep Clone Seguro",
        href: "#desafio-clone",
        description: "Implementação de cópia recursiva e referências circulares",
      },
    ],
  },
  {
    id: "mapa-do-site",
    label: "Mapa do Site",
    href: "/mapa-do-site",
    description: "Índice navegacional com todas as páginas, cursos e ferramentas",
    subItems: [
      {
        id: "mapa-geral",
        label: "Visão Geral do Portal",
        href: "/mapa-do-site#geral",
        description: "Estrutura completa das rotas do projeto",
      },
      {
        id: "mapa-todas-aulas",
        label: "Todas as 25 Aulas",
        href: "/mapa-do-site#aulas",
        description: "Índice direto de todas as aulas do Rodrigo Branas",
      },
      {
        id: "mapa-ferramentas",
        label: "Ambientes & Laboratórios",
        href: "/mapa-do-site#ambientes",
        description: "Playground, documentação e demos executáveis",
      },
    ],
  },
];

/**
 * Função utilitária para identificar a seção e subitem ativos a partir do pathname
 */
export function getActiveNavigation(pathname: string): {
  activeSection: NavigationSection;
  activeSubItem?: NavigationSubItem;
} {
  // 1. Tentar encontrar seção por correspondência exata ou de prefixo
  let matchedSection = SITE_MAP.find((section) => {
    if (section.href === "/" && pathname === "/") return true;
    if (section.href !== "/" && pathname.startsWith(section.href)) return true;
    return false;
  });

  // Se não encontrar por href direto da seção, verificar se alguma sub-rota corresponde ao pathname
  if (!matchedSection) {
    for (const section of SITE_MAP) {
      const found = section.subItems.some((sub) => {
        if (sub.href === pathname) return true;
        if (sub.href !== "/" && pathname.startsWith(sub.href)) return true;
        return false;
      });
      if (found) {
        matchedSection = section;
        break;
      }
    }
  }

  // Fallback padrão: primeira seção (Cursos & Aulas)
  const activeSection = matchedSection || SITE_MAP[0];

  // 2. Identificar subitem ativo dentro da seção
  const activeSubItem =
    activeSection.subItems.find((sub) => sub.href === pathname) ||
    activeSection.subItems.find((sub) => sub.href !== "/" && pathname.startsWith(sub.href));

  return { activeSection, activeSubItem };
}

/**
 * HEADER_NAV_LINKS preservado para compatibilidade retroativa
 */
export const HEADER_NAV_LINKS: NavLinkItem[] = SITE_MAP.map((section) => ({
  id: section.id,
  label: section.label,
  href: section.href,
  badge: section.badge,
  dropdown: section.subItems.map((sub) => ({
    label: sub.label,
    href: sub.href,
    description: sub.description,
  })),
}));

/**
 * Seções do Footer configuradas por variáveis
 */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "FORMAÇÕES",
    links: [
      { label: "JavaScript Core & Modern Features", href: "#formacao-js" },
      { label: "TypeScript & Tipagem Avançada", href: "#formacao-ts" },
      { label: "Arquitetura Front-End & Clean Code", href: "#formacao-arq" },
      { label: "Design Patterns & SOLID em JS", href: "#formacao-patterns" },
    ],
  },
  {
    title: "SITE",
    links: [
      { label: "Playground Interativo", href: "/playground", badge: "Novo" },
      { label: "JavaScript MasterClass (Branas)", href: "/aulas/java-script/java-script-masterclass" },
      { label: "Aula 9: Booleans & Coerção", href: "/aulas/java-script/java-script-masterclass/boolean" },
      { label: "Documentação Array.map()", href: "/javascript" },
      { label: "Mapa do Site", href: "/mapa-do-site" },
      { label: "Trilha de Aprendizado", href: "#roadmap" },
      { label: "Laboratórios de Código", href: "#labs" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Termos de Uso", href: "#termos" },
      { label: "Política de Privacidade", href: "#privacidade" },
      { label: "Código de Conduta", href: "#conduta" },
      { label: "Licença & Propriedade", href: "#licenca" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com",
    icon: "github",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com",
    icon: "youtube",
  },
  {
    id: "x",
    label: "X (Twitter)",
    href: "https://x.com",
    icon: "x",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.com",
    icon: "discord",
  },
];
