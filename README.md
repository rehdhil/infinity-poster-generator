# BNI Infinity Poster Generator

Self-serve generator for WhatsApp Status posters used by the **BNI Infinity Cochin** chapter. Coordinators pick a template, fill the form, and download a 1080×1920 PNG ready to share.

## Templates

| # | Template | Use |
|---|---|---|
| 1 | Open Categories | Drive referrals to open seats |
| 2 | Feature Presentation — Online | Weekly online meeting, 2 speakers |
| 3 | Power Team Spotlight | Offline meeting, full power-team feature (5–12 members, adaptive layout) |
| 4 | Networking Topic | Weekly networking session topic + hosts |
| 5 | Education Slot | Weekly education slot speaker + topic |
| 6 | Event — General | Chapter event flyer with optional venue photo |
| 7 | Event — Speaker | Guest speaker / training event with optional venue photo |

## Features

- **Member autocomplete** — typeahead over all 64 chapter members; selecting one auto-fills name, business, and category
- **Adaptive Power Team layout** — headshots scale with member count (1–4 → large, 5–6 → medium, 7–9 → small, 10–12 → compact)
- **Optional venue images** — upload a venue photo for event posters; the layout falls back gracefully when absent
- **Per-speaker topics** on Feature Presentation (each speaker presents about their own business)
- **Editable meeting time** on every form (default `7:30 AM`)
- **Live preview** — see the poster update as you type
- **Client-side PNG export** — no backend, no upload, no auth

## Local development

```bash
npm install
npm run dev
```

Open the local URL Vite prints. Click through the 7 template buttons in the picker to confirm each renders.

## Production build

```bash
npm run build
npm run preview
```

## Tech stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS 3 (brand tokens locked in `tailwind.config.ts`)
- `html-to-image` for client-side PNG export
- Google Fonts: Bebas Neue (display) + Inter (body)
- Vitest + jsdom (export-pipeline smoke test)

## Deploy

Deployed to Vercel. Push to `main` triggers automatic redeploy.

## Brand reference

Colors: `#CF2030` (BNI red), `#0A0A0A` (black), `#D4A437` (gold), `#FFFFFF` (white).
Logos: `public/logos/bni-infinity-white.png`, `public/logos/bni-reworked.png`.
