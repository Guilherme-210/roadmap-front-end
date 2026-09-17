---
tipo: aprendizado
criado: "2026-09-15"
---
# React - Fundamentos - Componentes e JSX

**Nível:** [[Nível 07 - React]]
**Fontes:** [Introdução oficial](https://react.dev/learn) · [Seu primeiro componente](https://react.dev/learn/your-first-component)

## Conteúdo apresentado

React é uma biblioteca JavaScript para construir interfaces. Organizamos a tela em componentes: partes como cabeçalho, cartão e botão. Um componente pode conter outros componentes; essa montagem é chamada de composição.

Nesta etapa usamos componentes escritos como funções JavaScript que retornam JSX. JSX é uma extensão de sintaxe que permite descrever a interface dentro do JavaScript, com marcação parecida com HTML. O ambiente de desenvolvimento transforma essa sintaxe para execução.

A ideia declarativa é descrever como a interface deve aparecer a partir dos dados. React cuida de aplicar as atualizações necessárias na página.

## Exemplo mínimo

Este exemplo é material de explicação, não uma tentativa do usuário nem código executado nesta sessão.

~~~jsx
function Aviso() {
  const assunto = "React";

  return (
    <section className="aviso">
      <h2>Estudo de {assunto}</h2>
      <p>Um passo de cada vez.</p>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <h1>Meu caderno</h1>
      <Aviso />
      <Aviso />
    </main>
  );
}
~~~

- A função Aviso define um componente; cada uso de <Aviso /> descreve uma ocorrência dele na tela.
- App reúne o título e dois avisos: composição e reutilização.
- const e return são JavaScript; a marcação retornada é JSX.
- {assunto} insere o valor da expressão JavaScript no texto.
- export default permite importar App como a exportação padrão deste arquivo.
- Resultado esperado: “Meu caderno” seguido por dois avisos iguais, cada um com “Estudo de React” e “Um passo de cada vez.”.

## Cuidados iniciais

- Componentes começam com maiúscula; tags nativas, como section, usam minúscula.
- Use className para a classe CSS. A classe só terá aparência própria se existir CSS correspondente.
- Feche todas as tags, inclusive as sem conteúdo, como <img />.
- Agrupe elementos irmãos retornados com um elemento pai ou um fragmento <>...</>.
- As chaves no JSX recebem expressões JavaScript; não um bloco de comandos arbitrário.
- Declare os componentes fora uns dos outros, como no exemplo.

## Orientação e sequência

O primeiro objetivo é distinguir JavaScript de JSX e conseguir definir e usar um componente. Funções, return, variáveis e módulos são pré-requisitos a conferir na tentativa. Retomar [[Nível 04 - JavaScript]] se necessário, mantendo [[Nível 06 - TypeScript]] em revisão contínua.

Sequência prevista: componentes e JSX → props → children e composição → eventos → condicionais e listas com key → estado e imutabilidade.

## Prática relacionada

[[React - Exercício 01 - Cartão de estudo]]

## Acompanhamento do aprendizado

- **Conteúdo apresentado:** fundamentos de 7.1.
- **Compreensão relatada:** pendente de tentativa.
- **Prática demonstrada pelo usuário:** nenhuma tentativa realizada ainda.
- **Validação pendente:** aguardando execução e submissão do exercício.
- **Dúvidas:** nenhuma dúvida específica relatada até o momento.
