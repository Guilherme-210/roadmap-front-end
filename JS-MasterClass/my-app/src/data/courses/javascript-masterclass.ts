export interface CourseLesson {
  id: string;
  slug: string;
  number: string;
  title: string;
  type: "video" | "pdf";
  module: string;
  durationOrPages?: string;
  introduction: string;
  topics: string[];
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
  keyTakeaways?: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: CourseLesson[];
}

export interface CourseInfo {
  id: string;
  slug: string;
  language: string;
  languageSlug: string;
  title: string;
  instructor: string;
  badge: string;
  description: string;
  totalLessons: number;
  modules: CourseModule[];
}

export const JS_MASTERCLASS_LESSONS: CourseLesson[] = [
  {
    id: "js-mc-01",
    slug: "abertura",
    number: "1",
    title: "Abertura",
    type: "video",
    module: "Módulo 01: Introdução & Metodologia",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Boas-vindas ao curso JavaScript MasterClass pelo professor Rodrigo Branas. Esta aula apresenta a proposta pedagógica, o rigor conceitual do curso e a mentalidade necessária para dominar a linguagem além dos frameworks.",
    topics: [
      "Visão geral do currículo e objetivos do curso",
      "Abordagem pedagógica focada nos mecanismos internos da linguagem",
      "A importância dos fundamentos antes dos frameworks",
      "Como tirar dúvidas e aproveitar os materiais complementares",
    ],
    keyTakeaways: [
      "O domínio do JavaScript puro (Vanilla) acelera o aprendizado de qualquer biblioteca ou framework moderno.",
      "Aulas focadas em código real, testes automatizados e especificações da ECMA.",
    ],
  },
  {
    id: "js-mc-02",
    slug: "instrucoes",
    number: "2",
    title: "Instruções",
    type: "pdf",
    module: "Módulo 01: Introdução & Metodologia",
    durationOrPages: "Material PDF",
    introduction:
      "Guia prático de instruções gerais para o curso. Orientações sobre a preparação do ambiente de desenvolvimento, instalação do Node.js, configuração de editor e execução dos testes práticos de cada lição.",
    topics: [
      "Requisitos de sistema e ambiente de desenvolvimento",
      "Configuração recomendada do editor de código (VS Code / extensões)",
      "Uso do Git e repositório de suporte",
      "Estrutura dos exercícios e testes automatizados",
    ],
    keyTakeaways: [
      "Ambiente preparado e padronizado garante que todos os exemplos rodem sem inconsistências.",
      "Consulte o arquivo PDF para comandos de setup e orientações de fluxo de estudo.",
    ],
  },
  {
    id: "js-mc-03",
    slug: "historia-da-linguagem",
    number: "3",
    title: "História da Linguagem",
    type: "video",
    module: "Módulo 01: Introdução & Metodologia",
    durationOrPages: "Vídeo Aula",
    introduction:
      "A história fascinante da criação do JavaScript em 1995 por Brendan Eich na Netscape em apenas 10 dias. Descubra os codinomes Mocha e LiveScript, a disputa comercial com a Microsoft (JScript) e o nascimento da especificação ECMA-262.",
    topics: [
      "Criação por Brendan Eich em 1995 na Netscape",
      "Origem dos nomes: Mocha, LiveScript e JavaScript",
      "Influências fundamentais: Scheme (funções de primeira classe) e Self (herança prototípica)",
      "A primeira guerra dos navegadores e o surgimento do JScript pela Microsoft",
      "A necessidade de padronização e a criação do comitê ECMA-262",
    ],
    codeSnippet: {
      language: "javascript",
      code: `// O JavaScript nasceu com funções como cidadãs de primeira classe (herança de Scheme)
// e orientação a objetos baseada em protótipos (herança de Self).
const linguagem = {
  nome: "JavaScript",
  criador: "Brendan Eich",
  ano: 1995,
  padronizacao: "ECMA-262"
};
console.log(linguagem);`,
      caption: "Identidade histórica da linguagem concebida na Netscape",
    },
    keyTakeaways: [
      "JavaScript não tem relação direta com Java além de uma jogada de marketing conjunta da Netscape com a Sun Microsystems.",
      "O paradigma prototípico e as funções de primeira classe estavam no DNA da linguagem desde o primeiro protótipo.",
    ],
  },
  {
    id: "js-mc-04",
    slug: "evolucao-das-versoes",
    number: "4",
    title: "Evolução das Versões",
    type: "video",
    module: "Módulo 01: Introdução & Metodologia",
    durationOrPages: "Vídeo Aula",
    introduction:
      "A evolução cronológica do padrão ECMAScript: desde as versões iniciais (ES1 a ES3), o cancelamento polêmico do ES4, o marco de estabilidade do ES5 (2009), a grande revolução do ES6/ES2015 e o modelo moderno de lançamentos anuais conduzido pelo comitê TC39.",
    topics: [
      "ECMAScript 1, 2 e 3: consolidação da linguagem nos navegadores",
      "A estagnação e o cancelamento do controverso ECMAScript 4",
      "ECMAScript 5 (2009): strict mode, JSON nativo e novos métodos de array",
      "ECMAScript 6 / ES2015: a maior transformação da história da linguagem",
      "O processo do TC39 e os estágios de propostas (Stage 0 a Stage 4)",
      "Lançamentos anuais contínuos (ES2016 até o ESNext)",
    ],
    keyTakeaways: [
      "A partir de 2015, o ECMAScript adotou cadência anual, garantindo evolução previsível sem esperas decenais.",
      "O TC39 (Technical Committee 39) avalia propostas por consenso e implementação real nos motores JS (V8, SpiderMonkey, JavaScriptCore).",
    ],
  },
  {
    id: "js-mc-05",
    slug: "variaveis",
    number: "5",
    title: "Variáveis",
    type: "video",
    module: "Módulo 02: Fundamentos & Declarações",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Como o motor JavaScript gerencia identificadores e alocação de memória. As diferenças essenciais entre var, let e const, escopo de função versus escopo de bloco, elevação (Hoisting) e a Zona Morta Temporal (Temporal Dead Zone - TDZ).",
    topics: [
      "Declarações com var, let e const",
      "Escopo global, escopo de função e escopo de bloco",
      "O mecanismo de Hoisting (elevação de declarações)",
      "Temporal Dead Zone (TDZ) com let e const",
      "Reatribuição versus mutabilidade em variáveis const",
    ],
    codeSnippet: {
      language: "javascript",
      code: `// Diferença fundamental de escopo e reatribuição:
let contador = 1;
contador = 2; // Permitido: let permite reatribuição

const usuario = { nome: "Rodrigo" };
usuario.nome = "Rodrigo Branas"; // Permitido: mutação do objeto referenciado
// usuario = {}; // Erro: const impede reatribuição da referência

if (true) {
  var escopoFuncao = "vaza do bloco";
  let escopoBloco = "preso ao bloco";
}
console.log(escopoFuncao); // "vaza do bloco"
// console.log(escopoBloco); // ReferenceError`,
      caption: "Comparação de escopos e regras de reatribuição",
    },
    keyTakeaways: [
      "Prefira const por padrão para evitar reatribuições acidentais; utilize let somente quando a variável precisar variar.",
      "Evite var no código moderno devido ao escopo de função e vazamentos de bloco.",
    ],
  },
  {
    id: "js-mc-06",
    slug: "tipos-de-dados",
    number: "6",
    title: "Tipos de Dados",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "O sistema de tipagem dinâmico e fraco do JavaScript. A distinção fundamental entre valores primitivos (armazenados diretamente na stack por valor) e objetos (armazenados no heap por referência), e o comportamento do operador typeof.",
    topics: [
      "Tipagem dinâmica: variáveis têm tipos dinâmicos associados aos valores",
      "Os 7 tipos primitivos: string, number, bigint, boolean, symbol, undefined e null",
      "O tipo estrutural: Object (e subtipos como Function, Array, Date, RegExp)",
      "Passagem por valor (primitivos) vs Passagem por referência (objetos)",
      "Uso e idiossincrasias do operador typeof (como typeof null === 'object')",
    ],
    codeSnippet: {
      language: "javascript",
      code: `// Primitivos são copiados por valor:
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (permanece intacto)

// Objetos são copiados por referência:
let obj1 = { valor: 10 };
let obj2 = obj1;
obj2.valor = 20;
console.log(obj1.valor); // 20 (compartilham a mesma referência em memória)`,
      caption: "Cópia por valor versus cópia por referência",
    },
    keyTakeaways: [
      "Primitivos são imutáveis e passados por valor.",
      "Objetos são mutáveis e manipulados através de referências na memória.",
    ],
  },
  {
    id: "js-mc-07",
    slug: "number",
    number: "7",
    title: "Number",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Aprofundamento no tipo primitivo Number. Representação de números inteiros e fracionários, bases numéricas (decimal, binária, octal e hexadecimal), separadores numéricos e os valores especiais Infinity, -Infinity e NaN.",
    topics: [
      "Representação única para inteiros e decimais",
      "Bases numéricas: binária (0b), octal (0o) e hexadecimal (0x)",
      "Separadores numéricos legíveis (ex: 1_000_000)",
      "Valores especiais: Infinity, -Infinity e NaN (Not-a-Number)",
      "Limites numéricos seguros: Number.MAX_SAFE_INTEGER e Number.MIN_SAFE_INTEGER",
    ],
    codeSnippet: {
      language: "javascript",
      code: `const decimal = 42;
const binario = 0b101010; // 42 em binário
const hexa = 0x2A; // 42 em hexadecimal
const legivel = 1_000_000; // Separador numérico

console.log(binario === decimal); // true
console.log(1 / 0); // Infinity
console.log(0 / 0); // NaN
console.log(Number.isNaN(NaN)); // true`,
      caption: "Literais numéricos e valores sentinela do JavaScript",
    },
    keyTakeaways: [
      "Todo número em JavaScript tradicional é um número de ponto flutuante de dupla precisão de 64 bits.",
      "Para números inteiros maiores que 2^53 - 1, utilize BigInt.",
    ],
  },
  {
    id: "js-mc-07-1",
    slug: "operadores-numericos",
    number: "7.1",
    title: "Operadores Numéricos",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Operações matemáticas e operadores aritméticos fundamentais: soma, subtração, multiplicação, divisão, resto (%) e exponenciação (**). Comportamento dos operadores de incremento e decremento pré e pós-fixados e regras de precedência.",
    topics: [
      "Operadores aritméticos binários (+, -, *, /, %, **)",
      "Operador de resto da divisão (%) vs operador de módulo",
      "Incremento e decremento: pré-fixado (++x) vs pós-fixado (x++)",
      "Operadores de atribuição aritmética composta (+=, -=, *=, /=)",
      "Tabela de precedência e associatividade de operadores",
    ],
    codeSnippet: {
      language: "javascript",
      code: `let x = 5;
const pos = x++; // Retorna o valor original (5), depois incrementa para 6
console.log(pos, x); // 5, 6

let y = 5;
const pre = ++y; // Incrementa para 6, depois retorna o novo valor (6)
console.log(pre, y); // 6, 6

// Exponenciação (ES2016):
console.log(2 ** 3); // 8`,
      caption: "Diferença entre operadores pré e pós-fixados",
    },
    keyTakeaways: [
      "O operador de exponenciação `**` substituiu a necessidade de chamar `Math.pow` em código moderno.",
      "Cuidado com `+` atuando como concatenação quando um dos operandos é String.",
    ],
  },
  {
    id: "js-mc-07-2",
    slug: "conversao-numerica",
    number: "7.2",
    title: "Conversão Numérica",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Regras de coerção implícita e conversão explícita para o tipo Number. As diferenças práticas entre a função construtora Number(), o operador unário +, parseInt() com base de cálculo (radix) e parseFloat().",
    topics: [
      "Conversão explícita com Number(valor)",
      "O atalho idiomático do operador unário +valor",
      "Parsing com parseInt(string, radix) e parseFloat(string)",
      "Diferença entre coerção estrita e parsing permissivo",
      "Casos especiais: Number(''), Number(null), Number(undefined), Number(true)",
    ],
    codeSnippet: {
      language: "javascript",
      code: `// Coerção Estrita (Number / +):
console.log(Number("10")); // 10
console.log(Number("10px")); // NaN (rejeita caracteres não numéricos)
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// Parsing Permissivo (parseInt / parseFloat):
console.log(parseInt("10px", 10)); // 10 (lê até encontrar caractere inválido)
console.log(parseFloat("10.5em")); // 10.5`,
      caption: "Coerção estrita com Number versus extração com parseInt",
    },
    keyTakeaways: [
      "Sempre passe o radix (base) no `parseInt(str, 10)` para evitar parsing em octal ou bases inesperadas.",
      "`Number(null)` resulta em `0`, mas `Number(undefined)` resulta em `NaN`.",
    ],
  },
  {
    id: "js-mc-07-3",
    slug: "ieee-754",
    number: "7.3",
    title: "IEEE 754",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "A especificação IEEE 754 de ponto flutuante de precisão dupla em binário de 64 bits (binary64). Entenda a fundo por que 0.1 + 0.2 !== 0.3, como o expoente e a mantissa funcionam e como lidar com precisão monetária e matemática em produção.",
    topics: [
      "A estrutura dos 64 bits: 1 bit de sinal, 11 bits de expoente, 52 bits de fração (mantissa)",
      "O problema da dízima periódica em base binária",
      "Por que 0.1 + 0.2 === 0.30000000000000004",
      "O conceito de Number.EPSILON para comparações seguras de ponto flutuante",
      "Estratégias de mitigação para cálculos financeiros (inteiros em centavos ou bibliotecas de precisão arbitrária)",
    ],
    codeSnippet: {
      language: "javascript",
      code: `// A famosa imprecisão do IEEE 754:
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false!

// Comparação correta usando Number.EPSILON:
function quaseIguais(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log(quaseIguais(0.1 + 0.2, 0.3)); // true`,
      caption: "Comparação segura de números fracionários com Number.EPSILON",
    },
    keyTakeaways: [
      "Nunca armazene valores monetários com decimais simples em sistemas críticos; trabalhe em centavos inteiros.",
      "A imprecisão não é um bug do JavaScript, mas do padrão de ponto flutuante de quase todas as linguagens modernas.",
    ],
  },
  {
    id: "js-mc-07-4",
    slug: "math-api",
    number: "7.4",
    title: "Math API",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "O objeto embutido Math da linguagem JavaScript. Constantes fundamentais e métodos estáticos essenciais para arredondamento, funções trigonométricas, exponenciais, mínimo/máximo e geração de números aleatórios.",
    topics: [
      "Constantes matemáticas: Math.PI, Math.E, Math.SQRT2",
      "Métodos de arredondamento: Math.round, Math.floor, Math.ceil e Math.trunc",
      "Obtenção de valores absolutos e sinais: Math.abs, Math.sign",
      "Cálculo de extremos: Math.min e Math.max com spread operator",
      "Geração de valores pseudoaleatórios com Math.random() e criação de geradores de intervalo",
    ],
    codeSnippet: {
      language: "javascript",
      code: `// Arredondamentos:
console.log(Math.floor(4.9)); // 4 (para baixo)
console.log(Math.ceil(4.1)); // 5 (para cima)
console.log(Math.trunc(4.9)); // 4 (remove a parte fracionária)

// Gerador de número inteiro entre min e max inclusivos:
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Número sorteado (1 a 10):", randomInt(1, 10));`,
      caption: "Exemplos dos principais métodos do objeto Math",
    },
    keyTakeaways: [
      "`Math.trunc` descarta a parte decimal sem arredondar, sendo mais previsível para números negativos do que `Math.floor`.",
      "`Math.random()` não é criptograficamente seguro; para segurança use `crypto.getRandomValues()`.",
    ],
  },
  {
    id: "js-mc-08",
    slug: "string",
    number: "8",
    title: "String",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "O tipo primitivo String para representação de texto em JavaScript. Codificação em unidades UTF-16, imutabilidade intrínseca de cadeias de caracteres, caracteres de escape e medição de comprimento com a propriedade length.",
    topics: [
      "Delimitadores literais: aspas simples, aspas duplas",
      "Imutabilidade: métodos que manipulam strings sempre retornam novas instâncias",
      "Codificação UTF-16 e pares substitutos (surrogate pairs)",
      "Acesso a caracteres individuais via colchetes ou charAt()",
      "Sequências de escape especiais (quebra de linha, tabulação, Unicode)",
    ],
    codeSnippet: {
      language: "javascript",
      code: `const curso = "JavaScript MasterClass";
console.log(curso.length); // 21
console.log(curso[0]); // "J"

// Imutabilidade comprovada:
curso[0] = "X"; // Silenciosamente ignorado (ou TypeError em strict mode)
console.log(curso); // "JavaScript MasterClass" (permanece inalterado)`,
      caption: "Propriedade length e garantia de imutabilidade das strings",
    },
    keyTakeaways: [
      "Strings em JavaScript são sequências indexadas e 100% imutáveis.",
      "A propriedade length conta unidades de código UTF-16 de 16 bits, não necessariamente grafemas visuais.",
    ],
  },
  {
    id: "js-mc-08-1",
    slug: "template-literal",
    number: "8.1",
    title: "Template Literal",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Template Literals introduzidos no ES2015. Uso de crases (backticks), interpolação dinâmica de expressões com ${}, quebras de linha naturais sem caracteres de escape e o recurso avançado de Tagged Templates para metaprogramação.",
    topics: [
      "Sintaxe com acento grave / backticks (`...`)",
      "Interpolação de valores e expressões complexas (${expressao})",
      "Strings multilinha nativas preservando quebras de linha e indentação",
      "Tagged Templates: funções que interceptam e processam templates literais",
      "Casos de uso de Tagged Templates: sanitização contra XSS, styled-components e i18n",
    ],
    codeSnippet: {
      language: "javascript",
      code: `const aluno = "Dev";
const nota = 9.5;
console.log(\`O aluno \${aluno} foi aprovado com nota \${nota}!\`);

// Exemplo de Tagged Template:
function moeda(strings, ...valores) {
  return strings.reduce((acc, str, i) => {
    const val = valores[i - 1];
    const formatado = typeof val === "number" ? \`R$ \${val.toFixed(2)}\` : val;
    return acc + formatado + str;
  });
}
const preco = 49.9;
console.log(moeda\`O valor da inscrição é \${preco} à vista.\`);`,
      caption: "Interpolação direta e Tagged Template customizado",
    },
    keyTakeaways: [
      "Template literals tornam a concatenação de strings legível e reduzem erros de espaçamento.",
      "Tagged templates recebem o array de fragmentos estáticos e os valores interpolados, permitindo transformar a saída.",
    ],
  },
  {
    id: "js-mc-08-2",
    slug: "string-api",
    number: "8.2",
    title: "String API",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "A API completa de métodos utilitários do prototype de String. Métodos de busca, extração, substituição, divisão, preenchimento e normalização textual essenciais para qualquer aplicação profissional.",
    topics: [
      "Busca textual: indexOf, lastIndexOf, includes, startsWith, endsWith",
      "Extração de subcadeias: slice, substring",
      "Substituição: replace e replaceAll com strings e expressões regulares",
      "Divisão e junção: split e concat",
      "Formatação e preenchimento: toLowerCase, toUpperCase, trim, padStart, padEnd",
    ],
    codeSnippet: {
      language: "javascript",
      code: `const texto = "  JavaScript MasterClass  ";

console.log(texto.trim()); // "JavaScript MasterClass"
console.log(texto.includes("Master")); // true
console.log(texto.trim().slice(0, 10)); // "JavaScript"

const codigo = "42";
console.log(codigo.padStart(6, "0")); // "000042" (preenchimento com zeros)`,
      caption: "Demonstração dos métodos mais frequentes da String API",
    },
    keyTakeaways: [
      "Prefira `slice` em vez de `substring`, pois aceita índices negativos de forma intuitiva.",
      "`replaceAll` (ES2021) substitui todas as ocorrências de uma string sem necessidade de regex com flag `g`.",
    ],
  },
  {
    id: "js-mc-09",
    slug: "boolean",
    number: "9",
    title: "Boolean",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "O tipo primitivo Boolean, valores booleanos literais, coerção de tipos explícita com a função Boolean(), o operador duplo NOT (!!) e a distinção fundamental entre valores Truthy e Falsy no motor da linguagem.",
    topics: [
      "Valores primitivos: true e false",
      "A lista canônica de valores Falsy: false, 0, -0, 0n, '', null, undefined, NaN",
      "Comportamento Truthy de objetos, arrays e strings com conteúdo (incluindo '0' e 'false')",
      "Coerção explícita via Boolean() e atalho idiomático !!",
      "Comparações estritas (===) vs soltas (==)",
    ],
    keyTakeaways: [
      "Qualquer objeto ou array em JavaScript é Truthy, mesmo vazios `[]` e `{}`.",
      "Sempre utilize igualdade estrita `===` para prevenir coerções ocultas imprevisíveis.",
    ],
  },
  {
    id: "js-mc-09-1",
    slug: "operadores-booleanos",
    number: "9.1",
    title: "Operadores Booleanos",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Operadores lógicos e a semântica de avaliação em curto-circuito (short-circuit). Os operadores AND (&&), OR (||), NOT (!) e a introdução do operador de coalescência nula (??) para tratamento seguro de valores default.",
    topics: [
      "Curto-circuito com AND (&&): retorna o primeiro falsy ou o último valor",
      "Curto-circuito com OR (||): retorna o primeiro truthy ou o último valor",
      "Operador de coalescência nula (??): avalia apenas null ou undefined",
      "Diferença crítica entre || e ?? quando o valor válido é 0, '' ou false",
      "Operadores de atribuição lógica (&&=, ||=, ??=)",
    ],
    codeSnippet: {
      language: "javascript",
      code: `// Curto-circuito não retorna booleano, retorna o operando decisivo:
console.log("admin" && "acesso liberado"); // "acesso liberado"
console.log("" || "valor padrão"); // "valor padrão"

// Diferença crucial entre || e ??:
const quantidade = 0; // 0 é um valor válido de estoque!
console.log(quantidade || 10); // 10 (inesperado! 0 foi tratado como falsy)
console.log(quantidade ?? 10); // 0 (correto! só substitui se for null/undefined)`,
      caption: "Curto-circuito e a precisão da coalescência nula (??)",
    },
    keyTakeaways: [
      "Para valores padrão onde `0`, `false` ou `''` são válidos, use sempre `??` no lugar de `||`.",
      "Operadores lógicos em JavaScript retornam o valor avaliado real, permitindo pipelines expressivos.",
    ],
  },
  {
    id: "js-mc-10",
    slug: "symbol",
    number: "10",
    title: "Symbol",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "O tipo primitivo Symbol introduzido no ECMAScript 2015. Criação de chaves únicas e imutáveis para propriedades de objetos, prevenção de colisões de propriedades em bibliotecas, registro global de symbols e Well-Known Symbols.",
    topics: [
      "Criação com a função Symbol('descricao') sem operador new",
      "Garantia de unicidade absoluta entre símbolos",
      "Uso de Symbols como chaves ocultas/privadas de propriedades de objetos",
      "Registro global compartilhado: Symbol.for(key) e Symbol.keyFor(sym)",
      "Well-Known Symbols: Symbol.iterator, Symbol.hasInstance, Symbol.toPrimitive",
    ],
    codeSnippet: {
      language: "javascript",
      code: `const s1 = Symbol("id");
const s2 = Symbol("id");
console.log(s1 === s2); // false (são garantidamente únicos!)

const usuario = {
  nome: "Rodrigo",
  [s1]: 12345 // Propriedade não aparece em Object.keys() nem em for...in
};

console.log(Object.keys(usuario)); // ["nome"]
console.log(usuario[s1]); // 12345
console.log(Object.getOwnPropertySymbols(usuario)); // [Symbol(id)]`,
      caption: "Criação de propriedades únicas não enumeráveis com Symbol",
    },
    keyTakeaways: [
      "Symbols não são enumerados por `Object.keys()` ou `for...in`, tornando-os ideais para metaprogramação.",
      "Use `Symbol.for` quando precisar compartilhar uma referência idêntica entre módulos ou contextos.",
    ],
  },
  {
    id: "js-mc-11",
    slug: "regexp",
    number: "11",
    title: "RegExp",
    type: "video",
    module: "Módulo 03: Tipos & Semântica",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Expressões Regulares em JavaScript. Definição com sintaxe literal /padrao/flags versus construtor new RegExp, flags fundamentais (g, i, m, u, s), grupos de captura, quantificadores e os métodos test(), exec() e replace().",
    topics: [
      "Sintaxe literal (/abc/) vs Construtor dinâmico (new RegExp('abc', 'g'))",
      "Flags: g (global), i (case-insensitive), m (multiline), u (unicode)",
      "Metacaracteres, classes de caracteres (\\d, \\w, \\s) e âncoras (^, $)",
      "Grupos de captura () e grupos de não captura (?:)",
      "Métodos: RegExp.prototype.test(), RegExp.prototype.exec() e integração com String API",
    ],
    codeSnippet: {
      language: "javascript",
      code: `// Validação simples de formato de e-mail:
const emailRegex = /^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/i;
console.log(emailRegex.test("contato@rodrigobranas.com.br")); // true
console.log(emailRegex.test("invalido@")); // false

// Extração de grupos de data:
const dataRegex = /(\\d{2})\\/(\\d{2})\\/(\\d{4})/;
const match = "Data: 16/10/2026".match(dataRegex);
console.log(\`Dia: \${match[1]}, Mês: \${match[2]}, Ano: \${match[3]}\`);`,
      caption: "Validação e captura de grupos com Expressões Regulares",
    },
    keyTakeaways: [
      "Atenção com a flag global `g` em `RegExp.test()`: ela mantém estado interno (`lastIndex`), podendo alternar entre true e false em chamadas repetidas.",
      "Prefira a sintaxe literal quando o padrão for estático para permitir pré-compilação pelo motor JS.",
    ],
  },
  {
    id: "js-mc-12",
    slug: "exercicio-1",
    number: "12",
    title: "Exercício 1",
    type: "pdf",
    module: "Módulo 04: Prática & Desafios",
    durationOrPages: "Material PDF",
    introduction:
      "Enunciado do primeiro grande exercício prático do curso. Um desafio integrador que exige a aplicação simultânea de variáveis, tipos primitivos, operadores lógicos e manipulação de strings em um algoritmo real.",
    topics: [
      "Enunciado detalhado do problema e requisitos funcionais",
      "Especificação das entradas e saídas esperadas",
      "Tratamento de regras de negócio com tipos primitivos",
      "Orientações para implementação independente antes de assistir à resolução",
    ],
    keyTakeaways: [
      "Tente resolver o exercício por conta própria antes de conferir a aula de resolução para fixar os conceitos.",
      "Concentre-se em escrever código limpo e com nomes descritivos de variáveis.",
    ],
  },
  {
    id: "js-mc-12-1",
    slug: "correcao-do-exercicio-1",
    number: "12.1",
    title: "Correção do Exercício 1",
    type: "video",
    module: "Módulo 04: Prática & Desafios",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Resolução e correção completa do Exercício 1 pelo professor Rodrigo Branas. Análise de decisões de arquitetura de código, tratamento de casos de borda, legibilidade e dicas de refatoração para código limpo.",
    topics: [
      "Resolução comentada passo a passo do enunciado",
      "Tratamento de cenários extremos e validação de tipos",
      "Refatoração com foco em clareza e manutenção",
      "Comparação entre soluções procedurais e soluções expressivas",
    ],
    keyTakeaways: [
      "A resolução de problemas reais revela peculiaridades de coerção de tipos que raramente aparecem em teoria.",
      "Escreva pequenos testes para certificar-se de que sua solução cobre todos os cenários.",
    ],
  },
  {
    id: "js-mc-13",
    slug: "object",
    number: "13",
    title: "Object",
    type: "video",
    module: "Módulo 05: Objetos & Herança",
    durationOrPages: "Vídeo Aula",
    introduction:
      "O tipo estrutural fundamental do JavaScript. Objetos como coleções dinâmicas de propriedades chave-valor, notação literal {}, acesso com ponto versus colchetes, adição dinâmica, alteração e exclusão de propriedades com o operador delete.",
    topics: [
      "Criação literal de objetos e notação abreviada de propriedades (Shorthand)",
      "Acesso com ponto (obj.prop) vs colchetes (obj['prop'])",
      "Nomes de propriedades computadas em tempo de execução ([expressao])",
      "Exclusão de propriedades com o operador delete",
      "Verificação de existência de propriedades: operador in vs hasOwnProperty",
    ],
    codeSnippet: {
      language: "javascript",
      code: `const propriedadeDinamica = "senioridade";

const desenvolvedor = {
  nome: "Carlos",
  linguagem: "JavaScript",
  [propriedadeDinamica]: "Especialista" // Chave dinâmica computada
};

delete desenvolvedor.linguagem; // Remove a chave do objeto
console.log("linguagem" in desenvolvedor); // false
console.log(desenvolvedor.senioridade); // "Especialista"`,
      caption: "Criação dinâmica e manipulação de propriedades de objetos",
    },
    keyTakeaways: [
      "Objetos em JavaScript são mapas chave-valor dinâmicos extremamente flexíveis.",
      "A notação de colchetes é indispensável para chaves dinâmicas ou caracteres especiais.",
    ],
  },
  {
    id: "js-mc-13-1",
    slug: "undefined-e-null",
    number: "13.1",
    title: "Undefined e Null",
    type: "video",
    module: "Módulo 05: Objetos & Herança",
    durationOrPages: "Vídeo Aula",
    introduction:
      "A distinção conceitual e prática entre os tipos primitivos undefined e null. Quando usar cada um, tratamento de propriedades inexistentes, o comportamento do Optional Chaining (?.) e a explicação histórica de typeof null === 'object'.",
    topics: [
      "undefined: ausência involuntária de valor (declarado mas não inicializado)",
      "null: ausência intencional de valor ou objeto",
      "Comparações de igualdade solta (null == undefined) vs estrita (null === undefined)",
      "Acesso seguro a propriedades encadeadas com Optional Chaining (?.)",
      "O bug histórico da linguagem: typeof null retornando 'object'",
    ],
    codeSnippet: {
      language: "javascript",
      code: `let naoDefinido;
console.log(naoDefinido); // undefined (automático)

let vazio = null;
console.log(vazio); // null (intencional)

console.log(null == undefined); // true (coerção solta)
console.log(null === undefined); // false (tipos distintos!)

// Optional Chaining seguro:
const config = {};
console.log(config.database?.connection?.port); // undefined (sem lançar erro)`,
      caption: "Diferença semântica entre undefined e null e uso de Optional Chaining",
    },
    keyTakeaways: [
      "Use `null` para indicar explicitamente que uma variável ou propriedade de objeto não aponta para nenhum valor.",
      "`Optional Chaining (?.)` evita erros fatais de `Cannot read properties of undefined`.",
    ],
  },
  {
    id: "js-mc-13-2",
    slug: "comparacao-de-objetos",
    number: "13.2",
    title: "Comparação de Objetos",
    type: "video",
    module: "Módulo 05: Objetos & Herança",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Como a comparação de igualdade opera sobre objetos em JavaScript. Por que dois objetos com propriedades idênticas não são iguais ({a: 1} !== {a: 1}), comparação por referência versus igualdade estrutural e técnicas de cópia (Shallow Copy vs Deep Copy).",
    topics: [
      "Comparação estrita de objetos avalia identidade de referência na memória",
      "Por que {} === {} resulta em false",
      "Cópia rasa (Shallow Copy) com Object.assign e Spread Operator ({...obj})",
      "Cópia profunda (Deep Copy) com structuredClone() nativo",
      "Implementação de funções para comparação profunda (Deep Equality)",
    ],
    codeSnippet: {
      language: "javascript",
      code: `const livroA = { titulo: "Clean Code" };
const livroB = { titulo: "Clean Code" };
console.log(livroA === livroB); // false (endereços de memória distintos!)

const livroC = livroA;
console.log(livroA === livroC); // true (apontam para o exato mesmo objeto)

// Clonagem profunda moderna com structuredClone:
const original = { config: { tema: "dark" } };
const clone = structuredClone(original);
console.log(original.config === clone.config); // false (cópias profundas independentes)`,
      caption: "Igualdade por referência versus clonagem com structuredClone",
    },
    keyTakeaways: [
      "Objetos são comparados por referência de memória; para comparar propriedades, utilize uma função de deep equal.",
      "`structuredClone()` é o padrão moderno nativo para cópia profunda segura no JavaScript.",
    ],
  },
  {
    id: "js-mc-13-3",
    slug: "heranca",
    number: "13.3",
    title: "Herança",
    type: "video",
    module: "Módulo 05: Objetos & Herança",
    durationOrPages: "Vídeo Aula",
    introduction:
      "O modelo de herança prototípica do JavaScript (Prototypal Inheritance). A cadeia de protótipos (Prototype Chain), o protótipo oculto [[Prototype]], a propriedade __proto__, Object.create() e como a delegação de métodos ocorre dinamicamente.",
    topics: [
      "Conceito de delegação prototípica versus herança clássica baseada em classes",
      "A cadeia de protótipos (Prototype Chain) e a busca recursiva de propriedades",
      "Criação de objetos vinculados com Object.create(prototipo)",
      "Sombreamento de propriedades (Property Shadowing)",
      "Métodos de inspeção de protótipo: Object.getPrototypeOf() e Object.setPrototypeOf()",
    ],
    codeSnippet: {
      language: "javascript",
      code: `// Protótipo base que fornece comportamento:
const veiculo = {
  acelerar() {
    return \`\${this.modelo} acelerando...\`;
  }
};

// Criação de carro delegando prototipicamente para veiculo:
const carro = Object.create(veiculo);
carro.modelo = "Fusca";

console.log(carro.acelerar()); // "Fusca acelerando..."
console.log(Object.getPrototypeOf(carro) === veiculo); // true`,
      caption: "Herança prototípica com delegação via Object.create",
    },
    keyTakeaways: [
      "Em JavaScript, objetos herdam diretamente de outros objetos em tempo de execução.",
      "As classes introduzidas no ES6 são apenas 'açúcar sintático' (syntactic sugar) sobre a cadeia de protótipos.",
    ],
  },
  {
    id: "js-mc-13-4",
    slug: "object-api",
    number: "13.4",
    title: "Object API",
    type: "video",
    module: "Módulo 05: Objetos & Herança",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Os métodos estáticos mais poderosos da função construtora Object: Object.assign(), Object.keys(), Object.values(), Object.entries(), Object.fromEntries(), descritores de propriedades (Object.defineProperty) e controle de mutabilidade com Object.freeze(), Object.seal() e Object.preventExtensions().",
    topics: [
      "Inspeção e iteração: Object.keys(), Object.values() e Object.entries()",
      "Conversão inversa: Object.fromEntries()",
      "Composição de objetos com Object.assign()",
      "Descritores de propriedades: writable, enumerable e configurable",
      "Níveis de integridade e imutabilidade: Object.preventExtensions(), Object.seal() e Object.freeze()",
    ],
    codeSnippet: {
      language: "javascript",
      code: `const configuracao = {
  ambiente: "producao",
  versao: "2.0"
};

// Congelamento total contra adições, remoções e alterações:
Object.freeze(configuracao);
configuracao.versao = "3.0"; // Ignorado silenciosamente (ou erro em strict mode)
console.log(configuracao.versao); // "2.0"

// Iteração elegante de entradas chave/valor:
for (const [chave, valor] of Object.entries(configuracao)) {
  console.log(\`\${chave}: \${valor}\`);
}`,
      caption: "Imutabilidade com Object.freeze e iteração com Object.entries",
    },
    keyTakeaways: [
      "`Object.freeze()` congela apenas o primeiro nível (shallow freeze); para objetos aninhados é necessário congelamento recursivo.",
      "`Object.entries()` e `Object.fromEntries()` facilitam transformações funcionais de chave-valor.",
    ],
  },
  {
    id: "js-mc-26",
    slug: "json",
    number: "14",
    title: "JSON",
    type: "video",
    module: "Módulo 06: Serialização & Prática Avançada",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Estudo detalhado sobre o formato JSON (JavaScript Object Notation), sua especificação derivada do JavaScript, as diferenças para objetos literais, os métodos JSON.stringify() e JSON.parse(), funções replacer e reviver, e tratamento de referências circulares.",
    topics: [
      "História e origem do formato JSON por Douglas Crockford",
      "Diferenças fundamentais entre Objeto Literal JS e formato JSON",
      "Serialização com JSON.stringify(valor, replacer, espacamento)",
      "Desserialização e conversão com JSON.parse(texto, reviver)",
      "Customização de serialização com o método toJSON()",
      "Erros comuns: perda de funções, undefined, Symbol e referências circulares",
    ],
    codeSnippet: {
      language: "javascript",
      code: `const usuario = {
  nome: "Rodrigo",
  modulo: 6,
  tags: ["javascript", "json", "backend"],
  ativo: true
};

// Serialização para string JSON formatada:
const jsonString = JSON.stringify(usuario, null, 2);
console.log("JSON Serializado:\\n" + jsonString);

// Desserialização com reviver:
const objetoRecuperado = JSON.parse(jsonString, (chave, valor) => {
  if (chave === "nome") return valor.toUpperCase();
  return valor;
});
console.log("Nome parseado:", objetoRecuperado.nome);`,
      caption: "Serialização e desserialização com JSON.stringify e JSON.parse",
    },
    keyTakeaways: [
      "`JSON.stringify()` ignora propriedades com valores `undefined`, funções ou `Symbol`.",
      "O parâmetro `replacer` e o método `toJSON()` permitem controlar com precisão como o objeto é serializado.",
    ],
  },
  {
    id: "js-mc-27",
    slug: "exercicio-2",
    number: "15",
    title: "Exercício 2",
    type: "pdf",
    module: "Módulo 06: Serialização & Prática Avançada",
    durationOrPages: "Material PDF",
    introduction:
      "Caderno de exercícios práticos número 2 do curso JavaScript MasterClass. Desafios envolvendo criação de objetos, manipulação de protótipos, proteção de propriedades, herança e serialização com JSON.",
    topics: [
      "Enunciado completo do Desafio 2 proposto por Rodrigo Branas",
      "Criação e modelagem de entidades com protótipos e Object API",
      "Implementação de métodos de busca e manipulação de coleções",
      "Regras de integridade com Object.freeze ou Object.seal",
      "Testes automatizados esperados para validar o exercício",
    ],
    keyTakeaways: [
      "Pratique a modelagem sem auxílio de bibliotecas externas para fixar a herança prototípica pura.",
      "Analise as asserções de teste propostas no PDF antes de iniciar a codificação da solução.",
    ],
  },
  {
    id: "js-mc-28",
    slug: "correcao-do-exercicio-2",
    number: "15.1",
    title: "Correção Exercício 2",
    type: "video",
    module: "Módulo 06: Serialização & Prática Avançada",
    durationOrPages: "Vídeo Aula",
    introduction:
      "Resolução e correção comentada passo a passo do Exercício 2 pelo professor Rodrigo Branas. Análise dos erros comuns, decisões de modelagem de dados, uso de protótipos e boas práticas de código limpo em JavaScript.",
    topics: [
      "Análise minuciosa dos requisitos do Exercício 2",
      "Construção da solução passo a passo com testes orientados a comportamento",
      "Refatoração de métodos utilizando boas práticas de Clean Code",
      "Discussão sobre performance de protótipos versus closures",
      "Conclusão do ciclo de fundamentos e objetos da linguagem",
    ],
    codeSnippet: {
      language: "javascript",
      code: `// Resumo da solução comentada pelo professor:
function Database(nome) {
  this.nome = nome;
  this.tabelas = {};
}

Database.prototype.criarTabela = function(nomeTabela) {
  this.tabelas[nomeTabela] = [];
};

const db = new Database("masterclass");
db.criarTabela("alunos");
console.log("Database inicializada:", db.nome);
console.log("Tabelas registradas:", Object.keys(db.tabelas));`,
      caption: "Padrão de modelagem orientado a protótipos demonstrado na correção",
    },
    keyTakeaways: [
      "A correção demonstra como aplicar protótipos para economizar memória em múltiplas instâncias.",
      "A separação clara de responsabilidades simplifica a manutenção e os testes unitários.",
    ],
  },
];

