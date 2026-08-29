# Updating the RIQS Website with Claude Code — Content Overhaul

This is a **content update** for the RIQS site you already built (React + Vite +
Tailwind, in `D:\Project\CLAUDE\WEBSITE`). It replaces the original short copy
with the full expanded content below — new hero/about copy, 8 detailed service
categories with sub-checklists, an expanded industries list, and five brand-new
sections (Inspection Approach, Quality & Integrity, Certification &
Competence, Documentation & Reporting, Clients & Partners) that didn't exist in
version 1.

---

## How to run this

1. Open a terminal and go to the existing project:
   ```
   cd D:\Project\CLAUDE\WEBSITE
   claude
   ```
2. Paste the entire prompt block below as your message.
3. Approve file edits as Claude Code applies them — it's editing an existing
   project, not scaffolding a new one.
4. When it's done, test with:
   ```
   npm run dev
   ```
   and open the printed `localhost` URL to review the changes.

---

## The update prompt

````
Update the existing RIQS website in this project (React + Vite + Tailwind
CSS) with a full content overhaul. Keep the existing tech stack, the
navy/steel-blue color palette, the placeholder logo, the lucide-react icon
usage, the sticky navbar with smooth-scroll anchors, and the overall visual
style already in place — this is a content and structure update, not a
redesign or a rebuild from scratch.

Replace the copy in the existing components (Hero, About, Services,
Industries, WhyUs, Certifications, Contact, Footer) with the new content
below, and add five new components for the sections that don't exist yet
(OurApproach, QualityIntegrity, CertificationCompetence,
DocumentationReporting, ClientsPartners). Import and place all components
into App.jsx in the exact section order listed below. Keep the top navbar
links as they are now (Home, About, Services, Industries, Why Us,
Certifications, Contact) — the five new sections don't need their own
navbar entry, they just sit in the scroll flow between the existing
sections, each with a proper id attribute in case anchor links are added
later.

SECTION ORDER (top to bottom):
1. Navbar (unchanged structure)
2. Hero
3. About Us (id="about")
4. Our Core Services (id="services")
5. Industries We Serve (id="industries")
6. Our Inspection Approach (id="approach") — NEW
7. Codes & Standards (id="certifications" — merge with the existing
   Certifications component, since both cover standards; see content below)
8. Why Choose RIQS? (id="why-us")
9. Quality & Integrity (id="quality") — NEW
10. Certification & Professional Competence (id="competence") — NEW
11. Documentation & Reporting (id="documentation") — NEW
12. Our Clients & Project Partners (id="clients") — NEW
13. Request Inspection / Get a Quote (id="contact")
14. Footer

