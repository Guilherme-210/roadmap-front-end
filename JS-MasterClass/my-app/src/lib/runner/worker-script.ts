import { RUNNER_PROTOCOL } from "./protocol";

/**
 * Núcleo executado em um Worker criado dentro de um iframe sandboxed de origem
 * opaca. O Worker evita bloqueio da UI; o iframe e sua CSP são a fronteira de
 * origem/rede. A porta privada impede que o código do usuário fabrique eventos
 * válidos para o host usando `self.postMessage`.
 */
export function createWorkerScript(): string {
  return String.raw`
(function () {
  "use strict";

  var nativeSetTimeout = self.setTimeout.bind(self);
  var nativeNow = Date.now.bind(Date);
  var nativePerformanceNow = performance.now.bind(performance);
  var nativeObjectKeys = Object.keys.bind(Object);
  var nativeArrayIsArray = Array.isArray.bind(Array);
  var nativeString = String;

  self.addEventListener("message", function initialize(event) {
    var init = event.data;
    var port = event.ports && event.ports[0];
    if (!port || !init || init.protocol !== "runner-worker/v1" ||
        typeof init.executionId !== "string" || typeof init.code !== "string" ||
        !init.limits || typeof init.limits !== "object") {
      return;
    }

    var executionId = init.executionId;
    var limits = init.limits;
    var startedAt = nativePerformanceNow();
    var settled = false;
    var logCount = 0;
    var outputBytes = 0;
    var sequence = 0;
    var encoder = typeof TextEncoder === "function" ? new TextEncoder() : null;

    function byteLength(value) {
      return encoder ? encoder.encode(value).byteLength : value.length;
    }

    function truncate(value, maxBytes) {
      var text = nativeString(value);
      if (byteLength(text) <= maxBytes) return text;
      var suffix = "… [truncado]";
      var end = Math.max(0, Math.min(text.length, maxBytes - suffix.length));
      var candidate = text.slice(0, end) + suffix;
      while (end > 0 && byteLength(candidate) > maxBytes) {
        end = Math.max(0, end - 32);
        candidate = text.slice(0, end) + suffix;
      }
      return candidate;
    }

    function safeSerialize(value, depth, seen) {
      if (depth === undefined) depth = 0;
      if (seen === undefined) seen = new WeakSet();
      try {
        if (value === null) return "null";
        if (value === undefined) return "undefined";
        var type = typeof value;
        if (type === "string") {
          return truncate(depth === 0 ? value : JSON.stringify(value), limits.maxLogMessageBytes);
        }
        if (type === "number" || type === "boolean") return nativeString(value);
        if (type === "bigint") return value.toString() + "n";
        if (type === "symbol") return value.toString();
        if (type === "function") return "[Function" + (value.name ? ": " + value.name : "") + "]";
        if (value instanceof Error) {
          return truncate(value.stack || (value.name + ": " + value.message), limits.maxLogMessageBytes);
        }
        if (value instanceof Date) return "Date(" + value.toISOString() + ")";
        if (value instanceof RegExp) return value.toString();

        if (type === "object") {
          if (seen.has(value)) return "[Circular Reference]";
          seen.add(value);
          if (depth >= 3) return nativeArrayIsArray(value) ? "[Array]" : "[Object]";
          if (nativeArrayIsArray(value)) {
            var arrayLength = Math.min(value.length, 50);
            var arrayItems = [];
            for (var index = 0; index < arrayLength; index += 1) {
              arrayItems.push(safeSerialize(value[index], depth + 1, seen));
            }
            if (value.length > arrayLength) arrayItems.push("… " + (value.length - arrayLength) + " itens");
            return truncate("[ " + arrayItems.join(", ") + " ]", limits.maxLogMessageBytes);
          }

          var keys = nativeObjectKeys(value);
          var keyLimit = Math.min(keys.length, 50);
          var entries = [];
          for (var keyIndex = 0; keyIndex < keyLimit; keyIndex += 1) {
            var key = keys[keyIndex];
            var serializedValue;
            try {
              serializedValue = safeSerialize(value[key], depth + 1, seen);
            } catch (_) {
              serializedValue = "[Não serializável]";
            }
            entries.push(key + ": " + serializedValue);
          }
          if (keys.length > keyLimit) entries.push("… " + (keys.length - keyLimit) + " propriedades");
          return truncate("{ " + entries.join(", ") + " }", limits.maxLogMessageBytes);
        }
        return truncate(nativeString(value), limits.maxLogMessageBytes);
      } catch (_) {
        return "[Valor não serializável]";
      }
    }

    function send(type, payload) {
      try {
        port.postMessage({
          protocol: "runner-worker/v1",
          executionId: executionId,
          type: type,
          payload: payload
        });
      } catch (_) {}
    }

    function sendLog(level, rawArgs) {
      if (settled || logCount >= limits.maxLogEntries || outputBytes >= limits.maxOutputBytes) return;
      var args = Array.prototype.slice.call(rawArgs, 0, 20);
      var messages = [];
      for (var index = 0; index < args.length; index += 1) {
        messages.push(truncate(safeSerialize(args[index], 1), limits.maxLogMessageBytes));
      }
      var formattedText = truncate(
        args.map(function (arg) { return safeSerialize(arg, 0); }).join(" "),
        limits.maxLogMessageBytes
      );
      var entryBytes = byteLength(formattedText);
      var remaining = limits.maxOutputBytes - outputBytes;
      if (remaining <= 0) return;
      if (entryBytes > remaining) {
        formattedText = truncate(formattedText, remaining);
        entryBytes = byteLength(formattedText);
      }
      outputBytes += entryBytes;
      logCount += 1;
      sequence += 1;
      send("log", {
        id: executionId + ":" + sequence,
        level: level,
        messages: messages,
        formattedText: formattedText,
        timestamp: nativeNow()
      });
    }

    function normalizeError(error, fallbackName) {
      var name = error && error.name ? nativeString(error.name) : fallbackName;
      var message = error && error.message ? nativeString(error.message) : nativeString(error);
      var stack = error && error.stack ? truncate(nativeString(error.stack), 32768) : undefined;
      return {
        name: truncate(name, 128),
        message: truncate(message, 16384),
        stack: stack
      };
    }

    function finishError(error, fallbackName) {
      if (settled) return;
      settled = true;
      send("error", {
        duration: Math.max(0, nativePerformanceNow() - startedAt),
        error: normalizeError(error, fallbackName)
      });
    }

    function finishSuccess(result) {
      if (settled) return;
      settled = true;
      send("success", {
        duration: Math.max(0, nativePerformanceNow() - startedAt),
        returnValue: result === undefined ? undefined : truncate(safeSerialize(result, 0), limits.maxLogMessageBytes)
      });
    }

    self.addEventListener("unhandledrejection", function (rejectionEvent) {
      rejectionEvent.preventDefault();
      finishError(rejectionEvent.reason || new Error("Rejeição assíncrona não tratada"), "UnhandledPromiseRejection");
    });
    self.addEventListener("error", function (errorEvent) {
      errorEvent.preventDefault();
      finishError(errorEvent.error || new Error(errorEvent.message || "Erro assíncrono não tratado"), "UncaughtWorkerError");
    });

    var safeConsole = Object.freeze({
      log: function () { sendLog("log", arguments); },
      info: function () { sendLog("info", arguments); },
      warn: function () { sendLog("warn", arguments); },
      error: function () { sendLog("error", arguments); }
    });
    try {
      Object.defineProperty(self, "console", { value: safeConsole, configurable: false, writable: false });
    } catch (_) {}

    // Defesa em profundidade. A barreira real de rede é a CSP do iframe opaco.
    [
      "fetch", "XMLHttpRequest", "WebSocket", "EventSource", "WebTransport",
      "importScripts", "Worker", "SharedWorker", "BroadcastChannel", "postMessage"
    ].forEach(function (name) {
      try {
        Object.defineProperty(self, name, { value: undefined, configurable: false, writable: false });
      } catch (_) {}
    });

    try {
      var AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      var runner = new AsyncFunction("\"use strict\";\n" + init.code);
      Promise.resolve(runner()).then(function (result) {
        // Uma rodada adicional captura rejeições e erros assíncronos imediatos.
        nativeSetTimeout(function () { finishSuccess(result); }, 0);
      }, function (error) {
        finishError(error, "RuntimeError");
      });
    } catch (error) {
      finishError(error, "SyntaxError");
    }
  }, { once: true });
})();
`;
}