export const COURSE_INFO: CourseInfo = {
  id: "java-script-masterclass",
  slug: "java-script-masterclass",
  language: "JavaScript",
  languageSlug: "java-script",
  title: "JavaScript MasterClass",
  instructor: "Rodrigo Branas",
  badge: "Curso Completo • Especialização",
  description:
    "A trilha definitiva para dominar o JavaScript a fundo, do funcionamento interno dos tipos primitivos e coerção à metaprogramação com Symbols, herança prototípica e arquitetura orientada a objetos moderna.",
  totalLessons: JS_MASTERCLASS_LESSONS.length,
  modules: [
    {
      id: "mod-01",
      title: "Módulo 01: Introdução & Metodologia",
      description: "Abertura, instruções de ambiente, história da linguagem e evolução das versões ECMA.",
      lessons: JS_MASTERCLASS_LESSONS.filter((l) => l.module.startsWith("Módulo 01")),
    },
    {
      id: "mod-02",
      title: "Módulo 02: Fundamentos & Declarações",
      description: "Gerenciamento de identificadores, escopos, hoisting e TDZ com var, let e const.",
      lessons: JS_MASTERCLASS_LESSONS.filter((l) => l.module.startsWith("Módulo 02")),
    },
    {
      id: "mod-03",
      title: "Módulo 03: Tipos & Semântica",
      description: "Tipos primitivos, IEEE 754, Number, String, Boolean, Symbol, RegExp e suas APIs.",
      lessons: JS_MASTERCLASS_LESSONS.filter((l) => l.module.startsWith("Módulo 03")),
    },
    {
      id: "mod-04",
      title: "Módulo 04: Prática & Desafios",
      description: "Exercícios práticos integradores e correções passo a passo com o professor.",
      lessons: JS_MASTERCLASS_LESSONS.filter((l) => l.module.startsWith("Módulo 04")),
    },
    {
      id: "mod-05",
      title: "Módulo 05: Objetos & Herança",
      description: "Coleções dinâmicas, comparação por referência, herança prototípica e Object API.",
      lessons: JS_MASTERCLASS_LESSONS.filter((l) => l.module.startsWith("Módulo 05")),
    },
    {
      id: "mod-06",
      title: "Módulo 06: Serialização & Prática Avançada",
      description: "JSON, serialização de dados, exercício 2 e resolução passo a passo.",
      lessons: JS_MASTERCLASS_LESSONS.filter((l) => l.module.startsWith("Módulo 06")),
    },
  ],
};

export const JS_MASTERCLASS_COURSE = COURSE_INFO;

export function getLessonBySlug(slug: string): CourseLesson | undefined {
  return JS_MASTERCLASS_LESSONS.find((l) => l.slug === slug);
}

export function getAdjacentLessons(slug: string): {
  previous?: CourseLesson;
  next?: CourseLesson;
} {
  const index = JS_MASTERCLASS_LESSONS.findIndex((l) => l.slug === slug);
  if (index === -1) return {};
  return {
    previous: index > 0 ? JS_MASTERCLASS_LESSONS[index - 1] : undefined,
    next: index < JS_MASTERCLASS_LESSONS.length - 1 ? JS_MASTERCLASS_LESSONS[index + 1] : undefined,
  };
}
