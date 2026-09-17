---
tipo: exercicio
status: proposto
subnivel: "3.4"
criado: "2026-09-17"
---

# CSS - Exercício 04 - Layout responsivo mobile-first

**Projeto:** Página de Destino (*Landing Page*) Mobile-First com Container Queries
**Nível:** [[Nível 03 - CSS#3.4 — Responsividade]]
**Pré-requisitos:** [[CSS - Exercício 03 - Dashboard com Flexbox e Grid]]
**Rota proposta:** `/exercicios/css/04-responsividade`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Implementar uma página web profissional totalmente adaptável a qualquer dispositivo adotando a metodologia **Mobile-First**, utilizando Media Queries com `min-width`, breakpoints consistentes, unidades relativas (`rem`, `em`, `%`, `vw`, `vh`), tratamento de imagens responsivas (`<picture>`, `srcset`, `sizes`) e o recurso moderno de **Container Queries** (`@container`) para componentes autocontidos que reagem à largura do seu contêiner pai.

## Enunciado e etapas

### 1. Filosofia Mobile-First e unidades relativas
- Escreva a folha de estilos base considerando uma tela de celular (320px a 480px) sem nenhuma media query.
- Utilize estritamente unidades relativas para fontes e espaçamentos: `rem` para tipografia e padding/margin (respeitando a configuração de tamanho de fonte do sistema do usuário) e evite medidas estáticas em pixels (`px`) em alturas e larguras fixas.
- Assegure que não ocorra rolagem horizontal indesejada em nenhum ponto (*overflow-x: hidden* estrutural).

### 2. Media Queries progressivas e Breakpoints da indústria
Adicione regras progressivas com `min-width`:
- Tablet / Telas médias (`@media (min-width: 768px)`): reestruture o layout de 1 coluna para 2 colunas e ajuste o menu de navegação.
- Desktop / Telas amplas (`@media (min-width: 1024px)`): amplie o grid para 3 ou 4 colunas e aumente o tamanho dos títulos suavemente.
- Demonstre a sintaxe moderna de intervalo (*media query range syntax*): `@media (width >= 768px)`.

### 3. Imagens responsivas e otimização de largura de banda
- Implemente imagens com `<picture>` e `<source>` para direção de arte (*art direction*): sirva uma imagem cortada verticalmente no celular e uma versão panorâmica ampla no desktop.
- No elemento `<img>`, utilize os atributos `srcset` com múltiplos descritores de largura (ex.: `imagem-400.jpg 400w, imagem-800.jpg 800w`) e o atributo `sizes` informando ao navegador qual tamanho a imagem ocupará na viewport antes do download.

### 4. Componente inteligente com Container Queries (`@container`)
Crie um cartão de produto reutilizável:
- Defina o contêiner pai como contexto de container: `container-type: inline-size; container-name: card-wrapper;`.
- Utilize a regra `@container card-wrapper (min-width: 500px)` para transformar o cartão internamente: em contêineres estreitos ele exibe foto no topo e texto embaixo; em contêineres largos ele exibe foto ao lado do texto.
- Insira duas instâncias desse mesmo componente na página: uma na barra lateral estreita e outra na área principal larga, provando que o componente se auto-adapta independentemente da viewport global.

## Cobertura e critérios de conclusão

- [ ] **Mobile First:** Estilos base escritos para telas móveis e enriquecidos progressivamente com `min-width`.
- [ ] **Media Queries e Breakpoints:** Transições sem quebras bruscas (*glitches* visuais).
- [ ] **Unidades responsivas:** Uso fluente de `rem`, `em`, `vw`, `vh`, `dvh` e porcentagens.
- [ ] **Imagens responsivas:** Uso correto de `<picture>`, `srcset`, `sizes` e `object-fit: cover`.
- [ ] **Container Queries:** Implementação de `container-type` e `@container` para desacoplar componentes da viewport.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Simular viewport mobile de `375px` no Device Mode do DevTools | Layout em coluna única perfeitamente legível sem barra de rolagem horizontal | Pendente |
| Aumentar viewport para `768px` e `1024px` | O layout se expande progressivamente aplicando as media queries de `min-width` | Pendente |
| Inspecionar download de imagem no DevTools Network | O navegador faz download apenas da resolução de imagem condizente com o tamanho exibido | Pendente |
| Cartão dentro de contêiner largo vs estreito | O mesmo componente adota visual horizontal no contêiner largo e vertical no estreito via `@container` | Pendente |

## Limites do exercício

Não use JavaScript para calcular largura de tela (`window.innerWidth`); toda a responsividade deve ser 100% orientada a CSS nativo.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e as evidências.

## Entrega e evidências

- Página em `next-lab/app/exercicios/css/04-responsividade/page.tsx`.
- Screenshots ou gravações demonstrando o redimensionamento suave da tela.
- Resumo de 1 parágrafo: qual problema fundamental as Container Queries resolveram que as Media Queries tradicionais eram incapazes de solucionar?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a página responsiva e testar os breakpoints e container queries.

## Fontes de estudo

- [MDN Web Docs — Design Web Responsivo](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [MDN Web Docs — Consultas de contêiner do CSS (Container Queries)](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_containment/Container_queries)
- [MDN Web Docs — Imagens responsivas](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
