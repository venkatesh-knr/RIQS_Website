# RIQS – Ritvish Inspection & Quality Services

Marketing site for RIQS, an independent inspection and quality services
company based in Doha, Qatar. React + Vite + Tailwind CSS, deployed to
GitHub Pages.

**Live:** https://venkatesh-knr.github.io/RIQS_Website/

## Local development

```bash
npm install
npm run dev      # dev server
npm run build    # production build into dist/
npm run lint     # oxlint
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds
the site and publishes it to GitHub Pages. No manual step.

Because this is a *project* page (served from `/RIQS_Website/` rather than
the domain root), `vite.config.js` sets `base: '/RIQS_Website/'`. If the site
later moves to a custom domain, change that to `'/'` and update the absolute
URLs in `index.html` (canonical, `og:url`, `og:image`, and the JSON-LD
`url`).

## Contact form

The form in `src/components/Contact.jsx` posts JSON to whatever endpoint is
in `VITE_FORM_ENDPOINT`. **If that variable is unset it falls back to a
`mailto:` link**, which opens the visitor's email client — that silently
does nothing for anyone using webmail, so real enquiries get lost. Setting
the endpoint is strongly recommended.

To wire it up, create a `.env` file in this directory:

```
VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Any service accepting a JSON `POST` works — [Formspree](https://formspree.io),
[Web3Forms](https://web3forms.com), [Getform](https://getform.io),
[Basin](https://usebasin.com). All have free tiers adequate for this volume.

For the deployed site the variable must also exist at build time in CI. Add
it as a repository secret, then expose it in the build step of
`.github/workflows/deploy.yml`:

```yaml
- run: npm run build
  env:
    VITE_FORM_ENDPOINT: ${{ secrets.VITE_FORM_ENDPOINT }}
```

Note that `VITE_`-prefixed values are embedded in the client bundle and are
therefore public. That's expected for a form endpoint — just don't put
anything genuinely secret behind that prefix.

## Outstanding placeholders

These ship as placeholders and should be replaced before the site is
promoted:

| What | Where | Note |
| --- | --- | --- |
| Phone number `+974 XXX XXXX` | `Contact.jsx`, `Footer.jsx` | Also enables a `tel:` link in `MobileCta.jsx` |
| Stats: 10+ years, 500+ inspections, 20+ inspectors, 8+ industries | `StatsBar.jsx` | **Invented figures.** Publishing unverified credentials is a trust and potentially legal risk |
| Hero background | `Hero.jsx` | CSS blueprint pattern standing in for photography |
| Supporting visuals | `About.jsx`, `QualityIntegrity.jsx` | Icon panels standing in for photos |
| Social share image | `index.html` `og:image` | Currently the 180×180 touch icon; a 1200×630 image renders far better |

Real photography of inspectors and facilities is the single largest
credibility gap versus comparable firms (HQTS, SGS, Intertek), all of which
lead with it.

## Structure

`src/App.jsx` composes the page top to bottom. Each section is one component
in `src/components/`. `Reveal.jsx` is a shared scroll-reveal wrapper that
respects `prefers-reduced-motion`. The colour palette and fonts are defined
as Tailwind theme tokens in `src/index.css`.
