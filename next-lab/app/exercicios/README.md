# Diretório de Exercícios Práticos — `next-lab`

Este diretório concentra a implementação de todas as rotas de exercícios práticos do roadmap.

## Estrutura de Rotas

Cada subnível do roadmap possui uma rota correspondente dentro de `app/exercicios/`, organizada por tecnologia ou módulo:

```text
next-lab/app/exercicios/
├── react/
│   ├── 01-cartao-estudo/page.tsx
│   ├── 02-hooks/page.tsx
│   ├── 03-estado/page.tsx
│   ├── 04-effects/page.tsx
│   ├── 05-renderizacao/page.tsx
│   ├── 06-composicao/page.tsx
│   └── 07-react19/page.tsx
├── javascript/
│   ├── 4.1-fundamentos/page.tsx
│   └── ...
└── README.md
```

## Regras de Organização do Código

1. **Rotas Isoladas ou Integradas:** Cada exercício possui sua própria página `page.tsx` dentro de `app/exercicios/<modulo>/<slug>/`.
2. **Componentes do Exercício:** Se um exercício usar componentes específicos, coloque-os em uma pasta local ao lado da página ou em `components/exercicios/<modulo>/...`.
3. **Versão do Next.js:** O projeto utiliza Next.js 16 + React 19 + TypeScript + Tailwind CSS.
4. **Verificação de Build:** Antes de considerar uma entrega concluída, execute `pnpm build` ou `pnpm lint` na raiz para garantir que não há erros de tipagem.
