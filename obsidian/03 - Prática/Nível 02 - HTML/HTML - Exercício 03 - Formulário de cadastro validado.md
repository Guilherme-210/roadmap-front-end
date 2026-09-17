---
tipo: exercicio
status: proposto
subnivel: "2.3"
criado: "2026-09-17"
---

# HTML - Exercício 03 - Formulário de cadastro validado

**Projeto:** Formulário de Inscrição Profissional com Validação HTML5 Nativa
**Nível:** [[Nível 02 - HTML#2.3 — Formulários]]
**Pré-requisitos:** [[HTML - Exercício 02 - Refatoração semântica]]
**Rota proposta:** `/exercicios/html/03-formulario`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Construir um formulário de cadastro robusto e acessível utilizando unicamente os recursos nativos do HTML5 para estruturação e validação de restrições (*Constraint Validation API*), dominando o uso de `<form>`, atributos de submissão (`action`, `method`), agrupamento com `<fieldset>` e `<legend>`, e validações nativas como `required`, `pattern`, `min`/`max`, `minlength`/`maxlength` e `autocomplete`.

## Enunciado e etapas

### 1. Estrutura do formulário e agrupamento lógico
Crie um elemento `<form>` com `method="POST"` e `action="#"`. Divida os campos em dois blocos lógicos utilizando `<fieldset>` e `<legend>`:
- Bloco 1: "Dados Pessoais e Identificação"
- Bloco 2: "Preferências de Notificação e Segurança"

### 2. Validação nativa com atributos de restrição
Implemente os campos com suas devidas restrições nativas, sem JavaScript:
- **Nome Completo:** `<input type="text">`, obrigatório (`required`), com tamanho mínimo de 3 caracteres (`minlength="3"`).
- **E-mail Corporativo:** `<input type="email">`, obrigatório (`required`), com `autocomplete="email"`.
- **Data de Nascimento:** `<input type="date">`, com limite mínimo e máximo de data (`min="1920-01-01"` e `max="2008-01-01"` para garantir maioridade).
- **Código Postal / CEP:** `<input type="text">`, com máscara via expressão regular nativa (`pattern="[0-9]{5}-?[0-9]{3}"`) e texto explicativo com `title="Formato: 12345-678"`.
- **Quantidade de Ingressos:** `<input type="number">`, com `min="1"`, `max="10"` e `step="1"`.

### 3. Autocomplete e preenchimento automático inteligente
Configure os atributos de `autocomplete` adequados nos campos essenciais:
- `autocomplete="name"` no nome
- `autocomplete="email"` no e-mail
- `autocomplete="postal-code"` no CEP
- `autocomplete="new-password"` no campo de senha

### 4. Estilização de estados de validação com pseudo-classes CSS
Crie regras CSS simples para reagir visualmente às validações do HTML5:
- `:valid` e `:invalid` para bordas verdes e vermelhas.
- `:required` para destacar campos obrigatórios.
- `:focus` para borda com contraste acessível ao receber foco.

## Cobertura e critérios de conclusão

- [ ] **`<form>`, `action`, `method`:** Configuração correta dos atributos de submissão.
- [ ] **Validação HTML nativa:** Utilização de `required`, `minlength`, `maxlength`, `min`, `max` e `pattern`.
- [ ] **Atributo `pattern`:** Expressão regular funcional para validação de formato numérico de documento/CEP.
- [ ] **Atributo `autocomplete`:** Melhores práticas para acelerar o preenchimento pelo usuário e navegadores móveis.
- [ ] **`<fieldset>` e `<legend>`:** Agrupamento semântico claro de campos afins.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Clicar em "Enviar" com o formulário em branco | O navegador impede a submissão e foca no primeiro campo com mensagem nativa | Pendente |
| Digitar e-mail inválido (ex.: `"meuemail@"`) | O navegador acusa e-mail incompleto antes de enviar | Pendente |
| Digitar CEP com letras no campo com `pattern` | Validação de padrão falha e o texto do atributo `title` é sugerido | Pendente |
| Digitar quantidade de ingressos igual a `15` | O navegador acusa que o valor excede o limite máximo de `10` | Pendente |

## Limites do exercício

Não implemente validação via JavaScript (`event.preventDefault()` com Zod ou React Hook Form); o foco pedagógico deste subnível é explorar até onde os recursos nativos do HTML conseguem validar a entrada antes de qualquer linha de JS.

## Minha solução

Aguardando tentativa do usuário. Informe a rota ou o código implementado.

## Entrega e evidências

- Página em `next-lab/app/exercicios/html/03-formulario/page.tsx`.
- Tabela de casos preenchida com as mensagens nativas exibidas pelo seu navegador.
- Resumo de 1 parágrafo: por que a validação no cliente (mesmo com HTML5 nativo) nunca substitui a validação no servidor (backend)?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar o formulário com fieldset, legend e atributos de validação.

## Fontes de estudo

- [MDN Web Docs — Validação de formulário no lado do cliente](https://developer.mozilla.org/pt-BR/docs/Learn/Forms/Form_validation)
- [MDN Web Docs — Elemento Fieldset](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/fieldset)
