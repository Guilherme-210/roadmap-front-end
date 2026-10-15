import type { CodeRunner, SupportedLanguage } from "@/types/runner";
import { JavaScriptRunner } from "./javascript-runner";

/**
 * Registro extensível de executores de código (RunnerRegistry).
 *
 * Permite associar implementações de CodeRunner a linguagens de programação.
 * Futuramente, novas linguagens (ex: TypeScript, Python via Pyodide, SQL via sql.js)
 * podem ser adicionadas simplesmente registrando seu respectivo runner aqui.
 */
export class RunnerRegistry {
  private runners: Map<SupportedLanguage, CodeRunner> = new Map();

  constructor() {
    // Registra os executores nativos iniciais
    this.register(new JavaScriptRunner());
  }

  /**
   * Registra ou atualiza um executor de código.
   */
  register(runner: CodeRunner): void {
    this.runners.set(runner.language.toLowerCase(), runner);
  }

  /**
   * Obtém o executor registrado para a linguagem solicitada.
   */
  get(language: SupportedLanguage): CodeRunner | undefined {
    return this.runners.get(language.toLowerCase());
  }

  /**
   * Verifica se existe um executor registrado para a linguagem.
   */
  has(language: SupportedLanguage): boolean {
    return this.runners.has(language.toLowerCase());
  }

  /**
   * Verifica se a linguagem possui executor e se ele está apto para execução.
   */
  isExecutable(language: SupportedLanguage): boolean {
    const runner = this.get(language);
    return Boolean(runner && runner.isExecutable);
  }

  /**
   * Retorna a lista de linguagens suportadas e seus status de execução.
   */
  getSupportedLanguages(): Array<{
    language: SupportedLanguage;
    isExecutable: boolean;
    displayName?: string;
  }> {
    return Array.from(this.runners.values()).map((runner) => ({
      language: runner.language,
      isExecutable: runner.isExecutable,
      displayName: runner.displayName,
    }));
  }
}

/**
 * Instância singleton compartilhada da aplicação.
 */
export const runnerRegistry = new RunnerRegistry();
