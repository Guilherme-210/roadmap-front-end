import test from "node:test";
import assert from "node:assert/strict";
import { SITE_MAP, getActiveNavigation } from "@/config/navigation";

test("Site Map & Navigation Architecture", async (t) => {
  await t.test("deve conter todas as seções principais no SITE_MAP", () => {
    const sectionIds = SITE_MAP.map((s) => s.id);
    assert.ok(sectionIds.includes("aulas"));
    assert.ok(sectionIds.includes("playground"));
    assert.ok(sectionIds.includes("documentacao"));
    assert.ok(sectionIds.includes("formacoes"));
    assert.ok(sectionIds.includes("roadmap"));
    assert.ok(sectionIds.includes("desafios"));
    assert.ok(sectionIds.includes("mapa-do-site"));
    assert.strictEqual(SITE_MAP.length >= 7, true);
  });

  await t.test("deve conter as 28 aulas de Rodrigo Branas na seção de cursos", () => {
    const cursosSection = SITE_MAP.find((s) => s.id === "aulas");
    assert.ok(cursosSection, "Seção de cursos deve existir");

    const lessonItems = cursosSection.subItems.filter((item) =>
      item.href.includes("/java-script-masterclass/")
    );
    // 28 aulas + grade
    assert.strictEqual(lessonItems.length >= 28, true);

    const booleanLesson = cursosSection.subItems.find((item) =>
      item.href.endsWith("/boolean")
    );
    assert.ok(booleanLesson, "Aula 9: Boolean deve estar presente");
    assert.strictEqual(booleanLesson.href, "/aulas/java-script/java-script-masterclass/boolean");
  });

  await t.test("getActiveNavigation deve resolver a rota de boolean corretamente", () => {
    const { activeSection, activeSubItem } = getActiveNavigation(
      "/aulas/java-script/java-script-masterclass/boolean"
    );

    assert.strictEqual(activeSection.id, "aulas");
    assert.ok(activeSubItem);
    assert.strictEqual(
      activeSubItem?.href,
      "/aulas/java-script/java-script-masterclass/boolean"
    );
  });

  await t.test("getActiveNavigation deve resolver playground e documentação", () => {
    const playNav = getActiveNavigation("/playground");
    assert.strictEqual(playNav.activeSection.id, "playground");

    const docNav = getActiveNavigation("/javascript");
    assert.strictEqual(docNav.activeSection.id, "documentacao");
  });

  await t.test("getActiveNavigation deve usar fallback seguro para rotas desconhecidas", () => {
    const fallback = getActiveNavigation("/rota-inexistente");
    assert.ok(fallback.activeSection);
    assert.strictEqual(fallback.activeSection.id, "aulas");
  });
});
