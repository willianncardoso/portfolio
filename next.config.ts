/**
 * ============================================
 * CONFIGURAÇÃO DO NEXT.JS
 * ============================================
 *
 * Configurações para deploy no GitHub Pages.
 *
 * IMPORTANTE: GitHub Pages serve arquivos estáticos,
 * então usamos "output: 'export'" para gerar HTML/CSS/JS estático.
 */

import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  /**
   * OUTPUT: EXPORT
   * Gera site 100% estático (HTML, CSS, JS)
   * Necessário para GitHub Pages
   */
  output: "export",

  /**
   * BASE PATH
   * IMPORTANTE: Comentado para desenvolvimento local
   * Descomente antes do deploy para GitHub Pages
   */
  basePath: "/portfolio",

  /**
   * IMAGES
   * GitHub Pages não suporta otimização de imagem do Next.js
   * Então desabilitamos
   */
  images: {
    unoptimized: true,
  },

  /**
   * TRAILING SLASH
   * Adiciona / no final das URLs para melhor compatibilidade
   */
  trailingSlash: true,
};

export default withNextIntl(nextConfig);

/**
 * ============================================
 * INSTRUÇÕES DE USO
 * ============================================
 *
 * CASO 1: Repositório próprio (seu-usuario.github.io)
 * - Deixe como está (sem basePath)
 * - Seu site será: https://seu-usuario.github.io
 *
 * CASO 2: Repositório de projeto (nome-projeto)
 * - Descomente e ajuste basePath: "/nome-projeto"
 * - Seu site será: https://seu-usuario.github.io/nome-projeto
 *
 * Exemplo:
 * Se seu repo for: github.com/williancardoso/portfolio
 * Use: basePath: "/portfolio"
 * Site: williancardoso.github.io/portfolio
 */
