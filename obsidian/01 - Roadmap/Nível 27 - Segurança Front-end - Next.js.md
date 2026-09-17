---
nivel: 27
tipo: nivel
status: proposto
---

# Nível 27 — Segurança Front-end / Next.js

[[Bem-vindo|Início]] · [[Roadmap completo|Todos os níveis]]

## Checklist de estudo

## 27.1 — Principais Vulnerabilidades Web no Front-end

- [ ] 🔴 XSS (Cross-Site Scripting): sanitização e perigos de `dangerouslySetInnerHTML`
- [ ] 🔴 CSRF (Cross-Site Request Forgery) e proteções nativas em formulários/actions
- [ ] 🔴 CORS (Cross-Origin Resource Sharing) e vazamento de dados
- [ ] 🔴 Injeções de código/dados e Open Redirects
- [ ] 🟡 Prevenção de Clickjacking (combate a iframes maliciosos)

## 27.2 — Proteção de Variáveis de Ambiente e Segredos

- [ ] 🔴 Separação estrita: variáveis públicas (`NEXT_PUBLIC_*`) vs segredos do servidor
- [ ] 🔴 Prevenção de vazamento acidental de chaves em bundles do cliente
- [ ] 🔴 Validação obrigatória de schema de variáveis de ambiente no build

## 27.3 — Cookies Seguros e Cabeçalhos de Segurança (CSP)

- [ ] 🔴 Configuração de cookies defensivos: flags `HttpOnly`, `Secure` e `SameSite`
- [ ] 🟡 Content Security Policy (CSP): controle de origens confiáveis de scripts e mídias
- [ ] 🟡 Cabeçalhos essenciais de segurança (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)

---

## Meus aprendizados

Adicione links para suas notas, com uma frase sobre o que aprendeu.

## Prática e evidências

Adicione links para exercícios e projetos que mostrem o uso destes conceitos.

## Dúvidas e próximas revisões

Registre o que ainda precisa entender ou retomar.
