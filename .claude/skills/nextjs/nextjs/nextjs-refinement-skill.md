# WILLIAN CARDOSO PORTFOLIO - NEXT.JS REFINEMENT SKILL

Esta skill contém diretrizes, padrões e melhores práticas para **refinar e otimizar** o portfolio Next.js/React/TypeScript já existente de Willian Cardoso.

**Status Atual:**
- ✅ Projeto Next.js/React/TypeScript funcionando
- ✅ 2 case studies implementados (ESW + Cortex)
- ✅ Deploy no GitHub Pages ativo
- ✅ Conteúdo detalhado já inserido

**Objetivo:**
- 🎨 Elevar qualidade visual (design profissional, moderno)
- ⚡ Otimizar performance (Lighthouse 90+)
- ♿ Garantir acessibilidade (WCAG 2.1 AA)
- 📱 Refinar responsividade
- 🚀 Polir microinterações

**Deadline:** Sábado (01/02) para entrevista quarta (04/02) 15h30

---

## BRAND IDENTITY & DESIGN SYSTEM

### Color Palette (CSS Variables)
```css
/* Adicionar em globals.css ou tailwind.config.ts */
:root {
  /* Primary - Professional Blue */
  --color-primary: #0066FF;
  --color-primary-light: #3384FF;
  --color-primary-dark: #0052CC;
  --color-primary-50: rgba(0, 102, 255, 0.05);
  --color-primary-100: rgba(0, 102, 255, 0.1);
  
  /* Accent - Success Green */
  --color-accent: #00CC88;
  --color-accent-light: #33D9A5;
  
  /* Neutrals */
  --color-text: #1a1a1a;
  --color-text-secondary: #666666;
  --color-text-tertiary: #999999;
  --color-bg: #ffffff;
  --color-surface: #f8f9fa;
  --color-border: #e1e4e8;
  
  /* Status Colors */
  --color-success: #00CC88;
  --color-warning: #FFB020;
  --color-error: #FF4444;
  --color-info: #0066FF;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 24px 48px rgba(0, 0, 0, 0.15);
  
  /* Spacing (se não usar Tailwind defaults) */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
  --spacing-3xl: 4rem;     /* 64px */
  --spacing-4xl: 6rem;     /* 96px */
  
  /* Border Radius */
  --radius-sm: 0.25rem;    /* 4px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Dark mode (opcional) */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #ffffff;
    --color-text-secondary: #b3b3b3;
    --color-text-tertiary: #808080;
    --color-bg: #0d0d0d;
    --color-surface: #1a1a1a;
    --color-border: #333333;
  }
}
```