function inlineScriptString(value: string): string {
  return JSON.stringify(value)
    .replaceAll("<", "\\u003c")
    .replaceAll("\u2028", "\\u2028")
    .replaceAll("\u2029", "\\u2029");
}

/**
 * Documento mínimo do mediador. `sandbox="allow-scripts"` (sem
 * `allow-same-origin`) faz sua origem ser opaca. A CSP nega todas as conexões e
 * só permite o script bootstrap e o Blob Worker interno.
 */
export function createExecutorFrameDocument(
  channelId: string,
  expectedParentOrigin: string
): string {
  const workerSource = inlineScriptString(createWorkerScript());
  const serializedChannel = inlineScriptString(channelId);
  const serializedParentOrigin = inlineScriptString(expectedParentOrigin);
  const serializedProtocol = inlineScriptString(RUNNER_PROTOCOL);

  return `<!doctype html>
<html><head>
<meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval'; worker-src blob:; child-src blob:; connect-src 'none'; img-src 'none'; media-src 'none'; font-src 'none'; style-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'">
<meta name="referrer" content="no-referrer">
</head><body><script>
(function () {
  "use strict";
  var PROTOCOL = ${serializedProtocol};
  var CHANNEL_ID = ${serializedChannel};
  var EXPECTED_PARENT_ORIGIN = ${serializedParentOrigin};
  var WORKER_SOURCE = ${workerSource};
  var active = null;

  function send(type, executionId, payload) {
    parent.postMessage({ protocol: PROTOCOL, channelId: CHANNEL_ID, executionId: executionId, type: type, payload: payload }, "*");
  }

  function disposeActive() {
    if (!active) return;
    try { active.port.close(); } catch (_) {}
    try { active.worker.terminate(); } catch (_) {}
    try { URL.revokeObjectURL(active.url); } catch (_) {}
    active = null;
  }

  function failInitialization(executionId, error) {
    disposeActive();
    send("error", executionId, {
      duration: 0,
      error: {
        name: "InitializationError",
        message: error && error.message ? String(error.message) : "Falha ao inicializar o executor isolado."
      }
    });
  }

  function start(message) {
    disposeActive();
    try {
      var blob = new Blob([WORKER_SOURCE], { type: "text/javascript" });
      var url = URL.createObjectURL(blob);
      var worker = new Worker(url, { name: "playground-" + message.executionId });
      var channel = new MessageChannel();
      active = { worker: worker, port: channel.port1, url: url, executionId: message.executionId };
      channel.port1.onmessage = function (event) {
        if (!active || active.executionId !== message.executionId) return;
        var data = event.data;
        if (!data || data.protocol !== "runner-worker/v1" || data.executionId !== message.executionId ||
            (data.type !== "log" && data.type !== "success" && data.type !== "error")) return;
        send(data.type, message.executionId, data.payload);
        if (data.type === "success" || data.type === "error") disposeActive();
      };
      channel.port1.onmessageerror = function () {
        failInitialization(message.executionId, new Error("Mensagem inválida recebida do Worker."));
      };
      channel.port1.start();
      worker.onerror = function () {
        failInitialization(message.executionId, new Error("Falha inesperada no Worker isolado."));
      };
      worker.postMessage({
        protocol: "runner-worker/v1",
        executionId: message.executionId,
        code: message.payload.code,
        limits: message.payload.limits
      }, [channel.port2]);
    } catch (error) {
      failInitialization(message.executionId, error);
    }
  }

  window.addEventListener("message", function (event) {
    if (event.source !== parent || event.origin !== EXPECTED_PARENT_ORIGIN) return;
    var message = event.data;
    if (!message || message.protocol !== PROTOCOL || message.channelId !== CHANNEL_ID ||
        typeof message.executionId !== "string") return;
    if (message.type === "start" && message.payload && typeof message.payload.code === "string" && message.payload.limits) {
      start(message);
      return;
    }
    if (message.type === "stop" && active && active.executionId === message.executionId) {
      disposeActive();
      send("stopped", message.executionId);
    }
  });
  send("ready", "");
})();
</script></body></html>`;
}
