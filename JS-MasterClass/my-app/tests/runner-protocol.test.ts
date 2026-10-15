import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  RUNNER_PROTOCOL,
  isExecutorMessage,
  resolveRunnerLimits,
  utf8ByteLength,
} from "@/lib/runner/protocol";
import { createExecutorFrameDocument } from "@/lib/runner/worker-script";

const limits = resolveRunnerLimits();
const expected = {
  channelId: "secret-channel",
  executionId: "execution-current",
  limits,
};

describe("protocolo do executor", () => {
  it("aceita somente mensagens tipadas do canal e execução atuais", () => {
    const valid = {
      protocol: RUNNER_PROTOCOL,
      channelId: expected.channelId,
      executionId: expected.executionId,
      type: "log",
      payload: {
        id: "entry-1",
        level: "log",
        messages: ["texto"],
        formattedText: "texto",
        timestamp: Date.now(),
      },
    };

    assert.equal(isExecutorMessage(valid, expected), true);
    assert.equal(
      isExecutorMessage({ ...valid, channelId: "forged" }, expected),
      false
    );
    assert.equal(
      isExecutorMessage({ ...valid, executionId: "old" }, expected),
      false
    );
    assert.equal(isExecutorMessage({ ...valid, type: "execute-html" }, expected), false);
  });

  it("rejeita payloads malformados, níveis desconhecidos e textos excessivos", () => {
    const base = {
      protocol: RUNNER_PROTOCOL,
      channelId: expected.channelId,
      executionId: expected.executionId,
      type: "log",
    };

    assert.equal(isExecutorMessage({ ...base, payload: null }, expected), false);
    assert.equal(
      isExecutorMessage(
        {
          ...base,
          payload: {
            id: "1",
            level: "html",
            messages: [],
            formattedText: "<img onerror=alert(1)>",
            timestamp: Date.now(),
          },
        },
        expected
      ),
      false
    );
    assert.equal(
      isExecutorMessage(
        {
          ...base,
          payload: {
            id: "1",
            level: "log",
            messages: [],
            formattedText: "x".repeat(limits.maxLogMessageBytes + 1),
            timestamp: Date.now(),
          },
        },
        expected
      ),
      false
    );
  });

  it("limita opções configuráveis dentro de tetos absolutos", () => {
    const resolved = resolveRunnerLimits({
      timeoutMs: Number.POSITIVE_INFINITY,
      maxCodeSizeBytes: 99_000_000,
      maxLogEntries: -100,
      maxLogMessageBytes: 1,
      maxOutputBytes: 99_000_000,
    });

    assert.equal(resolved.timeoutMs, 5_000);
    assert.equal(resolved.maxCodeSizeBytes, 500_000);
    assert.equal(resolved.maxLogEntries, 1);
    assert.equal(resolved.maxLogMessageBytes, 256);
    assert.equal(resolved.maxOutputBytes, 512_000);
    assert.equal(utf8ByteLength("á"), 2);
  });

  it("gera iframe de origem opaca com CSP sem rede", () => {
    const html = createExecutorFrameDocument("secret-channel", "http://localhost:3000");

    assert.match(html, /default-src 'none'/);
    assert.match(html, /connect-src 'none'/);
    assert.match(html, /worker-src blob:/);
    assert.match(html, /frame-src 'none'/);
    assert.match(html, /form-action 'none'/);
    assert.match(html, /event\.source !== parent/);
    assert.match(html, /event\.origin !== EXPECTED_PARENT_ORIGIN/);
    assert.doesNotMatch(html, /secret-token-from-user-code/);
  });
});
