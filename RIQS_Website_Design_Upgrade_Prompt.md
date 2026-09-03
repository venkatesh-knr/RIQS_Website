# RIQS Website — Design Upgrade (Reference: HQTS, SGS, Intertek)

This is a **visual design/polish upgrade**, not a content change — it builds on
top of whatever content you already have from the earlier build/update
prompts. It's based on looking at how established inspection, testing &
certification (TIC) companies design their sites — **HQTS** (the reference
you gave), plus **SGS** and **Intertek** for comparison. Note: this is a
**one-time design refresh** (fixed styling, not a visitor-facing toggle) —
say the word if you actually want a runtime theme switcher instead, that's a
different, bigger prompt.

---

## What I found, and what it means for RIQS

**HQTS / SGS / Intertek all lean on:** clean white/off-white section
backgrounds, dark navy or charcoal text and headers, blue as the dominant
brand color, card-based grids with icons for services, bold short hero
taglines, and — critically — they all use **real photography** (facilities,
inspectors at work) mixed with icons, not icons alone. A couple of them also
use a single high-contrast accent color (SGS/HQTS blue-on-white; Intertek
uses yellow as a pop against a neutral palette) rather than a purely
monochrome scheme.

**Where RIQS already matches this** (keep as-is): navy + steel-blue base
palette is already the right family — no need to abandon it, it's exactly
in line with how this industry's biggest players brand themselves.

**Where RIQS can upgrade:**
1. It's currently icon-only, no photography anywhere — the reference sites
   all use real imagery to build trust and credibility.
2. It has one flat visual rhythm (centered heading → grid of cards, repeated
   down the page) — the reference sites break this up with alternating
   layouts and a stats/trust bar.
3. The accent color (amber) is used very lightly — the reference sites use
   their accent more deliberately to draw the eye to key numbers and CTAs.
4. No section "eyebrows" (small kicker labels above headings) — a pattern
   SGS uses well for scannability.

---

## How to run this

```
cd D:\Project\CLAUDE\WEBSITE
claude
```
Paste the prompt block below. Approve edits as it works, then:
```
npm run dev
```
to review.

---

## The design upgrade prompt

````
Apply a visual design upgrade to the existing RIQS website (React + Vite +
Tailwind CSS). This is a styling/polish pass only — do not change any of
the existing text content, section order, or component structure/props;
only touch layout, color usage, imagery, spacing, and micro-interactions.
Keep the navy + steel-blue color family as the base — do not replace it —
but refine and extend it as described below.

1. HERO — ADD BACKGROUND PHOTOGRAPHY
   Replace the current CSS-gradient-only hero background with a full-bleed
   background image of an industrial/offshore/oil & gas inspection scene,
   with a dark navy gradient overlay (e.g. navy at 85-90% opacity fading to
   70%) so the existing white hero text stays fully legible on top of it.
   Since I don't have a licensed photo yet, use a placeholder: either an
   existing royalty-free image already in node_modules/public assets if
   available, or a tasteful CSS-generated placeholder (e.g. a subtle
   grid/blueprint pattern combined with a darkened industrial-toned
   gradient) — and add a clear code comment in Hero.jsx marking exactly
   where to drop in a real photo later (e.g. `src/assets/hero-bg.jpg`).

2. ADD A TRUST/STATS BAR
   Add a new slim, full-width stats strip directly below the Hero section
   (dark navy or steel-blue background, white/amber text), showing 4 stat
   items in a row (2x2 on mobile): a large bold number + a short label
   underneath each, e.g. "10+ Years Experience", "500+ Inspections
   Completed", "Certified Inspectors", "Multiple Industries Served" — use
   round, clearly-placeholder numbers and add a code comment noting these
   should be replaced with RIQS's real figures.

3. ADD SECTION EYEBROWS
   Above every major section heading (About, Our Core Services, Industries,
   Our Inspection Approach, Why Choose RIQS, Quality & Integrity, etc.),
   add a small uppercase "eyebrow" label in the amber accent color with
   letter-spacing, e.g. "WHO WE ARE" above "About RIQS", "WHAT WE DO" above
   "Our Core Services", "HOW WE WORK" above "Our Inspection Approach",
   "WHO WE SERVE" above "Industries We Serve". Pick short, fitting labels
   for any section that doesn't have one specified here.

4. ALTERNATE SECTION LAYOUTS (break the repetition)
   Currently most sections are centered-heading-then-grid. Restyle the
   About section and the Quality & Integrity section to use a two-column
   layout that alternates image/icon-block position: About = text left,
   supporting visual right (already close to this — just make sure it's
   consistent); Quality & Integrity = supporting visual/icon-block left,
   text + core values right. Use a large stylized icon arrangement, a
   pattern/badge graphic, or a simple photo placeholder (with a code
   comment for a real photo later) for these visual blocks — not another
   plain card grid, to create rhythm variation against the rest of the
   page.

5. STRENGTHEN THE ACCENT COLOR USAGE
   Use the existing amber accent more deliberately (not just outline
   button borders): apply it to the stat numbers in the new stats bar, the
   new section eyebrows, numbered badges on the Services cards (01-08),
   the numbered circles in the Our Inspection Approach flow, and hover
   states (e.g. nav links get an amber underline on hover, cards get an
   amber-tinted border on hover).

6. CARD POLISH ACROSS THE SITE
   Standardize all icon-card components (Services, Industries, Why Us,
   Quality core values, Certification/Documentation/Clients checklists)
   to share one consistent card style: rounded corners, a subtle border,
   a soft shadow that deepens on hover, and a smooth transform (translateY
   -4px) + transition (~180ms ease) on hover. Icon badges should be a
   consistent rounded-square shape with a navy background and
   steel-blue/amber icon color throughout.

7. STICKY NAVBAR POLISH
   Add a subtle backdrop blur and shadow to the navbar once the page is
   scrolled past the hero (it should look "flatter"/transparent at the
   very top of the hero and solid+shadowed once scrolled), and highlight
   whichever section's nav link corresponds to the section currently in
   view (active-link state), similar to how major corporate sites track
   scroll position in their nav.

8. FOOTER POLISH
   Add a thin amber accent line/border along the top edge of the footer to
   visually close out the page, keeping everything else in the footer as
   it already is.

Keep all changes responsive (mobile/tablet/desktop) and make sure the site
still builds and runs cleanly after these changes with no console errors.
````

---

## Notes

- This upgrade deliberately keeps the same navy/steel-blue family rather
  than switching to something like Intertek's yellow-dominant look —
  that's consistent with how HQTS and SGS (the closer competitors to
  RIQS's positioning) brand themselves, and it's a smaller, lower-risk
  change than a full palette swap.
- Font-size behavior (a visitor-facing text-size control) was left out of
  this pass since you didn't include it in scope this time — let me know
  if you still want that added, either as a one-time size bump or an A+/A-
  control, and I'll write a short follow-up prompt for it.
- If you'd rather have an actual runtime **light/dark toggle** or a
  **two-brand-scheme switcher** instead of this fixed refresh, that's a
  meaningfully bigger change (needs a toggle UI + localStorage state +
  testing every section in both modes) — say so and I'll write that prompt
  separately.
