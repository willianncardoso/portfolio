/**
 * ============================================
 * LANGUAGE SWITCHER COMPONENT
 * ============================================
 *
 * Toggle between supported languages (EN/PT-BR)
 */

"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;

    // For 'always' prefix mode, pathname includes locale
    // Replace the locale segment in the path
    let newPath = pathname;

    // Remove existing locale prefix
    for (const loc of locales) {
      if (pathname.startsWith(`/${loc}/`)) {
        newPath = pathname.replace(`/${loc}`, `/${newLocale}`);
        break;
      } else if (pathname === `/${loc}`) {
        newPath = `/${newLocale}`;
        break;
      }
    }

    // If no locale was found in path, prepend the new locale
    if (newPath === pathname) {
      newPath = `/${newLocale}${pathname}`;
    }

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div
      className="flex items-center gap-0.5 rounded-lg border border-primary-200 p-1 bg-white"
      role="group"
      aria-label="Language selection"
    >
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={isPending}
          aria-current={locale === loc ? "true" : undefined}
          aria-label={`Switch to ${loc === "en" ? "English" : "Português"}`}
          className={cn(
            "px-2.5 py-1 text-sm font-medium rounded-md transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-accent-500/50",
            locale === loc
              ? "bg-accent-500 text-white shadow-sm"
              : "text-primary-600 hover:text-primary-900 hover:bg-primary-50",
            isPending && "opacity-50 cursor-wait"
          )}
        >
          {loc === "en" ? "EN" : "PT"}
        </button>
      ))}
    </div>
  );
}
