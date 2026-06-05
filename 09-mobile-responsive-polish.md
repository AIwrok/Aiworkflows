# 09 — Mobile Responsive Polish

## Goal

Most local business owners will open the website on mobile. The mobile version must feel premium and easy.

## Mobile header

### Requirements

- Logo left
- Menu button right
- CTA can be inside menu
- Sticky header
- No crowded nav links

### Mobile drawer links

```text
Services
Industries
Demos
Projects
Process
Pricing
Contact
Book Free Demo
```

## Hero mobile layout

Current desktop hero has big text and right-side cards. On mobile:

1. Show badge
2. Show headline
3. Show subheadline
4. Show CTA buttons stacked
5. Show trust line
6. Show hero cards in horizontal scroll or 2x2 grid

## Mobile hero headline size

```css
@media (max-width: 640px) {
  .hero-title {
    font-size: 42px;
    line-height: 1;
    letter-spacing: -0.055em;
  }
}
```

For very small phones:

```css
@media (max-width: 380px) {
  .hero-title {
    font-size: 36px;
  }
}
```

## Mobile CTA buttons

```css
@media (max-width: 640px) {
  .hero-actions {
    display: grid;
    gap: 12px;
  }

  .hero-actions a,
  .hero-actions button {
    width: 100%;
    justify-content: center;
  }
}
```

## Mobile card grid

Use one column for all service/project/pricing cards.

```css
@media (max-width: 768px) {
  .grid,
  .services-grid,
  .project-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
```

## Touch-friendly spacing

Minimum tap target:

```css
button, a {
  min-height: 44px;
}
```

## Mobile font readability

- Body text minimum: `16px`
- Navbar/menu: `16px`
- Card descriptions: `15px`
- Buttons: `16px`

## Avoid on mobile

- Very long paragraphs
- 3-column grids
- Tiny nav text
- Hover-only information
- Heavy parallax
- Too many floating elements
- Horizontal overflow

## Mobile section spacing

```css
@media (max-width: 768px) {
  .section {
    padding-block: 64px;
  }

  .section-heading {
    margin-bottom: 32px;
  }
}
```

## Responsive screenshot/mockup cards

If project cards use screenshots:

```css
.mockup-frame {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 20px;
}

@media (max-width: 640px) {
  .mockup-frame {
    aspect-ratio: 4 / 3;
  }
}
```

## Mobile contact section

Contact section should show:

- WhatsApp CTA
- Call CTA
- Email CTA
- Book demo CTA

Use large buttons.

## Mobile QA checklist

Test on:

- 360px width
- 390px width
- 414px width
- 768px tablet
- Desktop

Check:

- No horizontal scroll.
- Header does not overlap content.
- CTA buttons are visible.
- Text is readable.
- Cards have enough spacing.
- Pricing cards do not look cramped.
- Menu opens and closes smoothly.
- Forms are easy to tap.

