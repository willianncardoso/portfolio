/**
 * ============================================
 * LOCALE LAYOUT
 * ============================================
 *
 * Main layout for localized pages. Includes HTML structure,
 * fonts, metadata, and global components.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Generate metadata for each locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    metadataBase: new URL("https://williancardoso.github.io/portfolio"),
    title: {
      default: t("title"),
      template: `%s | Willian Cardoso`,
    },
    description: t("description"),
    keywords: [
      "product designer",
      "UX designer",
      "UI designer",
      "enterprise design",
      "design systems",
      "B2B design",
      "SaaS design",
      "IBM",
      "portfolio",
    ],
    authors: [{ name: "Willian Cardoso" }],
    openGraph: {
      type: "website",
      locale: locale === "pt-BR" ? "pt_BR" : "en_US",
      url: "https://williancardoso.github.io/portfolio",
      title: t("title"),
      description: t("description"),
      siteName: "Willian Cardoso",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://williancardoso.github.io/portfolio/${locale === "en" ? "" : locale}`,
      languages: {
        en: "/",
        "pt-BR": "/pt-BR",
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
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
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  // Get accessibility translations for skip link
  const t = await getTranslations({ locale, namespace: "accessibility" });

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-white text-primary-800 antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* Skip Link for accessibility */}
          <a href="#main" className="skip-link">
            {t("skipToMain")}
          </a>

          {/* Header */}
          <Header />

          {/* Main content */}
          <main id="main" className="min-h-screen pt-16">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
