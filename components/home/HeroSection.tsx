/**
 * COMPONENTE: HeroSection (Seção principal da home)
 * Full-screen hero with headline, photo, CTAs and trust indicators
 */

"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Code2, Building2, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";
import { getImagePath } from "@/lib/image-path";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

function TrustBadge({
  icon,
  gradient,
  label,
  sublabel,
}: {
  icon: React.ReactNode;
  gradient: string;
  label: string;
  sublabel: string;
}) {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-2xl border-2 border-gray-100 shadow-md hover:shadow-xl transition-shadow">
      <div
        className={cn(
          "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center",
          gradient
        )}
      >
        {icon}
      </div>
      <div>
        <div className="text-sm font-bold text-gray-900">{label}</div>
        <div className="text-xs text-gray-500">{sublabel}</div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />

      {/* Large animated blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-400/25 to-purple-400/25 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-accent-400/25 to-pink-400/25 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-300/20 to-accent-300/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <Container className="relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-3xl">
            {/* Status badge with pulse */}
            {siteConfig.availability.isAvailable && (
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full mb-10 shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                </span>
                <span className="text-sm font-bold tracking-wide">
                  OPEN TO REMOTE OPPORTUNITIES
                </span>
              </div>
            )}

            {/* HUGE headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight text-gray-900 mb-10">
              {t("headline").split("actually").length > 1 ? (
                <>
                  {t("headline").split("actually")[0]}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-primary-700 via-purple-600 to-accent-500 bg-clip-text text-transparent">
                      actually
                    </span>
                    {/* Gradient underline */}
                    <svg
                      className="absolute -bottom-3 left-0 w-full"
                      viewBox="0 0 300 14"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5 9 Q 150 3, 295 9"
                        stroke="url(#hero-underline)"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="hero-underline"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  {t("headline").split("actually")[1]}
                </>
              ) : (
                t("headline")
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl">
              {t("description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/#work"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                {t("primaryCTA")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl font-bold text-lg hover:border-primary-500 hover:shadow-xl transition-all"
                >
                  {t("secondaryCTA")}
                </a>
              )}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4">
              <TrustBadge
                icon={<Sparkles className="w-6 h-6 text-white" />}
                gradient="from-primary-500 to-primary-600"
                label="7+ years"
                sublabel="Experience"
              />
              <TrustBadge
                icon={<Building2 className="w-6 h-6 text-white" />}
                gradient="from-accent-500 to-accent-600"
                label="IBM"
                sublabel="Enterprise SaaS"
              />
              <TrustBadge
                icon={<Code2 className="w-6 h-6 text-white" />}
                gradient="from-purple-500 to-purple-600"
                label="Python + JS"
                sublabel="Technical"
              />
            </div>
          </div>

          {/* Right: Photo with decorative elements */}
          <div className="relative hidden lg:block">
            {/* Main photo */}
            <div className="relative z-10">
              <div className="aspect-square relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src={getImagePath("/images/willian-photo.jpg")}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Glow behind photo */}
            <div className="absolute -inset-8 bg-gradient-to-br from-primary-500 via-purple-500 to-accent-500 rounded-[3rem] blur-3xl opacity-20 -z-10" />

            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-2xl p-6 border-4 border-primary-100 z-20">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-black text-2xl">7+</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Years</div>
                  <div className="text-sm text-gray-600">Enterprise Design</div>
                </div>
              </div>
            </div>

            {/* Geometric accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent-400 to-pink-400 rounded-3xl rotate-12 opacity-50 -z-20" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-primary-400 to-purple-400 rounded-3xl -rotate-12 opacity-40 -z-20" />
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
}
