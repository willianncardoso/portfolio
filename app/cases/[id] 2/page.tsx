import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allCases } from "@/content/cases";
import { siteConfig } from "@/content/site-config";
import { CaseHero } from "@/components/case/CaseHero";
import { CaseMetrics } from "@/components/case/CaseMetrics";
import { CaseOverview } from "@/components/case/CaseOverview";
import { CaseChallenge } from "@/components/case/CaseChallenge";
import { CaseApproach } from "@/components/case/CaseApproach";
import { CaseSolution } from "@/components/case/CaseSolution";
import { CaseResults } from "@/components/case/CaseResults";
import { CaseLearnings } from "@/components/case/CaseLearnings";
import { CaseNavigation } from "@/components/case/CaseNavigation";

export async function generateStaticParams() {
  return allCases.map((caseStudy) => ({
    id: caseStudy.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
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

export default async function CasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const caseStudy = allCases.find((c) => c.id === id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main>
      <CaseHero caseStudy={caseStudy} />
      <CaseMetrics metrics={caseStudy.metrics} />
      <CaseOverview content={caseStudy.content.overview} />
      <CaseChallenge challenge={caseStudy.content.challenge} />
      <CaseApproach steps={caseStudy.content.approach} />
      <CaseSolution solution={caseStudy.content.solution} />
      <CaseResults results={caseStudy.content.results} />
      <CaseLearnings learnings={caseStudy.content.learnings} />
      <CaseNavigation nextCaseId={caseStudy.nextCaseId} />
    </main>
  );
}
