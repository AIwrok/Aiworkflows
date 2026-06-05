# Responsive Design Guide — AI Workflows

## Breakpoints

| Breakpoint | Range | Target Devices |
|---|---|---|
| Large Desktop | 1200px+ | Wide monitors, TVs |
| Desktop | 901–1199px | Laptops, standard monitors |
| Tablet | 768–900px | iPad, Android tablets |
| Mobile | 601–767px | Large phones (iPhone Pro, Pixel) |
| Small Mobile | 376–600px | Standard phones (iPhone 14, Samsung) |
| Tiny Phone | ≤375px | iPhone SE, small Android |

## Fixes Applied

### Navbar
- Logo text `AI Workflows` hidden on mobile (logo image shown only)
- `Book Free Demo` CTA hidden on tiny phones (≤375px)
- Hamburger menu visible on all screens ≤900px
- Touch target minimum 44px on touch devices

### Hero
- Single column layout on tablets and mobile
- Hero visual cards hidden on mobile (saves space)
- Buttons stack vertically on mobile (full width)
- Uses `100svh` for correct mobile browser height

### Services
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

### Projects
- Project body switches to 1 column on tablet/mobile
- Reduced screen preview padding on mobile
- Mini cards scale down on small screens

### Comparison
- Stacks to 1 column on tablet/mobile

### Why We're Ahead
- Desktop: 3 columns auto-fit
- Tablet: 2 columns
- Mobile: 1 column

### Process Steps
- Step number circle shrinks on mobile
- Reduced gap between number and content
- Timeline line repositioned correctly

### Our Team
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column

### Pricing
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column (featured card has top margin)

### Contact Form
- Single column on tablet/mobile
- Form fields stack vertically
- Reduced padding on mobile

### Stats Bar
- 4 columns → 2 columns on tablet/mobile

### Footer
- Reduced padding on mobile
- Logo scales down

## iOS Fixes
- Form inputs use `font-size: 16px` on mobile to **prevent auto-zoom** on iOS Safari

## Touch Device Fixes
- Hover animations disabled on touch devices (no flicker)
- All interactive elements have minimum 44px touch target

## Files
- `AI Workflows.html` — Main website
- `logo.jpg` — Company logo
- `RESPONSIVE.md` — This file
- `DEPLOYMENT.md` — VPS deployment guide
