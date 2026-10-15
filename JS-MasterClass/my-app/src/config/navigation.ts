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
 * Links do Header controlados a partir de variáveis globais
 * Conforme requisito: "os links do header devem ser controlados em um arquivo global a partir de variaveis"
 */
export const HEADER_NAV_LINKS: NavLinkItem[] = [
  {
    id: "aulas",
    label: "Aulas",
    href: "/aulas/boolean",
    dropdown: [
      {
        label: "Tipos Primitivos & Boolean",
        href: "/aulas/boolean",
        description: "Valores truthy/falsy, coerção e comparações estritas.",
      },
      {
        label: "Funções & Escopo Léxico",
        href: "#aulas-funcoes",
        description: "Closures, Arrow Functions e Higher-Order Functions.",
      },
      {
        label: "Assincronismo & Promises",
        href: "#aulas-async",
        description: "Event Loop, Microtasks, Async/Await e Generators.",
      },
      {
        label: "Orientação a Objetos & Protótipos",
        href: "#aulas-poo",
        description: "Prototype chain, classes e Design Patterns em JS.",
      },
    ],
  },
  {
    id: "formacoes",
    label: "Formações",
    href: "#formacoes",
    badge: "Novo",
  },
  {
    id: "roadmap",
    label: "Roadmap",
    href: "#roadmap",
  },
  {
    id: "desafios",
    label: "Desafios",
    href: "#desafios",
  },
  {
    id: "blog",
    label: "Blog",
    href: "#blog",
  },
];

/**
 * Seções do Footer também configuradas por variáveis
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
      { label: "Trilha de Aprendizado", href: "#roadmap" },
      { label: "Aulas Interativas", href: "/aulas/boolean" },
      { label: "Laboratórios de Código", href: "#labs" },
      { label: "Instrutores & Mentores", href: "#mentores" },
      { label: "Comunidade Discord", href: "#comunidade" },
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
