# Next.js Portfolio Refinement Skill

## Purpose
Optimize and refine an existing Next.js/React/TypeScript portfolio for production quality.

## When to Use
- Visual polish (spacing, colors, typography)
- Performance optimization (Lighthouse 90+)
- Accessibility compliance (WCAG 2.1 AA)
- Responsive design refinement
- Microinteractions and animations

## Dependencies
This skill works with:
- [UI-UX Skill](../ui-ux/SKILL-UI-UX.md) - Color systems, component patterns
- [i18n Skill](./SKILL-I18N.md) - Internationalization (optional)

---

## Project Context

**Stack:** Next.js 15 + React + TypeScript + Tailwind CSS
**Deploy:** GitHub Pages (static export)
**Target:** Product designer portfolio for international remote roles

---

## Design System

### Color Palette
Use the palette from [UI-UX Skill](../ui-ux/SKILL-UI-UX.md#1-color-system) or this professional blue:

```typescript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: '#0066FF',
    light: '#3384FF',
    dark: '#0052CC',
    50: 'rgba(0, 102, 255, 0.05)',
    100: 'rgba(0, 102, 255, 0.1)',
  },
  accent: {
    DEFAULT: '#00CC88',
    light: '#33D9A5',
  },
}
```

### Typography (Fluid)
```typescript
fontSize: {
  'xs': ['clamp(0.75rem, 0.7rem + 0.125vw, 0.875rem)', { lineHeight: '1.5' }],
  'sm': ['clamp(0.875rem, 0.825rem + 0.125vw, 1rem)', { lineHeight: '1.5' }],
  'base': ['clamp(1rem, 0.95rem + 0.125vw, 1.125rem)', { lineHeight: '1.5' }],
  'lg': ['clamp(1.125rem, 1.05rem + 0.25vw, 1.25rem)', { lineHeight: '1.5' }],
  'xl': ['clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)', { lineHeight: '1.2' }],
  '2xl': ['clamp(1.5rem, 1.3rem + 1vw, 2rem)', { lineHeight: '1.2' }],
  '3xl': ['clamp(2rem, 1.6rem + 2vw, 3rem)', { lineHeight: '1.2' }],
  '4xl': ['clamp(2.5rem, 1.8rem + 3.5vw, 4rem)', { lineHeight: '1.1' }],
}
```

### Spacing System
```
space-2  = 8px   (tight)
space-4  = 16px  (default)
space-6  = 24px  (medium)
space-8  = 32px  (large)
space-12 = 48px  (section)
space-16 = 64px  (hero)
space-24 = 96px  (major gaps)
```

### Shadows
```typescript
boxShadow: {
  'sm': '0 1px 3px rgba(0, 0, 0, 0.08)',
  'md': '0 4px 12px rgba(0, 0, 0, 0.1)',
  'lg': '0 12px 24px rgba(0, 0, 0, 0.12)',
  'xl': '0 24px 48px rgba(0, 0, 0, 0.15)',
}
```

### Animations
```typescript
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',
  'slide-up': 'slideUp 0.6s ease-out',
},
keyframes: {
  fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
  slideUp: {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' }
  },
}
```

---

## Core Components

### Navigation (Sticky + Blur)
```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`
      sticky top-0 z-50 transition-all duration-300
      ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}
    `}>
      {/* ... content ... */}
    </nav>
  )
}
```

### Hero Section
```tsx
export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl animate-slide-up">
        <p className="text-lg text-gray-600 mb-4">Hi, I'm Willian Cardoso</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Senior Product Designer building enterprise software
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          8 years at IBM designing B2B platforms.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="#work" className="px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition-all">
            View My Work
          </Link>
          <Link href="/about" className="px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-800 font-semibold hover:border-primary hover:text-primary transition-all">
            About Me
          </Link>
        </div>
      </div>
    </section>
  )
}
```

### Project Card
```tsx
interface ProjectCardProps {
  title: string
  description: string
  href: string
  image: string
  tags: string[]
  metrics: { icon: string; label: string }[]
}

export function ProjectCard({ title, description, href, image, tags, metrics }: ProjectCardProps) {
  return (
    <article className="group h-full flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary">
      <Link href={href} className="flex flex-col h-full">
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="flex flex-col flex-1 p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-medium uppercase tracking-wide bg-gray-100 text-gray-600 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-gray-600 leading-relaxed mb-6 flex-1">{description}</p>
          <div className="flex gap-6 pt-4 border-t border-gray-200">
            {metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-lg">{m.icon}</span>
                <span className="text-sm font-medium text-gray-600">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}
```

---

## Performance

### Next.js Config (GitHub Pages)
```typescript
// next.config.ts
import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  trailingSlash: true,
}

export default config
```

### Image Best Practices
```tsx
// Always specify sizes for responsive loading
<Image
  src="/images/project.png"
  alt="Descriptive alt text"
  width={1200}
  height={675}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  priority={false}  // true only for hero images
/>
```

### Font Optimization
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

---

## Accessibility

### Skip Link
```tsx
export function SkipLink() {
  return (
    <a href="#main" className="sr-only focus:not-sr-only fixed top-4 left-4 z-[10000] px-4 py-2 rounded-lg bg-primary text-white font-semibold focus:outline-none focus:ring-4 focus:ring-primary/30">
      Skip to main content
    </a>
  )
}
```

### Focus States
```tsx
// All interactive elements need visible focus
className="focus:outline-none focus:ring-4 focus:ring-primary/30"
```

### Semantic Structure
```tsx
<article>
  <header><h1>Title</h1></header>
  <section><h2>Section</h2><p>Content</p></section>
  <footer><p>Footer</p></footer>
</article>
```

---

## Quality Checklist

### Performance
- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Images optimized (Next.js Image)
- [ ] Fonts optimized (next/font)

### Accessibility
- [ ] Lighthouse Accessibility > 95
- [ ] Skip link works
- [ ] Keyboard navigation complete
- [ ] Focus states visible
- [ ] Alt text on all images
- [ ] Contrast ratio > 4.5:1

### Responsive
- [ ] Mobile (320px-768px)
- [ ] Tablet (768px-1024px)
- [ ] Desktop (1024px+)

### SEO
- [ ] Meta tags complete
- [ ] Open Graph tags
- [ ] Canonical URLs

---

## Priority Order

### Critical (Do First)
1. Fix visibility issues (buttons, overlays)
2. Ensure color contrast compliance
3. Add proper focus states

### High
4. Optimize images
5. Add microinteractions (hover, transitions)
6. Polish typography hierarchy

### Medium
7. Scroll animations
8. Loading skeletons
9. Skip link

### Nice-to-Have
10. Image lightbox
11. Dark mode
12. Progress indicator
