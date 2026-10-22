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
 * Subitens de aulas gerados a partir das 28 aulas reais do professor Rodrigo Branas
 * Rota oficial: /java-script/cursos/java-script-masterclass/<aula>
 */
const COURSE_LESSON_SUBITEMS: NavigationSubItem[] = [
  {
    id: "hub-js",
    label: "Visão Geral",
    href: "/java-script",
    description: "Apresentação da trilha de JavaScript",
  },
  {
    id: "grade-curso",
    label: "Grade do Curso",
    href: "/java-script/cursos/java-script-masterclass",
    badge: "28 Aulas",
    description: "Grade curricular completa de Rodrigo Branas",
  },
  ...JS_MASTERCLASS_LESSONS.map((lesson) => ({
    id: `lesson-${lesson.slug}`,
    label: `${lesson.number}. ${lesson.title}`,
    href: `/java-script/cursos/java-script-masterclass/${lesson.slug}`,
    badge: lesson.type === "pdf" ? "PDF" : undefined,
    description: lesson.introduction,
  })),
];

/**
 * Mapa do Site enxuto contendo APENAS as seções e páginas reais do projeto
 * Sem links em excesso ou seções fictícias não solicitadas
 */
export const SITE_MAP: NavigationSection[] = [
  {
    id: "java-script",
    label: "JavaScript",
    href: "/java-script",
    badge: "28 Aulas",
    description: "Curso completo JavaScript MasterClass ministrado por Rodrigo Branas",
    subItems: COURSE_LESSON_SUBITEMS,
  },
  {
    id: "documentacao",
    label: "Documentação",
    href: "/documentacao",
    badge: "Docs",
    description: "Documentação técnica e referências funcionais",
    subItems: [
      {
        id: "doc-geral",
        label: "Linguagens",
        href: "/documentacao",
        description: "Listagem geral de linguagens documentadas",
      },
      {
        id: "doc-js",
        label: "JavaScript",
        href: "/documentacao/java-script",
        description: "Tópicos e métodos da biblioteca padrão de JavaScript",
      },
      {
        id: "doc-array-map",
        label: "Array.map()",
        href: "/documentacao/java-script/array-map",
        badge: "Resumo",
        description: "Transformação declarativa e imutabilidade",
      },
      {
        id: "doc-array-filter",
        label: "Array.filter()",
        href: "/documentacao/java-script/array-filter",
        badge: "Resumo",
        description: "Seleção condicional e imutabilidade",
      },
    ],
  },
  {
    id: "playground",
    label: "Playground",
    href: "/playground",
    badge: "Live",
    description: "Ambiente interativo de execução isolada em JavaScript",
    subItems: [
      {
        id: "playground-main",
        label: "Editor & Console",
        href: "/playground",
        description: "Editor Monaco com execução e console em tempo real",
      },
    ],
  },
];

/**
 * Identifica a seção principal e subitem ativo a partir do pathname
 */
export function getActiveNavigation(pathname: string): {
  activeSection: NavigationSection;
  activeSubItem?: NavigationSubItem;
} {
  // Tratar aliases como /javascript para a seção de documentacao
  const normalizedPath = pathname === "/javascript" ? "/documentacao" : pathname;

  // 1. Tentar encontrar seção por correspondência direta de href
  let matchedSection = SITE_MAP.find((section) => {
    if (section.href === "/" && normalizedPath === "/") return true;
    if (section.href !== "/" && (normalizedPath === section.href || normalizedPath.startsWith(`${section.href}/`))) return true;
    return false;
  });

  // Se não encontrar por href direto da seção, verificar se alguma sub-rota corresponde ao pathname
  if (!matchedSection) {
    for (const section of SITE_MAP) {
      const found = section.subItems.some((sub) => {
        if (sub.href === normalizedPath) return true;
        if (sub.href !== "/" && (normalizedPath === sub.href || normalizedPath.startsWith(`${sub.href}/`))) return true;
        return false;
      });
      if (found) {
        matchedSection = section;
        break;
      }
    }
  }

  // Fallback padrão: primeira seção (JavaScript)
  const activeSection = matchedSection || SITE_MAP[0];

  // 2. Identificar subitem ativo dentro da seção (priorizar correspondência exata, depois o prefixo mais específico/longo)
  const exactSubItem = activeSection.subItems.find((sub) => sub.href === normalizedPath);
  const prefixSubItem = [...activeSection.subItems]
    .filter((sub) => sub.href !== "/" && (normalizedPath === sub.href || normalizedPath.startsWith(`${sub.href}/`)))
    .sort((a, b) => b.href.length - a.href.length)[0];

  const activeSubItem = exactSubItem || prefixSubItem;

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
 * Colunas do Footer limpas, sem excesso de links inexistentes
 */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "CURSO JAVASCRIPT",
    links: [
      { label: "Visão Geral", href: "/java-script" },
      { label: "Grade Completa (28 Aulas)", href: "/java-script/cursos/java-script-masterclass" },
      { label: "Aula 9: Boolean", href: "/java-script/cursos/java-script-masterclass/boolean" },
      { label: "Aula 14: JSON", href: "/java-script/cursos/java-script-masterclass/json" },
      { label: "Aula 15.1: Correção Ex. 2", href: "/java-script/cursos/java-script-masterclass/correcao-do-exercicio-2" },
    ],
  },
  {
    title: "FERRAMENTAS & DOCS",
    links: [
      { label: "Playground Interativo", href: "/playground", badge: "Live" },
      { label: "Documentação Geral", href: "/documentacao" },
      { label: "Documentação JavaScript", href: "/documentacao/java-script" },
      { label: "Array.prototype.map()", href: "/documentacao/java-script/array-map" },
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
