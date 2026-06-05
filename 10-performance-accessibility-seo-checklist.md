# 10 — Performance, Accessibility, and SEO Checklist

## Goal

The website should look premium but still load fast and rank better.

## Performance rules

### 1. Optimize images

Use:

- WebP or AVIF
- Proper image size
- Lazy loading below the fold
- Next.js Image component if available

```tsx
import Image from "next/image";

<Image
  src="/images/demo-restaurant.webp"
  alt="Restaurant automation dashboard demo"
  width={1200}
  height={800}
  priority={false}
/>
```

Hero logo or important image can use `priority`.

### 2. Avoid heavy animation

Do not animate:

- Large background images
- Every card continuously
- Multiple huge blur layers on mobile

### 3. Reduce JavaScript

Only use Framer Motion where needed.

For simple hover effects, use CSS.

### 4. Font performance

Use `next/font` with `display: swap`.

Avoid loading many font weights.

Recommended weights:

- 400
- 500
- 600
- 700
- 800

### 5. Lighthouse target

Target:

- Performance: 85+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

## Accessibility checklist

### Color contrast

- White text on dark background should be strong.
- Muted text should not be too dark.
- Buttons need visible focus state.

### Focus state

```css
:focus-visible {
  outline: 2px solid #A855F7;
  outline-offset: 4px;
}
```

### Alt text

Every image must have meaningful alt text.

Bad:

```text
image
```

Good:

```text
AI Workflows restaurant ordering dashboard screenshot
```

### Buttons and links

Use clear text.

Bad:

```text
Click here
```

Good:

```text
View Restaurant Demo
```

### Reduced motion

Add:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

## SEO checklist

### Homepage title

```text
AI Workflows | Smart Websites, AI Automation & Business Software in India
```

### Homepage meta description

```text
AI Workflows builds premium websites, WhatsApp automation, dashboards, and AI workflow software for restaurants, cyber cafes, distributors, clinics, schools, and local businesses in India.
```

### H1

Only one H1:

```text
Smart Websites & AI Automation for Growing Businesses
```

### H2 sections

Use clear H2s:

- Services built for business growth
- Industries we help
- Live demos and projects
- Our delivery process
- Transparent pricing
- Book a free demo

### Local SEO keywords

Use naturally:

- AI automation company in Bihar
- website development in Bihar
- business automation in India
- restaurant website and ordering system
- cyber cafe AI form filler
- medical distributor software
- WhatsApp automation for business
- custom dashboard development

### Schema markup

Add Organization schema.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI Workflows",
  "url": "https://ai-workflows.cloud",
  "description": "Smart websites, AI automation, dashboards, and custom business software for Indian businesses."
}
```

Add Service schema for main services if possible.

## Conversion checklist

- CTA above the fold.
- Contact details visible.
- Demo links visible.
- Pricing starting range visible.
- Trust/proof section added.
- Mobile CTA easy to tap.
- Each project card has a next step.

## Technical QA commands

If using Next.js:

```bash
npm run lint
npm run build
npm run start
```

Check:

```bash
npm run build
```

No TypeScript errors.  
No broken imports.  
No hydration errors.  
No console errors.

## Manual browser QA

Test:

- Chrome desktop
- Chrome mobile responsive view
- Android phone
- Slow 4G mode in dev tools

