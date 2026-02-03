/**
 * COMPONENTE: AboutContent
 * Full about page with hero, journey, skills, CTA, and fun facts
 */

"use client";

import Image from "next/image";
import {
  Code2,
  Brain,
  Globe,
  BarChart3,
  Building2,
  Layers,
  MapPin,
  Mail,
  ArrowRight,
  Music,
  Plane,
  BookOpen,
  MessageSquare,
  Palette,
  Rocket,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";
import { getImagePath } from "@/lib/image-path";

const journeyKeys = ["dev", "design", "senior", "lead", "neuro"] as const;
const journeyIcons = {
  dev: Code2,
  design: Palette,
  senior: Building2,
  lead: Rocket,
  neuro: Brain,
};
const journeyColors = {
  dev: "from-blue-400 to-blue-600",
  design: "from-purple-400 to-purple-600",
  senior: "from-accent-400 to-accent-600",
  lead: "from-pink-400 to-pink-600",
  neuro: "from-amber-400 to-orange-500",
};

const skillKeys = ["enterprise", "systems", "code", "research", "global", "data"] as const;
const skillIcons = {
  enterprise: Building2,
  systems: Layers,
  code: Code2,
  research: Brain,
  global: Globe,
  data: BarChart3,
};
const skillColors = {
  enterprise: "from-accent-400 to-accent-600",
  systems: "from-purple-400 to-purple-600",
  code: "from-pink-400 to-pink-600",
  research: "from-amber-400 to-orange-500",
  global: "from-green-400 to-emerald-600",
  data: "from-blue-400 to-indigo-600",
};

const funKeys = ["neuro", "nlp", "music", "travel"] as const;
const funIcons = {
  neuro: BookOpen,
  nlp: MessageSquare,
  music: Music,
  travel: Plane,
};
const funColors = {
  neuro: "from-purple-400 to-purple-600",
  nlp: "from-accent-400 to-accent-600",
  music: "from-pink-400 to-pink-600",
  travel: "from-amber-400 to-orange-500",
};

export function AboutContent() {
  const t = useTranslations("about");

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-accent-50/40 via-white to-purple-50/30 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />

        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-3 bg-gradient-to-br from-accent-400 via-purple-500 to-pink-500 rounded-full opacity-75 blur-sm" />
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={getImagePath("/images/willian-photo.jpg")}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {t("title")}
              </h1>
              <p className="text-lg text-gray-500 font-medium mb-6">
                {t("subtitle")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                {t("intro")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("journeyTitle")}
          </h2>

          <div className="max-w-3xl mx-auto space-y-0">
            {journeyKeys.map((key, idx) => {
              const IconComponent = journeyIcons[key];
              const gradient = journeyColors[key];
              return (
                <div key={key} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Timeline line */}
                  {idx < journeyKeys.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-gray-300 to-gray-100" />
                  )}

                  {/* Icon */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-accent-600">
                      {t(`journeyItems.${key}.year`)}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                      {t(`journeyItems.${key}.title`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(`journeyItems.${key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Skills Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("skillsTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillKeys.map((key) => {
              const IconComponent = skillIcons[key];
              const gradient = skillColors[key];
              return (
                <div
                  key={key}
                  className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {t(`skills.${key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`skills.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What I'm Looking For */}
      <section className="py-20 bg-gradient-to-br from-accent-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

        <Container>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("lookingTitle")}
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              {t("lookingDescription")}
            </p>
            <div className="flex items-center justify-center gap-2 text-white/80 mb-10">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{t("lookingLocations")}</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/25 transition-all"
                >
                  LinkedIn
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Beyond Work */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("funTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {funKeys.map((key) => {
              const IconComponent = funIcons[key];
              const gradient = funColors[key];
              return (
                <div
                  key={key}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} mb-4 shadow-sm`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {t(`funItems.${key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`funItems.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
