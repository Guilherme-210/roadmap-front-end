---
tipo: exercicio
status: proposto
subnivel: "4.8"
criado: "2026-09-17"
---

# JavaScript - Exercício 08 - Explorador de protótipos e classes

**Projeto:** Laboratório Avançado de Mecânica Interna do JavaScript (This, Prototypes e Memória)
**Nível:** [[Nível 04 - JavaScript#4.8 — JavaScript avançado]]
**Pré-requisitos:** [[JavaScript - Exercício 07 - Refatoração para módulos ES]]
**Rota proposta:** `/exercicios/javascript/08-avancado`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Desmistificar os pilares avançados da engine do JavaScript: o ciclo de vida de **Execution Context** e a **Call Stack**, o fenômeno de **Hoisting** com a *Temporal Dead Zone* (TDZ), a resolução dinâmica do ponteiro **`this`** (`call`, `apply`, `bind`), a cadeia de herança prototipal (**Prototype Chain**) em comparação com **Classes ES6**, técnicas de imutabilidade com cópia rasa (*Shallow Copy*) vs cópia profunda (*Deep Copy* com `structuredClone`), e as noções de **Garbage Collection** e prevenção de vazamentos de memória (*memory leaks*).

## Enunciado e etapas

### 1. Contexto de Execução, Call Stack e Hoisting (TDZ)
Crie um arquivo de script de testes conceituais:
- Demonstre a diferença de hoisting entre declarações de função (`function somar()`) e variáveis declaradas com `var` (içamento com valor `undefined`) versus `let`/`const` (içamento na *Temporal Dead Zone*, resultando em `ReferenceError: Cannot access before initialization`).
- Provoque um estouro proposital da Call Stack com recursão infinita e observe o erro `RangeError: Maximum call stack size exceeded`.

### 2. O enigma do ponteiro `this` e fixação com `bind`, `call` e `apply`
Construa um objeto `servicoNotificacao`:
- Crie um método que utilize `this.canal`.
- Demonstre o que acontece quando esse método é passado como callback (o `this` perde a referência original e vira `undefined` no modo estrito).
- Corrija a amarração do `this` de três maneiras:
  - Usando `.bind(servicoNotificacao)`
  - Executando imediatamente com `.call(contexto, arg1, arg2)` e `.apply(contexto, [args])`
  - Utilizando uma Arrow Function (que captura o `this` léxico do escopo onde foi criada).

### 3. Herança Prototipal vs Classes ES6
- Implemente uma hierarquia de classes moderna: classe base `ContaBancaria` com campos privados (`#saldo`), métodos normais, `getters` e `setters`, e uma classe derivada `ContaCorrente` usando `extends` e `super()`.
- Em seguida, demonstre como as classes em JavaScript são apenas "açúcar sintático" (*syntactic sugar*) sobre o sistema de protótipos, inspecionando `ContaBancaria.prototype` e navegando pela propriedade oculta `__proto__` até `Object.prototype`.

### 4. Cópia Rasa (Shallow), Cópia Profunda (Deep) e Gestão de Memória
- Crie um objeto aninhado: `const usuario = { nome: "Lucas", config: { tema: "dark" } };`.
- Demonstre por que a cópia rasa com Spread (`const copiaRasa = { ...usuario };`) gera mutações compartilhadas ao alterar `copiaRasa.config.tema`.
- Utilize a API nativa moderna `structuredClone(usuario)` para produzir uma cópia profunda real e independente (*deep copy*).
- Explique brevemente o algoritmo de *Mark-and-Sweep* do Garbage Collector e mostre um exemplo de vazamento de memória comum no front-end (ex.: um event listener no `window` ou um `setInterval` que nunca foi desregistrado).

## Cobertura e critérios de conclusão

- [ ] **Hoisting e Execution Context:** Compreensão da fase de compilação/criação e TDZ de `let`/`const`.
- [ ] **Resolução do `this`:** Domínio de `call`, `apply`, `bind` e Arrow Functions léxicas.
- [ ] **Prototype Chain e Classes:** Implementação de campos privados (`#`), herança com `super` e inspeção de `.prototype`.
- [ ] **Shallow vs Deep Copy:** Uso de `structuredClone()` para clonagem imutável segura.
- [ ] **Garbage Collection e vazamento de memória:** Identificação de referências cíclicas ou ouvintes não removidos.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Acessar variável `let` antes da linha de declaração | `ReferenceError` disparado pela Temporal Dead Zone | Pendente |
| Passar método de objeto como callback de botão sem bind | `this` avalia como `undefined` (modo estrito) | Pendente |
| Acessar campo privado `#saldo` de fora da classe | Erro de sintaxe em tempo de compilação | Pendente |
| Alterar objeto aninhado em clone profundo via `structuredClone` | O objeto original permanece 100% inalterado | Pendente |

## Limites do exercício

Não implemente engines manuais de garbage collection em C++; utilize o runtime do Node.js e as ferramentas de DevTools (aba Memory / Heapsnapshot) para observar a alocação.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e os testes realizados.

## Entrega e evidências

- Página em `next-lab/app/exercicios/javascript/08-avancado/page.tsx`.
- Tabela preenchida com as evidências de cada teste.
- Explicação de 1 parágrafo: por que as Arrow Functions NÃO possuem seu próprio `this`, `arguments` ou `prototype`?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** implementar os desafios de hoisting, this, prototype e structuredClone.

## Fontes de estudo

- [MDN Web Docs — O operador this](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this)
- [MDN Web Docs — Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
- [MDN Web Docs — structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone)
