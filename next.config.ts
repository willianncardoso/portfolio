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

const nextConfig: NextConfig = {
  /**
   * OUTPUT: EXPORT
   * Gera site 100% estático (HTML, CSS, JS)
   * Necessário para GitHub Pages
   */
  output: "export",

  /**
   * BASE PATH
   * Se seu repositório for: github.com/SEU-USUARIO/NOME-REPO
   * E o site for servido em: seu-usuario.github.io/NOME-REPO/
   * Descomente a linha abaixo e ajuste:
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

export default nextConfig;

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
