---
tipo: exercicio
status: proposto
subnivel: "1.1"
criado: "2026-09-17"
---

# Web - Exercício 01 - Mapa da arquitetura web

**Projeto:** Documentação e Rastreamento Prático da Arquitetura Web
**Nível:** [[Nível 01 - Fundamentos da Web#1.1 — Arquitetura da Web e Navegadores]]
**Pré-requisitos:** [[Fundamentos - Exercício 05 - Navegação e automação no terminal]]
**Rota proposta:** Exercício prático de análise de rede e documentação técnica.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender e mapear a jornada completa de uma requisição web desde a digitação da URL na barra de endereços do navegador até a renderização do conteúdo em tela, explorando o modelo cliente-servidor, resolução DNS, o papel das CDNs e o funcionamento interno das engines dos navegadores (DOM, CSSOM e Render Tree).

## Enunciado e etapas

### 1. Resolução de DNS no terminal
Utilize ferramentas de diagnóstico de rede no terminal (`nslookup`, `dig` ou `ping`) para investigar a resolução de nomes de domínio reais (ex.: `google.com`, `github.com` e um site hospedado na Cloudflare):
- Identifique os servidores DNS recursivos e autoritativos.
- Compare o endereço IP retornado a partir de diferentes regiões ou servidores DNS (ex.: Cloudflare 1.1.1.1 vs Google 8.8.8.8).
- Registre o tempo de resposta da resolução de nomes.

### 2. Investigação do papel das CDNs (Content Delivery Networks)
Inspecione um recurso estático (imagem, arquivo CSS ou fonte) de um site de grande escala utilizando as ferramentas de desenvolvedor do navegador (Aba Rede / Network do DevTools):
- Localize cabeçalhos de resposta que indiquem presença de CDN (ex.: `cf-cache-status: HIT`, `x-cache: Hit from cloudfront`, `server: cloudflare`).
- Explique o benefício de latência ao servir conteúdo a partir de servidores de borda (*edge servers*) geograficamente próximos ao usuário.

### 3. Anatomia do motor de renderização do navegador (Browser Engine)
Elabore um diagrama conceitual em markdown (usando Mermaid) ou um resumo técnico detalhando as etapas de renderização crítica (*Critical Rendering Path*):
- Parse do HTML $\rightarrow$ **DOM** (Document Object Model).
- Parse do CSS $\rightarrow$ **CSSOM** (CSS Object Model).
- Combinação em **Render Tree**.
- Cálculo de geometria (**Layout / Reflow**).
- Desenho de pixels na tela (**Paint**) e composição de camadas (**Composite**).

### 4. O ciclo Cliente-Servidor em tempo real
Demonstre a separação estrita de responsabilidades:
- O que é processado exclusivamente no cliente (interação de UI, execução de JS local no navegador).
- O que é de responsabilidade do servidor (banco de dados, regras de negócio sigilosas, emissão de respostas HTTP).

## Cobertura e critérios de conclusão

- [ ] **Modelo Cliente e Servidor:** Diferenciação nítida entre o ambiente do cliente e do servidor.
- [ ] **Papel do Navegador:** Compreensão dos motores de renderização (Chromium/Blink, Gecko, WebKit) e do caminho crítico de renderização.
- [ ] **Resolução de nomes com DNS:** Execução e interpretação de consultas DNS via linha de comando.
- [ ] **Redes de distribuição de conteúdo (CDN):** Identificação de nós de borda e redução de latência no tráfego de assets.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Executar `nslookup github.com` no terminal | Obter endereço IPv4 e/ou IPv6 correspondente | Pendente |
| Identificar cabeçalho de CDN em asset de site público | Localizar header como `cf-ray`, `x-cache` ou similar | Pendente |
| Explicar o que acontece se o CSS bloquear a renderização | Descrever por que o CSS é considerado recurso crítico bloqueante (*render-blocking*) | Pendente |

## Limites do exercício

Não é necessário configurar um servidor DNS próprio ou contratar CDN paga. Todas as etapas utilizam serviços públicos e ferramentas nativas do sistema e do navegador.

## Minha solução

Aguardando tentativa do usuário. Informe as evidências e diagramas produzidos.

## Entrega e evidências

- Relatório com comandos `nslookup`/`dig` executados e IPs identificados.
- Captura ou transcrição dos headers de rede de um asset via CDN.
- Diagrama ou resumo em texto do fluxo DNS $\rightarrow$ TCP $\rightarrow$ TLS $\rightarrow$ HTTP $\rightarrow$ DOM/CSSOM $\rightarrow$ Paint.

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** rodar as consultas DNS e inspecionar a aba Network no navegador.

## Fontes de estudo

- [MDN Web Docs — Como a Web funciona](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [web.dev — Caminho de renderização crítico](https://web.dev/articles/critical-rendering-path?hl=pt-br)
