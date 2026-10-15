import assert from "node:assert/strict";
import { MessageChannel, Worker } from "node:worker_threads";
import { describe, it } from "node:test";
import { resolveRunnerLimits, type RunnerLimits } from "@/lib/runner/protocol";
import { createWorkerScript } from "@/lib/runner/worker-script";
import type { ExecutionError, LogEntry } from "@/types/runner";

interface KernelResult {
  type: "success" | "error" | "terminated";
  logs: LogEntry[];
  returnValue?: string;
  error?: ExecutionError;
}

function runKernel(
  code: string,
  options: Partial<RunnerLimits> = {}
): { result: Promise<KernelResult>; stop: () => void } {
  const limits = { ...resolveRunnerLimits(), ...options };
  const wrapper = `
    const { parentPort } = require("node:worker_threads");
    globalThis.self = globalThis;
    const listeners = new Map();
    self.addEventListener = (type, callback, options) => {
      const current = listeners.get(type) || [];
      current.push({ callback, once: Boolean(options && options.once) });
      listeners.set(type, current);
    };
    function dispatch(type, event) {
      const current = listeners.get(type) || [];
      listeners.set(type, current.filter((item) => !item.once));
      for (const item of current) item.callback(event);
    }
    parentPort.on("message", (data) => {
      const port = data.__port;
      delete data.__port;
      dispatch("message", { data, ports: port ? [port] : [] });
    });
    process.on("unhandledRejection", (reason) => {
      dispatch("unhandledrejection", { reason, preventDefault() {} });
    });
    process.on("uncaughtException", (error) => {
      dispatch("error", { error, message: error.message, preventDefault() {} });
    });
    ${createWorkerScript()}
  `;
  const worker = new Worker(wrapper, { eval: true });
  const channel = new MessageChannel();
  const logs: LogEntry[] = [];
  let settled = false;
  let resolveResult!: (result: KernelResult) => void;
  const result = new Promise<KernelResult>((resolve) => {
    resolveResult = resolve;
  });

  const finish = (value: KernelResult) => {
    if (settled) return;
    settled = true;
    channel.port1.close();
    void worker.terminate();
    resolveResult(value);
  };

  channel.port1.on("message", (message) => {
    if (message.type === "log") {
      logs.push(message.payload);
    } else if (message.type === "success") {
      finish({ type: "success", logs, returnValue: message.payload.returnValue });
    } else if (message.type === "error") {
      finish({ type: "error", logs, error: message.payload.error });
    }
  });
  channel.port1.start();
  worker.postMessage(
    {
      protocol: "runner-worker/v1",
      executionId: "kernel-test",
      code,
      limits,
      __port: channel.port2,
    },
    [channel.port2]
  );

  return {
    result,
    stop: () => finish({ type: "terminated", logs }),
  };
}

describe("núcleo do Worker isolado", () => {
  it("executa JavaScript simples, funções e estruturas de controle", async () => {
    const { result } = runKernel(`
      function somaPares(valores) {
        return valores.filter((n) => n % 2 === 0).reduce((a, b) => a + b, 0);
      }
      return somaPares([1, 2, 3, 4]);
    `);
    assert.deepEqual(await result, {
      type: "success",
      logs: [],
      returnValue: "6",
    });
  });

  it("captura múltiplos logs, arrays e objetos como texto", async () => {
    const { result } = runKernel(`
      console.log("inicio");
      console.info([1, 2, 3]);
      console.warn({ seguro: true, html: "<img onerror=alert(1)>" });
    `);
    const value = await result;
    assert.equal(value.type, "success");
    assert.equal(value.logs.length, 3);
    assert.match(value.logs[1].formattedText, /1, 2, 3/);
    assert.match(value.logs[2].formattedText, /<img onerror=alert\(1\)>/);
    assert.equal(typeof value.logs[2].messages[0], "string");
  });

  it("suporta Promise e async/await", async () => {
    const { result } = runKernel(`
      await new Promise((resolve) => setTimeout(resolve, 10));
      console.log("fim");
      return "assíncrono";
    `);
    const value = await result;
    assert.equal(value.type, "success");
    assert.equal(value.returnValue, "assíncrono");
    assert.equal(value.logs[0].formattedText, "fim");
  });

  it("trata erros de sintaxe, runtime e rejeições assíncronas", async () => {
    const syntax = await runKernel("const = ;").result;
    assert.equal(syntax.type, "error");
    assert.equal(syntax.error?.name, "SyntaxError");

    const runtime = await runKernel('throw new Error("falha runtime")').result;
    assert.equal(runtime.type, "error");
    assert.match(runtime.error?.message ?? "", /falha runtime/);

    const rejection = await runKernel('Promise.reject(new Error("falha async"));').result;
    assert.equal(rejection.type, "error");
    assert.match(rejection.error?.message ?? "", /falha async/);
  });

  it("impõe limites de quantidade e tamanho dos logs", async () => {
    const { result } = runKernel(
      `for (let i = 0; i < 20; i++) console.log("x".repeat(500), i);`,
      { maxLogEntries: 3, maxLogMessageBytes: 256, maxOutputBytes: 1_024 }
    );
    const value = await result;
    assert.equal(value.type, "success");
    assert.equal(value.logs.length, 3);
    assert.ok(value.logs.every((entry) => entry.formattedText.length <= 256));
  });

  it("permite encerramento efetivo de loop infinito", async () => {
    const execution = runKernel("while (true) {}", { timeoutMs: 100 });
    setTimeout(execution.stop, 50);
    const value = await execution.result;
    assert.equal(value.type, "terminated");
  });

  it("remove APIs de rede do escopo fornecido ao usuário", async () => {
    const { result } = runKernel(`
      return [typeof fetch, typeof XMLHttpRequest, typeof WebSocket,
        typeof EventSource, typeof importScripts, typeof Worker,
        typeof SharedWorker, typeof postMessage].join(",");
    `);
    const value = await result;
    assert.equal(value.type, "success");
    assert.equal(
      value.returnValue,
      "undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined"
    );
  });

  it("não expõe janela, DOM, cookies ou storages da aplicação", async () => {
    const { result } = runKernel(`
      return [typeof window, typeof parent, typeof top, typeof document,
        typeof localStorage, typeof sessionStorage, typeof open].join(",");
    `);
    const value = await result;
    assert.equal(value.type, "success");
    assert.equal(
      value.returnValue,
      "undefined,undefined,undefined,undefined,undefined,undefined,undefined"
    );
  });

  it("falha ao tentar chamar rede ou importar script pelo global", async () => {
    const fetchAttempt = await runKernel('await fetch("/api/segredo-ficticio")').result;
    assert.equal(fetchAttempt.type, "error");
    assert.equal(fetchAttempt.error?.name, "TypeError");

    const importAttempt = await runKernel('importScripts("https://example.invalid/x.js")').result;
    assert.equal(importAttempt.type, "error");
    assert.equal(importAttempt.error?.name, "TypeError");
  });
});