### Tailwind Config (se usar Tailwind)
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
        success: '#00CC88',
        warning: '#FFB020',
        error: '#FF4444',
        info: '#0066FF',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          'Monaco',
          '"Cascadia Code"',
          '"Roboto Mono"',
          'Consolas',
          '"Courier New"',
          'monospace',
        ],
      },
      fontSize: {
        // Fluid typography usando clamp
        'xs': ['clamp(0.75rem, 0.7rem + 0.125vw, 0.875rem)', { lineHeight: '1.5' }],
        'sm': ['clamp(0.875rem, 0.825rem + 0.125vw, 1rem)', { lineHeight: '1.5' }],
        'base': ['clamp(1rem, 0.95rem + 0.125vw, 1.125rem)', { lineHeight: '1.5' }],
        'lg': ['clamp(1.125rem, 1.05rem + 0.25vw, 1.25rem)', { lineHeight: '1.5' }],
        'xl': ['clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)', { lineHeight: '1.2' }],
        '2xl': ['clamp(1.5rem, 1.3rem + 1vw, 2rem)', { lineHeight: '1.2' }],
        '3xl': ['clamp(2rem, 1.6rem + 2vw, 3rem)', { lineHeight: '1.2' }],
        '4xl': ['clamp(2.5rem, 1.8rem + 3.5vw, 4rem)', { lineHeight: '1.1' }],
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'lg': '0 12px 24px rgba(0, 0, 0, 0.12)',
        'xl': '0 24px 48px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

---

## COMPONENT PATTERNS (REACT/TYPESCRIPT)

### 1. Navigation Component
```typescript
// components/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav 
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            aria-label="Willian Cardoso - Home"
          >
            <div className="
              w-10 h-10 rounded-lg bg-primary flex items-center justify-center 
              font-bold text-white text-lg
              transition-transform duration-300 group-hover:scale-110
            ">
              WC
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link 
                href="/#work" 
                className={`
                  font-medium transition-colors duration-200
                  ${pathname === '/' 
                    ? 'text-primary' 
                    : 'text-gray-600 hover:text-primary'
                  }
                `}
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`
                  font-medium transition-colors duration-200
                  ${pathname === '/about' 
                    ? 'text-primary' 
                    : 'text-gray-600 hover:text-primary'
                  }
                `}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/#contact" 
                className="
                  px-6 py-2 rounded-lg bg-primary text-white font-medium
                  transition-all duration-200
                  hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5
                "
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className={`
              w-6 h-0.5 bg-gray-800 transition-all duration-300
              ${isOpen ? 'rotate-45 translate-y-2' : ''}
            `} />
            <span className={`
              w-6 h-0.5 bg-gray-800 transition-all duration-300
              ${isOpen ? 'opacity-0' : ''}
            `} />
            <span className={`
              w-6 h-0.5 bg-gray-800 transition-all duration-300
              ${isOpen ? '-rotate-45 -translate-y-2' : ''}
            `} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <ul className="flex flex-col gap-4">
              <li>
                <Link 
                  href="/#work" 
                  className="block py-2 text-gray-800 font-medium"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block py-2 text-gray-800 font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/#contact" 
                  className="block py-2 px-6 rounded-lg bg-primary text-white font-medium text-center"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
```

---

### 2. Project Card Component
```typescript
// components/ProjectCard.tsx
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  href: string
  image: string
  tags: string[]
  metrics: {
    icon: string
    label: string
  }[]
}

export default function ProjectCard({
  title,
  description,
  href,
  image,
  tags,
  metrics,
}: ProjectCardProps) {
  return (
    <article className="
      group h-full flex flex-col
      bg-white border border-gray-200 rounded-xl overflow-hidden
      transition-all duration-300 ease-out
      hover:shadow-xl hover:-translate-y-1 hover:border-primary
    ">
      <Link href={href} className="flex flex-col h-full">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-105
            "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-3 py-1 text-xs font-medium uppercase tracking-wide
                  bg-gray-100 text-gray-600 rounded-full
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6 flex-1">
            {description}
          </p>

          {/* Metrics */}
          <div className="flex gap-6 pt-4 border-t border-gray-200">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-lg">{metric.icon}</span>
                <span className="text-sm font-medium text-gray-600">
                  {metric.label}
                </span>
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

### 3. Hero Section Component
```typescript
// components/Hero.tsx
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl animate-slide-up">
          {/* Greeting */}
          <p className="text-lg text-gray-600 mb-4 animate-fade-in">
            Hi, I'm Willian Cardoso 👋
          </p>

          {/* Main Title */}
          <h1 className="
            text-4xl md:text-5xl lg:text-6xl font-bold mb-6
            bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent
            leading-tight
          ">
            Senior Product Designer building enterprise software that people actually enjoy using
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            8 years at IBM designing B2B platforms for licensing, billing, and compliance. 
            Now seeking international remote opportunities.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#work"
              className="
                px-8 py-4 rounded-lg bg-primary text-white font-semibold
                transition-all duration-200
                hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5
              "
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="
                px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-800 font-semibold
                transition-all duration-200
                hover:border-primary hover:text-primary
              "
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

### 4. Image with Lightbox Component
```typescript
// components/ImageWithLightbox.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageWithLightboxProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export default function ImageWithLightbox({
  src,
  alt,
  caption,
  className = '',
}: ImageWithLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Image */}
      <figure className={`my-12 ${className}`}>
        <div
          className="relative w-full rounded-xl overflow-hidden cursor-zoom-in shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={900}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
        {caption && (
          <figcaption className="mt-4 text-sm text-center text-gray-600 leading-relaxed">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="
              absolute top-4 right-4 md:top-8 md:right-8
              w-12 h-12 rounded-full
              bg-white/10 backdrop-blur-md border-2 border-white/30
              text-white text-2xl
              flex items-center justify-center
              transition-all duration-200
              hover:bg-white/20 hover:scale-110
              z-10
            "
            aria-label="Close lightbox"
          >
            ×
          </button>

          {/* Image */}
          <div className="relative max-w-[90%] max-h-[90%]">
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={900}
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
```

---

### 5. Metric Card Component
```typescript
// components/MetricCard.tsx
interface MetricCardProps {
  icon: string
  value: string
  label: string
}

export default function MetricCard({ icon, value, label }: MetricCardProps) {
  return (
    <div className="
      p-6 md:p-8 text-center
      bg-white border border-gray-200 rounded-xl
      transition-all duration-300
      hover:shadow-lg hover:-translate-y-1 hover:border-primary
    ">
      <div className="text-4xl md:text-5xl mb-4">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
        {value}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        {label}
      </p>
    </div>
  )
}
```

---

### 6. Quote/Testimonial Component
```typescript
// components/Quote.tsx
interface QuoteProps {
  text: string
  author: string
  className?: string
}

export default function Quote({ text, author, className = '' }: QuoteProps) {
  return (
    <blockquote className={`
      relative my-12 p-6 md:p-8
      bg-gray-50 border-l-4 border-primary rounded-r-lg
      ${className}
    `}>
      <div className="absolute top-4 left-4 text-6xl text-primary/10 leading-none">
        "
      </div>
      <p className="text-lg md:text-xl italic text-gray-800 leading-relaxed mb-4 relative z-10">
        {text}
      </p>
      <footer className="text-sm font-semibold text-gray-600">
        — {author}
      </footer>
    </blockquote>
  )
}
```

---

## PERFORMANCE OPTIMIZATIONS

### Next.js Image Optimization
```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para GitHub Pages
  images: {
    unoptimized: true, // Necessário para static export
  },
  // Se usar basePath para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
}

module.exports = nextConfig
```

### Image Component Best Practices
```typescript
// Sempre use Next.js Image component
import Image from 'next/image'

// ✅ BOM: Especifica sizes para responsive
<Image
  src="/images/project.png"
  alt="Description"
  width={1200}
  height={675}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  priority={false} // true apenas para hero images
  loading="lazy"
/>

// ❌ RUIM: Sem sizes, Next.js não otimiza corretamente
<Image src="/images/project.png" alt="Description" width={1200} height={675} />
```

### Lazy Loading Components
```typescript
// Lazy load components pesados
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Desabilita SSR se não for necessário
})
```

### Font Optimization
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

---

## ACCESSIBILITY PATTERNS

### Semantic HTML in React
```typescript
// ✅ BOM: Semantic structure
<article>
  <header>
    <h1>Title</h1>
  </header>
  <section>
    <h2>Section Title</h2>
    <p>Content</p>
  </section>
  <footer>
    <p>Footer content</p>
  </footer>
</article>

// ❌ RUIM: Só divs
<div>
  <div>
    <div>Title</div>
  </div>
  <div>Content</div>
</div>
```

### Focus Management
```typescript
// components/Button.tsx
export default function Button({ 
  children, 
  onClick,
  variant = 'primary' 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-lg font-semibold
        transition-all duration-200
        focus:outline-none focus:ring-4 focus:ring-primary/30
        ${variant === 'primary' 
          ? 'bg-primary text-white hover:bg-primary-dark' 
          : 'border-2 border-gray-300 text-gray-800 hover:border-primary'
        }
      `}
    >
      {children}
    </button>
  )
}
```

### Skip Link
```typescript
// components/SkipLink.tsx
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="
        sr-only focus:not-sr-only
        fixed top-4 left-4 z-[10000]
        px-4 py-2 rounded-lg
        bg-primary text-white font-semibold
        focus:outline-none focus:ring-4 focus:ring-primary/30
      "
    >
      Skip to main content
    </a>
  )
}

