# 07 — Animation and Motion System

## Goal

Make the website dynamic and premium without making it slow or childish.

## Recommended library

Use `framer-motion` if the project is React/Next.js.

Install:

```bash
npm install framer-motion
```

## Animation principles

### Use animations for meaning

Good animation:

- Shows section appearing
- Shows card interactivity
- Highlights CTA
- Makes hero feel alive
- Guides user down the page

Bad animation:

- Random bouncing
- Too many moving elements
- Fast flashing
- Heavy 3D effects
- Animating all text every time

## Motion timing

Use these standards:

```ts
const motionTimings = {
  fast: 0.18,
  normal: 0.35,
  slow: 0.65,
};
```

Use easing:

```ts
const smoothEase = [0.16, 1, 0.3, 1];
```

## 1. Page load hero animation

### Behavior

- Badge fades up first.
- Headline fades up.
- Subheadline fades up.
- Buttons fade up.
- Right hero cards float in.

### Framer Motion variants

```tsx
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
```

Usage:

```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  <motion.p variants={fadeUp}>Bihar & India's AI Business Partner</motion.p>
  <motion.h1 variants={fadeUp}>Smart Websites & AI Automation</motion.h1>
  <motion.p variants={fadeUp}>We build premium websites...</motion.p>
</motion.div>
```

## 2. Scroll reveal animation

Use for sections.

```tsx
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  Section content
</motion.div>
```

## 3. Card hover animation

Use for service, industry, project, pricing cards.

```tsx
<motion.div
  whileHover={{ y: -8, scale: 1.01 }}
  transition={{ duration: 0.22 }}
  className="glass-card"
>
  Card content
</motion.div>
```

CSS hover:

```css
.card-hover {
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    background 220ms ease,
    box-shadow 220ms ease;
}

.card-hover:hover {
  transform: translateY(-6px);
  border-color: rgba(168, 85, 247, 0.45);
  box-shadow: 0 24px 80px rgba(139, 92, 246, 0.22);
}
```

## 4. Floating hero cards

Use slow movement.

```tsx
<motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Hero card
</motion.div>
```

Use different durations:

- Card 1: 5s
- Card 2: 6.5s
- Card 3: 7s

## 5. Animated gradient orbs

CSS:

```css
.orb {
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 999px;
  filter: blur(80px);
  opacity: 0.24;
  pointer-events: none;
  animation: orbFloat 12s ease-in-out infinite;
}

.orb-purple {
  background: #8B5CF6;
}

.orb-cyan {
  background: #22D3EE;
  animation-delay: -4s;
}

@keyframes orbFloat {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(24px, -28px, 0) scale(1.08);
  }
}
```

## 6. CTA pulse glow

Use very subtle pulse only on primary CTA.

```css
.cta-glow {
  position: relative;
}

.cta-glow::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  background: linear-gradient(135deg, #8B5CF6, #A855F7, #F59E0B);
  opacity: 0.25;
  filter: blur(14px);
  z-index: -1;
  animation: ctaGlow 2.8s ease-in-out infinite;
}

@keyframes ctaGlow {
  0%, 100% { opacity: 0.18; transform: scale(0.98); }
  50% { opacity: 0.34; transform: scale(1.04); }
}
```

## 7. Counter animation

Use for proof metrics.

Example metrics:

- `4+ hrs/day saved`
- `7 days launch`
- `24/7 automation`
- `20+ project ideas`

Implementation suggestion:

Use simple intersection observer or `framer-motion` count animation.

## 8. Process timeline animation

Timeline line can animate on scroll:

```css
.timeline-line {
  background: linear-gradient(to bottom, #8B5CF6, #22D3EE, #F59E0B);
}
```

Each step fades in one by one.

## 9. Mobile animation rules

On mobile:

- Reduce parallax.
- Reduce floating card movement.
- Avoid heavy background animations.
- Keep scroll reveal simple.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

## 10. Animation checklist

- Page loads smoothly.
- No animation delays over 1 second.
- No repeated fast bouncing.
- No text moving while user is reading.
- Mobile remains fast.
- Respects `prefers-reduced-motion`.
- Animations support conversion, not decoration only.

