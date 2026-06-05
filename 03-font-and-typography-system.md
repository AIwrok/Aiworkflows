# 03 — Font and Typography System

## Recommended fonts

Use Google Fonts or local font imports.

### Best option

- Heading font: `Sora`
- Body font: `Inter`

Why:

- `Sora` gives modern AI/startup feeling.
- `Inter` is clean and highly readable.

### Alternative option

- Heading font: `Plus Jakarta Sans`
- Body font: `Inter`

### Hindi support

For Hindi/Hinglish content, add:

- `Noto Sans Devanagari`

## Next.js font setup example

If using Next.js App Router:

```tsx
import { Inter, Sora, Noto_Sans_Devanagari } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
});
```

Use in root layout:

```tsx
<body className={`${inter.variable} ${sora.variable} ${notoSansDevanagari.variable}`}>
```

## CSS font tokens

```css
:root {
  --font-heading: var(--font-sora), var(--font-devanagari), sans-serif;
  --font-body: var(--font-inter), var(--font-devanagari), sans-serif;
}
```

```css
body {
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  letter-spacing: -0.04em;
}
```

## Typography scale

### Desktop

```css
.text-display {
  font-size: clamp(56px, 7vw, 92px);
  line-height: 0.95;
  letter-spacing: -0.07em;
  font-weight: 800;
}

.text-h1 {
  font-size: clamp(44px, 5vw, 72px);
  line-height: 1;
  letter-spacing: -0.06em;
  font-weight: 800;
}

.text-h2 {
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.05;
  letter-spacing: -0.05em;
  font-weight: 750;
}

.text-h3 {
  font-size: clamp(24px, 2.5vw, 34px);
  line-height: 1.15;
  letter-spacing: -0.035em;
  font-weight: 700;
}

.text-body-large {
  font-size: 20px;
  line-height: 1.65;
  font-weight: 400;
}

.text-body {
  font-size: 16px;
  line-height: 1.7;
  font-weight: 400;
}

.text-small {
  font-size: 14px;
  line-height: 1.55;
}
```

### Mobile

```css
@media (max-width: 768px) {
  .text-display {
    font-size: 44px;
    line-height: 1;
  }

  .text-h1 {
    font-size: 38px;
  }

  .text-h2 {
    font-size: 32px;
  }

  .text-body-large {
    font-size: 17px;
  }
}
```

## Hero headline recommendation

Current:

`Smart Websites & AI Automation for Modern Businesses`

Improved:

```text
Smart Websites &
AI Automation
for Growing Businesses
```

Reason:

- Shorter line breaks.
- More emotional.
- Easier to read on mobile.
- "Growing Businesses" feels more client-focused.

## Subheadline recommendation

```text
We build premium websites, dashboards, WhatsApp automation, and AI workflows that help local businesses save time, manage customers, and grow faster.
```

## CTA typography

```css
.btn-primary {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.01em;
}
```

## Navbar typography

```css
.nav-link {
  font-size: 14px;
  font-weight: 650;
  letter-spacing: -0.01em;
}
```

## Text hierarchy rules

- One big headline per section.
- One paragraph under headline.
- Max 2 CTA buttons in hero.
- Card title should be 18px to 22px.
- Card description should be 14px to 16px.
- Avoid paragraphs longer than 3 lines.

## Professional copy style

Use this structure:

```text
Problem → Solution → Business Result
```

Example:

```text
Restaurants lose orders when customers wait on calls. Our ordering system lets customers browse menu, place orders, book tables, and track status from one digital flow.
```

