import test from "node:test";
import assert from "node:assert/strict";
import { APP_ROUTES, resolveAppRoute } from "@/shared/constants/app-routes";

test("APP_ROUTES", async (t) => {
  await t.test("centraliza as rotas estáticas usadas pelos mocks", () => {
    assert.strictEqual(resolveAppRoute("HOME"), APP_ROUTES.public.home.path);
    assert.strictEqual(resolveAppRoute("PLAYGROUND"), APP_ROUTES.public.playground.path);
    assert.strictEqual(resolveAppRoute("DOCUMENTATION_ARRAY_MAP"), APP_ROUTES.public.documentation.arrayMap.path);
  });

  await t.test("resolve aulas para as pastas numeradas", () => {
    assert.strictEqual(
      resolveAppRoute("MASTERCLASS_LESSON:boolean"),
      APP_ROUTES.public.javaScript.masterclass.lessons.boolean.path,
    );
    assert.strictEqual(
      APP_ROUTES.public.javaScript.masterclass.lesson("correcao-do-exercicio-2").path,
      `${APP_ROUTES.public.javaScript.masterclass.path}/15.1-correcao-do-exercicio-2`,
    );
  });

  await t.test("expõe nome e path independentes em todas as rotas de navegação", () => {
    const assertNamedPaths = (value: unknown): void => {
      if (!value || typeof value !== "object") return;

      const candidate = value as Record<string, unknown>;
      if ("path" in candidate) {
        assert.equal(typeof candidate.name, "string");
        assert.ok(candidate.name, `A rota ${String(candidate.path)} deve ter um name`);
      }

      Object.values(candidate).forEach(assertNamedPaths);
    };

    assertNamedPaths(APP_ROUTES);
  });
});
