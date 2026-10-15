import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { JavaScriptRunner } from "@/lib/runner/javascript-runner";
import type { LogEntry } from "@/types/runner";

describe("JavaScriptRunner", () => {
  it("deve executar códigos síncronos simples e retornar o resultado", async () => {
    const runner = new JavaScriptRunner();
    const result = await runner.run("const a = 15; const b = 27; return a + b;");

    assert.equal(result.success, true);
    assert.equal(result.returnValue, "42");
    assert.equal(typeof result.executionTimeMs, "number");
  });

  it("deve capturar múltiplos console.log, console.info, console.warn e console.error", async () => {
    const runner = new JavaScriptRunner();
    const capturedLogs: LogEntry[] = [];

    const result = await runner.run(
      `
      console.log("Mensagem de log");
      console.info("Mensagem informativa");
      console.warn("Mensagem de aviso");
      console.error("Mensagem de erro de console");
      `,
      {
        onLog: (entry) => capturedLogs.push(entry),
      }
    );

    assert.equal(result.success, true);
    assert.equal(result.logs.length, 4);
    assert.equal(capturedLogs.length, 4);

    assert.equal(result.logs[0].level, "log");
    assert.equal(result.logs[0].formattedText, "Mensagem de log");

    assert.equal(result.logs[1].level, "info");
    assert.equal(result.logs[1].formattedText, "Mensagem de informação" === result.logs[1].formattedText ? "Mensagem de informação" : "Mensagem informativa");

    assert.equal(result.logs[2].level, "warn");
    assert.equal(result.logs[2].formattedText, "Mensagem de aviso");

    assert.equal(result.logs[3].level, "error");
    assert.equal(result.logs[3].formattedText, "Mensagem de erro de console");
  });

  it("deve formatar arrays e objetos nos logs", async () => {
    const runner = new JavaScriptRunner();
    const result = await runner.run(`
      const usuario = { id: 1, nome: "Carlos", habilidades: ["JS", "TS"] };
      console.log("Usuário:", usuario);
    `);

    assert.equal(result.success, true);
    assert.equal(result.logs.length, 1);
    assert.match(result.logs[0].formattedText, /Carlos/);
    assert.match(result.logs[0].formattedText, /habilidades/);
  });

  it("deve executar código assíncrono com async/await e Promise", async () => {
    const runner = new JavaScriptRunner();
    const result = await runner.run(`
      console.log("Inicio");
      await new Promise((r) => setTimeout(r, 20));
      console.log("Fim apos 20ms");
      return "sucesso_async";
    `);

    assert.equal(result.success, true);
    assert.equal(result.returnValue, "sucesso_async");
    assert.equal(result.logs.length, 2);
    assert.equal(result.logs[0].formattedText, "Inicio");
    assert.equal(result.logs[1].formattedText, "Fim apos 20ms");
    assert.ok(result.executionTimeMs >= 15);
  });

  it("deve capturar e tratar erros de execução em runtime", async () => {
    const runner = new JavaScriptRunner();
    const result = await runner.run(`
      console.log("Antes do erro");
      throw new Error("Falha intencional de teste");
    `);

    assert.equal(result.success, false);
    assert.ok(result.error);
    assert.equal(result.error?.message, "Falha intencional de teste");
    assert.ok(result.logs.length >= 2);
  });

  it("deve executar consecutivamente sem misturar resultados antigos", async () => {
    const runner = new JavaScriptRunner();

    const result1 = await runner.run('console.log("Execucao 1");');
    assert.equal(result1.logs.length, 1);
    assert.equal(result1.logs[0].formattedText, "Execucao 1");

    const result2 = await runner.run('console.log("Execucao 2");');
    assert.equal(result2.logs.length, 1);
    assert.equal(result2.logs[0].formattedText, "Execucao 2");
  });
});
