# NI Website — Replica

A static replica of the Network Intelligence site draft hosted at
`network-intelligence-ai.kkmookhey.chatgpt.site`, rebuilt as plain HTML/CSS/JS
so it can be hosted independently (e.g. on GitHub Pages).

## What this is

- Single-page site (`index.html`) covering every section of the source page:
  hero, the dual mandate, the five Transilience products (Denali, Kamet,
  Shasta, Rainier, El Capitan), services, the connected-ascent model, open
  source resources, insights, identity/Ilantus, the group structure, company
  timeline, management team, and the closing CTA.
- Styled with NI's brand system (black-first background, purple→crimson→red
  gradient, dot-matrix texture, bold uppercase headlines) per the in-house
  brand guidelines.
- No build step, no dependencies — just `index.html`, `styles.css`,
  `script.js`.

## What's different from the live draft

The source domain (`*.chatgpt.site`) wasn't reachable for a pixel-for-pixel
copy of its images, fonts, or exact CSS — this rebuild recreates the layout,
copy, and structure from the page content, styled to match NI's brand
guidelines rather than lifting the original stylesheet/assets. Product
screenshots are represented as styled placeholder panels (`.product-screen`)
rather than the original images — swap in real screenshots at
`products/*.png` and reference them in `index.html` when available.

## Hosting on GitHub Pages

1. Push this repo's `main` branch.
2. In the repo settings → **Pages**, set the source to the `main` branch,
   root folder.
3. The site will be live at `https://<owner>.github.io/<repo>/` within a
   few minutes.

A ready-made Pages deploy workflow is included at
`.github/workflows/pages.yml` — enabling "GitHub Actions" as the Pages
source will deploy automatically on every push to `main`.
