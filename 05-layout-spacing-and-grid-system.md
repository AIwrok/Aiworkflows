# 05 — Layout, Spacing, and Grid System

## Container width

Use one consistent max width.

```css
.container {
  width: min(100% - 32px, 1200px);
  margin-inline: auto;
}
```

For wider visual sections:

```css
.container-wide {
  width: min(100% - 32px, 1360px);
  margin-inline: auto;
}
```

## Section spacing

Desktop:

```css
.section {
  padding-block: 96px;
}
```

Large hero:

```css
.hero {
  min-height: calc(100vh - 84px);
  padding-block: 96px;
}
```

Mobile:

```css
@media (max-width: 768px) {
  .section {
    padding-block: 64px;
  }

  .hero {
    min-height: auto;
    padding-block: 64px;
  }
}
```

## Grid system

### Two-column hero

```css
.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 64px;
  align-items: center;
}
```

Mobile:

```css
@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
```

## Services grid

```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

Mobile:

```css
@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
```

## Project grid

```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}
```

Mobile:

```css
@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
```

## Pricing grid

```css
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
}
```

Mobile:

```css
@media (max-width: 900px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
```

## Header layout

```css
.header {
  height: 84px;
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(5, 5, 10, 0.72);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

## Navbar improvement

Current navbar has many items. Keep all links, but reduce visual noise.

Desktop structure:

```text
Logo | Services | Industries | Projects | Proof | Process | Pricing | Contact | Book Free Demo
```

Move `Live Links` into a dropdown or rename to `Demos`.

Better nav:

```text
Services
Industries
Demos
Projects
Process
Pricing
Contact
```

## Section heading layout

Use this for every section:

```tsx
<div className="section-heading">
  <p className="eyebrow">Services</p>
  <h2>Everything your business needs to go digital</h2>
  <p>From websites to dashboards and AI automation, we build systems that save time and increase sales.</p>
</div>
```

CSS:

```css
.section-heading {
  max-width: 780px;
  margin-bottom: 48px;
}

.section-heading.center {
  text-align: center;
  margin-inline: auto;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #A78BFA;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

## Card spacing

```css
.card {
  padding: 28px;
  border-radius: 28px;
}
```

For mobile:

```css
@media (max-width: 640px) {
  .card {
    padding: 22px;
    border-radius: 22px;
  }
}
```

## Visual rhythm rules

- Do not put sections too close.
- Keep heading and cards separated by at least `40px`.
- Keep cards in equal height where possible.
- Keep icon, title, text, CTA aligned.
- Use max-width on paragraphs so text does not stretch too much.

## Above-the-fold checklist

The first screen should contain:

- Logo
- Clean navigation
- Big benefit headline
- Subheadline
- Primary CTA
- Secondary CTA
- Trust line
- Dynamic hero visual

