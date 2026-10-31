# Ramin Ahmed — 3D Portfolio

A dark, editorial portfolio for a full-stack developer. Next.js 15 (App Router) + React Three Fiber,
with a CV section that ships a downloadable one-page PDF.

![stack](https://img.shields.io/badge/Next.js-15-black) ![stack](https://img.shields.io/badge/React-19-blue) ![stack](https://img.shields.io/badge/Three.js-R3F-green)

## What's inside

| Section | What it does |
|---|---|
| **Hero** | Full-viewport WebGL scene: wireframe icosahedron, metallic core, orbital rings, starfield and pointer parallax. |
| **About** | Short positioning copy plus a sticky "quick facts" card. |
| **Skills** | Six grouped capability cards and a second live 3D panel. |
| **Work** | Four flagship projects (Space Relics 3D, TICI Course Planner, Real-Time Map Tracking, Expenza) with live + repo links. |
| **Experience** | Timeline (Goinnovior internship, BCIC apprenticeship) and education records. |
| **CV** | Paper-style preview of the résumé, with **Download PDF** and **Preview** buttons. |
| **Contact** | Direct email / phone / GitHub links. |

- Fully responsive (1440 → 390 px), with a full-screen mobile menu.
- Scroll-reveal animations via `IntersectionObserver`, and full `prefers-reduced-motion` support.
- Static export — no server, no API keys, no environment variables.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

```bash
npm run build      # static export → ./out
```

`out/` is a plain static site. Deploy it to Vercel (recommended), Netlify, GitHub Pages or any
static host.

On Vercel: import the repo, framework preset **Next.js**, no other settings needed.

## Project structure

```
app/
  layout.tsx        metadata, fonts, <html>
  page.tsx          section composition
  globals.css       full design system + responsive rules
  icon.svg          favicon
components/
  Scene.tsx         React Three Fiber scene (hero + panel variants)
  Nav.tsx           sticky nav + mobile menu
  Hero.tsx          headline, CTAs, stats
  About.tsx         ticker + about section
  Skills.tsx        skill grid + 3D panel
  Projects.tsx      project cards
  Experience.tsx    timeline + education
  Cv.tsx            CV preview + download
  Contact.tsx       contact + footer
  Reveal.tsx        scroll-reveal wrapper
  Icons.tsx         inline SVG icons
lib/
  data.ts           ⚠️ all content lives here — edit this file to update the site
public/
  Ramin-Ahmed-CV.pdf   the downloadable CV
```

## Editing content

Everything user-facing is in `lib/data.ts` — site links, skill groups, projects, experience and
education. The CV PDF lives in `public/Ramin-Ahmed-CV.pdf`; replace that file (keep the same name) to
update the download.

## Notes

- Fonts (Space Grotesk, JetBrains Mono) load from Google Fonts in `app/layout.tsx`. Self-host them
  with `next/font` if you need fully offline builds.
- The 3D scene is capped at DPR 1.75 and camera distance adapts below 780 px, so mobile stays smooth.
- Colors are CSS variables at the top of `app/globals.css` (`--acid` is the accent).
