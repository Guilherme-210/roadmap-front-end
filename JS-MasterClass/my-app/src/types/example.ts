import type { SupportedLanguage } from "./runner";

export type ExampleDifficulty = "iniciante" | "intermediario" | "avancado";

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  language: SupportedLanguage;
  initialCode: string;
  category: string;
  difficulty?: ExampleDifficulty;
  tags?: string[];
  explanation?: string;
}

