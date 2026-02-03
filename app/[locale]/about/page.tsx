/**
 * ============================================
 * ABOUT PAGE (Localized)
 * ============================================
 */

import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/content/site-config";
import { routing } from "@/i18n/routing";
import { AboutContent } from "@/components/about/AboutContent";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "pt-BR" ? "Sobre Mim" : "About Me";

  return {
    title: `${title} | ${siteConfig.name}`,
    description: siteConfig.bio,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: siteConfig.bio,
      url: `${siteConfig.seo.url}/about`,
      type: "profile",
    },
  };
}

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <AboutContent />
    </main>
  );
}
