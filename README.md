<div align="center">

# nysonian.com

**CRAFT. MOVE. ENDURE.**

[![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?logo=vercel&logoColor=white)](https://nysonian-com.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-static-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-custom_properties-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-lightgrey.svg)](#license)

The Nysonian Inc. corporate website as plain HTML and CSS: no framework, no build step, no Wix.

[Live site](https://nysonian-com.vercel.app) · [Configuration](#configuration) · [Deployment](#deployment)

</div>

---

## What it is

A hand-written rebuild of [nysonian.com](https://www.nysonian.com), the home of Nysonian's consumer brands [NOBL Travel](https://nobltravel.com) and [flo Pilates](https://pilatesflo.com). It replaces the Wix site.

The five pages, each a single file:
- `index.html`: the home page: the hero, Our brands (NOBL Travel and flo Pilates), How we work, and careers.
- `about.html`: the mission, the three pillars (Data, Customer, Product) and calls to action.
- `brands.html`: NOBL Travel and flo Pilates, each linking to its own site.
- `team.html`: the leadership grid with LinkedIn links.
- `careers.html`: culture and hiring, linking to the LinkedIn job listings.

The home page and the header are new. The header is modelled on nobltravel.com: a slim bar with small tracked links, and on phones the ☰ on the left with the logo centred. Below the header, the other four pages match the live Wix site on desktop and mobile. On desktop, content keeps its size and stays anchored to the centre of the window. On phones they use Wix's mobile layout, designed 320px wide and scaled to the screen.

Every page shares one stylesheet (`assets/css/styles.css`) and one script (`assets/js/menu.js`, the mobile menu). Fonts (Montserrat, Almarai) and images (WebP/JPEG) are self-hosted under `assets/`, so the site makes no third-party requests. The whole site is about 1.1 MB.

## Quickstart

Requires only a browser. [Node.js](https://nodejs.org) is optional, for a local server that reloads on save.

```bash
git clone https://github.com/ahmad-kiani/nysonian-com.git
cd nysonian-com

npx live-server --port=5501           # serves the site on :5501 and reloads on save
```

Check it at `http://127.0.0.1:5501`. Opening `index.html` straight from disk works too.

## Configuration

There are no environment variables. Everything that sets the look lives on `:root` in `assets/css/styles.css`:

| Token | |
|---|---|
| `--ink` `--btn` `--footer` | text, button and footer colours (`#282828`, `#282626`) |
| `--grey-050` `--grey-100` `--stone` `--band` | the section backgrounds, matched to the live site |
| `--frame` | the edge of the full-width bands (header, home hero, footer): 3.7% of the width, the same margin the hero photo leaves right of the luggage |
| `--gutter` | the content column of the home page sections: 24–64px on laptops, a centred 1352px column on wide screens |
| `--strip` | the cream band under the home hero |
| `--nobl-deep` `--paper` `--flo-beige` | the home hero backdrop, the "How we work" band and the light button hover |
| `--font` | Montserrat, falling back to Arial |
| `--u` | the mobile unit: 1/320 of the viewport width, capped at 1.6px. Every mobile size is a multiple of it |

The desktop/mobile split is at **1000px**. Where the live site sizes something one-off, the element carries inline custom properties instead: `--w` and `--h` for desktop sizes in px, and `--mw` and `--mh` for mobile sizes in `--u`. Buttons, card heights and text wrap widths are set this way.

## Development

```bash
npx live-server --port=5501           # edit any file, the browser reloads
```

There is nothing to compile or bundle. Pages repeat their header and footer, so a change to either is made in all five files.

## Deployment

Hosted on [Vercel](https://vercel.com) at **https://nysonian-com.vercel.app** as a static site, with no build command and the repository root as the output. Pages are served at their file names (`/about.html`, `/brands.html`, `/team.html`, `/careers.html`), and that is how the pages link to each other.

The live domain, www.nysonian.com, still runs on Wix.

## Disclaimer

The copy, photos and logos are taken from the live nysonian.com and belong to Nysonian Inc. and its brands. This project is not affiliated with Wix.

## License

Proprietary. © 2026 Nysonian Inc. All rights reserved.
