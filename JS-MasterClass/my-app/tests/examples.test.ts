import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  EXAMPLES_CATALOG,
  getAllCategories,
  getDefaultPlaygroundExample,
  getExampleById,
  getExamplesByCategory,
  getExamplesByLanguage,
} from "@/data/examples";

describe("Examples Catalog", () => {
  it("deve carregar todos os exemplos pré-cadastrados com campos obrigatórios", () => {
    assert.ok(EXAMPLES_CATALOG.length >= 2);

    for (const example of EXAMPLES_CATALOG) {
      assert.ok(example.id, "O id deve ser preenchido");
      assert.ok(example.title, "O título deve ser preenchido");
      assert.ok(example.description, "A descrição deve ser preenchida");
      assert.ok(example.initialCode, "O código inicial deve ser preenchido");
      assert.ok(example.category, "A categoria deve ser preenchida");
      assert.equal(example.language, "javascript");
    }
  });

  it("deve buscar o exemplo de Array.map por ID", () => {
    const example = getExampleById("javascript-array-map");
    assert.ok(example);
    assert.equal(example?.id, "javascript-array-map");
    assert.match(example?.title || "", /map/i);
    assert.match(example?.initialCode || "", /Array\.prototype\.map/);
  });

  it("deve filtrar exemplos por categoria", () => {
    const categoryExamples = getExamplesByCategory("Métodos Funcionais de Array");
    assert.ok(categoryExamples.length >= 1);
    assert.ok(categoryExamples.some((ex) => ex.id === "javascript-array-map"));
  });

  it("deve retornar o exemplo padrão para o Playground", () => {
    const defaultExample = getDefaultPlaygroundExample();
    assert.ok(defaultExample);
    assert.equal(defaultExample.id, "playground-starter");
  });

  it("deve listar categorias únicas", () => {
    const categories = getAllCategories();
    assert.ok(categories.length >= 1);
    assert.ok(categories.includes("Métodos Funcionais de Array"));
  });

  it("deve buscar exemplos por linguagem", () => {
    const jsExamples = getExamplesByLanguage("javascript");
    assert.ok(jsExamples.length >= 2);
  });
});