// Adicionar no layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## RESPONSIVE PATTERNS

### Container Component
```typescript
// components/Container.tsx
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  size?: 'default' | 'narrow' | 'wide'
  className?: string
}

export default function Container({ 
  children, 
  size = 'default',
  className = '' 
}: ContainerProps) {
  const maxWidth = {
    narrow: 'max-w-3xl',   // 768px
    default: 'max-w-6xl',  // 1152px
    wide: 'max-w-7xl',     // 1280px
  }

  return (
    <div className={`
      container mx-auto px-4 md:px-8
      ${maxWidth[size]}
      ${className}
    `}>
      {children}
    </div>
  )
}
```

### Grid System
```typescript
// components/Grid.tsx
import { ReactNode } from 'react'

interface GridProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Grid({ 
  children, 
  cols = 2,
  gap = 'lg',
  className = '' 
}: GridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  const gridGap = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  }

  return (
    <div className={`
      grid ${gridCols[cols]} ${gridGap[gap]}
      ${className}
    `}>
      {children}
    </div>
  )
}
```

---

## ANIMATION PATTERNS

### Scroll-triggered Animations
```typescript
// hooks/useScrollAnimation.ts
import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Usar em components
export default function AnimatedSection({ children }: { children: ReactNode }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        }
      `}
    >
      {children}
    </div>
  )
}
```

### Stagger Children Animation
```typescript
// components/StaggerChildren.tsx
import { Children, ReactNode, cloneElement, isValidElement } from 'react'

