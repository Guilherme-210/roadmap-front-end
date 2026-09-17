---
nivel: 11
tipo: nivel
status: proposto
---

# Nível 11 — Data Fetching

[[Bem-vindo|Início]] · [[Roadmap completo|Todos os níveis]]

## Checklist de estudo

## 11.1 — Fetch no Servidor

- [ ] 🔴 Data Fetching em async Server Components
- [ ] 🔴 Padrões de requisição: paralelas vs sequenciais (waterfall)
- [ ] 🔴 Otimização de múltiplas chamadas com `Promise.all` e `Promise.allSettled`

## 11.2 — Fetch no Cliente

- [ ] 🔴 Data Fetching no cliente e ciclo de vida
- [ ] 🔴 Estados de interface: Loading, Error, Empty e Success
- [ ] 🔴 Refetching manual e prevenção de Race Conditions

## 11.3 — Server State com TanStack Query

- [ ] 🟡 Configuração do `QueryClient` e `QueryClientProvider`
- [ ] 🟡 Leitura de dados com `useQuery` e chaves estáveis (`queryKey`)
- [ ] 🟡 Mutação com `useMutation` e invalidação de queries (`queryClient.invalidateQueries`)
- [ ] 🟡 Ciclo de vida de dados: `staleTime`, `gcTime` e refetch automático
- [ ] 🟡 Atualizações otimistas (`onMutate`, rollback) e paginação / infinite queries

## 11.4 — Hidratação e Integração Server/Client

- [ ] 🟣 Pré-busca de dados no servidor (`prefetchQuery`)
- [ ] 🟣 Transferência de estado via Hydration/Dehydration (`HydrationBoundary`)

---

## Meus aprendizados

Adicione links para suas notas, com uma frase sobre o que aprendeu.

## Prática e evidências

Adicione links para exercícios e projetos que mostrem o uso destes conceitos.

## Dúvidas e próximas revisões

Registre o que ainda precisa entender ou retomar.
