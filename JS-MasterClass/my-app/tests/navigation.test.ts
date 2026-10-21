import test from "node:test";
import assert from "node:assert/strict";
import { SITE_MAP, getActiveNavigation } from "@/config/navigation";

test("Site Map & Navigation Architecture", async (t) => {
  await t.test("deve conter apenas as seções reais no SITE_MAP sem excessos fictícios", () => {
    const sectionIds = SITE_MAP.map((s) => s.id);
    assert.ok(sectionIds.includes("java-script"));
    assert.ok(sectionIds.includes("documentacao"));
    assert.ok(sectionIds.includes("playground"));
    // Apenas as 3 seções reais
    assert.strictEqual(SITE_MAP.length, 3);
  });

  await t.test("deve conter as 28 aulas de Rodrigo Branas na seção de JavaScript", () => {
    const jsSection = SITE_MAP.find((s) => s.id === "java-script");
    assert.ok(jsSection, "Seção de JavaScript deve existir");

    const lessonItems = jsSection.subItems.filter((item) =>
      item.href.includes("/java-script/cursos/java-script-masterclass/")
    );
    // 28 aulas
    assert.strictEqual(lessonItems.length, 28);

    const booleanLesson = jsSection.subItems.find((item) =>
      item.href.endsWith("/boolean")
    );
    assert.ok(booleanLesson, "Aula 9: Boolean deve estar presente");
    assert.strictEqual(booleanLesson.href, "/java-script/cursos/java-script-masterclass/boolean");

    const jsonLesson = jsSection.subItems.find((item) =>
      item.href.endsWith("/json")
    );
    assert.ok(jsonLesson, "Aula 14: JSON deve estar presente");

    const ex2Lesson = jsSection.subItems.find((item) =>
      item.href.endsWith("/correcao-do-exercicio-2")
    );
    assert.ok(ex2Lesson, "Aula 15.1: Correção Ex. 2 deve estar presente");
  });

  await t.test("getActiveNavigation deve resolver a rota de boolean corretamente", () => {
    const { activeSection, activeSubItem } = getActiveNavigation(
      "/java-script/cursos/java-script-masterclass/boolean"
    );

    assert.strictEqual(activeSection.id, "java-script");
    assert.ok(activeSubItem);
    assert.strictEqual(
      activeSubItem?.href,
      "/java-script/cursos/java-script-masterclass/boolean"
    );
  });

  await t.test("getActiveNavigation deve resolver playground e documentação em múltiplos níveis", () => {
    const playNav = getActiveNavigation("/playground");
    assert.strictEqual(playNav.activeSection.id, "playground");

    // Nível 1: Listagem Geral de Linguagens
    const docNav = getActiveNavigation("/documentacao");
    assert.strictEqual(docNav.activeSection.id, "documentacao");
    assert.strictEqual(docNav.activeSubItem?.id, "doc-geral");

    // Nível 2: Listagem de Tópicos de JavaScript
    const docJsNav = getActiveNavigation("/documentacao/java-script");
    assert.strictEqual(docJsNav.activeSection.id, "documentacao");
    assert.strictEqual(docJsNav.activeSubItem?.id, "doc-js");

    // Nível 3: Resumo do Método Array.map()
    const docMapNav = getActiveNavigation("/documentacao/java-script/array-map");
    assert.strictEqual(docMapNav.activeSection.id, "documentacao");
    assert.strictEqual(docMapNav.activeSubItem?.id, "doc-array-map");

    // Nível 3: Resumo do Método Array.filter()
    const docFilterNav = getActiveNavigation("/documentacao/java-script/array-filter");
    assert.strictEqual(docFilterNav.activeSection.id, "documentacao");
    assert.strictEqual(docFilterNav.activeSubItem?.id, "doc-array-filter");
  });

  await t.test("getActiveNavigation deve usar fallback seguro para rotas desconhecidas", () => {
    const fallback = getActiveNavigation("/rota-inexistente");
    assert.ok(fallback.activeSection);
    assert.strictEqual(fallback.activeSection.id, "java-script");
  });
});
