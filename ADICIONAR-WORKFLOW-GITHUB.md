# ⚡ Como Adicionar Workflow Direto no GitHub

## Problema
Seu token não tem permissão para criar workflows via terminal.

## ✅ Solução: Criar Workflow na Interface do GitHub

### Passo 1: Acessar seu Repositório
https://github.com/willianncardoso/portfolio

### Passo 2: Criar Arquivo de Workflow

1. Clique em **"Add file"** → **"Create new file"**

2. No campo de nome do arquivo, digite:
   ```
   .github/workflows/nextjs.yml
   ```

3. Cole este conteúdo:

```yaml
name: Deploy Next.js to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: 'npm'

      - name: Setup Pages
        uses: actions/configure-pages@v5
        with:
          static_site_generator: next

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Clique em **"Commit changes..."**

5. Clique em **"Commit changes"** novamente

### Passo 3: Ativar GitHub Pages

1. Vá em **Settings** → **Pages**
2. Em "Source", selecione: **GitHub Actions**
3. Salvar

### Passo 4: Aguardar Deploy

1. Vá na aba **Actions**
2. Verá o workflow rodando
3. Aguarde ficar verde ✅
4. Acesse: https://willianncardoso.github.io/portfolio/

---

## Depois Me Diga

O que está aparecendo no site agora?
- Página em branco?
- Página padrão do Next.js?
- Erro 404?
- Outro problema?

Assim eu corrijo especificamente! 🚀
