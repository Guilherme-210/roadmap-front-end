import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { formatLogArgs, safeSerialize } from "@/lib/runner/formatter";

describe("Formatter & Serializer", () => {
  it("deve serializar tipos primitivos corretamente", () => {
    assert.equal(safeSerialize("texto"), "texto");
    assert.equal(safeSerialize(42), "42");
    assert.equal(safeSerialize(true), "true");
    assert.equal(safeSerialize(false), "false");
    assert.equal(safeSerialize(null), "null");
    assert.equal(safeSerialize(undefined), "undefined");
    assert.equal(safeSerialize(BigInt(100)), "100n");
    assert.equal(safeSerialize(Symbol("foo")), "Symbol(foo)");
  });

  it("deve formatar arrays e objetos legivelmente", () => {
    assert.equal(safeSerialize([1, 2, 3]), "[ 1, 2, 3 ]");
    assert.equal(safeSerialize({ nome: "JS", versao: 2026 }), '{ nome: "JS", versao: 2026 }');
    assert.equal(safeSerialize([]), "[]");
    assert.equal(safeSerialize({}), "{}");
  });

  it("deve tratar referências circulares sem lançar exceção", () => {
    const circularObj: Record<string, unknown> = { nome: "circular" };
    circularObj.self = circularObj;

    const result = safeSerialize(circularObj);
    assert.match(result, /\[Circular Reference\]/);
  });

  it("deve serializar funções, erros e datas", () => {
    function minhaFuncao() {}
    assert.equal(safeSerialize(minhaFuncao), "[Function: minhaFuncao]");

    const erro = new Error("Mensagem de erro de teste");
    assert.match(safeSerialize(erro), /Mensagem de erro de teste/);

    const data = new Date("2026-01-01T00:00:00.000Z");
    assert.equal(safeSerialize(data), "Date(2026-01-01T00:00:00.000Z)");
  });

  it("deve concatenar múltiplos argumentos como console.log", () => {
    const formatted = formatLogArgs(["Resultado:", 42, { ok: true }]);
    assert.equal(formatted, 'Resultado: 42 { ok: true }');
  });
});

