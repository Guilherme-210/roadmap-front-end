import type { CodeExample } from "@/types/example";

export const arrayFilterExample: CodeExample = {
  id: "javascript-array-filter",
  title: "Array.prototype.filter() na Prática",
  description: "Filtre elementos de um array mantendo apenas os que atendem ao predicado.",
  language: "javascript",
  category: "Métodos Funcionais de Array",
  difficulty: "iniciante",
  tags: ["array", "filter", "predicado", "programação funcional"],
  initialCode: `// ============================================================================
// JS MasterClass - Estudo Prático de Array.prototype.filter()
// ============================================================================

const produtos = [
  { id: 1, nome: "Monitor 4K", preco: 2200, disponivel: true, categoria: "Hardware" },
  { id: 2, nome: "Teclado Mecânico", preco: 450, disponivel: false, categoria: "Periféricos" },
  { id: 3, nome: "Mouse Ergonômico", preco: 280, disponivel: true, categoria: "Periféricos" },
  { id: 4, nome: "Cadeira Gamer", preco: 1800, disponivel: true, categoria: "Móveis" }
];

// Filtrar produtos disponíveis e com preço abaixo de R$ 2000
const produtosEmOferta = produtos.filter((p) => p.disponivel && p.preco < 2000);

console.info("📦 Produtos disponíveis em oferta (< R$ 2000):");
console.log(produtosEmOferta);

// Filtrar apenas periféricos
const perifericos = produtos.filter((p) => p.categoria === "Periféricos");
console.log("Periféricos encontrados:", perifericos.map((p) => p.nome));
`,
};

