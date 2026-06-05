# 11 — Codex / Claude Code Master Prompt for Website Design Upgrade

Copy this prompt into Codex or Claude Code.

---

## Master Prompt

You are working on the AI Workflows company website.

Website goal:
Make `ai-workflows.cloud` look like a premium AI automation and business software company website for Indian SMBs.

Current brand direction:
AI Workflows builds smart websites, WhatsApp automation, AI workflows, dashboards, and custom business software for restaurants, cyber cafés, distributors, clinics, schools, shops, and local businesses.

Important:
Do not destroy existing content, links, sections, or functionality. Improve design, structure, responsiveness, animation, and conversion.

### Main design style

Use:
- Dark AI SaaS theme
- Purple/blue/cyan/gold gradients
- Glassmorphism cards
- Premium spacing
- Modern typography
- Subtle animation
- Strong CTAs
- Mobile-first responsiveness

Avoid:
- Over-animation
- Too many emojis
- Random colors
- Low contrast text
- Crowded sections
- Breaking existing routes
- Removing important project links

### Recommended fonts

Use:
- Heading: Sora or Plus Jakarta Sans
- Body: Inter
- Hindi fallback: Noto Sans Devanagari if needed

Use `next/font` if this is a Next.js app.

### Navigation improvement

Current nav is crowded. Use this final nav:

- Services
- Industries
- Demos
- Projects
- Process
- Pricing
- Contact
- Book Free Demo CTA

If there is a `Live Links` section, rename it to `Demos` but keep the existing link targets working.

### Hero redesign

Hero headline:

Smart Websites &
AI Automation
for Growing Businesses

Subheadline:

We build premium websites, dashboards, WhatsApp automation, and AI workflows that help local businesses save time, manage customers, and grow faster.

CTA buttons:

- Book Free Demo
- View Live Projects

Trust line:

Built for restaurants, cyber cafés, distributors, clinics, schools, shops, and local SMBs.

Right side hero visual:
Create 4 floating glass cards:
1. Business Website — Live in 7 days
2. WhatsApp Bot — Save 4 hrs/day
3. Dashboard — Track orders & leads
4. AI Workflow — Reduce manual work

### Sections to improve

Improve these homepage sections:

1. Header
2. Hero
3. Services
4. Industries
5. Demos / Live Links
6. Projects
7. Proof
8. Process
9. Team
10. Pricing
11. Contact
12. Footer

### Components to create if not already present

Create reusable components:

- Container
- SectionHeading
- Button
- GlassCard
- ServiceCard
- IndustryCard
- ProjectCard
- MetricCard
- PricingCard
- CTASection
- MobileNav

### Animation

Use Framer Motion only where useful.

Animations:
- Hero fade-up stagger
- Scroll reveal sections
- Card hover lift
- Floating hero cards
- Subtle CTA glow
- Optional metric counter

Must respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

### Styling tokens

Use consistent tokens:

```css
--bg-main: #05050A;
--bg-section: #080812;
--text-primary: #F8FAFC;
--text-secondary: #CBD5E1;
--text-muted: #94A3B8;
--purple: #8B5CF6;
--violet: #A855F7;
--blue: #3B82F6;
--cyan: #22D3EE;
--gold: #FBBF24;
```

### Pricing section

Use 3 pricing cards:

1. Starter Website — Starting from ₹9,999
2. Business Automation — Starting from ₹24,999
3. Custom Software — Starting from ₹49,999+

Add note:
Final pricing depends on features, timeline, integrations, and support requirements.

### Mobile requirements

- No horizontal scroll
- Header becomes mobile drawer
- Hero becomes one column
- CTA buttons full width
- Cards become one column
- Text remains readable
- Animations reduce on mobile

### SEO

Homepage title:
AI Workflows | Smart Websites, AI Automation & Business Software in India

Meta description:
AI Workflows builds premium websites, WhatsApp automation, dashboards, and AI workflow software for restaurants, cyber cafes, distributors, clinics, schools, and local businesses in India.

### Task execution process

Before editing:
1. Inspect project structure.
2. Identify framework and styling method.
3. Find homepage file.
4. Find global CSS/theme file.
5. Check package.json.

Then implement:
1. Typography setup.
2. Global design tokens.
3. Header redesign.
4. Hero redesign.
5. Card system.
6. Section improvements.
7. Animation improvements.
8. Mobile responsiveness.
9. SEO metadata.
10. Final QA.

After implementation:
Run:

```bash
npm run lint
npm run build
```

If build fails, fix errors.

### Final response required from you

After completing, report:

- Files changed
- Components created
- Sections improved
- Animations added
- Mobile fixes added
- SEO updates added
- Build/lint result
- Remaining recommended improvements

Do not skip QA.

---

## Phase-by-phase prompts

### Phase 1 prompt — audit only

```text
Read the current project structure and homepage code. Do not edit anything yet. Tell me:
1. Framework and styling setup
2. Main homepage file
3. Global CSS/theme files
4. Components already available
5. Sections currently present
6. Best safe plan to upgrade design without breaking existing content
```

### Phase 2 prompt — design tokens and fonts

```text
Implement the AI Workflows design tokens, font system, base typography, section spacing, button styles, glass card styles, and responsive container system. Do not redesign all sections yet. Keep changes safe and reusable.
```

### Phase 3 prompt — header and hero

```text
Redesign only the header and hero section using the AI Workflows premium dark SaaS design. Add sticky glass navbar, improved nav labels, mobile menu, new hero headline/subheadline/CTAs, and floating hero cards with subtle animation. Do not change lower sections yet.
```

### Phase 4 prompt — cards and sections

```text
Upgrade Services, Industries, Demos/Live Links, Projects, Proof, Process, Team, Pricing, Contact, and Footer using reusable card components, section headings, consistent spacing, and responsive layouts. Preserve all existing links and content meaning.
```

### Phase 5 prompt — animation and final polish

```text
Add subtle Framer Motion animations: hero stagger fade-up, scroll reveal, card hover lift, floating hero cards, and CTA glow. Add reduced-motion support. Then test mobile responsiveness, fix spacing, and run lint/build.
```

