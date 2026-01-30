/**
 * ============================================
 * ROOT LAYOUT (Layout Base)
 * ============================================
 *
 * Este é o layout base que envolve todas as páginas do site.
 * Define HTML, fontes, metadados SEO e componentes globais (Header, Footer).
 *
 * IMPORTANTE: Este arquivo roda no servidor (Server Component)
 * Não pode usar hooks como useState ou useEffect
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/site-config";

// ============================================
// CONFIGURAÇÃO DA FONTE
// ============================================
// Carrega a fonte Inter do Google Fonts
// variable: nome da variável CSS para usar no Tailwind
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Melhor performance de carregamento
});

// ============================================
// METADADOS SEO
// ============================================
// Informações para Google, redes sociais, etc
export const metadata: Metadata = {
  // URL base para resolução de URLs relativas (Open Graph, Twitter)
  metadataBase: new URL("https://williancardoso.github.io/portfolio"),

  // Título da aba do navegador
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`, // Para páginas internas: "About | Willian Cardoso"
  },

  // Descrição para motores de busca
  description: siteConfig.seo.description,

  // Palavras-chave
  keywords: siteConfig.seo.keywords,

  // Autor
  authors: [{ name: siteConfig.name }],

  // Open Graph (compartilhamento em redes sociais)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.seo.url,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.seo.title,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },

  // Robots (indexação)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Ícones
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ============================================
// COMPONENTE DO LAYOUT
// ============================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} className="scroll-smooth">
      {/*
        scroll-smooth: habilita scroll suave ao clicar em âncoras (#work, #contact)
      */}
      <body
        className={`${inter.variable} font-sans bg-white text-primary-800 antialiased`}
      >
        {/*
          antialiased: suaviza as fontes
          font-sans: usa a fonte Inter definida acima
        */}

        {/* Skip Link para acessibilidade (navegação por teclado) */}
        <a
          href="#main"
          className="skip-link"
        >
          Skip to main content
        </a>

        {/* Header fixo no topo */}
        <Header />

        {/* Conteúdo da página */}
        {/* pt-16 compensa a altura do header fixo */}
        <main id="main" className="min-h-screen pt-16">{children}</main>

        {/* Rodapé */}
        <Footer />
      </body>
    </html>
  );
}

/**
 * OBSERVAÇÕES:
 * - Este arquivo NÃO pode usar "use client" (é Server Component)
 * - Metadados são gerados no servidor para melhor SEO
 * - Header e Footer aparecem em todas as páginas
 * - scroll-smooth permite navegação suave entre seções com âncoras
 */