interface StaggerChildrenProps {
  children: ReactNode
  delay?: number // delay entre cada child (ms)
  className?: string
}

export default function StaggerChildren({
  children,
  delay = 100,
  className = '',
}: StaggerChildrenProps) {
  return (
    <div className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child

        return cloneElement(child, {
          style: {
            ...child.props.style,
            animationDelay: `${index * delay}ms`,
          },
          className: `${child.props.className || ''} animate-slide-up`,
        } as any)
      })}
    </div>
  )
}
```

---

## METADATA & SEO

### App Metadata
```typescript
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Willian Cardoso - Senior Product Designer',
    template: '%s | Willian Cardoso',
  },
  description: '8 years at IBM designing enterprise B2B platforms for licensing, billing, and compliance. Available for international remote opportunities.',
  keywords: [
    'Product Designer',
    'UX Designer',
    'Enterprise Design',
    'B2B SaaS',
    'Design Leadership',
    'IBM',
  ],
  authors: [{ name: 'Willian Cardoso' }],
  creator: 'Willian Cardoso',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://willianncardoso.github.io/portfolio/',
    title: 'Willian Cardoso - Senior Product Designer',
    description: '8 years designing enterprise B2B platforms at IBM. Available for international remote opportunities.',
    siteName: 'Willian Cardoso Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Willian Cardoso - Senior Product Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Willian Cardoso - Senior Product Designer',
    description: '8 years designing enterprise B2B platforms at IBM.',
    images: ['/twitter-card.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
```

### Page-specific Metadata
```typescript
// app/cases/cortex/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cortex S360: Smart Field Service Dispatch',
  description: 'Redesigned command center tool that reduced operator stress and delivered BRL 3M/year in cost savings.',
  openGraph: {
    images: ['/images/cortex/og-cortex.jpg'],
  },
}
```

---

## CONTENT GUIDELINES

### Homepage Structure (já existente, refinar)
```typescript
// app/page.tsx
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects /> {/* 2 cards: Cortex + ESW */}
      <WhatIBring /> {/* 4 cards de skills */}
      <AboutPreview /> {/* Brief sobre mim */}
      <Contact />
    </>
  )
}
```

### Case Study Structure (já existente, refinar)
```typescript
// app/cases/[slug]/page.tsx
export default function CaseStudyPage() {
  return (
    <article className="case-study">
      <CaseStudyHeader />      {/* Breadcrumb, tags, title, meta */}
      <HeroImage />            {/* Full-width hero image */}
      <Container size="narrow">
        <Overview />           {/* Brief overview */}
        <Challenge />          {/* The problem */}
        <Approach />           {/* Process: Discovery, Research, Design */}
        <Solution />           {/* Key features, screenshots */}
        <Impact />             {/* Metrics, quotes */}
        <Learnings />          {/* Reflections */}
      </Container>
      <CaseStudyNavigation />  {/* Next/Previous */}
    </article>
  )
}
```

---

## IMAGE OPTIMIZATION CHECKLIST

### Para todas as imagens:
- [ ] Converter para WebP (Next.js faz automaticamente se unoptimized: false)
- [ ] Especificar width/height para evitar layout shift
- [ ] Usar `sizes` attribute para responsive loading
- [ ] `priority={true}` apenas para hero images
- [ ] `loading="lazy"` para demais imagens (default no Next.js)
- [ ] Alt text descritivo em todas

### Tamanhos recomendados:
- Hero images: 1600x900px
- Project cards: 1200x675px (16:9)
- Screenshots: 1200px width (altura variável)
- Thumbnails: 800x450px

---

## QUALITY CHECKLIST

### Performance
- [ ] Lighthouse Performance > 90
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.5s
- [ ] Image optimization (Next.js Image)
- [ ] Lazy loading implementado
- [ ] Font optimization (next/font)

### Accessibility
- [ ] Lighthouse Accessibility > 95
- [ ] Semantic HTML (header, nav, main, article, footer)
- [ ] Skip link funcionando
- [ ] Keyboard navigation completa
- [ ] Focus states visíveis
- [ ] Alt text em todas imagens
- [ ] ARIA labels onde necessário
- [ ] Color contrast > 4.5:1 (texto)
- [ ] Headings hierarchy (h1, h2, h3)

### Responsiveness
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Testado em iOS Safari
- [ ] Testado em Android Chrome
- [ ] Testado em desktop (Chrome, Safari, Firefox)

### SEO
- [ ] Lighthouse SEO > 90
- [ ] Meta tags (title, description)
- [ ] Open Graph tags (LinkedIn preview)
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] Structured data (JSON-LD) - opcional

### Cross-Browser
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

### Content
- [ ] No typos
- [ ] Consistent terminology
- [ ] All links work
- [ ] Portfolio link visible
- [ ] Contact info current
- [ ] Case studies complete

---

## REFINEMENT PRIORITIES

### HIGH PRIORITY (Fazer primeiro):
1. **Visual Polish**
   - Melhorar espaçamento (whitespace generoso)
   - Typography hierarchy clara
   - Cores consistentes (usar design system)
   - Shadows sutis (elevação visual)
   - Border radius consistente

2. **Performance**
   - Image optimization (Next.js Image em tudo)
   - Lazy loading
   - Font optimization
   - Lighthouse audit > 90

3. **Microinteractions**
   - Hover states suaves
   - Transitions bem definidas
   - Loading states
   - Focus states visíveis

4. **Responsiveness**
   - Mobile-first
   - Breakpoints consistentes
   - Touch-friendly (botões > 44px)
   - Typography scaling

### MEDIUM PRIORITY:
5. **Accessibility**
   - Skip link
   - ARIA labels
   - Keyboard navigation
   - Focus management

6. **Content Polish**
   - Alt texts descritivos
   - Captions nas imagens
   - Quotes destacadas
   - Metrics bem formatadas

### LOW PRIORITY (Nice-to-have):
7. **Advanced Features**
   - Scroll animations
   - Image lightbox
   - Progress indicator
   - Dark mode (opcional)

---

## PROJECT-SPECIFIC NOTES

### Cortex S360
- **Hero image:** `cortex-dashboard.png` (dashboard com cores pastéis)
- **Destaque:** BRL 3M/year savings
- **Unique angle:** Pastel colors para reduzir stress
- **Key metric cards:** 💰 Savings, ⏱️ Speed, 😊 Satisfaction, 👥 Users

### ESW/CESW
- **Hero image:** `esw-figma-overview.png` (wizard overview)
- **Destaque:** 40% ticket reduction, onboarding 1 week → hours
- **Unique angle:** Projeto falido que você ressuscitou
- **Key metric cards:** 📉 Tickets, ⏱️ Onboarding, ✅ Migration, 🚀 Adoption

---

## DEPLOYMENT (GitHub Pages)

### Build Script
```json
// package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export",
    "deploy": "npm run export && touch out/.nojekyll && gh-pages -d out -t true"
  }
}
```

### GitHub Actions (opcional)
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## FINAL NOTES

**Este portfolio já está 70% pronto. O foco agora é:**
1. **Polish visual** (espaçamento, cores, shadows)
2. **Performance** (Lighthouse 90+)
3. **Microinteractions** (hover states, transitions)
4. **Accessibility** (keyboard nav, focus states)

**Não precisa:**
- ❌ Reescrever do zero
- ❌ Mudar stack (Next.js está ótimo)
- ❌ Criar novos components complexos

**Precisa:**
- ✅ Refinar estilos existentes
- ✅ Otimizar imagens
- ✅ Adicionar microinterações
- ✅ Garantir acessibilidade
- ✅ Lighthouse audit

**Deadline:** Sábado (01/02) - foco em polish rápido e efetivo! 🚀
