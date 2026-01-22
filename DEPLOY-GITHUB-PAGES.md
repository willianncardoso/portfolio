# 🚀 Guia de Deploy no GitHub Pages

Este guia mostra **passo a passo** como publicar seu portfólio no GitHub Pages **gratuitamente**.

---

## 📋 Pré-requisitos

Antes de começar, você precisa:

- [ ] Conta no GitHub (gratuita)
- [ ] Git instalado no seu computador
- [ ] Código do portfólio funcionando localmente

---

## 🎯 Opção 1: Deploy Automático (Recomendado)

Esta opção faz deploy automático toda vez que você fizer push para o GitHub.

### Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"** (botão verde)
3. Escolha **UM** dos formatos abaixo:

   **FORMATO A: Repositório de usuário (mais limpo)**
   - Nome do repositório: `SEU-USUARIO.github.io`
   - Exemplo: `williancardoso.github.io`
   - URL final: `https://williancardoso.github.io`

   **FORMATO B: Repositório de projeto**
   - Nome do repositório: qualquer nome (ex: `portfolio`)
   - URL final: `https://SEU-USUARIO.github.io/portfolio`
   - **ATENÇÃO:** Se escolher esta opção, leia a seção "Configurar Base Path" abaixo

4. Marque **"Public"** (obrigatório para GitHub Pages grátis)
5. **NÃO** marque "Add README" (já temos um)
6. Clique em **"Create repository"**

### Passo 2: Configurar Base Path (só se escolheu FORMATO B)

**Se você criou um repositório tipo `SEU-USUARIO.github.io`, PULE este passo!**

Se criou um repositório com outro nome (ex: `portfolio`):

1. Abra o arquivo `next.config.ts`
2. Encontre a linha:
   ```typescript
   // basePath: "/NOME-DO-REPO",
   ```
3. Descomente e ajuste:
   ```typescript
   basePath: "/portfolio",  // Substitua "portfolio" pelo nome do seu repo
   ```
4. Salve o arquivo

### Passo 3: Conectar seu Código ao GitHub

Abra o terminal na pasta do projeto e execute:

```bash
# 1. Inicializar Git (se ainda não fez)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Criar primeiro commit
git commit -m "Initial commit - Portfolio"

# 4. Renomear branch para main
git branch -M main

# 5. Conectar ao repositório do GitHub
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git

# 6. Enviar código para o GitHub
git push -u origin main
```

**Substitua:**
- `SEU-USUARIO` → seu username do GitHub
- `NOME-DO-REPO` → nome do repositório criado

### Passo 4: Ativar GitHub Pages

1. No GitHub, vá no seu repositório
2. Clique em **"Settings"** (aba no topo)
3. No menu lateral esquerdo, clique em **"Pages"**
4. Em **"Source"**, selecione **"GitHub Actions"**
5. Pronto! O deploy vai começar automaticamente

### Passo 5: Acompanhar o Deploy

1. Vá na aba **"Actions"** do seu repositório
2. Você verá um workflow rodando (bolinha amarela = rodando)
3. Aguarde alguns minutos
4. Quando ficar verde ✅ = deploy concluído!

### Passo 6: Acessar seu Site

Seu site estará disponível em:

- **FORMATO A:** `https://SEU-USUARIO.github.io`
- **FORMATO B:** `https://SEU-USUARIO.github.io/NOME-DO-REPO`

🎉 **Pronto! Seu portfólio está online!**

---

## 🔄 Como Atualizar o Site

Depois do primeiro deploy, sempre que quiser atualizar:

```bash
# 1. Faça suas alterações nos arquivos

# 2. Salve e adicione ao Git
git add .

# 3. Crie um commit
git commit -m "Descrição do que mudou"

# 4. Envie para o GitHub
git push

# 5. GitHub Actions faz deploy automático!
```

O site atualiza sozinho em ~2-5 minutos.

---

## 🎯 Opção 2: Deploy Manual (Alternativa)

Se preferir fazer deploy manual sem GitHub Actions:

