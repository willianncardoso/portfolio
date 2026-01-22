# 🎨 Portfólio Premium - Willian Cardoso

Portfólio profissional de Product Designer construído com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação e Execução

```bash
# 1. Instalar dependências (só precisa fazer uma vez)
npm install

# 2. Rodar em modo desenvolvimento (com hot-reload)
npm run dev

# 3. Abrir no navegador
# Acesse: http://localhost:3000
```

### Outros Comandos Úteis

```bash
# Build para produção (gera arquivos otimizados)
npm run build

# Rodar versão de produção localmente
npm start

# Verificar erros de código (lint)
npm run lint
```

## 📁 Estrutura do Projeto

```
portfolio/
├── app/                        # Páginas Next.js (App Router)
│   ├── layout.tsx             # Layout base (Header + Footer)
│   ├── page.tsx               # Página Home
│   ├── globals.css            # Estilos globais
│   ├── about/                 # Página About
│   └── cases/[slug]/          # Páginas dinâmicas de cases
│
├── components/                 # Componentes React reutilizáveis
│   ├── ui/                    # Componentes base (Button, Card, etc)
│   ├── layout/                # Header, Footer, Section
│   ├── home/                  # Componentes da home
│   ├── cases/                 # Componentes de case study
│   └── shared/                # Componentes compartilhados
│
├── content/                    # ⭐ CONTEÚDO EDITÁVEL
│   ├── site-config.ts         # Configurações gerais (nome, email, links)
│   ├── home-content.ts        # Textos da home
│   ├── about-content.ts       # Textos da página About
│   └── cases/                 # Dados dos cases
│       ├── index.ts           # Lista todos os cases
│       ├── esw.ts             # Case ESW
│       ├── cortex-s360.ts     # Case Cortex
│       ├── e-config.ts        # Case E-Config
│       └── igua.ts            # Case Iguá
│
├── lib/                        # Utilitários e helpers
│   ├── utils.ts               # Funções auxiliares
│   └── animations.ts          # Configurações de animação
│
├── types/                      # Tipos TypeScript
│   ├── case.ts                # Tipos para case studies
│   └── index.ts               # Exporta todos os tipos
│
├── public/                     # Arquivos estáticos
│   ├── images/                # Imagens do site
│   │   ├── profile.jpg        # Foto de perfil
│   │   └── cases/             # Imagens dos cases
│   ├── resume.pdf             # Currículo
│   └── favicon.ico            # Ícone do site
│
├── tailwind.config.ts          # Configuração Tailwind (cores, fontes)
├── package.json                # Dependências do projeto
└── tsconfig.json               # Configuração TypeScript
```

## 📝 Como Editar Conteúdo

### Informações Pessoais
**Arquivo:** `content/site-config.ts`

```typescript
export const siteConfig = {
  name: "Seu Nome",              // Mude aqui
  title: "Seu Título",           // Mude aqui
  email: "seu@email.com",        // Mude aqui
  // ... etc
}
```

### Textos da Home
**Arquivo:** `content/home-content.ts`

```typescript
export const homeContent = {
  hero: {
    headline: "Seu headline aqui",
    description: "Sua descrição aqui",
  },
  // ... etc
}
```

### Adicionar um Novo Case
1. Copie um arquivo de case existente (ex: `content/cases/esw.ts`)
2. Renomeie para o novo case (ex: `novo-case.ts`)
3. Edite todos os dados dentro do arquivo
4. Adicione na lista em `content/cases/index.ts`:
```typescript
import { novoCaseCase } from "./novo-case"
export const allCases = [..., novoCaseCase]
```
5. Adicione as imagens em `public/images/cases/novo-case/`

## 🎨 Como Mudar as Cores

**Arquivo:** `tailwind.config.ts`

```typescript
colors: {
  accent: {
    500: '#3b82f6',  // ← Mude esta cor
    600: '#2563eb',  // ← E esta (versão hover)
  }
}
```

Depois de mudar, reinicie o servidor (`Ctrl+C` e `npm run dev` novamente).

## 🔤 Como Mudar a Fonte

