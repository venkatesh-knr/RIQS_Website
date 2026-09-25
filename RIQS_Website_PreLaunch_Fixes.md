# RIQS Website — Pre-Launch Fixes for ritvish.com

This is a **verify-then-fix** prompt: for each item, confirm the current
state in the repo first (things may have changed since this was written),
then apply the fix only if it's still needed. Repo:
`venkatesh-knr/RIQS_Website`, deployed via Cloudflare Pages
(`riqs-preview.pages.dev`), moving to the custom domain `ritvish.com`.

---

## How to run this

```
cd <your local clone of RIQS_Website>
git pull
claude
```
Paste the prompt block below. Review the diff before pushing — a couple of
these items are conditional (see the notes), not blind find-and-replace.

---

## The prompt

````
We're moving this site from GitHub Pages / the Cloudflare Pages preview
subdomain to the custom domain ritvish.com. Go through each item below,
check the current state of the relevant file first, and fix only what
still needs fixing — some of this may already be partially done.

1. ABSOLUTE URLS IN index.html
   Check the <head> of index.html for:
   - <link rel="canonical" href="...">
   - <meta property="og:url" content="...">
   - <meta property="og:image" content="...">
   - the "url" field inside the JSON-LD <script type="application/ld+json">
     block
   If any of these still point at https://venkatesh-knr.github.io/RIQS_Website/
   (or any riqs-preview.pages.dev URL), update them to
   https://ritvish.com/ (keep og:image pointing at
   https://ritvish.com/og-image.png specifically, same filename, new host).

2. public/sitemap.xml
   Check the <loc> entry. If it's not already https://ritvish.com/,
   update it and bump <lastmod> to today's date.

3. public/robots.txt
   Check the "Sitemap:" line. If it's not already
   https://ritvish.com/sitemap.xml, update it. Also remove or update the
   comment above it that references the GitHub Pages sub-path, since that
   context no longer applies once the site is on its own domain.

4. Contact.jsx — restore the website link
   Find the CONTACT_ITEMS array (or equivalent) and look for the entry
   with the Globe icon / "ritvish.com" label. If its href is currently
   undefined/commented out with a note like "shown as plain text until
   ritvish.com is registered" — CONDITIONAL FIX: only restore
   href: "https://ritvish.com" if the domain is actually resolving right
   now. Check this yourself by running `curl -Is https://ritvish.com` (or
   `dig ritvish.com`) from the terminal before editing — if it doesn't
   resolve yet, leave this one alone and tell me, don't guess.

5. vite.config.js — base path decision
   Current state is likely `base: '/RIQS_Website/'`, needed for GitHub
   Pages' sub-path, while Cloudflare Pages overrides it at build time via
   a `--base=/` flag in its build command (set in the Cloudflare dashboard,
   not in this repo). Don't change this file yourself — first tell me
   whether GitHub Pages is still meant to stay live as a mirror/backup
   after ritvish.com launches. If yes, leave vite.config.js as-is (the
   Cloudflare-side override already handles the custom domain correctly).
   If no (GitHub Pages is being retired), then change base to '/' here so
   the repo doesn't depend on a dashboard-only setting nobody will
   remember in six months.

6. FORM ENDPOINT — flag only, can't fix from code
   The contact form's VITE_FORM_ENDPOINT needs to be set as an environment
   variable inside the Cloudflare Pages project's own dashboard settings
   (Settings → Environment variables), separately from the GitHub Actions
   repository variable of the same name — these are two different
   deployments and each needs its own copy. This isn't something you can
   check or fix from the repo itself, so just remind me to verify it in
   the Cloudflare dashboard before relying on the live form.

After making the changes above, run `npm run build` locally to confirm it
still builds cleanly, then show me a summary of exactly what you changed
(and what you deliberately left alone, and why) before I push.
````

---

## Notes

- Item 4 and item 5 are deliberately conditional — don't let Claude Code
  apply them blindly. Item 4 depends on DNS actually being live (see the
  domain-connection steps from earlier — Cloudflare Pages → Custom
  domains → Set up a custom domain → ritvish.com), and item 5 depends on
  a decision only you can make (keep GitHub Pages running or not).
- Item 6 can't be fixed by editing code at all — it's a Cloudflare
  dashboard setting. Worth checking yourself right after this: Cloudflare
  dashboard → your Pages project → Settings → Environment variables →
  confirm `VITE_FORM_ENDPOINT` is set there too.
- The remaining placeholder content (phone number, stats bar figures,
  hero/about photography) isn't included here since none of it blocks a
  technically clean launch — worth a separate prompt once you're ready to
  tackle those.
