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
`url`) and in `public/sitemap.xml` and `public/robots.txt`.

## Contact form

The form in `src/components/Contact.jsx` posts JSON to `VITE_FORM_ENDPOINT`.
For the deployed site that value is a GitHub **repository variable** of the
same name (Settings → Secrets and variables → Actions → Variables), which the
deploy workflow passes into the build. To point the form elsewhere, change
the variable and re-run the workflow — no code change needed.

**Currently set to** a FormSubmit endpoint — a free service that needs no
account — in the form `https://formsubmit.co/ajax/<alias>`, where the alias
is the random string FormSubmit issues in its activation email. Using the
alias rather than the inbox address keeps the address out of the site's
public code. Pointing the form at a new inbox means one fresh "Activate
Form" email to that inbox, and **nothing is delivered until the link in it
is clicked**.

If the variable is unset the form falls back to a `mailto:` link, which does
nothing for anyone on webmail — don't leave it unset.

To switch to Formspree (or Web3Forms, Getform, Basin), create the form in
that service and set the variable to its endpoint URL. The form treats a
non-2xx response, or a JSON body with `success: false`, as a failed send. For
local testing, put the same variable in `.env.local`.

**Privacy:** `VITE_`-prefixed values are embedded in the public JavaScript
bundle, so whatever the variable holds is readable by anyone. Use an alias
(as now) or a service's form ID — never a bare email address.

## SEO and sharing

- `public/sitemap.xml` and `public/robots.txt` are copied to the site root on
  build. Crawlers only read `robots.txt` at a domain's root, so while the
  site lives under `/RIQS_Website/` that file is not consulted; it takes
  effect after a move to a custom domain. Until then, submit the sitemap URL
  directly in Google Search Console.
- `public/og-image.png` (1200×630) is the preview card shown when the link is
  shared on WhatsApp, LinkedIn and similar. It's a static image; replace the
  file (same dimensions) to change it. Platforms cache previews, so a change
  can take a while to appear.

## Outstanding placeholders

| What | Where | Note |
| --- | --- | --- |
| Company domain and email | `Contact.jsx`, `Footer.jsx`, `MobileCta.jsx`, JSON-LD in `index.html` | **`riqsinspection.com` is not registered.** `info@riqsinspection.com` cannot receive mail and `www.riqsinspection.com` is a dead link |
| Phone number `+974 XXX XXXX` | `Contact.jsx`, `Footer.jsx` | Also enables a `tel:` link in `MobileCta.jsx` |
| Stats: 10+ years, 500+ inspections, 20+ inspectors, 8+ industries | `StatsBar.jsx` | **Invented figures.** Publishing unverified credentials is a trust and potentially legal risk |
| Hero background | `Hero.jsx` | CSS blueprint pattern standing in for photography |
| Supporting visuals | `About.jsx`, `QualityIntegrity.jsx` | Icon panels standing in for photos |

Real photography of inspectors and facilities is the single largest
credibility gap versus comparable firms (HQTS, SGS, Intertek), all of which
lead with it.

## Structure

`src/App.jsx` composes the page top to bottom. Each section is one component
in `src/components/`. `Reveal.jsx` is a shared scroll-reveal wrapper that
respects `prefers-reduced-motion`. The colour palette and fonts are defined
as Tailwind theme tokens in `src/index.css`.
