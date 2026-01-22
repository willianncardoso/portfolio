# 🛠️ Guia de Manutenção do Portfólio

Este guia é um passo a passo prático para fazer alterações comuns no site **sem precisar entender todo o código**.

Procure a tarefa que você quer fazer e siga as instruções.

---

## 📋 Índice Rápido

1. [Alterações de Texto](#-alterações-de-texto)
2. [Imagens](#-imagens)
3. [Cases (Projetos)](#-cases-projetos)
4. [Cores e Visual](#-cores-e-visual)
5. [Rodar o Projeto](#-rodar-o-projeto)
6. [Publicar Alterações](#-publicar-alterações)
7. [Problemas Comuns](#-problemas-comuns)

---

## 📝 Alterações de Texto

### Mudar meu nome, email ou links

**Arquivo:** `content/site-config.ts`

1. Abra o arquivo `content/site-config.ts`
2. Encontre a linha que quer mudar:
   ```typescript
   name: "Willian Cardoso",    // ← Mude aqui
   email: "seu@email.com",      // ← Mude aqui
   ```
3. Mude o texto entre aspas
4. Salve (Ctrl+S ou Cmd+S)
5. O site atualiza automaticamente

### Mudar o headline principal (título grande da home)

**Arquivo:** `content/home-content.ts`

1. Abra `content/home-content.ts`
2. Encontre `hero.headline`:
   ```typescript
   hero: {
     headline: "SEU NOVO TÍTULO AQUI",
   }
   ```
3. Mude o texto
4. Salve

### Mudar textos dos cards "What I Bring"

**Arquivo:** `content/home-content.ts`

1. Abra `content/home-content.ts`
2. Encontre `differentiators.items`
3. Cada card é um objeto como este:
   ```typescript
   {
     title: "Título do Card",
     description: "Descrição do card",
     icon: "Building2",  // Nome do ícone (veja lista abaixo)
   }
   ```
4. Mude o que quiser
5. Salve

**Ícones disponíveis:** [https://lucide.dev/icons](https://lucide.dev/icons)

### Mudar textos da página About

**Arquivo:** `content/about-content.ts`

- Para mudar a história: edite `story.paragraphs`
- Para mudar skills: edite `skills.categories`
- Para mudar experiência: edite `experience.items`

---

## 📸 Imagens

### Mudar minha foto de perfil

1. Coloque a nova foto em `public/images/`
2. Renomeie para `profile.jpg` (ou mude o nome no `site-config.ts`)
3. Tamanho recomendado: 400x400px

### Adicionar imagens a um case

1. Crie/abra a pasta: `public/images/cases/NOME-DO-CASE/`
2. Coloque as imagens lá (ex: `cover.png`, `hero.png`)
3. No arquivo do case (`content/cases/nome-do-case.ts`), referencie:
   ```typescript
   images: {
     cover: "/images/cases/nome-do-case/cover.png",
     hero: "/images/cases/nome-do-case/hero.png",
   }
   ```

**Tamanhos recomendados:**
- Cover (card na home): 1600x1000px (16:10)
- Hero (topo da página): 2400x900px (8:3)

---

## 📁 Cases (Projetos)

### Editar um case existente

**Exemplo: editar o case ESW**

1. Abra `content/cases/esw.ts`
2. Todas as seções estão claramente marcadas com comentários
3. Mude o que quiser (título, descrição, métricas, etc)
4. Salve

### Adicionar um novo case

**Passo a passo completo:**

1. **Copie um case existente**
   ```bash
   # No terminal, dentro da pasta do projeto:
   cp content/cases/esw.ts content/cases/meu-novo-case.ts
   ```

2. **Edite o novo arquivo** (`content/cases/meu-novo-case.ts`)
   - Mude o `id`: `id: "meu-novo-case"`
   - Mude o `order`: próximo número sequencial
   - Mude TODOS os outros dados (título, descrição, etc)

3. **Adicione na lista de cases**
   - Abra `content/cases/index.ts`
   - Adicione o import:
     ```typescript
     import { meuNovoCaseCase } from "./meu-novo-case"
     ```
   - Adicione no array:
     ```typescript
     export const allCases = [
       eswCase,
       cortexCase,
       econfigCase,
       iguaCase,
       meuNovoCaseCase,  // ← Novo case aqui
     ]
     ```

4. **Crie a pasta de imagens**
   ```bash
   mkdir public/images/cases/meu-novo-case
   ```

5. **Adicione as imagens** na nova pasta

6. **Adicione na home** (opcional)
   - Abra `content/home-content.ts`
   - Adicione o ID em `featuredWork.caseIds`:
     ```typescript
     caseIds: ["esw", "cortex-s360", "e-config", "igua", "meu-novo-case"],
     ```

### Mudar ordem dos cases na home

**Arquivo:** `content/home-content.ts`

```typescript
featuredWork: {
  // Mude a ordem dos IDs aqui:
  caseIds: ["esw", "cortex-s360", "e-config", "igua"],
  //       👆 Primeiro    👆 Segundo    etc...
}
```

### Remover um case

1. **Remova da home:**
   - Abra `content/home-content.ts`
   - Delete o ID do array `caseIds`

2. **Opcional - delete os arquivos:**
   - Delete `content/cases/nome-do-case.ts`
   - Delete `public/images/cases/nome-do-case/`

---

## 🎨 Cores e Visual

### Mudar as cores do site

**Arquivo:** `tailwind.config.ts`

1. Abra `tailwind.config.ts`
2. Encontre `colors`
3. Para mudar a cor de destaque (botões, links):
   ```typescript
   accent: {
     500: '#3b82f6',  // ← Mude esta cor (azul atual)
     600: '#2563eb',  // ← Mude esta (hover, mais escuro)
   }
   ```
4. Escolha cores em: [https://uicolors.app](https://uicolors.app)
5. Salve e **reinicie o servidor** (Ctrl+C e `npm run dev` novamente)

### Mudar a fonte do site

1. Escolha uma fonte em [Google Fonts](https://fonts.google.com)
2. Abra `app/layout.tsx`
3. Mude o import:
   ```typescript
   import { NovaFonte } from "next/font/google"
   
   const novaFonte = NovaFonte({
     subsets: ["latin"],
     variable: "--font-nova",
   })
   ```
4. Abra `tailwind.config.ts`
5. Mude o fontFamily:
   ```typescript
   fontFamily: {
     sans: ["var(--font-nova)", "sans-serif"],
   }
   ```

---

## 🚀 Rodar o Projeto

### Primeira vez

```bash
# 1. Instalar dependências
npm install

# 2. Rodar
npm run dev

# 3. Abrir navegador
# http://localhost:3000
```

### Depois da primeira vez

```bash
# Só isso:
npm run dev
```

### Ver alterações

1. Salve o arquivo (Ctrl+S ou Cmd+S)
2. Espere 2-3 segundos
3. Recarregue a página (F5)

Se não atualizar:
- Pare o servidor (Ctrl+C)
- Rode novamente: `npm run dev`

---

## 📤 Publicar Alterações

### Se estiver usando Git + Vercel (recomendado)

```bash
# 1. Salvar alterações
git add .
git commit -m "Descrição do que mudou"

# 2. Enviar para GitHub
git push

# 3. Vercel detecta e publica automaticamente!
```

### Verificar antes de publicar

```bash
# Testar build de produção:
npm run build
```

Se der erro, **NÃO publique** - corrija antes.

---

## ❓ Problemas Comuns

### "Module not found" ou "Cannot find module"

**Causa:** Você deletou um arquivo que ainda está sendo importado.

**Solução:**
1. Leia a mensagem de erro (diz qual arquivo está faltando)
2. Procure onde esse arquivo é importado
3. Delete o import ou recrie o arquivo

### Imagem não aparece

**Checklist:**
- [ ] Arquivo existe em `public/images/`?
- [ ] Caminho começa com `/`? (ex: `/images/foto.jpg`)
- [ ] Nome do arquivo está correto? (case-sensitive!)

### Alteração não aparece no navegador

**Tente nesta ordem:**

1. **Salve o arquivo** (Ctrl+S)
2. **Espere 3 segundos**
3. **Recarregue** (F5 ou Ctrl+R)
4. **Hard reload** (Ctrl+Shift+R ou Cmd+Shift+R)
5. **Reinicie o servidor:**
   - Pare: Ctrl+C
   - Rode: `npm run dev`
6. **Limpe o cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

### Erro ao instalar (npm install)

```bash
# Tente isto:
rm -rf node_modules package-lock.json
npm install
```

### Site quebrou depois de uma mudança

**Solução rápida:**
1. Desfaça a última mudança (Ctrl+Z)
2. Salve
3. Tente de novo com mais cuidado

**Solução Git:**
```bash
# Volta para a última versão funcionando:
git checkout .
```

---

## 🆘 Quando Pedir Ajuda

Se tentou tudo acima e ainda não funciona:

1. **Anote exatamente:**
   - O que você tentou fazer
   - O que esperava acontecer
   - O que realmente aconteceu
   - Mensagem de erro completa (se houver)

2. **Pergunte ao ChatGPT/Claude:**
   - Copie a mensagem de erro
   - Descreva o problema
   - Peça ajuda específica

3. **Google:**
   - "Next.js [seu problema]"
   - "Tailwind CSS [seu problema]"

---

## 📚 Atalhos Úteis

| Ação | Windows | Mac |
|------|---------|-----|
| Salvar | Ctrl+S | Cmd+S |
| Desfazer | Ctrl+Z | Cmd+Z |
| Refazer | Ctrl+Y | Cmd+Shift+Z |
| Procurar | Ctrl+F | Cmd+F |
| Copiar | Ctrl+C | Cmd+C |
| Colar | Ctrl+V | Cmd+V |

---

**Feito com ❤️ para facilitar sua vida** 🚀
