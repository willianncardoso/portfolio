/**
 * ============================================
 * CONFIGURAÇÃO DO TAILWIND CSS
 * ============================================
 *
 * Este arquivo define o design system completo do site:
 * - Paleta de cores customizada
 * - Tipografia (fontes e tamanhos)
 * - Espaçamentos
 * - Breakpoints responsivos
 *
 * COMO USAR:
 * - Para mudar cores: edite os valores em `colors`
 * - Para mudar fontes: edite `fontFamily`
 * - Consulte https://tailwindcss.com/docs para referência completa
 *
 * IMPORTANTE: Após mudar este arquivo, reinicie o servidor (npm run dev)
 */

import type { Config } from "tailwindcss";

const config: Config = {
  // ============================================
  // ONDE O TAILWIND PROCURA POR CLASSES
  // ============================================
  // Define em quais arquivos o Tailwind deve procurar por classes CSS
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // ============================================
      // PALETA DE CORES CUSTOMIZADA
      // ============================================
      //
      // COMO USAR AS CORES:
      // - text-primary-900    → Texto principal escuro (títulos)
      // - text-primary-600    → Texto secundário
      // - bg-primary-50       → Fundo muito claro (cards)
      // - bg-accent-500       → Fundo azul (botões)
      // - border-primary-200  → Bordas sutis
      //
      // COMO MUDAR AS CORES:
      // 1. Escolha cores em https://uicolors.app ou https://coolors.co
      // 2. Substitua os valores hexadecimais abaixo
      // 3. Salve e reinicie o servidor
      colors: {
        // COR DE FUNDO PRINCIPAL
        background: "var(--background)",
        foreground: "var(--foreground)",

        // ESCALA DE CINZAS/CORES PRINCIPAIS (Slate)
        // Usada para textos, bordas e fundos neutros
        primary: {
          50: "#f8fafc",   // Fundo muito claro (cards, seções)
          100: "#f1f5f9",  // Fundo claro alternativo
          200: "#e2e8f0",  // Bordas suaves
          300: "#cbd5e1",  // Bordas hover
          400: "#94a3b8",  // Texto desabilitado
          500: "#64748b",  // Texto secundário (descrições)
          600: "#475569",  // Texto secundário forte
          700: "#334155",  // Texto principal leve
          800: "#1e293b",  // Texto principal (parágrafos)
          900: "#0f172a",  // Texto principal forte (títulos, headlines)
          950: "#020617",  // Preto quase puro (uso esporádico)
        },

        // COR DE DESTAQUE/AÇÃO (Professional Blue)
        // Usada para links, botões primários, badges, elementos interativos
        accent: {
          50: "rgba(0, 102, 255, 0.05)",
          100: "rgba(0, 102, 255, 0.1)",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#0066FF",  // ← COR PRINCIPAL DE DESTAQUE (Professional Blue)
          600: "#0052CC",  // ← COR DE HOVER
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          DEFAULT: "#0066FF",
          light: "#3384FF",
          dark: "#0052CC",
        },

        // COR DE SUCESSO (Green)
        // Usada para badges "Open to opportunities", feedbacks positivos
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#22c55e",  // ← COR PRINCIPAL
          600: "#16a34a",  // ← COR DE HOVER
        },

        // COR DE ALERTA/AVISO (Amber)
        // Usada para avisos e alertas não-críticos
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          600: "#d97706",
        },

        // COR DE ERRO (Red)
        // Usada para mensagens de erro e estados críticos
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626",
        },
      },

      // ============================================
      // TIPOGRAFIA (FONTES)
      // ============================================
      //
      // FONTE PRINCIPAL: Inter (Google Fonts)
      // - Moderna, profissional, excelente legibilidade
      // - Muito usada em produtos tech e SaaS
      // - Funciona bem em todos os tamanhos
      //
      // COMO MUDAR A FONTE:
      // 1. Escolha uma fonte em https://fonts.google.com
      // 2. Adicione o import em app/layout.tsx
      // 3. Atualize o nome aqui em fontFamily
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },

      // ============================================
      // TAMANHOS DE FONTE CUSTOMIZADOS
      // ============================================
      // Tamanhos adicionais além dos padrões do Tailwind
      fontSize: {
        // Tamanhos especiais para headlines grandes
        "7xl": ["4.5rem", { lineHeight: "1.1" }],   // 72px - Hero gigante
        "8xl": ["6rem", { lineHeight: "1" }],       // 96px - Hero extra grande
      },

      // ============================================
      // ESPAÇAMENTOS
      // ============================================
      // O Tailwind já tem uma escala ótima (4px increments)
      // Aqui adicionamos apenas tamanhos extras se necessário
      spacing: {
        "128": "32rem",  // 512px
        "144": "36rem",  // 576px
      },

      // ============================================
      // LARGURAS MÁXIMAS (para containers)
      // ============================================
      maxWidth: {
        "8xl": "88rem",   // 1408px - Container extra largo
        "9xl": "96rem",   // 1536px - Container máximo
      },

      // ============================================
      // BREAKPOINTS RESPONSIVOS
      // ============================================
      // (Usando os padrões do Tailwind, que são excelentes)
      // sm: 640px   - Mobile grande / Tablet pequeno
      // md: 768px   - Tablet
      // lg: 1024px  - Desktop pequeno
      // xl: 1280px  - Desktop
      // 2xl: 1536px - Desktop grande

      // ============================================
      // ANIMAÇÕES E TRANSIÇÕES
      // ============================================
      animation: {
        // Animação de fade in suave
        "fade-in": "fadeIn 0.6s ease-out",
        // Animação de slide up (elemento sobe)
        "slide-up": "slideUp 0.6s ease-out",
        // Animação de slide in from right
        "slide-in-right": "slideInRight 0.5s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },

      // ============================================
      // SOMBRAS CUSTOMIZADAS
      // ============================================
      boxShadow: {
        // Sombra suave para cards em hover
        "card-hover": "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
        // Sombra forte para modais/overlays
        "modal": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },

      // ============================================
      // BORDER RADIUS (arredondamento)
      // ============================================
      borderRadius: {
        "4xl": "2rem",   // 32px - Cards grandes
        "5xl": "2.5rem", // 40px - Elementos especiais
      },
    },
  },

  // ============================================
  // PLUGINS DO TAILWIND
  // ============================================
  plugins: [],
};

export default config;
