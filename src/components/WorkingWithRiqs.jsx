import { BadgeCheck, FileText, Building2 } from "lucide-react";
import Reveal from "./Reveal";

// Consolidates what used to be three separate full-height sections
// (Certification & Competence, Documentation & Reporting, Clients &
// Partners). Each was a heading plus a short list, and stacking them made
// the page far longer than the content justified. Side by side on desktop,
// stacked on mobile — nothing is hidden behind a tab.
const COLUMNS = [
  {
    icon: BadgeCheck,
    title: "Certification & Competence",
    intro:
      "Inspection personnel may hold qualifications and certifications in areas such as:",
    items: [
      "Welding Inspection",
      "Coating Inspection",
      "NDT",
      "Mechanical Inspection",
      "QA/QC",
      "API Inspection",
      "ISO Quality Management",
      "Client-approved inspection requirements",
    ],
    footnote:
      "Certification details and personnel qualifications can be provided upon request.",
  },
  {
    icon: FileText,
    title: "Documentation & Reporting",
    intro:
      "Professional documentation is an essential part of our service. Our reporting can include:",
    items: [
      "Inspection Reports",
      "Welding Inspection Reports",
      "NDT Review Records",
      "Coating Inspection Reports",
      "Material Inspection Reports",
      "Surveillance Reports",
      "NCR Observations",
      "Punch List Records",
      "Final Inspection Reports",
      "Quality Summary Reports",
      "Inspection Release Documentation",
    ],
    footnote:
      "All reports are prepared with emphasis on accuracy, traceability and clear technical communication.",
  },
  {
    icon: Building2,
    title: "Clients & Project Partners",
    intro: "RIQS aims to support:",
    items: [
      "Oil & Gas Operators",
      "EPC Contractors",
      "Engineering Companies",
      "Fabrication Contractors",
      "Construction Companies",
      "Equipment Manufacturers",
      "Inspection Agencies",
      "Maintenance Contractors",
      "Industrial Facilities",
    ],
    footnote: null,
  },
];

export default function WorkingWithRiqs() {
  return (
    <section id="working" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            How We Deliver
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Working With RIQS
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Competent people, traceable documentation, and experience across
            the project supply chain.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {COLUMNS.map(({ icon: Icon, title, intro, items, footnote }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="flex h-full flex-col rounded-xl border border-steel-100 bg-steel-100/30 p-6 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-steel-300">
                  <Icon size={24} />
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {intro}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-navy-900"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {footnote && (
                  <p className="mt-auto pt-5 text-xs leading-relaxed text-gray-500">
                    {footnote}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-xl border-l-4 border-amber-500 bg-steel-100/40 p-6 text-center sm:p-8">
            <p className="font-heading text-xl font-bold text-navy-900 sm:text-2xl">
              &ldquo;Your project quality is our responsibility.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
