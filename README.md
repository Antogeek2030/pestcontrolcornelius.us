# pestcontrolcorneliusnc.us

Production-ready Astro website for a local pest control business in Cornelius, NC.

## Stack

- Astro 5
- Tailwind CSS
- MDX / Content Collections for blog
- @astrojs/sitemap
- Deploy target: Cloudflare Pages

## Setup

```bash
npm install
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/pages/contact.astro` with your [Web3Forms](https://web3forms.com) access key.

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`. Preview with:

```bash
npm run preview
```

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 18 or higher (recommend 20+)

Set environment variable if needed; no secrets required for the static build itself. The contact form posts directly to Web3Forms.

## Structure

- `src/pages/` — routes
- `src/pages/services/[slug].astro` — 20 individual service pages
- `src/pages/areas/[slug].astro` — service area pages
- `src/content/blog/` — Markdown blog posts
- `src/data/` — services and areas data
- `public/robots.txt`, `public/llms.txt` — crawler guidance

## Notes

- Phone number was not provided in the business details; the sticky mobile CTA and CTAs point to the contact form.
- No fabricated reviews, statistics, or credentials are included.
- All pages include unique titles, meta descriptions, canonical URLs, and Open Graph tags.
