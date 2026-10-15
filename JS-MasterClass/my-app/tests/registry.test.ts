import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { RunnerRegistry } from "@/lib/runner/registry";
import type { CodeRunner, ExecutionResult, RunnerOptions } from "@/types/runner";

describe("RunnerRegistry", () => {
  it("deve registrar e identificar JavaScript por padrão", () => {
    const registry = new RunnerRegistry();

    assert.equal(registry.has("javascript"), true);
    assert.equal(registry.isExecutable("javascript"), true);

    const runner = registry.get("javascript");
    assert.ok(runner);
    assert.equal(runner?.language, "javascript");
  });

  it("deve retornar falso para linguagens não registradas", () => {
    const registry = new RunnerRegistry();

    assert.equal(registry.has("python"), false);
    assert.equal(registry.isExecutable("python"), false);
    assert.equal(registry.get("python"), undefined);
  });

  it("deve permitir registrar uma nova linguagem no futuro sem alterar o código base", () => {
    const registry = new RunnerRegistry();

    class MockPythonRunner implements CodeRunner {
      readonly language = "python";
      readonly isExecutable = true;
      readonly displayName = "Python 3 (Pyodide Wasm)";

      async run(code: string, options?: RunnerOptions): Promise<ExecutionResult> {
        options?.onLog?.({
          id: "1",
          level: "log",
          messages: ["Python Output"],
          formattedText: "Python Output",
          timestamp: Date.now(),
        });
        return {
          success: true,
          logs: [],
          executionTimeMs: 15,
        };
      }
    }

    registry.register(new MockPythonRunner());

    assert.equal(registry.has("python"), true);
    assert.equal(registry.isExecutable("python"), true);

    const pythonRunner = registry.get("python");
    assert.ok(pythonRunner);
    assert.equal(pythonRunner?.displayName, "Python 3 (Pyodide Wasm)");

    const supported = registry.getSupportedLanguages();
    assert.ok(supported.some((s) => s.language === "python"));
  });
});

