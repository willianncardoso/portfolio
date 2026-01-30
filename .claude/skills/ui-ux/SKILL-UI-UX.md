# UI/UX Portfolio Optimization Skill

## Purpose
This skill helps optimize UI/UX for Next.js portfolios built with Tailwind CSS. It focuses on design systems, color palettes, typography hierarchy, spacing consistency, and accessibility.

## When to Use This Skill
- Fixing invisible or poorly styled components
- Creating cohesive color palettes
- Improving visual hierarchy
- Optimizing case study presentations
- Enhancing user experience and accessibility

## Core Principles

### 1. Color System
**Modern, professional palettes for product designers:**

```typescript
// tailwind.config.ts - Modern Purple/Blue System
colors: {
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',  // Main brand
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  accent: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',  // Accent/CTA
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  }
}
```

**Alternative: Warm Professional**
```typescript
colors: {
  primary: {
    500: '#f59e0b',  // Amber
    600: '#d97706',
  },
  accent: {
    500: '#10b981',  // Emerald
    600: '#059669',
  }
}
```

### 2. Typography Scale
```typescript
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  'base': ['1rem', { lineHeight: '1.5rem' }],
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
}
```

### 3. Spacing System
Use consistent spacing multipliers (4px base):
- `space-2` = 8px (tight)
- `space-4` = 16px (default)
- `space-6` = 24px (medium)
- `space-8` = 32px (large)
- `space-12` = 48px (section padding)
- `space-16` = 64px (hero padding)
- `space-24` = 96px (section gaps)

### 4. Component Patterns

#### Buttons
```tsx
// Primary CTA
<button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
  View Work
</button>

// Secondary
<button className="border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-6 py-3 rounded-lg font-medium transition-all">
  LinkedIn
</button>

// Ghost (for dark backgrounds)
<button className="border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-medium backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all">
  View Projects
</button>
```

#### Cards
```tsx
<div className="group bg-white rounded-2xl border border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-xl overflow-hidden">
  {/* Image container */}
  <div className="aspect-video relative overflow-hidden bg-gray-100">
    <Image
      src={imagePath}
      alt={title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>
  
  {/* Content */}
  <div className="p-6">
    <Badge className="mb-3">{category}</Badge>
    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
</div>
```

#### Hero Overlays (Fix for blur issue)
```tsx
{/* WRONG - Too dark overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90" />

{/* RIGHT - Balanced overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

{/* OR - No overlay, use text shadow */}
<h1 className="text-white drop-shadow-2xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_60%)]">
  {title}
</h1>
```

### 5. Accessibility Checklist
- [ ] Contrast ratio ≥ 4.5:1 for normal text
- [ ] Contrast ratio ≥ 3:1 for large text (18px+)
- [ ] Focus states visible on all interactive elements
- [ ] Alt text on all images
- [ ] Semantic HTML (h1, h2, nav, etc.)
- [ ] Keyboard navigation works

---

## Common Fixes

### Fix 1: Invisible White Buttons
**Problem:** Ghost buttons on white background
```tsx
// BEFORE (invisible)
<button className="border-2 border-white text-white ...">

// AFTER (visible)
<button className="border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600 ...">
```

### Fix 2: Dark Overlays on Images
**Problem:** Images too dark to see
```tsx
// BEFORE (too dark)
<div className="bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90" />

// AFTER (balanced)
<div className="bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
```

### Fix 3: Invisible Cards
**Problem:** Cards rendering but not visible
```tsx
// Check for:
1. Missing background color: add `bg-white`
2. White text on white bg: use `text-gray-900`
3. Z-index issues: ensure parent has `relative`
4. Opacity issues: remove any `opacity-0`
```

### Fix 4: Poor Visual Hierarchy
```tsx
// Page Title
<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">

// Section Title  
<h2 className="text-4xl font-bold text-gray-900 mb-6">

// Card Title
<h3 className="text-2xl font-bold text-gray-900 mb-3">

// Body Text
<p className="text-base text-gray-600 leading-relaxed">
```

---

## Debugging Workflow

### Step 1: Identify Issue
```bash
# Check component styling
cat components/ComponentName.tsx | grep className

# Look for common problems:
# - Missing bg-* classes
# - White text on white (text-white on light bg)
# - Missing relative on parent of absolute child
# - Overly dark overlays (opacity > 70%)
```

### Step 2: Apply Fix
```typescript
// Before applying changes, ensure:
1. Color has sufficient contrast
2. Interactive elements have hover states
3. Transitions are smooth (duration-300)
4. Spacing is consistent with design system
```

### Step 3: Validate
```bash
# Build and check
npm run build

# Visual check:
# - Can you read all text?
# - Are all buttons visible?
# - Do hover states work?
# - Is hierarchy clear?
```

---

## Complete Example: Hero Section

```tsx
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Balanced overlay - not too dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium">
            Open to opportunities
          </span>
        </div>

        {/* Title with text shadow for readability */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
          I design enterprise software that people actually want to use.
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
          7+ years designing B2B SaaS products at IBM
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary - stands out */}
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            View Work
          </button>
          
          {/* Secondary - visible on dark background */}
          <button className="border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all">
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
}
```

---

## Color Palette Generator Prompt

When user wants a new palette, use this:

```
Generate a modern, professional color palette for a product designer portfolio:

1. Primary color (brand): [user preference or suggest]
2. Accent color (CTA): complementary to primary
3. Neutral grays: 50-900 scale
4. Success: green for positive actions
5. Warning: amber for caution
6. Error: red for errors

Requirements:
- WCAG AA compliant (4.5:1 contrast)
- Works on both light and dark backgrounds
- Suitable for B2B/enterprise context
- Modern but not trendy (timeless)

Output as Tailwind config format.
```

---

## Quick Fixes Summary

| Problem | Solution |
|---------|----------|
| Invisible white button | Use `border-gray-300 text-gray-700` |
| Dark overlay on images | Reduce opacity to 20-40% |
| Low contrast text | Ensure 4.5:1 ratio, use gray-600+ |
| Cards not showing | Add `bg-white`, check z-index |
| Weak hierarchy | Use consistent font scale (4xl → 2xl → base) |
| Poor hover states | Add `hover:` variants + transitions |

---

## Best Practices

1. **Mobile First:** Design for small screens, enhance for large
2. **Consistent Spacing:** Use 4px increments (space-4, space-6, space-8)
3. **Color Purpose:** Primary=brand, Accent=CTA, Gray=content
4. **Transitions:** Keep under 300ms for snappy feel
5. **Focus States:** Always visible for accessibility
6. **Loading States:** Show skeleton or placeholder
7. **Error States:** Clear, actionable messages

---

## Resources

- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Realtime Colors](https://www.realtimecolors.com/) - Preview palettes
- [Coolors](https://coolors.co/) - Generate palettes

---

## Output Format

When applying fixes, show:
1. ✅ What was wrong
2. 🔧 What was changed
3. 💡 Why it's better
4. 📸 Expected visual result

Example:
```
✅ Problem: White "View Work" button invisible on white background
🔧 Changed: border-white → border-gray-300, text-white → text-gray-700
💡 Why: Sufficient contrast (6.3:1) while maintaining clean aesthetic
📸 Result: Button now clearly visible with hover state
```
