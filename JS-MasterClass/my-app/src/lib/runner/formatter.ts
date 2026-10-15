/**
 * Utilitários de serialização e formatação segura para saídas de console.
 *
 * Garante que objetos complexos, estruturas com referências circulares,
 * BigInts, Symbols, Functions, Maps, Sets e Erros sejam formatados de forma legível
 * e sem disparar exceções de serialização (como "TypeError: Converting circular structure to JSON").
 */

export function safeSerialize(
  value: unknown,
  depth = 0,
  seen: WeakSet<object> = new WeakSet()
): string {
  if (value === null) return "null";
  if (value === undefined) return "undefined";

  const type = typeof value;

  if (type === "string") {
    // Strings na raiz são impressas diretamente, em objetos/arrays ganham aspas
    return depth === 0 ? (value as string) : JSON.stringify(value);
  }

  if (type === "number" || type === "boolean") {
    return String(value);
  }

  if (type === "bigint") {
    return `${(value as bigint).toString()}n`;
  }

  if (type === "symbol") {
    return (value as symbol).toString();
  }

  if (type === "function") {
    const fn = value as (...args: unknown[]) => unknown;
    return `[Function${fn.name ? `: ${fn.name}` : ""}]`;
  }

  if (value instanceof Error) {
    return value.stack || `${value.name}: ${value.message}`;
  }

  if (value instanceof Date) {
    return `Date(${value.toISOString()})`;
  }

  if (value instanceof RegExp) {
    return value.toString();
  }

  if (type === "object") {
    const obj = value as object;

    if (seen.has(obj)) {
      return "[Circular Reference]";
    }

    seen.add(obj);

    if (Array.isArray(obj)) {
      if (depth >= 3) return "[Array]";
      if (obj.length === 0) return "[]";
      const items = obj.map((item) => safeSerialize(item, depth + 1, seen));
      return `[ ${items.join(", ")} ]`;
    }

    if (obj instanceof Map) {
      if (depth >= 3) return "[Map]";
      const entries: string[] = [];
      obj.forEach((v, k) => {
        entries.push(`${safeSerialize(k, depth + 1, seen)} => ${safeSerialize(v, depth + 1, seen)}`);
      });
      return `Map(${obj.size}) { ${entries.join(", ")} }`;
    }

    if (obj instanceof Set) {
      if (depth >= 3) return "[Set]";
      const items: string[] = [];
      obj.forEach((v) => {
        items.push(safeSerialize(v, depth + 1, seen));
      });
      return `Set(${obj.size}) { ${items.join(", ")} }`;
    }

    // Objeto genérico
    if (depth >= 3) return "[Object]";
    const entries = Object.entries(obj);
    if (entries.length === 0) return "{}";

    const formattedEntries = entries.map(
      ([key, val]) => `${key}: ${safeSerialize(val, depth + 1, seen)}`
    );
    return `{ ${formattedEntries.join(", ")} }`;
  }

  return String(value);
}

/**
 * Formata múltiplos argumentos de console no formato padrão (separados por espaço).
 */
export function formatLogArgs(args: unknown[]): string {
  if (!args || args.length === 0) return "";
  return args.map((arg) => safeSerialize(arg, 0)).join(" ");
}

