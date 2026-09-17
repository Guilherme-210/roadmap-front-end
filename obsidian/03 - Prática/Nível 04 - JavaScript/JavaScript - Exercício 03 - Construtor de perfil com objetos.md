---
tipo: exercicio
status: proposto
subnivel: "4.3"
criado: "2026-09-17"
---

# JavaScript - Exercício 03 - Construtor de perfil com objetos

**Projeto:** Normalizador e Mesclador de Configurações e Perfis com Objetos Modernos
**Nível:** [[Nível 04 - JavaScript#4.3 — Objetos]]
**Pré-requisitos:** [[JavaScript - Exercício 02 - Transformador de dados com arrays]]
**Rota proposta:** `/exercicios/javascript/03-objetos`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Dominar as técnicas modernas de modelagem, desestruturação, clonagem e navegação segura em objetos JavaScript, aplicando **Destructuring** (com renomeação e valores padrão), operadores **Spread** e **Rest**, métodos estáticos da classe global `Object` (`keys`, `values`, `entries`), além de navegação defensiva contra valores nulos com **Optional Chaining** (`?.`) e **Nullish Coalescing** (`??`).

## Enunciado e etapas

### 1. Desestruturação com renomeação e valores padrão
Dado um objeto complexo retornado por um serviço de usuário:
```js
const usuarioApi = {
  id: "usr_102",
  dadosPessoais: { nomeCompleto: "Ana Paula", doc: "123456789" },
  contato: { email: "ana@email.com" },
  configuracoes: { tema: "dark" }
};
```
- Extraia propriedades em variáveis individuais usando desestruturação profunda (*nested destructuring*).
- Renomeie propriedades durante a extração (ex.: `nomeCompleto: nome`).
- Forneça valores padrão para propriedades opcionais que possam não existir na resposta (ex.: `telefone = "Não informado"`).

### 2. Operadores Spread e Rest
- Utilize o operador **Rest** (`...sobras`) para extrair campos sensíveis (como senha ou documentos) e agrupar todos os outros dados em um objeto `dadosPublicos`.
- Utilize o operador **Spread** (`...`) para mesclar as configurações padrão de um sistema com as configurações customizadas do usuário, garantindo a sobrescrita correta sem mutar o objeto de configuração base.

### 3. Iteração e reflexão com `Object.keys`, `values` e `entries`
- Crie uma função de auditoria que receba qualquer objeto:
  - Liste todas as chaves existentes usando `Object.keys()`.
  - Liste todos os valores usando `Object.values()`.
  - Percorra os pares chave-valor com `Object.entries()` e monte uma lista formatada `[chave]: valor` para exibição em tela.
  - Utilize `Object.fromEntries()` para converter uma lista filtrada de pares de volta em um novo objeto.

### 4. Navegação defensiva com `?.` e `??`
Demonstre a robustez contra erros clássicos de `TypeError: Cannot read properties of undefined`:
- Acesse propriedades profundamente aninhadas com **Optional Chaining** (`usuario?.endereco?.cidade?.nome`).
- Execute chamadas a métodos opcionais com `usuario.calcularDesconto?.()`.
- Utilize o operador **Nullish Coalescing** (`??`) para fornecer fallback apenas quando o valor for estritamente `null` ou `undefined`, comparando com o operador `||` e demonstrando por que `0 || 10` resulta em `10` (indesejado para valores válidos como saldo zero) enquanto `0 ?? 10` preserva o `0`.

## Cobertura e critérios de conclusão

- [ ] **Destructuring:** Desestruturação simples, aninhada, com renomeação e fallback padrão.
- [ ] **Spread e Rest:** Imutabilidade em mesclagem de objetos e agrupamento de propriedades residuais.
- [ ] **`Object.keys`, `values` e `entries`:** Inspeção e conversão bidirecional de objetos para arrays e vice-versa.
- [ ] **Optional Chaining (`?.`):** Acesso seguro a propriedades e métodos em objetos com dados incertos.
- [ ] **Nullish Coalescing (`??`):** Tratamento correto de valores falsy (`0`, `""`, `false`) versus nulos/indefinidos.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Acessar `usuario?.endereco?.cep` em objeto sem endereço | Retornar `undefined` sem lançar erro em tempo de execução | Pendente |
| Comparar `usuario.pontos || 100` vs `usuario.pontos ?? 100` com `pontos = 0` | O `||` retorna `100` (incorreto) e o `??` preserva `0` (correto) | Pendente |
| Mesclar dois objetos com spread `const final = { ...padrao, ...usuario }` | Propriedades do usuário sobrescrevem as padrões sem alterar `padrao` | Pendente |
| Converter entradas com `Object.fromEntries()` | Recriação fiel do objeto a partir da matriz de tuplas `[chave, valor]` | Pendente |

## Limites do exercício

Não implemente proxies ou refletores avançados de metaprogramação; concentre-se nas manipulações diárias de payload e dados estruturados da aplicação front-end.

## Minha solução

Aguardando tentativa do usuário. Informe a rota ou arquivos de código.

## Entrega e evidências

- Página em `next-lab/app/exercicios/javascript/03-objetos/page.tsx`.
- Tabela preenchida com as evidências dos cenários de teste.
- Explicação de 1 parágrafo: em que circunstância usar `||` para valores padrão em vez de `??` pode introduzir bugs silenciosos em formulários?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a página e aplicar destructuring, spread, keys/entries e os operadores `?.` e `??`.

## Fontes de estudo

- [MDN Web Docs — Atribuição via desestruturação (Destructuring)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN Web Docs — Encadeamento opcional (?.)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN Web Docs — Operador de coalescência nula (??)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
