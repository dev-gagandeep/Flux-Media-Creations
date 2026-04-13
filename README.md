# Flux Media Creations — Website

Built with Next.js 14, Tailwind CSS, Framer Motion, GSAP, Lenis smooth scroll.

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Animations**: Framer Motion + GSAP
- **Smooth scroll**: Lenis (@studio-freight/lenis)
- **Forms**: Formspree
- **Fonts**: Clash Display + Satoshi (Fontshare)
- **Deployment**: Vercel (recommended) or Netlify

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## Before going live — checklist

### Formspree setup (contact form)
1. Go to formspree.io → create a free account
2. Create a new form → copy the form ID (looks like `xyzabcde`)
3. In `src/app/contact/page.tsx`, replace `YOUR_FORM_ID` with your actual ID:
   ```
   fetch("https://formspree.io/f/YOUR_FORM_ID"
   ```

### Add project screenshots
1. Take screenshots of your portfolio sites at 1200×800px
2. Save as `/public/images/work/mvmhealth.jpg`, `vascura.jpg`, etc.
3. Update `WORK_PROJECTS` in `src/lib/constants.ts` to use real images:
   ```ts
   image: "/images/work/mvmhealth.jpg"
   ```
4. Update the `WorkCard` component in `src/components/sections/Work.tsx` to use `<Image>` from next/image

### Open Graph image
1. Create a 1200×630px image with Flux Media Creations branding
2. Save as `/public/og-image.jpg`
3. This image shows when links are shared on LinkedIn, WhatsApp, Twitter

### Google Analytics
Add your GA4 tracking ID in `src/app/layout.tsx`:
```tsx
// Add this inside <head>:
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<script dangerouslySetInnerHTML={{ __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
` }} />
```

### Google Search Console
After deploying, go to search.google.com/search-console → add your domain → verify via DNS TXT record → submit sitemap at `https://fluxmediacreations.com/sitemap.xml`

---

## Deployment on Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Follow prompts. Vercel auto-detects Next.js, sets up SSL, and deploys in 60 seconds.

Then: Vercel Dashboard → Settings → Domains → Add `fluxmediacreations.com`
Update your domain's nameservers to Vercel's (shown in dashboard).

---

## Deployment on Netlify (alternative)

```bash
npm run build
```

Then drag the `.next` folder into Netlify's deploy interface — or connect your GitHub repo for auto-deploy on every push.

---

## Customization quick reference

| What to change | File |
|---|---|
| All site content (text, services, projects) | `src/lib/constants.ts` |
| SEO metadata | `src/lib/seo.ts` |
| Global colors | `tailwind.config.ts` + `src/app/globals.css` |
| Nav links | `src/lib/constants.ts` → `NAV_LINKS` |
| Contact email/phone | `src/lib/constants.ts` → `SITE` |
| Homepage sections order | `src/app/page.tsx` |
| Formspree form ID | `src/app/contact/page.tsx` |

---

## Color palette

| Name | Hex | Usage |
|---|---|---|
| `cream` | `#FAF8F4` | Site background |
| `ink` | `#0D0D0D` | Primary text |
| `flux` | `#FF5C35` | Primary accent (coral orange) |
| `pulse` | `#2563EB` | Secondary accent (blue) |
| `blush` | `#FFF0EB` | Light tint backgrounds |
| `sage` | `#E8F5EC` | Success/positive backgrounds |

---

## File structure

```
src/
├── app/                    ← Next.js pages (App Router)
│   ├── layout.tsx          ← Root layout (nav, footer, cursor, smooth scroll)
│   ├── page.tsx            ← Homepage
│   ├── globals.css         ← Global styles
│   ├── services/page.tsx
│   ├── work/page.tsx
│   ├── industries/page.tsx
│   ├── process/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── not-found.tsx       ← 404 page
│   ├── sitemap.ts          ← Auto-generated XML sitemap
│   └── robots.ts           ← robots.txt
├── components/
│   ├── layout/
│   │   ├── Nav.tsx         ← Scroll-hide navigation + mobile drawer
│   │   ├── Footer.tsx      ← Dark footer with marquee strip
│   │   └── Cursor.tsx      ← Custom dual-layer cursor
│   ├── ui/
│   │   ├── MagneticButton.tsx  ← Mouse-tracking magnetic effect
│   │   ├── TextReveal.tsx      ← Word-by-word scroll animation
│   │   ├── Marquee.tsx         ← Infinite horizontal scroll
│   │   └── PageTransition.tsx  ← Page change animation
│   └── sections/
│       ├── Hero.tsx        ← Full-viewport headline hero
│       ├── Services.tsx    ← Hover-to-orange service list
│       ├── Work.tsx        ← Filterable project grid
│       ├── Industries.tsx  ← Accordion industry cards
│       ├── Process.tsx     ← Numbered steps with sticky left column
│       └── CTA.tsx         ← Testimonials + dark CTA block
├── lib/
│   ├── constants.ts        ← ALL site content in one place
│   └── seo.ts              ← Metadata factory + JSON-LD schemas
└── hooks/                  ← (reserved for custom hooks)
```
