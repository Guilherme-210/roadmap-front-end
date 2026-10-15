# Segurança do Playground JavaScript

## Classificação

**Adequado apenas para uso experimental/local.**

Esta implementação reduz de forma relevante o risco da versão original, mas não
deve receber código arbitrário de público não confiável em uma aplicação com
autenticação ou dados reais. Para esse cenário ainda são necessários origem e
infraestrutura separadas, quotas fortes de recursos, testes E2E em navegadores e
revisão de segurança independente.

## Resumo da auditoria

### Riscos encontrados na implementação original

| Gravidade | Risco | Arquivos afetados | Situação atual |
| --- | --- | --- | --- |
| Crítica | O Blob Worker era criado pela página e herdava a origem da aplicação. Embora não tivesse DOM, podia usar `fetch`, WebSocket, `importScripts` e outras APIs contra rotas internas ou externas. | `src/lib/runner/javascript-runner.ts`, `src/lib/runner/worker-script.ts` | Mitigado no modo experimental por origem opaca e CSP `connect-src 'none'`. |
| Alta | Em Node/testes havia execução direta com `AsyncFunction` e substituição do `console` global. Isso não era isolamento e podia modificar o processo de teste. | `src/lib/runner/javascript-runner.ts` | Removido. O runner de produção é browser-only. |
| Alta | Mensagens aceitavam apenas `type`/`payload`, sem protocolo, segredo de canal, `executionId`, origem, emissor ou validação estrutural. | `src/lib/runner/javascript-runner.ts`, `src/lib/runner/worker-script.ts` | Mitigado com protocolo tipado, canal aleatório, ID por execução e validação dupla. |
| Alta | `stop()` terminava o Worker, mas a Promise podia nunca ser resolvida porque `terminate()` não precisa disparar `onerror`. | `src/lib/runner/javascript-runner.ts`, `src/components/playground/code-playground.tsx` | Corrigido. O cancelamento resolve imediatamente e descarta todo o iframe. |
| Alta | Não havia limites de código, quantidade de logs, tamanho de mensagem ou orçamento total de saída. | `src/lib/runner/javascript-runner.ts`, `src/lib/runner/worker-script.ts` | Mitigado por limites configuráveis com tetos absolutos. |
| Média | Uma mensagem tardia podia ser confundida com a execução atual; callbacks antigos também podiam atualizar a UI. | `src/lib/runner/javascript-runner.ts`, `src/components/playground/code-playground.tsx` | Mitigado por IDs criptográficos e sequência local na UI. |
| Média | A configuração Next.js não definia headers básicos e não havia CSP. | `next.config.ts` | Headers básicos e CSP parcial adicionados. A CSP estrita da aplicação principal continua pendente. |
| Baixa | O console já usava interpolação React, não HTML, porém `messages` ainda aceitava objetos desconhecidos. | `src/types/runner.ts`, `src/components/playground/code-console.tsx` | `messages` agora contém somente strings validadas; erros e logs continuam renderizados como texto. |
| Baixa | O script estático de tema usa `dangerouslySetInnerHTML`. Não incorpora entrada do usuário, portanto não era um vetor XSS direto, mas dificulta uma CSP estrita sem nonce. | `src/app/layout.tsx` | Risco documentado; deve receber nonce ou ser externalizado na integração de produção. |

## Arquitetura implementada

```text
CodePlayground (estado e ciclo de vida)
        |
        v
CodeRunner (contrato agnóstico de linguagem)
        |
        v
JavaScriptRunner (limites + protocolo + descarte)
        |
        v
iframe srcdoc sandbox="allow-scripts" (origem opaca, CSP sem rede)
        |
        v
MessageChannel privado -> Worker descartável -> código do usuário
```

- O editor só mantém código como texto e depende do contrato `CodeRunner`, não
  dos detalhes do sandbox.
- A página principal cria um iframe invisível com `sandbox="allow-scripts"`. A
  ausência de `allow-same-origin` atribui uma origem opaca ao documento.
- O iframe aplica CSP própria: `default-src 'none'`, `connect-src 'none'`,
  recursos visuais e frames negados, e somente um Blob Worker interno permitido.
- O Worker impede que loop infinito bloqueie a thread do React.
- O bootstrap passa ao Worker uma `MessagePort` privada. O código compilado com
  `AsyncFunction` não recebe a porta, o segredo do canal nem objetos da aplicação.
- Ao terminar, falhar, expirar ou ser cancelada, a execução fecha a porta,
  termina o Worker e remove o iframe. Remover o iframe descarta todo o ambiente;
  isso é diferente de chamar somente `worker.terminate()`.

