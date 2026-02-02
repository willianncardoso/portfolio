/**
 * ============================================
 * HOME PAGE (Localized)
 * ============================================
 *
 * Main landing page with locale support.
 */

import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/HeroSection";
import { DifferentiatorsSection } from "@/components/home/DifferentiatorsSection";
import { CasesGridSection } from "@/components/home/CasesGridSection";
import { ContactSection } from "@/components/home/ContactSection";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <DifferentiatorsSection />
      <CasesGridSection />
      <ContactSection />
    </>
  );
}
