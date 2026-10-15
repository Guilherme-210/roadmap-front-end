import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { JavaScriptRunner } from "@/lib/runner/javascript-runner";

describe("JavaScriptRunner", () => {
  it("não executa código do usuário no processo Node como fallback", async () => {
    const runner = new JavaScriptRunner();
    delete (globalThis as Record<string, unknown>).__playgroundExecuted;

    const result = await runner.run(
      "globalThis.__playgroundExecuted = true; return 42;"
    );

    assert.equal(result.success, false);
    assert.equal(result.error?.name, "UnsupportedEnvironmentError");
    assert.equal(
      (globalThis as Record<string, unknown>).__playgroundExecuted,
      undefined
    );
  });

  it("rejeita código acima do limite antes de inicializar o executor", async () => {
    const runner = new JavaScriptRunner();
    const result = await runner.run("a".repeat(2_000), {
      maxCodeSizeBytes: 1_024,
    });

    assert.equal(result.success, false);
    assert.equal(result.error?.name, "CodeSizeLimitError");
    assert.equal(result.logs.length, 1);
  });

  it("expõe contrato reutilizável sem detalhes de UI", () => {
    const runner = new JavaScriptRunner();
    assert.equal(runner.language, "javascript");
    assert.equal(runner.isExecutable, true);
    assert.match(runner.displayName, /Opaque Sandbox/);
    assert.equal(typeof runner.stop, "function");
    assert.equal(typeof runner.dispose, "function");
  });
});
