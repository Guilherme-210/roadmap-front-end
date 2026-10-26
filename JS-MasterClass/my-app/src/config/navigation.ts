import { JS_MASTERCLASS_LESSONS } from "@/data/courses/javascript-masterclass";
import { APP_ROUTES } from "@/shared/constants/app-routes";

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
    label: APP_ROUTES.public.javaScript.name,
    href: APP_ROUTES.public.javaScript.path,
    description: "Apresentação da trilha de JavaScript",
  },
  {
    id: "grade-curso",
    label: APP_ROUTES.public.javaScript.masterclass.name,
    href: APP_ROUTES.public.javaScript.masterclass.path,
    badge: "28 Aulas",
    description: "Grade curricular completa de Rodrigo Branas",
  },
  ...JS_MASTERCLASS_LESSONS.map((lesson) => {
    const lessonRoute = APP_ROUTES.public.javaScript.masterclass.lesson(lesson.slug);

    return {
      id: `lesson-${lesson.slug}`,
      label: lessonRoute.name,
      href: lessonRoute.path,
      badge: lesson.type === "pdf" ? "PDF" : undefined,
      description: lesson.introduction,
    };
  }),
];

/**
 * Mapa do Site enxuto contendo APENAS as seções e páginas reais do projeto
 * Sem links em excesso ou seções fictícias não solicitadas
 */
export const SITE_MAP: NavigationSection[] = [
  {
    id: "java-script",
    label: APP_ROUTES.public.javaScript.name,
    href: APP_ROUTES.public.javaScript.path,
    badge: "28 Aulas",
    description: "Curso completo JavaScript MasterClass ministrado por Rodrigo Branas",
    subItems: COURSE_LESSON_SUBITEMS,
  },
  {
    id: "documentacao",
    label: APP_ROUTES.public.documentation.name,
    href: APP_ROUTES.public.documentation.path,
    badge: "Docs",
    description: "Documentação técnica e referências funcionais",
    subItems: [
      {
        id: "doc-geral",
        label: APP_ROUTES.public.documentation.name,
        href: APP_ROUTES.public.documentation.path,
        description: "Listagem geral de linguagens documentadas",
      },
      {
        id: "doc-js",
        label: APP_ROUTES.public.documentation.javaScript.name,
        href: APP_ROUTES.public.documentation.javaScript.path,
        description: "Tópicos e métodos da biblioteca padrão de JavaScript",
      },
      {
        id: "doc-array-map",
        label: APP_ROUTES.public.documentation.arrayMap.name,
        href: APP_ROUTES.public.documentation.arrayMap.path,
        badge: "Resumo",
        description: "Transformação declarativa e imutabilidade",
      },
      {
        id: "doc-array-filter",
        label: APP_ROUTES.public.documentation.arrayFilter.name,
        href: APP_ROUTES.public.documentation.arrayFilter.path,
        badge: "Resumo",
        description: "Seleção condicional e imutabilidade",
      },
    ],
  },
  {
    id: "playground",
    label: APP_ROUTES.public.playground.name,
    href: APP_ROUTES.public.playground.path,
    badge: "Live",
    description: "Ambiente interativo de execução isolada em JavaScript",
    subItems: [
      {
        id: "playground-main",
        label: APP_ROUTES.public.playground.name,
        href: APP_ROUTES.public.playground.path,
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
  const normalizedPath = pathname === APP_ROUTES.legacy.documentation.path
    ? APP_ROUTES.public.documentation.path
    : pathname;

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
      { label: APP_ROUTES.public.javaScript.name, href: APP_ROUTES.public.javaScript.path },
      { label: APP_ROUTES.public.javaScript.masterclass.name, href: APP_ROUTES.public.javaScript.masterclass.path },
      { label: APP_ROUTES.public.javaScript.masterclass.lessons.boolean.name, href: APP_ROUTES.public.javaScript.masterclass.lessons.boolean.path },
      { label: APP_ROUTES.public.javaScript.masterclass.lessons.json.name, href: APP_ROUTES.public.javaScript.masterclass.lessons.json.path },
      { label: APP_ROUTES.public.javaScript.masterclass.lessons["correcao-do-exercicio-2"].name, href: APP_ROUTES.public.javaScript.masterclass.lessons["correcao-do-exercicio-2"].path },
    ],
  },
  {
    title: "FERRAMENTAS & DOCS",
    links: [
      { label: APP_ROUTES.public.playground.name, href: APP_ROUTES.public.playground.path, badge: "Live" },
      { label: APP_ROUTES.public.documentation.name, href: APP_ROUTES.public.documentation.path },
      { label: APP_ROUTES.public.documentation.javaScript.name, href: APP_ROUTES.public.documentation.javaScript.path },
      { label: APP_ROUTES.public.documentation.arrayMap.name, href: APP_ROUTES.public.documentation.arrayMap.path },
    ],
  },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: "github",
    label: APP_ROUTES.external.github.name,
    href: APP_ROUTES.external.github.path,
    icon: "github",
  },
  {
    id: "youtube",
    label: APP_ROUTES.external.youtube.name,
    href: APP_ROUTES.external.youtube.path,
    icon: "youtube",
  },
  {
    id: "x",
    label: APP_ROUTES.external.x.name,
    href: APP_ROUTES.external.x.path,
    icon: "x",
  },
  {
    id: "linkedin",
    label: APP_ROUTES.external.linkedin.name,
    href: APP_ROUTES.external.linkedin.path,
    icon: "linkedin",
  },
  {
    id: "discord",
    label: APP_ROUTES.external.discord.name,
    href: APP_ROUTES.external.discord.path,
    icon: "discord",
  },
];
