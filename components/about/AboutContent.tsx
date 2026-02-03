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
  Music,
  Plane,
  BookOpen,
  MessageSquare,
  Palette,
  Rocket,
  Linkedin,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";
import { getImagePath } from "@/lib/image-path";

// Journey in REVERSE chronological order
const journeyKeys = ["neuro", "lead", "senior", "design", "dev"] as const;
const journeyIcons = {
  neuro: Brain,
  lead: Rocket,
  senior: Building2,
  design: Palette,
  dev: Code2,
};
const journeyColors = {
  neuro: "from-pink-500 to-pink-600",
  lead: "from-accent-500 to-accent-600",
  senior: "from-primary-500 to-primary-600",
  design: "from-purple-500 to-purple-600",
  dev: "from-blue-500 to-blue-600",
};
const journeyHighlights = {
  neuro: "Research",
  lead: "Leadership",
  senior: "Impact",
  design: "Pivot",
  dev: "Beginning",
};

const skillKeys = [
  "enterprise",
  "systems",
  "code",
  "research",
  "global",
  "data",
] as const;
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
      <section className="relative pt-32 pb-20 md:pb-28 bg-gradient-to-br from-accent-50/40 via-white to-purple-50/30 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />

        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-400 via-purple-500 to-pink-500 rounded-[2rem] opacity-75 blur-sm" />
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                {t("title")}
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-medium mb-6">
                {t("subtitle")}
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {t("intro")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Journey Timeline - Reverse chronological */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 text-center tracking-tight">
            {t("journeyTitle")}
          </h2>

          <div className="max-w-3xl mx-auto space-y-12">
            {journeyKeys.map((key, idx) => {
              const IconComponent = journeyIcons[key];
              const gradient = journeyColors[key];
              const highlight = journeyHighlights[key];
              return (
                <div key={key} className="group flex gap-8">
                  {/* Timeline column */}
                  <div className="relative flex flex-col items-center">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform z-10`}
                    >
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
                    </div>

                    {/* Connecting line */}
                    {idx < journeyKeys.length - 1 && (
                      <div className="w-1 flex-1 bg-gradient-to-b from-gray-200 to-transparent mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="px-4 py-1.5 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 font-black text-sm rounded-full">
                        {t(`journeyItems.${key}.year`)}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-wide">
                        {highlight}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {t(`journeyItems.${key}.title`)}
                    </h3>

                    <p className="text-lg text-gray-600 leading-relaxed">
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
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 text-center tracking-tight">
            {t("skillsTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {skillKeys.map((key) => {
              const IconComponent = skillIcons[key];
              const gradient = skillColors[key];
              return (
                <div
                  key={key}
                  className="group p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-accent-200 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`skills.${key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`skills.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What I'm Looking For */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-accent-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

        <Container>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  Let&apos;s Connect
                </a>
              )}
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/15 text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/25 transition-all"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Beyond Work */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 text-center tracking-tight">
            {t("funTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {funKeys.map((key) => {
              const IconComponent = funIcons[key];
              const gradient = funColors[key];
              return (
                <div
                  key={key}
                  className="text-center p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl border-2 border-transparent hover:border-gray-100 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} mb-6 shadow-sm`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
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
