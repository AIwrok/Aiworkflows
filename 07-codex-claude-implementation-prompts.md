# Codex / Claude Implementation Prompts

## How to use this file

Copy one prompt at a time into Codex or Claude Code. Do not ask the AI tool to do everything at once. Complete phase-by-phase.

---

# Prompt 1 — Website audit and file mapping

```txt
You are working on the AI Workflows website.

Goal:
Audit the current project structure and identify where the homepage, sections, routing, components, styles, and contact form are implemented.

Tasks:
1. Inspect the codebase.
2. Identify the main homepage file.
3. Identify reusable section components.
4. Identify routing method.
5. Identify contact form implementation.
6. Identify where project cards and pricing cards are defined.
7. Do not change code yet.
8. Create a short report named WEBSITE_STRUCTURE_AUDIT.md with:
   - Files inspected
   - Important components
   - Current routing
   - Where to add new pages
   - Risks before editing
   - Recommended implementation order

Output:
Only create/update WEBSITE_STRUCTURE_AUDIT.md first. Do not redesign yet.
```

---

# Prompt 2 — Add demo CTAs to project cards

```txt
You are improving the AI Workflows website conversion.

Goal:
Add clear demo buttons to each project card without breaking the current design.

Project CTAs:
- Mirch Masala Restaurant Automation → View Restaurant Demo
- AI Form Filler for Cyber Cafés → View Cyber Café Demo
- Medical Distributor Management → View Distributor Demo
- Mera Bazar / Mera Bill → View Local Market Concept

Suggested routes:
- /demo/restaurant
- /demo/cyber-cafe
- /demo/distributor
- /demo/mera-bazar

Tasks:
1. Find the project card section.
2. Add CTA buttons to each project.
3. Use existing design system/classes.
4. Make buttons responsive.
5. If routes do not exist, create simple placeholder pages with:
   - Product name
   - Coming soon / demo under preparation
   - Back to homepage button
   - Contact/Book Free Demo button
6. Test mobile and desktop layout.
7. Update a file named CHANGELOG_WEBSITE_IMPROVEMENTS.md with what changed.

Acceptance criteria:
- Homepage still loads.
- Existing content remains unchanged.
- Each project has a visible CTA.
- No broken links.
```

---

# Prompt 3 — Create product landing pages

```txt
You are building industry-specific landing pages for AI Workflows.

Goal:
Create four landing pages:
1. /restaurant-automation
2. /cyber-cafe-ai-form-filler
3. /medical-distributor-software
4. /local-business-automation

Each page must include:
- Hero section
- Problem section
- Solution section
- Workflow section
- Feature cards
- Proof/demo placeholder section
- Pricing/starting plan section
- FAQ
- Final CTA

Design requirements:
- Match existing AI Workflows branding.
- Mobile-first.
- Premium but simple.
- Use short business-friendly English.
- Avoid too much technical jargon.
- Use reusable components where possible.

CTA:
Primary: Book Free Demo
Secondary: Contact on WhatsApp / See Projects

Acceptance criteria:
- All pages are accessible.
- Pages have responsive layout.
- Header/footer still work.
- No TypeScript/build errors.
- Internal links from homepage/services section are added.
```

---

# Prompt 4 — Improve pricing section

```txt
You are improving the pricing section of AI Workflows website.

Goal:
Make pricing clearer while keeping final quote flexible.

Pricing cards:
1. Starter Website
   - Starts from ₹9,999
   - Best for small businesses, shops, and services
2. Automation Package
   - Starts from ₹24,999
   - Best for restaurants, cafés, and shops
3. Custom Software
   - Starts from ₹49,999
   - Best for distributors and growing businesses

Important:
If pricing numbers are already managed from a config/data file, update that file.
If not, create a clean data structure for pricing.

Add note:
"Final price depends on business workflow, number of pages, dashboard complexity, automation needs, integrations, and support requirement."

Add CTA:
- Book Free Demo
- Discuss Requirement

Acceptance criteria:
- Pricing remains responsive.
- Existing design quality is maintained.
- No misleading guarantee is added.
- Support/third-party charges are clearly shown as separate if needed.
```

---

# Prompt 5 — Add proof section

```txt
You are adding a proof-of-work section to AI Workflows website.

Goal:
Add a homepage section after the projects section.

Section title:
Proof of Work — Real Screens, Real Systems

Subtitle:
A few screens from the systems we design and build for real business workflows.

Create proof cards for:
1. Premium Restaurant Website
2. Owner Dashboard
3. Customer QR Document Upload
4. Operator Review Before Form Fill
5. Distributor Order Control
6. OTP-Based Delivery Confirmation

Each card should have:
- Screenshot/image placeholder
- Title
- Short description
- Business value line
- CTA

Rules:
- Do not use private customer data.
- Use placeholder images if screenshots are not available.
- Layout should be premium and clean.
- Mobile layout should be excellent.

Acceptance criteria:
- Section looks like part of the same website.
- Cards are readable on mobile.
- Images are optimized or placeholders are lightweight.
```

---

# Prompt 6 — Improve contact form and WhatsApp CTA

```txt
You are improving lead generation on AI Workflows website.

Goal:
Improve the contact form and WhatsApp CTA.

Add/adjust fields:
Required:
- Name
- Phone number
- Business type
- Requirement

Optional:
- Business name
- City
- Monthly customer/order volume
- Current biggest problem
- Budget range
- Preferred contact time

Business type options:
- Restaurant / Food Business
- Cyber Café
- Medical Distributor
- Retail / Local Shop
- Service Business
- Clinic / Coaching / Office
- Other

Budget range options:
- Below ₹10,000
- ₹10,000 – ₹25,000
- ₹25,000 – ₹50,000
- ₹50,000+
- Not sure yet

WhatsApp prefilled message:
Hello AI Workflows, I want a free demo for my business.

Business Type:
Business Name:
City:
Current Problem:
Need:

Acceptance criteria:
- Form is still simple.
- Required fields are not too many.
- WhatsApp link opens with prefilled message.
- Mobile layout works.
- Success message appears after submit.
```

---

# Prompt 7 — Add analytics event tracking plan

```txt
You are preparing analytics tracking for AI Workflows website.

Goal:
Add a lightweight analytics event plan first. Do not add any external tracking library until approved.

Create a file:
ANALYTICS_EVENT_PLAN.md

Include events:
- hero_book_demo_click
- hero_see_projects_click
- whatsapp_click
- contact_form_submit
- restaurant_demo_click
- cyber_cafe_demo_click
- distributor_demo_click
- pricing_starter_click
- pricing_automation_click
- pricing_custom_click
- product_page_cta_click

For each event include:
- Event name
- Trigger location
- Data to capture
- Privacy note
- Implementation file/component

Important:
Do not capture sensitive personal data in analytics events.

Acceptance criteria:
- Only create the plan file.
- Do not add tracking code yet.
```

---

# Prompt 8 — Final QA checklist

```txt
You are doing final QA for AI Workflows website improvements.

Goal:
Test the website after improvements.

Check:
1. Homepage loads.
2. Header navigation works.
3. All new product pages work.
4. Demo buttons do not break.
5. Contact form works.
6. WhatsApp CTA opens correctly.
7. Pricing section is readable.
8. Mobile layout is clean.
9. No console errors.
10. No broken links.
11. Images load properly.
12. No private data is visible.
13. SEO titles/descriptions exist for new pages.
14. Build passes.

Create QA_REPORT.md with:
- Passed items
- Failed items
- Screens/pages checked
- Fixes required
- Final recommendation: Ready / Not Ready

Do not mark ready if any CTA or form is broken.
```
