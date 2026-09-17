---
tipo: exercicio
status: proposto
subnivel: "0.2"
criado: "2026-09-17"
---

# Fundamentos - Exercício 02 - Validador de dados

**Projeto:** Validador e Processador em Lote com Estruturas de Controle
**Nível:** [[Nível 00 - Fundamentos de programação e ambiente#0.2 — Lógica: Estruturas de Controle]]
**Pré-requisitos:** [[Fundamentos - Exercício 01 - Calculadora de console]]
**Rota proposta:** Exercício executável em terminal / script (`scripts/fundamentos/02-validador.ts` ou `.js`).

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Implementar um processador de lote de registros com validação de regras de negócio, utilizando estruturas de decisão (`if/else`, `switch`, operador ternário), estruturas de repetição (`for`, `while`, `do while`) e tratamento estruturado de erros com blocos `try/catch/finally`.

## Enunciado e etapas

### 1. Tomada de decisão com condicionais e switch
Construa um módulo validador que receba um registro de usuário (contendo idade, perfil de acesso e status de ativação). Utilize `if/else if/else` para validações numéricas e lógicas, `switch/case` para avaliar o perfil de acesso (`"admin"`, `"editor"`, `"viewer"`, `"guest"`) com tratamento de `default`, e o operador ternário para atribuir permissões simples de leitura/escrita.

### 2. Processamento em lote com estruturas de repetição
Crie uma coleção de registros de teste e processe-os utilizando diferentes loops:
- Um loop `for` indexado convencional para percorrer os itens e calcular estatísticas.
- Um loop `while` para processar uma fila de itens até que determinada condição de parada seja atingida (ex.: até encontrar 3 registros inválidos ou esvaziar a fila).
- Um loop `do...while` para forçar ao menos uma verificação inicial de integridade do lote antes do processamento.

### 3. Tratamento defensivo de exceções com try/catch
Encapsule a validação de cada registro em um bloco `try/catch`. Caso um registro possua formato incompatível ou campos obrigatórios ausentes, lance um erro intencional (`throw new Error(...)`). Capture o erro no `catch`, registre o log amigável sem interromper a execução dos demais registros do lote, e use o bloco `finally` para fechar contadores de operação.

## Cobertura e critérios de conclusão

- [ ] **Condicionais (`if`, `else if`, `else`, `switch`, operador ternário):** Uso adequado de cada formato condicional respeitando legibilidade e semântica.
- [ ] **Estruturas de repetição / loops (`for`, `while`, `do while`):** Demonstração prática do funcionamento e da escolha correta entre os três tipos de loops.
- [ ] **Tratamento de erros básico (`try/catch/finally`):** Lançamento explícito de exceções e recuperação graciosa sem quebra do fluxo de execução principal.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Registro com perfil `"admin"` e idade `>= 18` | Acesso aprovado via switch e ternário sem advertências | Pendente |
| Registro com perfil desconhecido `"tester"` | Cair no bloco `default` do switch com mensagem informativa | Pendente |
| Registro corrompido (campo numérico como string inválida) | Lançar erro, capturar no `catch` e continuar processando o próximo item | Pendente |
| Execução com lote vazio no loop `do...while` | Executar o bloco de verificação exatamente 1 vez antes da checagem da condição | Pendente |

## Limites do exercício

Não é necessário persistir dados em banco ou arquivo físico; os dados de teste podem ser estruturados em memória dentro do próprio script.

## Minha solução

Aguardando tentativa do usuário. Informe os arquivos criados/modificados e a saída gerada.

## Entrega e evidências

- Arquivo de script em `next-lab/scripts/fundamentos/02-validador.ts`.
- Tabela preenchida com os resultados da execução.
- Breve relato sobre como a captura de erros impediu a parada prematura do processamento em lote.

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** implementar as etapas no script e testar cenários de erro.

## Fontes de estudo

- [MDN Web Docs — Controle de fluxo e manipulação de erros](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN Web Docs — Loops e iteração](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
