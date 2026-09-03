import { ClipboardList, Search, CheckCircle2, FileText, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    name: "Plan",
    desc: "Understand project specifications, drawings, procedures, ITPs, codes and client requirements.",
  },
  {
    icon: Search,
    name: "Inspect",
    desc: "Perform inspection and surveillance at defined stages of fabrication, construction and installation.",
  },
  {
    icon: CheckCircle2,
    name: "Verify",
    desc: "Verify compliance with approved procedures, specifications, standards and acceptance criteria.",
  },
  {
    icon: FileText,
    name: "Report",
    desc: "Provide clear, accurate and traceable inspection reports and quality documentation.",
  },
  {
    icon: TrendingUp,
    name: "Improve",
    desc: "Identify quality concerns and support clients in preventing recurrence and improving project performance.",
  },
];

export default function OurApproach() {
  return (
    <section id="approach" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
            How We Work
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Our Inspection Approach
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-steel-500">
            Plan &rarr; Inspect &rarr; Verify &rarr; Report &rarr; Improve
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {STEPS.map(({ icon: Icon, name, desc }, index) => (
            <div key={name} className="relative flex flex-col items-center text-center">
              {index < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-steel-100 lg:block"
                />
              )}
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-steel-300 ring-8 ring-white">
                <Icon size={28} />
              </span>
              <span className="mt-4 text-xs font-bold tracking-wide text-amber-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-heading text-lg font-bold text-navy-900">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