## Modelo de ameaças

O atacante controla integralmente o texto JavaScript e pode tentar:

- ler DOM, React, cookies, storage ou credenciais da aplicação;
- chamar APIs internas com cookies ou enviar dados para a rede;
- executar loop infinito, gerar muitos logs ou consumir memória;
- abrir janela, navegar o topo, criar frame ou carregar script externo;
- produzir HTML/event handlers no console;
- falsificar mensagens, reutilizar mensagens de execução antiga ou provocar
  payloads malformados;
- causar erros síncronos, erros em timers e rejeições de Promise.

Não estão no escopo de garantia: vulnerabilidades do próprio navegador,
side-channels de microarquitetura, ataques que esgotem memória antes do timeout,
extensões maliciosas e comprometimento da cadeia de dependências.

## Isolamento e proteção dos dados

O JavaScript do usuário roda no Worker pertencente ao iframe opaco, não na
janela Next.js. Assim ele não recebe acesso ao DOM principal, estado React,
cookies, `localStorage`, `sessionStorage`, tokens, variáveis privadas ou módulos
internos. O Worker não possui `window`/`document`, e a origem opaca impede que o
iframe seja tratado como mesma origem da aplicação.

APIs de rede conhecidas também são removidas do global do Worker como defesa em
profundidade. Essa sobrescrita **não é considerada a barreira de segurança**: a
barreira é a CSP do contexto opaco. APIs da aplicação devem continuar protegidas
por autenticação, autorização e CSRF no servidor; CORS nunca substitui esses
controles.

## Política de rede

A CSP do executor nega conexões e carregamentos por padrão:

- `fetch`, XMLHttpRequest, WebSocket, EventSource e WebTransport: bloqueados;
- `importScripts` e imports dinâmicos externos: bloqueados pelas diretivas de
  script/rede;
- imagens, mídia, fontes, frames, objetos e formulários: bloqueados;
- popups e navegação do topo: não recebem permissões no atributo `sandbox`.

`'unsafe-inline'` e `'unsafe-eval'` existem **somente dentro do iframe opaco**
porque o bootstrap é inline e o executor precisa compilar o texto. Essas
permissões não foram adicionadas à aplicação principal.

## Comunicação

O protocolo `playground-runner/v1` exige:

- `channelId` aleatório criptograficamente por iframe;
- `executionId` aleatório por execução;
- tipo de evento conhecido;
- payload estruturalmente válido e limitado;
- `event.source === iframe.contentWindow` e `event.origin === "null"` no host;
- `event.source === parent` e origem exata do pai no mediador;
- rejeição de canal, execução, versão ou payload desconhecido.

O uso de `"*"` em `postMessage` é necessário para enviar a uma origem opaca. A
confiança não vem de `targetOrigin`, mas da combinação de referência do emissor,
origem observada, segredo do canal e protocolo. Mensagens nunca são avaliadas
como código.

## Controles de execução

Valores padrão:

| Controle | Padrão | Teto absoluto |
| --- | ---: | ---: |
| Timeout | 5.000 ms | 30.000 ms |
| Código UTF-8 | 100.000 bytes | 500.000 bytes |
| Logs | 200 | 1.000 |
| Uma mensagem | 8.192 bytes | 32.768 bytes |
| Saída total | 64.000 bytes | 512.000 bytes |

Uma nova execução cancela a anterior. Timeout e botão **Interromper** encerram o
ambiente e resolvem a Promise. A UI usa uma sequência adicional para ignorar
callbacks/resultados antigos. Objetos, arrays, erros e retornos são serializados
como texto com profundidade e quantidade de propriedades limitadas.

## Segurança da interface

- Logs e mensagens de erro são filhos textuais de elementos React.
- Não há `dangerouslySetInnerHTML` no console, editor ou caminho de resultados.
- Objetos não atravessam a fronteira; chegam somente strings.
- O campo `formattedText` e cada argumento são validados e limitados.
- O editor não avalia o conteúdo; somente o runner recebe o texto ao executar.

O único `dangerouslySetInnerHTML` do projeto é o bootstrap estático de tema em
`src/app/layout.tsx`; ele não usa dados do Playground.

## CSP e headers da aplicação principal

`next.config.ts` adiciona `frame-ancestors 'none'`, `object-src 'none'`,
`base-uri 'self'`, `form-action 'self'`, COOP, CORP, `nosniff`, política de
referência e Permissions Policy. Essa é deliberadamente uma CSP parcial.

