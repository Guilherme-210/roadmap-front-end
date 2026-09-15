# Roadmap Front-end

Notas de estudo e um único aplicativo Next.js para praticar os exercícios.

- `obsidian/`: abra esta pasta como cofre no Obsidian.
- `next/`: aplicativo de exercícios. Consulte [o guia do aplicativo](next/README.md).
- `AGENTS.md`: acordos de acompanhamento e instruções do projeto.

## Iniciar o aplicativo

```powershell
cd next
npm install
npm run dev
```

Abra http://localhost:3000. Em uma instalação já preparada, basta executar `npm run dev` dentro de `next`.

## Versionamento

Código e notas pertencem ao mesmo repositório, na pasta principal. Não crie outro repositório dentro de next ou obsidian. Inclua package-lock.json nos commits; dependências, arquivos gerados e arquivos locais de ambiente são ignorados pelo .gitignore.

Um commit pode reunir a solução de um exercício e as notas do que você aprendeu. A criação do aplicativo não marca assuntos como aprendidos nem exercícios como resolvidos.
