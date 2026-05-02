# CLAUDE.md — Steelcut KE Website

## Project Overview

**Client:** Steelcut KE  
**Industry:** Metal Fabrication / Industrial Arts  
**Location:** Bandari Road, Nairobi, Kenya  
**Website domain:** steelcut.ke  
**WhatsApp:** +254714929913  
**Instagram:** @steelcut.ke (3,300+ followers)  
**Tagline:** Kenyan-made metal art 🇰🇪

Steelcut KE is a Nairobi-based CNC cutting and custom metal fabrication studio. They produce decorative metal art, signage, furniture pieces, and custom fabrications for homes, offices, and gifting. All work is locally made in Kenya.

---

## Goals & Purpose of the Website

1. Showcase portfolio of work (metal art, CNC cuts, custom fabrications)
2. Drive WhatsApp inquiries and quote requests
3. Build brand credibility and trust
4. Rank locally for searches like "metal fabrication Nairobi", "CNC cutting Kenya", "custom metal art Kenya"
5. Serve as a landing page for Instagram bio traffic

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Image Optimization:** Next.js Image component
- **Deployment:** Vercel (or client's preferred host)
- **Contact:** WhatsApp deep link (no backend needed for MVP)

> Use `pnpm` as the package manager unless instructed otherwise.

---

## Design Direction

### Aesthetic
- **Dark, industrial, premium** — think raw steel, brushed metal, dark backgrounds
- **Color palette:**
  - Background: `#0A0A0A` (near black) or `#111111`
  - Primary accent: `#C0922A` (hammered gold / raw brass tone)
  - Secondary accent: `#E8E8E8` (cool silver/steel)
  - Text: `#F5F5F5` on dark, `#1A1A1A` on light sections
  - Danger/highlight: `#B22222` (Kenya red, used sparingly)
- **Typography:**
  - Headings: `Bebas Neue` or `Barlow Condensed` (bold, industrial)
  - Body: `Inter` or `DM Sans` (clean, readable)
  - Accent labels: uppercase, wide letter-spacing (`tracking-widest`)
- **Textures:** Subtle steel/metal grain overlays on hero sections (CSS or SVG-based, not heavy images)
- **Imagery:** High-contrast product photography, sparks, CNC cutting process shots

### Feel
Raw but refined. Proud of being Kenyan-made. Heavy craft energy — not generic corporate. Think of brands like Fiskars, Leatherman, or local pride brands.

---

## Site Structure / Pages

### 1. `/` — Home
- Full-screen hero with video loop or high-quality image of CNC cutting / finished product
- Tagline: "Precision Cut. Kenyan Made."
- CTA button → WhatsApp quote request
- Brief intro section (who we are, what we do)
- Services snapshot (3–4 cards)
- Featured portfolio grid (6–9 images)
- Testimonials / social proof
- CTA banner → "Get a Custom Quote on WhatsApp"
- Footer

### 2. `/services` — Services
- CNC Laser/Plasma Cutting
- Custom Metal Art (decorative panels, wall art)
- Signage & Branding (business signs, logos in metal)
- Furniture & Structural Fabrications
- Corporate & Bulk Orders
- Gifting & Custom Pieces

Each service: icon, title, short description, example image, and link to WhatsApp.

### 3. `/portfolio` — Portfolio / Gallery
- Masonry or grid layout
- Filter by category: All / Wall Art / Signage / Furniture / Gifts / Industrial
- Lightbox on click
- Caption with material and brief description
- Source images from `/public/portfolio/` folder (client to provide)

### 4. `/about` — About
- Steelcut KE story
- Location: Bandari Road, Nairobi
- Values: Kenyan-made craftsmanship, precision, quality
- Team photo (optional)
- Link to Instagram

### 5. `/contact` — Contact
- WhatsApp CTA (primary)
- Instagram link
- Location: Bandari Road, Nairobi (embed Google Maps or static map)
- Simple inquiry info (no backend form needed for MVP — use WhatsApp link)

---

## Components to Build

```
components/
├── layout/
│   ├── Header.tsx          # Sticky nav with logo + WhatsApp CTA button
│   ├── Footer.tsx          # Links, socials, copyright
│   └── MobileMenu.tsx      # Hamburger drawer for mobile
├── ui/
│   ├── Button.tsx          # Primary, secondary, WhatsApp variants
│   ├── SectionHeading.tsx  # Consistent section titles
│   ├── Badge.tsx           # "Kenyan Made", category labels
│   └── Lightbox.tsx        # Portfolio image viewer
├── sections/
│   ├── Hero.tsx
│   ├── ServicesGrid.tsx
│   ├── PortfolioGrid.tsx
│   ├── Testimonials.tsx
│   └── CTABanner.tsx
└── icons/
    └── WhatsAppIcon.tsx    # Custom WhatsApp SVG icon
```

---

## WhatsApp Integration

All primary CTAs should open WhatsApp with a pre-filled message:

```typescript
const WHATSAPP_NUMBER = "254714929913";

export function getWhatsAppLink(message?: string) {
  const defaultMsg = "Hi Steelcut KE! I'd like to request a custom quote.";
  const encoded = encodeURIComponent(message ?? defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
```

Use this on:
- Hero CTA
- Services cards
- Contact page
- Floating WhatsApp button (bottom-right, visible on all pages)

---

## SEO Requirements

- `metadata` in `layout.tsx` with title template: `%s | Steelcut KE`
- Default title: `Steelcut KE — Custom Metal Fabrication in Nairobi, Kenya`
- Description: `Precision CNC cutting, custom metal art, and fabrications. Kenyan-made for homes, offices, and gifts. Based in Nairobi.`
- OG image: branded dark-theme card with logo
- Structured data: `LocalBusiness` schema for Nairobi location
- Sitemap and robots.txt via `next-sitemap`
- All images: descriptive `alt` text

---

## Performance Requirements

- Lighthouse score target: 90+ (Performance, Accessibility, SEO)
- Use `next/image` for all images with proper `width`, `height`, and `priority` on hero
- Lazy load portfolio images below the fold
- No layout shift on fonts (use `next/font`)
- Keep bundle lean — avoid heavy libraries unless necessary

---

## Accessibility

- All interactive elements keyboard navigable
- Color contrast ratio minimum 4.5:1 for body text
- ARIA labels on icon-only buttons (especially WhatsApp FAB)
- Focus ring visible on all focusable elements
- Skip-to-content link in header

---

## Localization Notes

- **Currency:** Kenyan Shillings (KES) if prices are shown
- **Phone format:** +254 prefix
- **Audience:** Primarily Nairobi / Kenya — English is fine, no Swahili needed for MVP
- **Maps:** Use Google Maps embed centered on Bandari Road, Nairobi

---

## File & Asset Conventions

```
public/
├── images/
│   ├── logo.svg             # Steelcut KE logo
│   ├── logo-white.svg       # White version for dark backgrounds
│   ├── og-image.png         # 1200x630 OG card
│   └── hero/                # Hero images or video
├── portfolio/               # All portfolio photos (client to supply)
│   ├── wall-art/
│   ├── signage/
│   ├── furniture/
│   └── gifts/
└── favicon.ico
```

- Use descriptive filenames: `cnc-cut-wall-art-nairobi.jpg` not `IMG_001.jpg`
- Compress all images before committing (target < 200KB per image, WebP preferred)

---

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm lint         # ESLint check
pnpm type-check   # TypeScript check (tsc --noEmit)
```

---

## MVP Scope (Phase 1)

- [x] Home page (hero, services, portfolio preview, CTA)
- [x] Portfolio page (grid + lightbox + filters)
- [x] Services page
- [x] Contact page (WhatsApp + map)
- [x] Floating WhatsApp button on all pages
- [x] Mobile responsive (priority — most traffic from Instagram mobile)
- [x] Basic SEO metadata

**Out of scope for MVP:**
- Blog / news section
- E-commerce / pricing calculator
- Client login or order tracking
- Backend form submissions
- Animations beyond simple fade-ins

---

## Notes for Claude Code

- **Mobile-first:** Most visitors arrive from Instagram on mobile. Always design mobile layout first.
- **WhatsApp is the primary CTA** — it should be unmissable on every page.
- **No placeholder lorem ipsum** in final output — use realistic copy about metal fabrication.
- When unsure about exact copy, use placeholders like `[CLIENT TO CONFIRM]`.
- Keep components small and composable.
- Prefer server components by default; use `"use client"` only when interactivity requires it.
- Do not install unnecessary dependencies — check if Tailwind + base Next.js can handle it first.