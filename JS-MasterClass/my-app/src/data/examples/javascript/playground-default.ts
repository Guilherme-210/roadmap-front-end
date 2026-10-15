import type { CodeExample } from "@/types/example";

export const playgroundDefaultExample: CodeExample = {
  id: "playground-starter",
  title: "Boas-vindas ao Playground JS MasterClass",
  description:
    "Ambiente experimental com assincronismo, logs estruturados e sandbox descartável de origem opaca.",
  language: "javascript",
  category: "Playground",
  difficulty: "iniciante",
  tags: ["playground", "starter", "async", "console"],
  initialCode: `// ============================================================================
// JS MasterClass Playground - Ambiente Interativo
// ============================================================================
// Dica: Execute pressionando o botão "Executar" ou pelo atalho Ctrl+Enter.
// O código roda em um Worker dentro de um sandbox de origem opaca e descartável.

console.info("⚡ Ambiente inicializado com sucesso!");

// 1. Tipos primitivos e estruturas modernas
const configuracao = {
  versao: "2.0.0",
  ambiente: "Navegador (sandbox opaco + Worker)",
  linguagem: "JavaScript (ESNext)",
  recursos: ["Async/Await", "Imutabilidade", "Console Estruturado"]
};

console.log("Configurações do ambiente:", configuracao);

// 2. Operações com arrays e desestruturação
const modulos = ["Fundamentos", "Escopo & Closures", "Assincronismo", "Arquitetura"];
console.log("Módulos disponíveis:", modulos);

// 3. Suporte nativo a Promises e Async/Await
async function simularRequisicaoAssincrona() {
  console.log("⏳ Iniciando operação assíncrona...");
  
  await new Promise((resolve) => setTimeout(resolve, 600));
  
  const status = {
    carregado: true,
    tempoRespostaMs: 600,
    timestamp: new Date().toLocaleTimeString("pt-BR")
  };
  
  return status;
}

const resultado = await simularRequisicaoAssincrona();
console.info("Resultado assíncrono recebido:", resultado);

// 4. Teste de múltiplos tipos de console
console.warn("Dica: você pode testar loops infinitos como 'while(true) {}' e pará-los com o botão 'Interromper'!");
console.log("Tudo pronto para você escrever e testar seus próprios códigos abaixo:");
`,
};

