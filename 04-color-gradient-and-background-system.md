# 04 — Color, Gradient, and Background System

## Core color palette

Use this palette consistently.

```css
:root {
  --bg-main: #05050A;
  --bg-section: #080812;
  --bg-card: rgba(255, 255, 255, 0.055);
  --bg-card-strong: rgba(255, 255, 255, 0.085);

  --text-primary: #F8FAFC;
  --text-secondary: #CBD5E1;
  --text-muted: #94A3B8;

  --border-soft: rgba(255, 255, 255, 0.10);
  --border-strong: rgba(255, 255, 255, 0.18);

  --purple: #8B5CF6;
  --violet: #A855F7;
  --blue: #3B82F6;
  --cyan: #22D3EE;
  --gold: #FBBF24;
  --green: #22C55E;
  --red: #EF4444;
}
```

## Primary gradients

### Main brand gradient

```css
--gradient-brand: linear-gradient(135deg, #6366F1 0%, #A855F7 45%, #F59E0B 100%);
```

### AI blue-purple gradient

```css
--gradient-ai: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #D946EF 100%);
```

### Warm CTA gradient

```css
--gradient-cta: linear-gradient(135deg, #8B5CF6 0%, #A855F7 55%, #F59E0B 100%);
```

### Card hover border gradient

```css
--gradient-border: linear-gradient(135deg, rgba(139,92,246,.9), rgba(34,211,238,.6), rgba(251,191,36,.7));
```

## Background system

### Main page background

```css
body {
  background:
    radial-gradient(circle at 20% 10%, rgba(139, 92, 246, 0.22), transparent 30%),
    radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.12), transparent 28%),
    radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.10), transparent 35%),
    #05050A;
  color: var(--text-primary);
}
```

## Grid overlay background

Add subtle grid only on hero and selected sections.

```css
.bg-grid {
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(to bottom, black, transparent 85%);
}
```

## Noise overlay

Use a subtle noise overlay to avoid flat digital look.

```css
.noise::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("/noise.png");
  mix-blend-mode: overlay;
}
```

If no noise image exists, skip this.

## Glass card style

```css
.glass-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035));
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow:
    0 24px 80px rgba(0,0,0,0.35),
    inset 0 1px 0 rgba(255,255,255,0.08);
  backdrop-filter: blur(18px);
  border-radius: 28px;
}
```

## Gradient text

```css
.gradient-text {
  background: linear-gradient(135deg, #7C3AED, #A855F7, #FBBF24);
  -webkit-background-clip: text;
  color: transparent;
}
```

## CTA button style

```css
.btn-gradient {
  background: linear-gradient(135deg, #7C3AED, #A855F7, #F59E0B);
  color: white;
  border-radius: 999px;
  box-shadow: 0 14px 36px rgba(139, 92, 246, 0.38);
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 48px rgba(139, 92, 246, 0.48);
}
```

## Secondary button

```css
.btn-secondary {
  background: rgba(255,255,255,0.06);
  color: white;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 999px;
  backdrop-filter: blur(12px);
}
```

## Status colors

Use these for project cards and proof metrics.

```css
.status-live {
  color: #22C55E;
  background: rgba(34, 197, 94, 0.12);
  border-color: rgba(34, 197, 94, 0.25);
}

.status-demo {
  color: #22D3EE;
  background: rgba(34, 211, 238, 0.12);
  border-color: rgba(34, 211, 238, 0.25);
}

.status-building {
  color: #FBBF24;
  background: rgba(251, 191, 36, 0.12);
  border-color: rgba(251, 191, 36, 0.25);
}
```

## Background usage by section

| Section | Background |
|---|---|
| Header | Glass black with blur |
| Hero | Dark + radial orbs + grid |
| Services | Dark section + glass cards |
| Industries | Slightly lighter dark |
| Projects | Product screenshot cards |
| Proof | Metric gradient cards |
| Process | Timeline with glowing line |
| Team | Profile cards with role tags |
| Pricing | Strong card contrast |
| Contact | Gradient CTA panel |

## Important warning

Do not make every section glow. Premium design uses controlled glow.

Use glow mainly in:

- Hero
- CTA
- Active card hover
- Important proof numbers

