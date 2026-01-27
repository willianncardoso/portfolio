# 🔧 Como Criar o Workflow do GitHub Actions

Seu token não tem permissão para criar workflows via Git, então vamos criar direto no GitHub.

## 📋 Passo a Passo

### 1. Acesse seu Repositório

```
https://github.com/willianncardoso/portfolio
```

### 2. Criar o Arquivo do Workflow

1. Clique em **"Add file"** (botão no canto superior direito)
2. Selecione **"Create new file"**
3. No campo de nome do arquivo, digite:
   ```
   .github/workflows/deploy.yml
   ```
   (O GitHub cria as pastas automaticamente quando você usa `/`)

### 3. Colar o Conteúdo do Workflow

Cole este código no editor:

```yaml
name: Deploy to GitHub Pages

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

      - name: Build with Next.js
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

### 4. Commitar o Arquivo

1. Role até o final da página
2. Em "Commit new file":
   - Message: `Add GitHub Pages deployment workflow`
3. Clique em **"Commit new file"**

### 5. Verificar o Deploy

1. Vá na aba **"Actions"** do repositório
2. Você verá o workflow rodando (círculo amarelo)
3. Aguarde virar verde ✅ (leva ~2-5 minutos)

### 6. Acessar Seu Site

Depois que o deploy terminar:

```
https://willianncardoso.github.io/portfolio
```

## ✅ Pronto!

Seu site estará no ar com:
- ✅ Landing page corrigida
- ✅ Grid de cases com imagens (placeholders elegantes)
- ✅ Hero section funcional
- ✅ Seções de diferenciais e contato

## 🔄 Próximas Atualizações

Depois disso, sempre que você fizer push:
```bash
git push
```

O deploy acontece automaticamente! ✨

## 📸 Substituir Placeholders

Quando tiver suas imagens reais:
1. Coloque em `public/images/cases/NOME/cover.png`
2. As imagens serão usadas automaticamente
3. Commit e push
