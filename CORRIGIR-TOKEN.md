# 🔑 Como Atualizar Permissões do Token do GitHub

## O Problema
Seu token não tem permissão para criar GitHub Actions workflows.

## ✅ Solução Rápida

### Passo 1: Criar Novo Token com Permissões Corretas

1. Acesse: https://github.com/settings/tokens

2. Clique em **"Generate new token"** → **"Generate new token (classic)"**

3. Configure:
   - **Note:** Portfolio Deploy Token
   - **Expiration:** 90 days (ou o que preferir)

4. **Marque estas permissões:**
   - ✅ **repo** (todas as sub-opções)
   - ✅ **workflow** ← IMPORTANTE! Esta é a que estava faltando

5. Clique em **"Generate token"**

6. **COPIE O TOKEN** (não vai aparecer de novo!)

### Passo 2: Atualizar Token no Git

No terminal:

```bash
# Remover conexão antiga
git remote remove origin

# Adicionar com novo token
git remote add origin https://SEU-TOKEN@github.com/willianncardoso/portfolio.git

# Verificar
git remote -v
```

**Substitua SEU-TOKEN pelo token que você copiou.**

### Passo 3: Tentar Push Novamente

```bash
git push -u origin main
```

---

## 🔐 Alternativa: Usar SSH (Mais Seguro)

Se preferir não usar token:

### Passo 1: Gerar Chave SSH

```bash
# Gerar chave (aperte Enter em tudo)
ssh-keygen -t ed25519 -C "seu@email.com"

# Copiar chave pública
cat ~/.ssh/id_ed25519.pub
```

### Passo 2: Adicionar no GitHub

1. Acesse: https://github.com/settings/keys
2. Clique em **"New SSH key"**
3. Cole a chave pública
4. Salvar

### Passo 3: Mudar Remote para SSH

```bash
# Remover HTTPS
git remote remove origin

# Adicionar SSH
git remote add origin git@github.com:willianncardoso/portfolio.git

# Push
git push -u origin main
```

---

## ⚠️ IMPORTANTE

Depois de fazer push com sucesso, você ainda precisa:

1. Ir em: https://github.com/willianncardoso/portfolio/settings/pages
2. Source: **"GitHub Actions"**
3. Salvar

Isso ativa o deploy automático!