### Passo 1: Gerar Arquivos Estáticos

```bash
npm run build
```

Isso cria uma pasta `out/` com todos os arquivos do site.

### Passo 2: Fazer Deploy

```bash
# Instalar gh-pages (só primeira vez)
npm install --save-dev gh-pages

# Adicionar script no package.json
# Adicione na seção "scripts":
# "deploy": "gh-pages -d out"

# Fazer deploy
npm run deploy
```

### Passo 3: Configurar GitHub Pages

1. Vá em Settings → Pages
2. Source: **"Deploy from a branch"**
3. Branch: **"gh-pages"**
4. Salvar

---

## ❓ Problemas Comuns

### Página em branco / CSS não carrega

**Causa:** Base path incorreto

**Solução:**
- Se o repo for `SEU-USUARIO.github.io`: **NÃO use** basePath
- Se o repo for outro nome: **USE** basePath com o nome do repo

### Deploy falha no GitHub Actions

**Checklist:**
- [ ] Repositório é público?
- [ ] GitHub Pages está ativado em Settings?
- [ ] Source está em "GitHub Actions"?

**Ver logs de erro:**
1. Vá em Actions
2. Clique no workflow que falhou
3. Veja qual etapa deu erro

### Mudanças não aparecem

**Soluções:**
1. Limpe o cache do navegador (Ctrl+Shift+R)
2. Aguarde 2-3 minutos (GitHub Pages demora um pouco)
3. Verifique se o commit foi enviado: `git log --oneline -5`

### "404 - Page not found"

**Soluções:**
- Verifique se o basePath está correto
- Certifique-se que o deploy terminou (Actions com ✅)
- Aguarde alguns minutos

---

## 🔧 Configurações Avançadas

### Domínio Próprio (Opcional)

Se quiser usar seu próprio domínio (ex: `williancardoso.com`):

1. Compre um domínio (Namecheap, GoDaddy, etc)
2. Em Settings → Pages → Custom domain
3. Digite seu domínio
4. Configure DNS no seu provedor:
   ```
   CNAME → SEU-USUARIO.github.io
   ```

### Forçar HTTPS

GitHub Pages já tem HTTPS automático, mas você pode forçar:

1. Settings → Pages
2. Marque **"Enforce HTTPS"**

---

## 📊 Monitoramento

### Ver Visitas (Analytics)

Adicione Google Analytics:

1. Crie conta no Google Analytics
2. Adicione o código de rastreamento em `app/layout.tsx`

### Status do Site

- **GitHub Status:** [githubstatus.com](https://www.githubstatus.com)
- **Uptime:** GitHub Pages tem 99.9% uptime

---

## 💰 Custos

**GitHub Pages é 100% GRATUITO!**

Limites:
- ✅ 1 GB de tamanho do site
- ✅ 100 GB de banda por mês
- ✅ 10 builds por hora

(Mais que suficiente para um portfólio!)

---

## 🆘 Precisa de Ajuda?

1. **Documentação oficial:** [docs.github.com/pages](https://docs.github.com/pages)
2. **Issues deste projeto:** Crie uma issue no GitHub
3. **ChatGPT/Claude:** Cole a mensagem de erro

---

## ✅ Checklist Final

Antes de fazer deploy, certifique-se:

- [ ] Site funciona localmente (`npm run dev`)
- [ ] Build funciona (`npm run build`)
- [ ] Repositório no GitHub está criado
- [ ] Base path está configurado corretamente (se necessário)
- [ ] GitHub Pages está ativado em Settings
- [ ] Workflow do GitHub Actions está no repositório

---

## 🎉 Próximos Passos

Depois que seu site estiver no ar:

1. **Compartilhe:** Adicione o link no seu LinkedIn
2. **Otimize SEO:** Ajuste metadados em `site-config.ts`
3. **Analytics:** Adicione Google Analytics para ver visitas
4. **Domínio próprio:** Considere comprar um domínio personalizado

---

**Parabéns! Seu portfólio está no ar! 🚀**
