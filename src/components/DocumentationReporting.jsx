import { FileText } from "lucide-react";

const REPORTS = [
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
];

export default function DocumentationReporting() {
  return (
    <section id="documentation" className="bg-steel-100/40 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
          Transparency
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
          Documentation &amp; Reporting
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Professional documentation is an essential part of our inspection
          service.
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-steel-500">
          Our reporting can include:
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {REPORTS.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-steel-100 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-steel-300">
                <FileText size={20} />
              </span>
              <span className="text-sm font-medium text-navy-900">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-sm text-gray-600">
          All reports are prepared with emphasis on accuracy, traceability
          and clear technical communication.
        </p>
      </div>
    </section>
  );
}
