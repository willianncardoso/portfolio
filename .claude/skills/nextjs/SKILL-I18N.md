# Next.js Internationalization (i18n) Skill

## Purpose
Add multilingual support to a Next.js portfolio with seamless language switching.

## When to Use
- Adding language support (English, Portuguese, etc.)
- Creating language switcher UI
- Setting up translation files
- Handling SEO for multiple locales

## Recommended Approach: next-intl

**Why next-intl:**
- Best Next.js 15 App Router support
- Type-safe translations
- Server Component compatible
- Smaller bundle than alternatives

```bash
npm install next-intl
```

---

## Setup Guide

### 1. Project Structure

```
/
├── messages/
│   ├── en.json
│   └── pt-BR.json
├── i18n/
│   ├── config.ts
│   ├── request.ts
│   └── routing.ts
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx
│       └── ...
├── components/
│   └── LanguageSwitcher.tsx
└── middleware.ts
```

### 2. Configuration

```typescript
// i18n/config.ts
export const locales = ['en', 'pt-BR'] as const
export const defaultLocale = 'en' as const
export type Locale = (typeof locales)[number]
```

```typescript
// i18n/routing.ts
import { defineRouting } from 'next-intl/routing'
import { locales, defaultLocale } from './config'

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // Hide default locale from URL
})
```

```typescript
// i18n/request.ts
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
```

### 3. Middleware

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(pt-BR|en)/:path*'],
}
```

### 4. Root Layout

```typescript
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

---

## Translation Files

### English (messages/en.json)
```json
{
  "nav": {
    "work": "Work",
    "about": "About",
    "contact": "Contact",
    "resume": "Resume"
  },
  "hero": {
    "badge": "Open to remote roles — US, UK, Germany, Portugal, NL",
    "headline": "I design complex enterprise software that people actually want to use.",
    "subtitle": "7+ years at IBM designing B2B SaaS products, design systems, and data-heavy dashboards.",
    "cta": {
      "primary": "View Work",
      "secondary": "LinkedIn"
    }
  },
  "differentiators": {
    "title": "What I Bring",
    "subtitle": "More than just design — a unique combination of skills.",
    "enterprise": {
      "title": "Enterprise SaaS Expertise",
      "description": "7+ years solving problems at IBM scale."
    },
    "technical": {
      "title": "Technical Fluency",
      "description": "I code in Python, read JavaScript/Vue fluently."
    }
  },
  "cases": {
    "viewCase": "View Case Study"
  },
  "contact": {
    "title": "Let's Connect",
    "description": "Available for remote opportunities."
  }
}
```

### Portuguese (messages/pt-BR.json)
```json
{
  "nav": {
    "work": "Trabalhos",
    "about": "Sobre",
    "contact": "Contato",
    "resume": "Currículo"
  },
  "hero": {
    "badge": "Aberto para vagas remotas — EUA, UK, Alemanha, Portugal, NL | CLT Brasil",
    "headline": "Eu projeto software empresarial complexo que as pessoas realmente querem usar.",
    "subtitle": "7+ anos na IBM projetando produtos B2B SaaS, design systems e dashboards.",
    "cta": {
      "primary": "Ver Trabalhos",
      "secondary": "LinkedIn"
    }
  },
  "differentiators": {
    "title": "O Que Eu Trago",
    "subtitle": "Mais do que apenas design — uma combinação única de habilidades.",
    "enterprise": {
      "title": "Expertise em SaaS Empresarial",
      "description": "7+ anos resolvendo problemas na escala IBM."
    },
    "technical": {
      "title": "Fluência Técnica",
      "description": "Codifico em Python, leio JavaScript/Vue fluentemente."
    }
  },
  "cases": {
    "viewCase": "Ver Case Study"
  },
  "contact": {
    "title": "Vamos Conversar",
    "description": "Disponível para oportunidades remotas."
  }
}
```

---

## Language Switcher Component

```tsx
// components/LanguageSwitcher.tsx
'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useTransition } from 'react'

const localeLabels: Record<string, string> = {
  'en': 'EN',
  'pt-BR': 'PT',
}

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (newLocale: string) => {
    // Remove current locale prefix and add new one
    const pathWithoutLocale = pathname.replace(/^\/(en|pt-BR)/, '') || '/'
    const newPath = newLocale === 'en' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`

    startTransition(() => {
      router.replace(newPath)
    })
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-1" role="group" aria-label="Language selection">
      {Object.entries(localeLabels).map(([loc, label]) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={isPending}
          aria-current={locale === loc ? 'true' : undefined}
          className={`
            px-3 py-1.5 text-sm font-medium rounded-md transition-all
            focus:outline-none focus:ring-2 focus:ring-primary/50
            ${locale === loc
              ? 'bg-primary text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }
            ${isPending ? 'opacity-50 cursor-wait' : ''}
          `}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
```

---

## Using Translations

### In Server Components
```tsx
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section>
      <h1>{t('headline')}</h1>
      <p>{t('subtitle')}</p>
      <button>{t('cta.primary')}</button>
    </section>
  )
}
```

### In Client Components
```tsx
'use client'
import { useTranslations } from 'next-intl'

export function ContactForm() {
  const t = useTranslations('contact')
  return <h2>{t('title')}</h2>
}
```

---

## SEO for Multiple Languages

```typescript
// app/[locale]/layout.tsx
import type { Metadata } from 'next'

export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const isPortuguese = locale === 'pt-BR'

  return {
    title: 'Willian Cardoso — Lead Product Designer',
    description: isPortuguese
      ? '10+ anos projetando B2B SaaS. Aberto para vagas remotas.'
      : '10+ years designing enterprise B2B SaaS. Open to remote roles.',
    alternates: {
      canonical: `https://example.com/${locale}`,
      languages: {
        'en': '/en',
        'pt-BR': '/pt-BR',
      },
    },
  }
}
```

---

## Translation Best Practices

### What to Translate
- Navigation labels
- Hero content (headline, subtitle, CTAs)
- Section titles and descriptions
- Button text
- Form labels
- Error messages
- Meta descriptions

### What to Keep in English
- Case study titles (international standard)
- Company names (IBM, etc.)
- Technical terms (Product Designer, B2B SaaS)
- Metrics/numbers (40% reduction)
- Proper nouns

### Text Length Considerations
Portuguese text is ~15-20% longer than English. Account for this in:
- Button widths (use padding, not fixed width)
- Card layouts (allow text to wrap)
- Navigation (use abbreviations if needed)

---

## Checklist

- [ ] next-intl installed
- [ ] Translation files created (en.json, pt-BR.json)
- [ ] Middleware configured
- [ ] Root layout wrapped with NextIntlClientProvider
- [ ] Language switcher in header
- [ ] All UI text uses `useTranslations()`
- [ ] SEO meta tags in both languages
- [ ] `lang` attribute on `<html>` updates correctly
- [ ] Language preference persists across navigation
- [ ] No layout shift when switching languages

---

## Static Export (GitHub Pages)

For static export with i18n:

```typescript
// next.config.ts
const config: NextConfig = {
  output: 'export',
  // Generate static pages for each locale
  trailingSlash: true,
}
```

```typescript
// In each page.tsx
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt-BR' }]
}
```

This generates:
```
/out/
├── en/
│   ├── index.html
│   ├── about/index.html
│   └── cases/cortex/index.html
└── pt-BR/
    ├── index.html
    ├── about/index.html
    └── cases/cortex/index.html
```
