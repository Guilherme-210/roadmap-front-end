/**
 * Código-fonte que é executado dentro do Web Worker isolado.
 *
 * Propriedades e garantias:
 * 1. Isolamento completo de thread: o código roda em segundo plano sem travar a UI principal.
 * 2. Ausência de DOM: 'window', 'document', 'localStorage' e 'cookies' não existem no Worker.
 * 3. Suporte a async/await: funções assíncronas e await de nível superior são suportados.
 * 4. Interceptação de console: console.log, info, warn e error são direcionados via postMessage.
 * 5. Serialização segura: objetos circulares, Promises, Dates, etc. são serializados sem lançar erro.
 */

export function createWorkerScript(): string {
  return `
(function() {
  function safeSerialize(value, depth, seen) {
    if (depth === undefined) depth = 0;
    if (seen === undefined) seen = new WeakSet();

    if (value === null) return "null";
    if (value === undefined) return "undefined";

    var type = typeof value;

    if (type === "string") {
      return depth === 0 ? value : JSON.stringify(value);
    }
    if (type === "number" || type === "boolean") {
      return String(value);
    }
    if (type === "bigint") {
      return value.toString() + "n";
    }
    if (type === "symbol") {
      return value.toString();
    }
    if (type === "function") {
      return "[Function" + (value.name ? ": " + value.name : "") + "]";
    }
    if (value instanceof Error) {
      return value.stack || (value.name + ": " + value.message);
    }
    if (value instanceof Date) {
      return "Date(" + value.toISOString() + ")";
    }
    if (value instanceof RegExp) {
      return value.toString();
    }
    if (type === "object") {
      if (seen.has(value)) {
        return "[Circular Reference]";
      }
      seen.add(value);

      if (Array.isArray(value)) {
        if (depth >= 3) return "[Array]";
        if (value.length === 0) return "[]";
        var items = value.map(function(item) {
          return safeSerialize(item, depth + 1, seen);
        });
        return "[ " + items.join(", ") + " ]";
      }

      if (typeof Map !== "undefined" && value instanceof Map) {
        if (depth >= 3) return "[Map]";
        var mapEntries = [];
        value.forEach(function(v, k) {
          mapEntries.push(safeSerialize(k, depth + 1, seen) + " => " + safeSerialize(v, depth + 1, seen));
        });
        return "Map(" + value.size + ") { " + mapEntries.join(", ") + " }";
      }

      if (typeof Set !== "undefined" && value instanceof Set) {
        if (depth >= 3) return "[Set]";
        var setEntries = [];
        value.forEach(function(v) {
          setEntries.push(safeSerialize(v, depth + 1, seen));
        });
        return "Set(" + value.size + ") { " + setEntries.join(", ") + " }";
      }

      if (depth >= 3) return "[Object]";
      var keys = Object.keys(value);
      if (keys.length === 0) return "{}";
      var entries = keys.map(function(k) {
        return k + ": " + safeSerialize(value[k], depth + 1, seen);
      });
      return "{ " + entries.join(", ") + " }";
    }

    return String(value);
  }

  function formatLogArgs(args) {
    if (!args || args.length === 0) return "";
    return args.map(function(arg) {
      return safeSerialize(arg, 0);
    }).join(" ");
  }

  function sendLog(level, args) {
    var serializedArgs = args.map(function(a) {
      return safeSerialize(a, 1);
    });
    self.postMessage({
      type: "log",
      payload: {
        id: Math.random().toString(36).substring(2, 9),
        level: level,
        messages: serializedArgs,
        formattedText: formatLogArgs(args),
        timestamp: Date.now()
      }
    });
  }

  // Interceptação de console dentro do worker
  console.log = function() { sendLog("log", Array.prototype.slice.call(arguments)); };
  console.info = function() { sendLog("info", Array.prototype.slice.call(arguments)); };
  console.warn = function() { sendLog("warn", Array.prototype.slice.call(arguments)); };
  console.error = function() { sendLog("error", Array.prototype.slice.call(arguments)); };

  self.onunhandledrejection = function(event) {
    var reason = event ? event.reason : null;
    var message = reason ? (reason.message || String(reason)) : "Rejeição assíncrona não tratada";
    var stack = reason && reason.stack ? String(reason.stack) : undefined;
    self.postMessage({
      type: "error",
      payload: {
        duration: 0,
        error: {
          name: "UnhandledPromiseRejection",
          message: message,
          stack: stack
        }
      }
    });
  };

  self.onerror = function(errEvent) {
    var message = typeof errEvent === "string" ? errEvent : (errEvent && errEvent.message ? errEvent.message : "Erro desconhecido");
    self.postMessage({
      type: "error",
      payload: {
        duration: 0,
        error: {
          name: "UncaughtWorkerError",
          message: message
        }
      }
    });
  };

  self.onmessage = async function(e) {
    var data = e.data || {};
    var code = data.code || "";
    var startTime = performance.now();

    try {
      var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      var runnerFn = new AsyncFunction(code);
      var result = await runnerFn();
      var duration = performance.now() - startTime;

      self.postMessage({
        type: "success",
        payload: {
          duration: duration,
          returnValue: result !== undefined ? safeSerialize(result, 0) : undefined
        }
      });
    } catch (err) {
      var errDuration = performance.now() - startTime;
      var errorObj = {
        name: err && err.name ? String(err.name) : "Error",
        message: err && err.message ? String(err.message) : String(err),
        stack: err && err.stack ? String(err.stack) : undefined
      };

      self.postMessage({
        type: "error",
        payload: {
          duration: errDuration,
          error: errorObj
        }
      });
    }
  };
})();
`;
}

