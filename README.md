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
the domain root), `vite.config.js` sets `base: '/RIQS_Website/'`. **That
stays as it is:** GitHub Pages is kept as a backup mirror after ritvish.com
launches, so the repo's base must remain correct for it, and hosts serving
from a domain root override it at build time with `--base=/`. The absolute
URLs in `index.html`, `public/sitemap.xml` and `public/robots.txt` already
name `https://ritvish.com/` — which is what a mirror should declare as
canonical, so search results point at the real domain rather than the
mirror.

### Cloudflare Pages (interim host)

The site is also served from Cloudflare Pages at `riqs-preview.pages.dev`,
connected to this repo and building from `main`. Pages serves from the domain
root while `vite.config.js` targets GitHub's sub-path, so the Pages build
command overrides the base rather than the repo changing:

| Setting | Value |
| --- | --- |
| Build command | `npm run build -- --base=/` |
| Output directory | `dist` |
| Root directory | *(empty — the app is at the repo root)* |
| `NODE_VERSION` | `20` — the build needs Node 20+ and Cloudflare's default is older |
| `VITE_FORM_ENDPOINT` | same FormSubmit endpoint as the GitHub Pages build |

Both hosts build from `main`, so one push updates both. The canonical URL,
`og:` tags, `public/sitemap.xml` and `public/robots.txt` already name
`https://ritvish.com/`, set ahead of the launch: they are correct the moment
the domain is connected, but until then `og:image` does not resolve, so link
previews show no image on the preview hosts.

## Contact form

The form in `src/components/Contact.jsx` sends through up to **two free
delivery services, tried in order**, because each is a third party that can
go down: FormSubmit returned HTTP 500 for every address on 30 Sept 2026. The
first that accepts the message wins; only if all fail does the visitor see an
error, and even then the error box offers "Email it to info@ritvish.com
instead", a `mailto:` link pre-filled with what they typed. Services are
tried one after another, never together, so an enquiry is never delivered
twice.

| Order | Service | Setting (GitHub repository variable) |
| --- | --- | --- |
| 1 | FormSubmit | `VITE_FORM_ENDPOINT`, e.g. `https://formsubmit.co/ajax/info@ritvish.com` |
| 2 | Web3Forms | `VITE_WEB3FORMS_KEY`, an access key |

Set them under Settings → Secrets and variables → Actions → **Variables**;
the deploy workflow passes them into the build, so changing one needs a
workflow re-run but no code change. A service whose setting is empty is
skipped. With neither set, the form falls back to a `mailto:` link, which
does nothing for anyone on webmail — don't leave both unset. For local
testing, put the same variables in `.env.local` (git-ignored).

**FormSubmit** needs no account. Pointing it at a new inbox means one fresh
"Activate Form" email to that inbox, and **nothing is delivered until the
link in it is clicked**. After activation it issues a random alias;
swapping the address for that alias keeps the inbox address out of the
site's public code.

**Web3Forms** needs no account either: enter the destination address at
web3forms.com and it emails you an access key. Messages are delivered to
that address. It refuses server-side calls on the free plan, so it can only
be tested from a real browser page, not `curl`. The key is designed to be
public (it can only submit to its own inbox), unlike a password.

A request counts as failed on a non-2xx response, a JSON body with
`success: false` (FormSubmit answers 200 with that until activated), a
network error, or no answer within 12 seconds.

**Privacy:** `VITE_`-prefixed values are embedded in the public JavaScript
bundle, so whatever they hold is readable by anyone. Use an alias or a key
(as here) — never a bare email address. `privacy.html` names the services
that handle messages; update it if the list changes.

## SEO and sharing

- `public/sitemap.xml` and `public/robots.txt` are copied to the site root on
  build. Crawlers only read `robots.txt` at a domain's root, so while the
  site lives under `/RIQS_Website/` that file is not consulted; it takes
  effect after a move to a custom domain. Until then, submit the sitemap URL
  directly in Google Search Console.
- `public/og-image.jpg` (1200×630) is the preview card shown when the link is
  shared on WhatsApp, LinkedIn and similar. It's a static image; replace the
  file (same dimensions) to change it. Platforms cache previews, so a change
  can take a while to appear.

## Hosting: staging and production

ritvish.com is **live**, served by Cloudflare Pages. Two Cloudflare projects
build from this one repo, so a push can be tested before it reaches the real
site:

| | Staging | Production |
| --- | --- | --- |
| Cloudflare project | `riqs-preview` | `ritvish` |
| GitHub branch it builds | `main` | `production` |
| Address | `riqs-preview.pages.dev` | `ritvish.com`, `www.ritvish.com` |

Everyday work goes to `main` and shows on staging within a minute. The real
site changes only when `production` is updated:

```bash
git push origin main:production   # release exactly what main contains
```

To undo a release, roll back in the `ritvish` project (Deployments).

Both projects need the same build settings (build command
`npm run build -- --base=/`, output directory `dist`) and the same three
variables: `NODE_VERSION` (20), `VITE_FORM_ENDPOINT` and `VITE_WEB3FORMS_KEY`.
Cloudflare reads variables only when a build starts, so changing one needs a
new build (retry the deployment, or push a commit).

GitHub Pages, which builds from `main`, is a backup mirror. `vite.config.js`
keeps its sub-path base for that, and the Cloudflare builds override it with
`--base=/`.

DNS for the domain is on Cloudflare. The Zoho mail records (MX, SPF and the
verification entry) must not be touched when changing website records.

FormSubmit's activation is tied to the website address as well as the inbox,
so a new address such as ritvish.com needs the activation link in the inbox
clicked once. Until then the form uses the Web3Forms backup.

## Outstanding placeholders

| What | Where | Note |
| --- | --- | --- |
| Company web address | `Contact.jsx` | Links to `https://ritvish.com`, which is live on Cloudflare Pages |
| About panel | `About.jsx` | Icon and stat panel standing in for a photograph. Hero and Quality & Integrity now use real photos |
| Privacy Notice wording | `privacy.html` | A plain-language draft written from what the site actually does. Have the business owner (and, if wanted, a lawyer) read it: in particular the "we don't sell your details" line and the retention wording are commitments made on RIQS's behalf |

Resolved: the stats (20+ / 100+ / 10+ / 7+) are RIQS's own figures, the
placeholder phone number is gone, and the location is Trichy, Tamil Nadu.

Real photography of inspectors and facilities remains the biggest credibility
lever versus comparable firms (HQTS, SGS, Intertek), all of which lead with
it. The two offshore photos now in use are a start; photos of people at work
would add more.

## Images and photos

Originals go in `/images` (git-ignored: they are multi-MB and camera photos
carry EXIF/GPS data). Only optimised copies in `src/assets/` are published —
resized, converted to WebP, metadata stripped (`hero-bg.webp` 1920px,
`quality-photo.webp` 900px).

The favicon and iOS icon are the Ritvish mark; regenerate them from the
supplied artwork if it changes. `public/og-image.jpg` is the share card.

## Extra pages

`privacy.html` and `404.html` are separate entries in `vite.config.js`, not
part of the React app, so they share the stylesheet and get the right base
path from `%BASE_URL%`. GitHub Pages and Cloudflare Pages both serve
`404.html` for an unknown URL. If analytics or cookies are ever added,
`privacy.html` must be updated to say so.

## Structure

`src/App.jsx` composes the page top to bottom. Each section is one component
in `src/components/`. `Reveal.jsx` is a shared scroll-reveal wrapper that
respects `prefers-reduced-motion`. The colour palette and fonts are defined
as Tailwind theme tokens in `src/index.css`.
