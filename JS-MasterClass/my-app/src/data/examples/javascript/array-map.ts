import type { CodeExample } from "@/types/example";

export const arrayMapExample: CodeExample = {
  id: "javascript-array-map",
  title: "Array.prototype.map() na Prática",
  description:
    "Aprenda como transformar elementos de um array de forma imutável utilizando uma função de projeção pura.",
  language: "javascript",
  category: "Métodos Funcionais de Array",
  difficulty: "iniciante",
  tags: ["array", "map", "imutabilidade", "programação funcional"],
  explanation: `O método \`map()\` cria um novo array preenchido com os resultados da chamada de uma função fornecida em cada elemento do array de chamada.

### Regras fundamentais:
1. **Imutabilidade**: O array original nunca é modificado.
2. **Mesmo comprimento**: O array resultante sempre terá exatamente a mesma quantidade de elementos do array original.
3. **Função Pura**: É boa prática que o callback não produza efeitos colaterais (side effects).`,
  initialCode: `// ============================================================================
// JS MasterClass - Estudo Prático de Array.prototype.map()
// ============================================================================

console.info("🚀 Iniciando execução do exemplo de Array.prototype.map()...");

// 1. Transformação Básica de Números (Dobro e Quadrado)
const numeros = [2, 4, 6, 8, 10];
const dobrados = numeros.map((num) => num * 2);
const quadrados = numeros.map((num) => num ** 2);

console.log("Original:", numeros);
console.log("Valores dobrados:", dobrados);
console.log("Valores ao quadrado:", quadrados);

// 2. Transformação de Objetos do Mundo Real
const desenvolvedores = [
  { id: 1, nome: "Ana Silva", nivel: "Pleno", anosExp: 4 },
  { id: 2, nome: "Carlos Souza", nivel: "Sênior", anosExp: 8 },
  { id: 3, nome: "Beatriz Lima", nivel: "Júnior", anosExp: 1 }
];

// Extração e projeção de novas propriedades
const cartoesApresentacao = desenvolvedores.map((dev, index) => {
  return {
    posicao: index + 1,
    identificacao: dev.nome.toUpperCase(),
    senioridade: dev.nivel,
    elegivelMentoria: dev.anosExp >= 4
  };
});

console.log("Dados projetados para cartões:");
console.log(cartoesApresentacao);

// 3. Prova de Imutabilidade
console.info("🔒 Verificação de Imutabilidade:");
console.log("O array original de desenvolvedores foi alterado?", desenvolvedores[0].nome === "Ana Silva");

// 4. Transformação com template literals
const mensagens = desenvolvedores.map(
  (dev) => \`• \${dev.nome} atua como \${dev.nivel} há \${dev.anosExp} ano(s).\`
);

console.log("Resumo formatado:");
mensagens.forEach((msg) => console.log(msg));

console.info("✅ Exemplo concluído com sucesso!");
`,
};

