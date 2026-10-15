import type { CodeExample } from "@/types/example";
import type { SupportedLanguage } from "@/types/runner";
import { arrayFilterExample } from "./javascript/array-filter";
import { arrayMapExample } from "./javascript/array-map";
import { booleanExample } from "./javascript/boolean";
import { playgroundDefaultExample } from "./javascript/playground-default";

/**
 * Catálogo central de exemplos de código.
 * Organizado de forma desacoplada dos componentes visuais e das rotas.
 */
export const EXAMPLES_CATALOG: CodeExample[] = [
  playgroundDefaultExample,
  arrayMapExample,
  arrayFilterExample,
  booleanExample,
];

/**
 * Busca um exemplo de código pelo seu identificador único.
 */
export function getExampleById(id: string): CodeExample | undefined {
  return EXAMPLES_CATALOG.find((example) => example.id === id);
}

/**
 * Retorna todos os exemplos de uma determinada categoria.
 */
export function getExamplesByCategory(category: string): CodeExample[] {
  return EXAMPLES_CATALOG.filter(
    (example) => example.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Retorna todos os exemplos de uma linguagem.
 */
export function getExamplesByLanguage(language: SupportedLanguage): CodeExample[] {
  return EXAMPLES_CATALOG.filter(
    (example) => example.language.toLowerCase() === language.toLowerCase()
  );
}

/**
 * Retorna o exemplo padrão para a inicialização do Playground.
 */
export function getDefaultPlaygroundExample(): CodeExample {
  return playgroundDefaultExample;
}

/**
 * Retorna a lista de categorias disponíveis no catálogo.
 */
export function getAllCategories(): string[] {
  const categories = new Set(EXAMPLES_CATALOG.map((ex) => ex.category));
  return Array.from(categories);
}

