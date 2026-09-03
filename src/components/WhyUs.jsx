import { CheckCircle2 } from "lucide-react";

const REASONS = [
  {
    title: "Qualified Professionals",
    desc: "Inspection activities performed by experienced and appropriately qualified personnel.",
  },
  {
    title: "Independent Inspection",
    desc: "Objective inspection and reporting focused on technical compliance and quality.",
  },
  {
    title: "Industry Experience",
    desc: "Strong understanding of Oil & Gas, offshore, onshore, fabrication and construction environments.",
  },
  {
    title: "Quality Focus",
    desc: "Our approach is based on prevention, compliance, traceability and continuous improvement.",
  },
  {
    title: "Clear Reporting",
    desc: "Accurate and professional inspection reports that support effective project decision-making.",
  },
  {
    title: "Client Commitment",
    desc: "We work closely with clients and project teams to understand their requirements and deliver practical solutions.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
            The RIQS Difference
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Why Choose RIQS?
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-steel-500">
            Experience That Adds Value
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {REASONS.map(({ title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-lg border border-steel-100 bg-steel-100/30 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-steel-300">
                <CheckCircle2 size={20} />
              </span>
              <div>
                <span className="text-base font-semibold text-navy-900">
                  {title}
                </span>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
