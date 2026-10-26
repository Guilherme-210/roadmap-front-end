const route = (name: string, path: string) => ({ name, path }) as const;

const JAVA_SCRIPT_PATH = "/java-script";
const MASTERCLASS_PATH = `${JAVA_SCRIPT_PATH}/cursos/java-script-masterclass`;

const MASTERCLASS_LESSONS = {
  abertura: route("1. Abertura", `${MASTERCLASS_PATH}/1-abertura`),
  instrucoes: route("2. Instruções", `${MASTERCLASS_PATH}/2-instrucoes`),
  "historia-da-linguagem": route("3. História da Linguagem", `${MASTERCLASS_PATH}/3-historia-da-linguagem`),
  "evolucao-das-versoes": route("4. Evolução das Versões", `${MASTERCLASS_PATH}/4-evolucao-das-versoes`),
  variaveis: route("5. Variáveis", `${MASTERCLASS_PATH}/5-variaveis`),
  "tipos-de-dados": route("6. Tipos de Dados", `${MASTERCLASS_PATH}/6-tipos-de-dados`),
  number: route("7. Number", `${MASTERCLASS_PATH}/7-number`),
  "operadores-numericos": route("7.1. Operadores Numéricos", `${MASTERCLASS_PATH}/7.1-operadores-numericos`),
  "conversao-numerica": route("7.2. Conversão Numérica", `${MASTERCLASS_PATH}/7.2-conversao-numerica`),
  "ieee-754": route("7.3. IEEE 754", `${MASTERCLASS_PATH}/7.3-ieee-754`),
  "math-api": route("7.4. Math API", `${MASTERCLASS_PATH}/7.4-math-api`),
  string: route("8. String", `${MASTERCLASS_PATH}/8-string`),
  "template-literal": route("8.1. Template Literal", `${MASTERCLASS_PATH}/8.1-template-literal`),
  "string-api": route("8.2. String API", `${MASTERCLASS_PATH}/8.2-string-api`),
  boolean: route("9. Boolean", `${MASTERCLASS_PATH}/9-boolean`),
  "operadores-booleanos": route("9.1. Operadores Booleanos", `${MASTERCLASS_PATH}/9.1-operadores-booleanos`),
  symbol: route("10. Symbol", `${MASTERCLASS_PATH}/10-symbol`),
  regexp: route("11. RegExp", `${MASTERCLASS_PATH}/11-regexp`),
  "exercicio-1": route("12. Exercício 1", `${MASTERCLASS_PATH}/12-exercicio-1`),
  "correcao-do-exercicio-1": route("12.1. Correção do Exercício 1", `${MASTERCLASS_PATH}/12.1-correcao-do-exercicio-1`),
  object: route("13. Object", `${MASTERCLASS_PATH}/13-object`),
  "undefined-e-null": route("13.1. Undefined e Null", `${MASTERCLASS_PATH}/13.1-undefined-e-null`),
  "comparacao-de-objetos": route("13.2. Comparação de Objetos", `${MASTERCLASS_PATH}/13.2-comparacao-de-objetos`),
  heranca: route("13.3. Herança", `${MASTERCLASS_PATH}/13.3-heranca`),
  "object-api": route("13.4. Object API", `${MASTERCLASS_PATH}/13.4-object-api`),
  json: route("14. JSON", `${MASTERCLASS_PATH}/14-json`),
  "exercicio-2": route("15. Exercício 2", `${MASTERCLASS_PATH}/15-exercicio-2`),
  "correcao-do-exercicio-2": route("15.1. Correção Exercício 2", `${MASTERCLASS_PATH}/15.1-correcao-do-exercicio-2`),
} as const;

export const APP_ROUTES = {
  private: {
    dashboard: route("Painel", "/admin"),
  },
  public: {
    home: route("Início", "/"),
    javaScript: {
      ...route("JavaScript", JAVA_SCRIPT_PATH),
      masterclass: {
        ...route("Grade do Curso", MASTERCLASS_PATH),
        lessons: MASTERCLASS_LESSONS,
        lesson(slug: string) {
          return MASTERCLASS_LESSONS[slug as keyof typeof MASTERCLASS_LESSONS]
            ?? route(slug, `${MASTERCLASS_PATH}/${slug}`);
        },
      },
    },
    playground: route("Playground", "/playground"),
    documentation: {
      ...route("Documentação", "/documentacao"),
      javaScript: route("JavaScript", "/documentacao/java-script"),
      arrayMap: route("Array Map", "/documentacao/java-script/array-map"),
      arrayFilter: route("Array Filter", "/documentacao/java-script/array-filter"),
    },
  },
  legacy: {
    documentation: route("Documentação legada", "/javascript"),
    javaScriptLessons: route("Aulas de JavaScript legadas", "/aulas/java-script/java-script-masterclass/:slug*"),
    javaScriptBoolean: route("Aula de Boolean legada", "/aulas/java-script/boolean"),
    javaScript: route("JavaScript legado", "/aulas/java-script"),
  },
  external: {
    github: route("GitHub", "https://github.com"),
    youtube: route("YouTube", "https://youtube.com"),
    x: route("X (Twitter)", "https://x.com"),
    linkedin: route("LinkedIn", "https://linkedin.com"),
    discord: route("Discord", "https://discord.com"),
  },
} as const;

const STATIC_ROUTE_REFERENCES = {
  HOME: APP_ROUTES.public.home.path,
  JAVA_SCRIPT: APP_ROUTES.public.javaScript.path,
  PLAYGROUND: APP_ROUTES.public.playground.path,
  JAVA_SCRIPT_MASTERCLASS: APP_ROUTES.public.javaScript.masterclass.path,
  DOCUMENTATION: APP_ROUTES.public.documentation.path,
  DOCUMENTATION_JAVA_SCRIPT: APP_ROUTES.public.documentation.javaScript.path,
  DOCUMENTATION_ARRAY_MAP: APP_ROUTES.public.documentation.arrayMap.path,
  DOCUMENTATION_ARRAY_FILTER: APP_ROUTES.public.documentation.arrayFilter.path,
} as const;

/**
 * Converte as referências de rota presentes nos mock.json em URLs da aplicação.
 * Valores que já são URLs externas ou gerados por APP_ROUTES são preservados.
 */
export function resolveAppRoute(routeReference: string): string {
  if (routeReference.startsWith("MASTERCLASS_LESSON:")) {
    return APP_ROUTES.public.javaScript.masterclass
      .lesson(routeReference.replace("MASTERCLASS_LESSON:", ""))
      .path;
  }

  return STATIC_ROUTE_REFERENCES[routeReference as keyof typeof STATIC_ROUTE_REFERENCES] ?? routeReference;
}