Uma política global estrita para `script-src`, `style-src` e `connect-src` não
foi ativada nesta etapa por dois impactos que precisam de decisão arquitetural:

1. Next.js 16 requer nonces por requisição (e renderização dinâmica) para uma CSP
   estrita; o projeto usa Cache Components/partial prefetching.
2. `@monaco-editor/react` usa por padrão o loader do Monaco em CDN. Antes de
   restringir `script-src`/`worker-src`, o Monaco deve ser empacotado ou
   self-hosted e seus Workers confiáveis configurados explicitamente.

Não se deve resolver isso liberando globalmente `unsafe-eval`, `unsafe-inline`
ou `connect-src *`. Em uma aplicação autenticada, escolha entre CSP com nonce e
renderização dinâmica, ou estratégia hash/SRI revisada, e hospede o Monaco na
própria origem.

## Testes realizados em 2026-10-15

Automatizados (`pnpm test`):

- execução simples, funções e controle de fluxo;
- múltiplos logs, arrays, objetos e texto parecido com HTML;
- Promise e `async`/`await`;
- erro de sintaxe, runtime e rejeição não tratada;
- limite de logs/mensagens e término efetivo de loop infinito;
- ausência das APIs de rede no escopo do usuário;
- código grande;
- mensagens malformadas, tipo desconhecido, canal falsificado e execução antiga;
- runner sem fallback de execução no processo Node;
- presença das diretivas de CSP e validações do mediador.

Validações adicionais:

- `pnpm lint`: passou;
- `pnpm exec tsc --noEmit`: passou;
- resposta real `GET /playground`: HTTP 200 e headers de segurança conferidos;
- `pnpm build`: passou; todas as cinco rotas foram pré-renderizadas.

Teste E2E em navegador real não foi executado porque este ambiente não possui
portal Maestri funcional nem Chromium/Firefox. Portanto, acesso a `window.parent`,
DOM, cookies/storage, bloqueio real de `fetch`, rotas internas, imports, popup,
navegação, cancelamento visual e compatibilidade CSP/Blob Worker devem ser
retestados em Chromium, Firefox e WebKit antes de ampliar o uso.

## Riscos ainda existentes

- Um payload de memória extrema pode derrubar o processo do renderer antes do
  timeout; JavaScript do navegador não oferece quota rígida de heap por Worker.
- Iframe e Worker continuam sob o mesmo navegador/dispositivo da aplicação.
- O executor depende da implementação de sandbox/CSP do navegador.
- Não há domínio separado, processo separado, container ou política de rede no
  nível de sistema operacional.
- A CSP da aplicação principal é parcial e o Monaco depende de CDN por padrão.
- Faltam E2E cross-browser e teste manual com ferramentas de rede.
- Headers e CSP só ajudam no navegador; as APIs continuam responsáveis por
  autorização, CSRF, rate limit e validação no servidor.

## Requisitos pendentes para produção

1. Hospedar o executor em uma origem dedicada, sem cookies, sessão ou acesso à
   rede interna; idealmente separar também processo/infraestrutura.
2. Aplicar e testar CSP por header nessa origem, não apenas meta CSP.
3. Colocar quotas de CPU, memória, concorrência e taxa fora do navegador.
4. Self-host do Monaco e CSP estrita da aplicação principal com nonce ou hashes.
5. Testes E2E automatizados em Chromium, Firefox e WebKit cobrindo toda a matriz
   de isolamento e inspeção das requisições.
6. Revisão de segurança independente e testes de abuso/fuzz do protocolo.
7. Garantir autenticação, autorização e CSRF nas APIs sem exceções para o
   Playground.

Somente após esses itens o projeto poderia ser reclassificado como **candidato a
produção mediante revisão de segurança**.

## Integração em outro projeto Next.js

1. Reutilize `CodeEditor`, `CodeConsole`, `CodeControls` e `CodePlayground` sem
   acoplar detalhes de iframe às páginas.
2. Registre executores pelo contrato `CodeRunner`; cada runner deve concentrar
   seus limites, isolamento e protocolo.
3. Copie a camada `src/lib/runner` integralmente e mantenha testes de protocolo.
4. Não passe estado React, tokens, cookies ou clientes autenticados ao runner.
5. Não crie proxy de rede para contornar a CSP.
6. Revise CSP/headers junto com a forma escolhida para carregar Monaco.
7. Em aplicação autenticada ou pública, mova a execução para uma origem dedicada
   antes de habilitar entrada arbitrária.
