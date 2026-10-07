# nysonian.com

The Nysonian Inc. website, home of [NOBL Travel](https://nobltravel.com) and [flo Pilates](https://pilatesflo.com).

**Live:** https://www.nysonian.com, hosted on Vercel.

## Pages

- `index.html`: home
- `about.html`: about
- `brands.html`: brands
- `team.html`: team
- `careers.html`: careers

All pages share `assets/css/styles.css` and `assets/js/menu.js`. Fonts and images are self-hosted in `assets/`.

## Local development

```bash
npx live-server --port=5501
```

Then open `http://127.0.0.1:5501`. The header and footer are repeated on every page, so a change to either needs making in all five files.

## Deployment

Every push to `main` deploys automatically to Vercel.

## License

Proprietary. © 2026 Nysonian Inc. All rights reserved.
