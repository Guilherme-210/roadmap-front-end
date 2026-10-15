import type { CodeExample } from "@/types/example";

export const booleanExample: CodeExample = {
  id: "javascript-boolean",
  title: "Booleans & Coerção de Tipos na Prática",
  description:
    "Compreenda valores truthy e falsy, coerção implícita vs explícita e operadores lógicos no JavaScript.",
  language: "javascript",
  category: "Tipos Primitivos",
  difficulty: "iniciante",
  tags: ["boolean", "truthy", "falsy", "coercao", "tipos primitivos"],
  explanation: `Em JavaScript, qualquer valor pode ser convertido implicitamente ou explicitamente para um valor booleano (true ou false).

### Valores Falsy fundamentais:
- \`false\`
- \`0\`, \`-0\`, \`0n\` (BigInt zero)
- \`""\` (string vazia)
- \`null\`
- \`undefined\`
- \`NaN\`

Todos os outros valores são **truthy**, incluindo arrays vazios \`[]\` e objetos vazios \`{}\`.`,
  initialCode: `// ============================================================================
// JS MasterClass - Booleans & Coerção de Tipos
// ============================================================================

console.info("⚡ Testando valores Truthy e Falsy no JavaScript:");

// 1. Coerção Explícita com Boolean() e operador duplo NOT (!!)
console.log("Boolean(''):", Boolean("")); // false (string vazia é falsy)
console.log("Boolean(0):", Boolean(0)); // false (zero é falsy)
console.log("Boolean('0'):", Boolean("0")); // true (string com conteúdo é truthy!)
console.log("Boolean([]):", Boolean([])); // true (arrays são objetos, logo truthy!)
console.log("Boolean({}):", Boolean({})); // true (objetos são sempre truthy!)

// 2. Operador Duplo NOT (!!) - atalho idiomático para coerção booleana
const texto = "JavaScript";
console.log("!!texto:", !!texto); // true
console.log("!!null:", !!null); // false

// 3. Curto-circuito com Operadores Lógicos (&& e ||)
const usuario = { nome: "Dev", logado: true };
const mensagemBoasVindas = usuario.logado && "Bem-vindo de volta ao sistema!";
console.log("Resultado do operador &&:", mensagemBoasVindas);

const nomeExibicao = "" || "Usuário Anônimo";
console.log("Valor padrão com ||:", nomeExibicao);

// 4. Operador de Coalescência Nula (??) - avalia apenas null ou undefined
const pontuacao = 0;
const placar1 = pontuacao || 10; // Cuidado: 0 é falsy, vira 10
const placar2 = pontuacao ?? 10; // Preserva o zero!
console.log("placar com || (inesperado se 0 for válido):", placar1);
console.log("placar com ?? (correto para 0):", placar2);

// 5. Comparação estrita (===) vs solta (==)
console.info("🔍 Comparação estrita vs coerção com == :");
console.log("0 == false:", 0 == false); // true (coerção oculta perigosa!)
console.log("0 === false:", 0 === false); // false (tipos diferentes: number !== boolean)
console.log("'' == false:", "" == false); // true
console.log("'' === false:", "" === false); // false
`,
};