1. Escolha uma fonte em [Google Fonts](https://fonts.google.com)
2. Edite `app/layout.tsx`:
```typescript
import { NovaFonte } from "next/font/google"

const novaFonte = NovaFonte({
  subsets: ["latin"],
  variable: "--font-nova",
})
```
3. Atualize `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ["var(--font-nova)", "sans-serif"],
}
```

## 📸 Como Adicionar Imagens

1. Coloque a imagem em `public/images/`
2. Referencie no código: `/images/nome-da-imagem.jpg`

Exemplo para foto de perfil:
- Coloque em: `public/images/profile.jpg`
- Já está configurado para usar automaticamente

## 🧠 Glossário de Termos

| Termo | O que significa | Onde encontrar |
|-------|-----------------|----------------|
| **Component** | Bloco de código reutilizável (ex: Button) | `components/` |
| **Props** | Parâmetros que você passa para um component | Dentro dos arquivos `.tsx` |
| **TypeScript** | JavaScript com tipos (previne erros) | Arquivos `.ts` e `.tsx` |
| **Tailwind** | Classes CSS utilitárias (ex: `bg-blue-500`) | Dentro do `className` |
| **Server Component** | Roda no servidor (mais rápido) | Por padrão no Next.js 14 |
| **Client Component** | Roda no navegador (tem `"use client"`) | Componentes com interatividade |

## 🛠️ Stack Tecnológica

- **Next.js 14** - Framework React para sites rápidos
- **TypeScript** - JavaScript com tipos para prevenir erros
- **Tailwind CSS** - Estilização com classes utilitárias
- **Framer Motion** - Animações suaves
- **Lucide React** - Ícones modernos

## 📦 Deploy (Publicar o Site)

### Opção 1: Vercel (Recomendado - Grátis)
1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Vercel detecta automaticamente e faz o deploy
4. Recebe um domínio grátis: `seu-portfolio.vercel.app`

### Opção 2: Netlify
1. Crie conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `.next` após rodar `npm run build`
3. Pronto!

## ❓ Problemas Comuns

### "Module not found"
- **Causa:** Arquivo deletado ou caminho errado
- **Solução:** Verifique se o arquivo existe no caminho indicado

### Imagem não aparece
- **Causa:** Caminho errado ou arquivo não existe
- **Solução:** Verifique se o caminho começa com `/` e se o arquivo está em `public/`

### Mudança não aparece
- **Solução:** 
  1. Salve o arquivo (Ctrl+S ou Cmd+S)
  2. Espere 2-3 segundos
  3. Recarregue a página (F5)
  4. Se ainda não funcionar, reinicie: Ctrl+C e `npm run dev`

### Erro ao rodar npm install
- **Solução:** Delete a pasta `node_modules` e rode `npm install` novamente

## 📚 Recursos para Aprender Mais

- [Next.js Docs](https://nextjs.org/docs) - Documentação oficial do Next.js
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Todas as classes CSS
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Aprender TypeScript
- [Framer Motion](https://www.framer.com/motion/) - Exemplos de animação

## 📄 Mais Documentação

- **GUIA-MANUTENCAO.md** - Guia prático de manutenção passo a passo
- Comentários inline - Todo arquivo tem comentários explicativos

## 🤝 Suporte

Se tiver dúvidas:
1. Leia os comentários nos arquivos (estão MUITO detalhados)
2. Consulte o GUIA-MANUTENCAO.md
3. Procure no Google: "Next.js como fazer X"
4. ChatGPT/Claude podem ajudar com dúvidas específicas

---

**Desenvolvido por Willian Cardoso** | Product Designer

## 🌐 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages!

### Deploy Rápido (3 passos)

```bash
# 1. Criar repositório no GitHub e conectar
git remote add origin https://github.com/SEU-USUARIO/NOME-REPO.git

# 2. Enviar código
git add .
git commit -m "Deploy inicial"
git push -u origin main

# 3. Ativar GitHub Pages
# Vá em Settings → Pages → Source: "GitHub Actions"
```

### Guia Completo

📖 **Leia o guia detalhado:** [DEPLOY-GITHUB-PAGES.md](./DEPLOY-GITHUB-PAGES.md)

O guia explica:
- Como criar repositório no GitHub
- Configurar base path (se necessário)
- Ativar GitHub Pages
- Resolver problemas comuns
- Usar domínio próprio (opcional)

### URLs do Site

Depois do deploy, seu site estará em:
- **Repo tipo `usuario.github.io`:** `https://usuario.github.io`
- **Repo com outro nome:** `https://usuario.github.io/nome-repo`

