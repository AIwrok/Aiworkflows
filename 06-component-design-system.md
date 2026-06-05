# 06 — Component Design System

## Purpose

This file defines reusable UI components for the AI Workflows website.

Build these components once and use them across the site.

## 1. Header / Navbar

### Requirements

- Sticky top
- Glass blur background
- Logo left
- Nav center/right
- CTA button right
- Mobile menu
- Active section hover underline

### Navbar links

Recommended:

```ts
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Demos", href: "#demos" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];
```

### Design notes

- Logo should not dominate header.
- Use `Book Free Demo` as primary CTA.
- Use hover effect:
  - text becomes white
  - small gradient underline appears

## 2. Button components

### Primary button

Use for main conversion.

Text examples:

- Book Free Demo
- Start Your Project
- Get Business Automation Plan

### Secondary button

Use for exploration.

Text examples:

- View Live Projects
- See Our Process
- Explore Demos

### Button states

Required states:

- default
- hover
- active
- focus-visible
- disabled/loading

## 3. Service card

### Content structure

```ts
type ServiceCard = {
  icon: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  cta?: string;
};
```

### Example

```text
Title: Business Website
Problem: Customers cannot understand your business online.
Solution: We create a fast, premium website with clear pages and CTA.
Result: More trust, leads, and demo bookings.
```

### UI layout

```text
Icon
Title
Problem
Solution
Result tag
Small CTA
```

## 4. Industry card

Use for target business types.

Industries:

- Restaurant
- Cyber Cafe
- Medical Distributor
- Clinic
- School / Coaching
- Local Shop
- Service Business
- Real Estate

Each card should show:

- Industry name
- Common pain
- AI Workflows solution
- Best demo link

## 5. Project/demo card

### Required content

- Project name
- Short use case
- Screenshot/mockup area
- Status badge
- Feature tags
- CTA

Example:

```text
Mirch Masala Restaurant Automation
Website + ordering + table booking + order tracking + owner dashboard.
Status: Live Demo
CTA: View Demo
```

## 6. Proof metric card

Use big numeric highlights.

Examples:

```text
4+ hrs/day saved
7-day website launch
24/7 customer replies
3-step order workflow
```

Design:

- Large gradient number
- Short label
- One-line explanation

## 7. Process timeline

Steps:

1. Business discovery
2. Workflow mapping
3. Design and prototype
4. Website/dashboard build
5. Automation integration
6. Testing and launch
7. Support and improvement

Each timeline item:

- Step number
- Title
- Client benefit
- Deliverable

## 8. Pricing card

Recommended tiers:

### Starter Website

For simple local business website.

### Business Automation

For website + WhatsApp/order/booking workflow.

### Custom Software

For full dashboard, database, admin panel, tracking, AI workflow.

Each card:

- Price range
- Who it is for
- Features
- Timeline
- CTA

## 9. CTA panel

Use before footer.

Copy:

```text
Ready to turn your business idea into a working website or automation system?
Book a free demo and we will show you what can be built for your business.
```

Buttons:

- Book Free Demo
- WhatsApp Us

## 10. Footer

Footer should include:

- Logo
- Short company line
- Services links
- Project links
- Contact details
- Social links
- Copyright

## Component quality checklist

Every component must have:

- Consistent spacing
- Consistent border radius
- Hover state
- Mobile layout
- Accessible contrast
- Clear text hierarchy
- No layout shift
- Reusable data-driven structure

