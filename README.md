<div align="center">

# nysonian.com

**CRAFT. MOVE. ENDURE.**

[![HTML5](https://img.shields.io/badge/HTML5-static-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-custom_properties-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Build](https://img.shields.io/badge/build-none-2EA44F)](#structure)
[![Fonts](https://img.shields.io/badge/fonts-self--hosted-6E40C9)](assets/fonts)

The Nysonian Inc. website as plain HTML and CSS. No framework, no build step, no Wix.

[Structure](#structure) · [Layout](#layout) · [Deployment](#deployment)

</div>

---

## What it is

A hand-written rebuild of [nysonian.com](https://www.nysonian.com), the home of Nysonian's consumer brands [NOBL Travel](https://nobltravel.com) and [flo Pilates](https://pilatesflo.com), replacing the Wix site.

The current release is a faithful replica of the five live pages (Home, About, Brands, Team and Careers), matched to the live site on desktop and mobile:
- **Desktop:** the same text, fonts, colours, image crops and positions, compared element by element at 1100, 1440 and 1920px wide.
- **Mobile:** the same section order and ☰ menu as the Wix phone layout.

The replica fixes a few things the live site gets wrong: the "Discloures" typo, the "@2026" copyright line, and a team photo that was missing on phones. The NOBL-focused home page redesign will be built on top of this release.

## Quickstart

There is nothing to install. Open `index.html` in a browser, or serve the folder with auto-reload:

```bash
git clone https://github.com/ahmad-kiani/nysonian-com.git
cd nysonian-com

npx live-server --port=5501          # serves the site at http://127.0.0.1:5501 and reloads on save
```

Any static file server works, e.g. `python -m http.server 5501`.

## Structure

| Path | |
|---|---|
| `index.html` `about.html` `brands.html` `team.html` `careers.html` | the five pages. Each carries its own header and footer; the current page's nav link is marked `aria-current="page"` |
| `assets/css/styles.css` | the one stylesheet: colour tokens on `:root`, shared components, page sections, then the mobile layout |
| `assets/js/menu.js` | the mobile ☰ menu (open/close, Escape, `aria-expanded`); the only JavaScript on the site |
| `assets/img/` | photos, logos and icons as WebP, or JPEG where the source was a photo stored as PNG |
| `assets/fonts/` | Montserrat 400/700 with italics, plus Almarai 300, as woff2 |

The whole site is about 1.1 MB.

## Layout

There are two layouts, split at **1000px**.

**Desktop (1000px and up)** is measured from the live site at 1440px wide and follows Wix's sizing rules:
- Content keeps its size and is anchored to the centre of the window. Some blocks centre on the left or right half instead.
- Section heights are fixed, and only backgrounds and full-width banner photos stretch.
- On wide screens the layout looks exactly like the live site; it never zooms in.

**Mobile (below 1000px)** copies the Wix phone layout, which is designed 320px wide and scaled to the screen:
- Every size is a multiple of `--u`, which is 1/320 of the viewport width, capped at 1.6px for tablets.
- Sections reorder where Wix reorders them, and the footer drops the page links and brand logos, as on the live site.

Where the live site sizes things one-off, such as buttons, card spacing and text wrap widths, the element carries inline custom properties: `--w`/`--h` for desktop and `--mw`/`--mh` for mobile, in `u`.

## Development

There's no toolchain. Edit the files and reload the page. Before each release the pages are checked for:
- no sideways scrolling at 320, 390, 430, 768, 1000, 1024, 1280, 1440 and 1920px
- the ☰ menu opening, closing and navigating
- every local image, font and page link resolving
- desktop and mobile screenshots matching the live site

Commits follow [Conventional Commits](https://www.conventionalcommits.org): `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`.

## Deployment

The site isn't deployed yet; nysonian.com still runs on Wix. It is a plain static site, so any static host will serve it. Netlify, Vercel and Cloudflare Pages all serve `/about` from `about.html`, so today's URLs keep working after the switch.

## License

© Nysonian Inc. All rights reserved. The brand names, logos, photos and copy belong to Nysonian Inc. and its brands.
