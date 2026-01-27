# 🔍 Diagnóstico: Por que o Deploy não Rodou?

## ⏱️ Tempo Normal de Espera

- **GitHub Actions inicia:** 10-30 segundos após trigger
- **Build completo:** 2-5 minutos total
- **Se passou 2+ minutos SEM iniciar:** Algo está errado

## 🔍 Possíveis Causas

### 1. Workflow Não Existe Ainda
Se você acabou de mudar para "GitHub Actions" mas não criou o arquivo do workflow:
- ❌ GitHub não tem o que executar
- ✅ **Solução:** Criar `.github/workflows/deploy.yml`

### 2. Erro no Workflow YAML
Se criou o workflow mas tem erro de sintaxe:
- ❌ GitHub não consegue interpretar
- ✅ **Solução:** Validar sintaxe do YAML

### 3. Permissões Insuficientes
Se o repositório não tem permissões de Pages:
- ❌ Workflow não pode fazer deploy
- ✅ **Solução:** Settings → Actions → Workflow permissions

## 📋 Como Verificar Agora

### Passo 1: Verificar se Workflow Existe
1. Vá em: https://github.com/willianncardoso/portfolio
2. Procure pasta `.github/workflows/`
3. **Se NÃO existir:** Precisa criar (veja abaixo)
4. **Se existir:** Vá para Passo 2

### Passo 2: Ver Status dos Actions
1. Clique na aba **"Actions"**
2. O que você vê?

   **CASO A: "Get started with GitHub Actions"**
   → Workflow não existe ainda. Precisa criar.

   **CASO B: Lista de workflows mas nenhum rodando**
   → Workflow existe mas não foi triggered. Force um push.

   **CASO C: Workflow com ❌ vermelho**
   → Erro no workflow. Clique para ver o log.

   **CASO D: Workflow rodando (🟡 amarelo)**
   → Tudo certo! Aguarde completar.

## 🚀 Solução Rápida: Criar Workflow Agora

Se o workflow não existe:

1. **No GitHub, vá em:**
   ```
   https://github.com/willianncardoso/portfolio
   ```

2. **Clique em "Add file" → "Create new file"**

3. **Nome do arquivo:**
   ```
   .github/workflows/deploy.yml
   ```

4. **Cole este conteúdo:**

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

5. **Commit:**
   - Message: `Add deployment workflow`
   - Clique "Commit new file"

6. **O workflow vai iniciar AUTOMATICAMENTE após o commit!**

## ⚡ Alternativa: Force Push (se workflow existe)

Se o workflow já existe mas não rodou:

```bash
# No terminal local:
git commit --allow-empty -m "Trigger deploy"
git push
```

Isso força um novo push e triggera o workflow.

## 🔧 Verificar Permissões

Settings → Actions → General → Workflow permissions:
- ✅ Marcar: **"Read and write permissions"**
- ✅ Marcar: **"Allow GitHub Actions to create and approve pull requests"**

## 📊 O Que Esperar Quando Funcionar

1. **Aba Actions** mostra workflow rodando (🟡)
2. **2-5 minutos** depois fica verde (✅)
3. **Site disponível em:**
   ```
   https://willianncardoso.github.io/portfolio
   ```

## ❓ Ainda Não Funcionou?

Tire um print da aba Actions e me mostre!
Vou conseguir identificar o problema exato.
