/**
 * ============================================
 * CASE STUDY PAGE (Localized)
 * ============================================
 * Uses restructured Xiaoyang-style layout with sidebar navigation
 */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { allCases } from "@/content/cases";
import { siteConfig } from "@/content/site-config";
import { routing } from "@/i18n/routing";
import { CaseHero } from "@/components/case/CaseHero";
import { CaseSidebar } from "@/components/case/CaseSidebar";
import { CaseBackground } from "@/components/case/CaseBackground";
import { CaseWhyRedesign } from "@/components/case/CaseWhyRedesign";
import { CaseDesignStrategy } from "@/components/case/CaseDesignStrategy";
import { CaseKeyDecisions } from "@/components/case/CaseKeyDecisions";
import { CaseImpact } from "@/components/case/CaseImpact";
import { CaseReflection } from "@/components/case/CaseReflection";
import { ProcessSection } from "@/components/case/ProcessSection";
import { CaseNavigation } from "@/components/case/CaseNavigation";

// Generate static params for all locales and cases
export function generateStaticParams() {
  const params: { locale: string; id: string }[] = [];

  for (const locale of routing.locales) {
    for (const caseStudy of allCases) {
      params.push({
        locale,
        id: caseStudy.id,
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = allCases.find((c) => c.id === id);

  if (!caseStudy) {
    return {
      title: "Case Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | ${siteConfig.name}`,
    description: caseStudy.seoDescription || caseStudy.cardDescription,
    keywords: caseStudy.keywords || [
      caseStudy.category,
      "product design",
      "UX design",
      "case study",
    ],
    openGraph: {
      title: `${caseStudy.title} | ${siteConfig.name}`,
      description: caseStudy.cardDescription,
      url: `${siteConfig.seo.url}/cases/${caseStudy.id}`,
      type: "article",
      images: [
        {
          url: caseStudy.images.cover,
          width: 1600,
          height: 1000,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | ${siteConfig.name}`,
      description: caseStudy.cardDescription,
      images: [caseStudy.images.cover],
    },
  };
}

interface CasePageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function CasePage({ params }: CasePageProps) {
  const { locale, id } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const caseStudy = allCases.find((c) => c.id === id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      {/* Sticky sidebar navigation */}
      {caseStudy.sections && (
        <CaseSidebar projectName={caseStudy.title.split(":")[0]} sections={caseStudy.sections} />
      )}

      <main>
        <CaseHero caseStudy={caseStudy} />

        {/* 01 Background */}
        {caseStudy.background && (
          <section id="background">
            <CaseBackground background={caseStudy.background} />
          </section>
        )}

        {/* 02 Why Redesign */}
        {caseStudy.whyRedesign && (
          <section id="why-redesign">
            <CaseWhyRedesign data={caseStudy.whyRedesign} />
          </section>
        )}

        {/* 03 Design Strategy (optional) */}
        {caseStudy.designStrategy && (
          <section id="design-strategy">
            <CaseDesignStrategy data={caseStudy.designStrategy} />
          </section>
        )}

        {/* My Process timeline */}
        {caseStudy.process && caseStudy.process.length > 0 && (
          <ProcessSection steps={caseStudy.process} />
        )}

        {/* 04 Key Design Decisions */}
        {caseStudy.keyDecisions && (
          <section id="key-decisions">
            <CaseKeyDecisions decisions={caseStudy.keyDecisions} />
          </section>
        )}

        {/* 05 Impact */}
        {caseStudy.impact && (
          <section id="impact">
            <CaseImpact data={caseStudy.impact} />
          </section>
        )}

        {/* 06 Reflection */}
        {caseStudy.reflection && (
          <section id="reflection">
            <CaseReflection data={caseStudy.reflection} />
          </section>
        )}

        <CaseNavigation nextCaseId={caseStudy.nextCaseId} />
      </main>
    </>
  );
}
