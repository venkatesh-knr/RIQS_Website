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
        <h2 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
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
              className="flex items-center gap-3 rounded-lg border border-steel-100 bg-white p-4 shadow-sm"
            >
              <FileText className="shrink-0 text-steel-500" size={22} />
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