=== 1. HERO ===
Eyebrow / tagline: "INTEGRITY • QUALITY • EXCELLENCE"
Headline: "Trusted Inspection & Quality Solutions"
Subheadline: "Independent Inspection | Quality Assurance | Technical
Services"
Body paragraph 1: "RIQS – Ritvish Inspection & Quality Services provides
professional inspection, quality assurance, and technical services to the
Oil & Gas, Petrochemical, Energy, Marine, Construction, and Industrial
sectors."
Body paragraph 2: "We support clients, EPC contractors, fabrication yards,
and project teams in maintaining the highest standards of quality, safety,
integrity, and regulatory compliance throughout the project lifecycle."
Buttons: "Request a Quote" (primary, links to #contact) and "Our Services"
(secondary/outline, links to #services).

=== 2. ABOUT US ===
Heading: "About RIQS"
Subheading: "Quality You Can Trust. Inspection You Can Rely On."
Paragraph 1: "RIQS is an independent inspection and quality services
company focused on delivering reliable, technically sound, and
client-oriented inspection solutions."
Paragraph 2: "Our objective is to help clients identify quality risks at
an early stage, ensure compliance with applicable codes and
specifications, and support the successful delivery of projects."
Paragraph 3: "Our services cover activities from material receiving and
fabrication through welding, NDT, coating, construction, installation,
testing, and final inspection."
Paragraph 4: "With a strong understanding of international standards and
industrial inspection practices, RIQS aims to become a trusted technical
partner for clients across the energy and industrial sectors."
Pull-quote block, styled distinctly (e.g. a bordered card or accent
background): heading "Our Commitment", quote: "We don't just inspect. We
help ensure quality, integrity and confidence throughout the project."

=== 3. OUR CORE SERVICES ===
Heading: "Our Core Services"
This section has 8 services, each with a number, title, one-line
description, AND a checklist of sub-items (9-12 bullets each) — that's a
lot of detail per card, so lay it out as expandable/accordion cards: show
the number, title, and description by default in a responsive grid (2-3
columns desktop, 1 column mobile), with a "View details" / chevron toggle
that expands to reveal the full bullet checklist beneath it (use a check
or dash icon per bullet). Give each card a subtle numbered badge (01-08).

01. Welding Inspection
Description: "Comprehensive welding inspection services covering
fabrication and construction activities."
Checklist: WPS/PQR review; Welder qualification verification; Fit-up
inspection; Welding parameter monitoring; Pre-weld inspection; In-process
welding inspection; Visual examination; PWHT monitoring; Weld repair
monitoring; Final weld inspection; Weld documentation and traceability;
Weld map and weld summary review.

02. QA/QC Inspection
Description: "Professional quality assurance and quality control support
throughout project execution."
Checklist: Quality surveillance; Inspection & Test Plan review; Quality
documentation review; Material traceability; Inspection coordination; NCR
follow-up; Quality records review; Final documentation review; QA/QC
audits; Construction quality surveillance.

03. NDT Inspection & Coordination
Description: "Support for non-destructive examination activities to
verify weld and material integrity."
Checklist: Radiographic Testing (RT); Ultrasonic Testing (UT); Magnetic
Particle Testing (MT); Liquid Penetrant Testing (PT); Visual Testing (VT);
NDT procedure review; NDT coordination; NDT report review; Acceptance
criteria verification.

04. Coating & Painting Inspection
Description: "Inspection of protective coating systems to ensure
durability and compliance."
Checklist: Surface preparation inspection; Environmental condition
monitoring; Surface profile measurement; Dust contamination inspection;
Soluble salt testing; Coating application inspection; Wet film thickness
measurement; Dry film thickness measurement; Holiday detection; Adhesion
testing; Final coating inspection; Coating failure assessment.

05. Mechanical Inspection
Description: "Inspection support for mechanical equipment and
components."
Checklist: Pressure equipment inspection; Piping inspection; Valve
inspection; Structural inspection; Equipment inspection; Material
verification; Dimensional inspection; Fabrication surveillance;
Installation inspection.

06. Pipeline Inspection
Description: "Inspection services supporting pipeline fabrication,
construction, and quality activities."
Checklist: Pipe material inspection; Welding inspection; Fit-up
inspection; NDT coordination; Coating inspection; Welding documentation;
Construction surveillance; Pipeline quality documentation.

07. Vendor & Third-Party Inspection
Description: "Independent inspection and surveillance at manufacturers,
suppliers, and fabrication facilities."
Checklist: Material inspection; Manufacturing surveillance; Welding
surveillance; Dimensional inspection; Witness and hold-point inspection;
Testing inspection; Documentation review; Final inspection; Release
documentation.

08. Technical Consultancy
Description: "Practical technical support for project quality and
inspection requirements."
Checklist: Inspection planning; Quality improvement; Welding technical
support; QA/QC consultancy; Inspection documentation; Technical review;
Quality problem solving; Project quality support.

=== 4. INDUSTRIES WE SERVE ===
Heading: "Industries We Serve"
This replaces the old icon-only tile grid — each industry now has a short
description too, so lay it out as a responsive grid of cards (icon,
title, one-line description), 3-4 columns desktop, 1-2 mobile:

Oil & Gas — "Inspection and quality support for upstream, midstream and
downstream projects."
Petrochemical — "Quality surveillance and inspection for process
facilities and associated infrastructure."
Offshore — "Inspection support for offshore platforms, structures, piping
and mechanical systems."
Onshore — "Inspection and QA/QC services for industrial and energy
facilities."
LNG & Energy — "Quality services supporting major energy and
infrastructure projects."
Fabrication & Construction — "Inspection support throughout fabrication,
construction and installation activities."
Pipeline — "Quality and inspection services for pipeline fabrication,
construction and coating."

=== 5. OUR INSPECTION APPROACH (NEW COMPONENT: OurApproach.jsx) ===
Heading: "Our Inspection Approach"
Subheading, styled prominently: "PLAN → INSPECT → VERIFY → REPORT →
IMPROVE"
Lay this out as a 5-step horizontal process flow on desktop (numbered
circles connected by a line/arrow), stacking vertically on mobile:

01. PLAN — "Understand project specifications, drawings, procedures,
ITPs, codes and client requirements."
02. INSPECT — "Perform inspection and surveillance at defined stages of
fabrication, construction and installation."
03. VERIFY — "Verify compliance with approved procedures, specifications,
standards and acceptance criteria."
04. REPORT — "Provide clear, accurate and traceable inspection reports
and quality documentation."
05. IMPROVE — "Identify quality concerns and support clients in
preventing recurrence and improving project performance."

=== 6. CODES & STANDARDS (merge into existing Certifications component)
===
Heading: "Codes & Standards"
Intro line: "Our inspection activities can be performed in accordance
with applicable international codes, standards, specifications and client
requirements, including:"
Badges (same style as the existing certification badges): ASME, API, AWS,
ISO, ASNT, CSWIP, BGAS, "Client Specifications"
Footnote line below the badges: "The applicable requirements will be
established according to the specific project, contract and inspection
scope."

=== 7. WHY CHOOSE RIQS? ===
Heading: "Why Choose RIQS?"
Subheading: "Experience That Adds Value"
Keep the existing two-column checklist layout, update the six items to:
Qualified Professionals — "Inspection activities performed by experienced
and appropriately qualified personnel."
Independent Inspection — "Objective inspection and reporting focused on
technical compliance and quality."
Industry Experience — "Strong understanding of Oil & Gas, offshore,
onshore, fabrication and construction environments."
Quality Focus — "Our approach is based on prevention, compliance,
traceability and continuous improvement."
Clear Reporting — "Accurate and professional inspection reports that
support effective project decision-making."
Client Commitment — "We work closely with clients and project teams to
understand their requirements and deliver practical solutions."

=== 8. QUALITY & INTEGRITY (NEW COMPONENT: QualityIntegrity.jsx) ===
Heading: "Quality & Integrity"
Subheading: "Built on Professionalism. Driven by Quality."
Paragraph 1: "At RIQS, quality is not limited to identifying defects."
Paragraph 2: "Our approach is to prevent defects, identify risks early,
maintain traceability and support continuous improvement."
Paragraph 3: "We believe that effective inspection should provide clients
with confidence that their equipment, materials, fabrication and
construction activities meet the required technical and quality
standards."
Below the paragraphs, a "Our Core Values" sub-heading with 5 value cards
(icon + title + one-line description), grid layout:
INTEGRITY — "We maintain honesty, independence and professional ethics in
every inspection activity."
QUALITY — "We focus on compliance, accuracy, traceability and continual
improvement."
SAFETY — "We promote safe working practices and responsible inspection
activities."
EXCELLENCE — "We continuously strive to improve our technical knowledge
and service delivery."
CLIENT FOCUS — "We understand our client's requirements and provide
practical, responsive solutions."

=== 9. CERTIFICATION & PROFESSIONAL COMPETENCE (NEW COMPONENT:
CertificationCompetence.jsx) ===
Heading: "Certification & Professional Competence"
Paragraph 1: "RIQS is committed to providing services through competent
and appropriately qualified inspection professionals."
Paragraph 2: "Depending on the scope of work, inspection personnel may
hold relevant qualifications and certifications in areas such as:"
Checklist grid: Welding Inspection; Coating Inspection; NDT; Mechanical
Inspection; QA/QC; API Inspection; ISO Quality Management; Client-approved
inspection requirements.
Closing line (smaller, muted text): "Certification details and personnel
qualifications can be provided upon request."

=== 10. DOCUMENTATION & REPORTING (NEW COMPONENT:
DocumentationReporting.jsx) ===
Heading: "Documentation & Reporting"
Paragraph: "Professional documentation is an essential part of our
inspection service."
Sub-line: "Our reporting can include:"
Checklist grid (use a document/report icon): Inspection Reports; Welding
Inspection Reports; NDT Review Records; Coating Inspection Reports;
Material Inspection Reports; Surveillance Reports; NCR Observations;
Punch List Records; Final Inspection Reports; Quality Summary Reports;
Inspection Release Documentation.
Closing line: "All reports are prepared with emphasis on accuracy,
traceability and clear technical communication."

=== 11. OUR CLIENTS & PROJECT PARTNERS (NEW COMPONENT:
ClientsPartners.jsx) ===
Heading: "Our Clients & Project Partners"
Sub-line: "RIQS aims to support:"
Checklist/badge grid: Oil & Gas Operators; EPC Contractors; Engineering
Companies; Fabrication Contractors; Construction Companies; Equipment
Manufacturers; Inspection Agencies; Maintenance Contractors; Industrial
Facilities.
Pull-quote below, styled distinctly: "Your project quality is our
responsibility."

=== 12. REQUEST INSPECTION / GET A QUOTE (update existing Contact
component) ===
Heading: "Request Inspection / Get a Quote"
Subheading: "Need Reliable Inspection Support?"
Paragraph 1: "Tell us about your project, inspection requirement or
quality challenge."
Paragraph 2: "Our team can review your requirements and provide an
appropriate inspection or quality service solution."
Sub-heading: "Contact RIQS"
Company: "RIQS – Ritvish Inspection & Quality Services"
Email: info@riqsinspection.com
Phone: +974 XXX XXXX (placeholder — keep marked as placeholder)
Location: Doha, Qatar
Button: "Contact Us" (keep the existing contact form as-is, just update
the heading/copy around it).

=== 13. FOOTER (update existing Footer component) ===
Company name: "RIQS"
Line: "Ritvish Inspection & Quality Services"
Tagline: "Integrity | Quality | Excellence"
Services line (small text): "Inspection • QA/QC • Welding • NDT • Coating
• Technical Services"
Quick Links row: Home | About Us | Services | Industries | Certifications
| Contact (anchor links to the matching sections)
Copyright line (dynamic year): "© {year} RIQS – Ritvish Inspection &
Quality Services. All Rights Reserved."
Closing line: "Professional Inspection & Quality Solutions for the Energy
and Industrial Sectors."

GENERAL NOTES
- Keep all existing placeholders (logo, phone number) exactly as they are
  — don't touch those, this update is copy/structure only.
- Make sure the 5 new components follow the same file/code conventions as
  the existing components (Tailwind utility classes, the custom
  navy/steel color tokens already defined in tailwind.config.js,
  lucide-react icons, consistent spacing/section padding with the rest of
  the site).
- After making all changes, confirm the project still builds cleanly and
  the dev server starts without errors.
````

---

## Good follow-up prompts after this update

- "The Services section accordions are collapsed by default — make the
  first one open by default so visitors see what's inside."
- "Add subtle scroll-reveal animation to the new sections so they fade/
  slide in as the user scrolls."
- "The Our Inspection Approach section should have connecting arrows
  between the 5 steps on desktop — right now they're just plain cards."
- "Shorten the Services checklist bullets to fit better on mobile — right
  now some wrap awkwardly."
