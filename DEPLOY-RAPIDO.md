# ⚡ Deploy Rápido - 5 Minutos

Guia ultra-rápido para colocar seu portfólio no ar **AGORA**.

---

## 📋 Checklist Pré-Deploy

- [ ] Site roda local: `npm run dev` ✅
- [ ] Build funciona: `npm run build` ✅
- [ ] Conta no GitHub criada ✅

---

## 🚀 3 Passos para Publicar

### 1️⃣ Criar Repositório no GitHub

**Opção A - URL limpa (recomendado):**
- Nome: `SEU-USUARIO.github.io`
- Exemplo: `williancardoso.github.io`
- URL: `https://williancardoso.github.io` ✨

**Opção B - URL com nome do projeto:**
- Nome: qualquer (ex: `portfolio`)
- URL: `https://SEU-USUARIO.github.io/portfolio`
- ⚠️ **ATENÇÃO:** Se escolher esta, veja seção abaixo!

Configurações ao criar:
- ✅ Public
- ❌ **NÃO** marque "Add README"

---

### 2️⃣ Enviar Código para GitHub

Abra o terminal na pasta do projeto:

```bash
# Se ainda não tem Git inicializado:
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Conectar ao GitHub (substitua SEU-USUARIO e NOME-REPO):
git remote add origin https://github.com/SEU-USUARIO/NOME-REPO.git

# Enviar código:
git push -u origin main
```

---

### 3️⃣ Ativar GitHub Pages

1. No GitHub, abra seu repositório
2. Clique em **Settings** (aba no topo)
3. Menu lateral → **Pages**
4. Em "Source" → selecione **GitHub Actions**
5. **Pronto!** 🎉

---

## ⏱️ Aguarde o Deploy

1. Vá na aba **Actions** do repositório
2. Verá um workflow rodando (círculo amarelo)
3. Aguarde virar verde ✅ (~2-5 minutos)
4. Seu site está no ar! 🚀

---

## 🔧 SE Escolheu Opção B (repo com nome)

**ANTES de fazer push, faça isso:**

1. Abra `next.config.ts`
2. Encontre:
   ```typescript
   // basePath: "/NOME-DO-REPO",
   ```
3. Descomente e ajuste:
   ```typescript
   basePath: "/portfolio",  // Seu nome de repo aqui
   ```
4. Salve e faça commit:
   ```bash
   git add next.config.ts
   git commit -m "Configure basePath"
   ```

---

## 🌐 Acessar Seu Site

- **Opção A:** `https://SEU-USUARIO.github.io`
- **Opção B:** `https://SEU-USUARIO.github.io/NOME-REPO`

---

## 🔄 Atualizar Depois

```bash
# Fazer alterações nos arquivos...

git add .
git commit -m "Atualização"
git push

# Deploy automático! ✨
```

---

## ❓ Problemas?

### Página em branco?
→ Confira se configurou basePath corretamente (Opção B)

### Deploy falhou?
→ Vá em Actions, clique no workflow, veja o erro

### Mudanças não aparecem?
→ Aguarde 2-3 minutos + limpe cache (Ctrl+Shift+R)

---

## 📚 Mais Detalhes?

Guia completo: [DEPLOY-GITHUB-PAGES.md](./DEPLOY-GITHUB-PAGES.md)

---

**⏱️ Tempo total: ~5 minutos**

**💰 Custo: R$ 0,00 (grátis para sempre)**

**🎉 Resultado: Portfólio profissional no ar!**
