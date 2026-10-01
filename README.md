# nysonian.com

Static HTML/CSS rebuild of [nysonian.com](https://www.nysonian.com), replacing the Wix site.

The current version is a faithful replica of the five live pages (Home, About, Brands, Team, Careers) on desktop and mobile. The NOBL-focused home page redesign builds on top of it.

## Structure

```
index.html  about.html  brands.html  team.html  careers.html
assets/css/styles.css   one shared stylesheet
assets/js/menu.js       mobile ☰ menu (the only JavaScript)
assets/img/             photos, logos and icons (WebP/JPEG)
assets/fonts/           self-hosted Montserrat and Almarai (woff2)
```

There's no build step. Each page carries its own header and footer, and the current page's nav link is marked with `aria-current="page"`.

## Run locally

Open `index.html` in a browser, or serve the folder with auto-reload:

```
npx live-server --port=5501
```

## Layout notes

- **Desktop (1000px and up).** Measured from the live site at 1440px. As on Wix, content keeps its size and is anchored to the centre of the window. Section heights are fixed and only backgrounds stretch.
- **Mobile (below 1000px).** Copies the Wix mobile layout, which is designed at 320px wide and scaled to the screen. Sizes are written as multiples of `--u` (1/320 of the viewport, capped at 1.6px for tablets).
- **Per-element sizes.** Inline custom properties set them where the live site varies them, such as button sizes and card spacing.

## Hosting

Netlify, Vercel and Cloudflare Pages all serve `/about` from `about.html`, so the existing URLs keep working.
