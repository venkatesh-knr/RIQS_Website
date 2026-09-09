import { Fuel, FlaskConical, Anchor, Factory, Zap, HardHat, GitBranch } from "lucide-react";
import Reveal from "./Reveal";

const INDUSTRIES = [
  {
    icon: Fuel,
    name: "Oil & Gas",
    desc: "Inspection and quality support for upstream, midstream and downstream projects.",
  },
  {
    icon: FlaskConical,
    name: "Petrochemical",
    desc: "Quality surveillance and inspection for process facilities and associated infrastructure.",
  },
  {
    icon: Anchor,
    name: "Offshore",
    desc: "Inspection support for offshore platforms, structures, piping and mechanical systems.",
  },
  {
    icon: Factory,
    name: "Onshore",
    desc: "Inspection and QA/QC services for industrial and energy facilities.",
  },
  {
    icon: Zap,
    name: "LNG & Energy",
    desc: "Quality services supporting major energy and infrastructure projects.",
  },
  {
    icon: HardHat,
    name: "Fabrication & Construction",
    desc: "Inspection support throughout fabrication, construction and installation activities.",
  },
  {
    icon: GitBranch,
    name: "Pipeline",
    desc: "Quality and inspection services for pipeline fabrication, construction and coating.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Who We Serve
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Industries We Serve
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {INDUSTRIES.map(({ icon: Icon, name, desc }, i) => (
            // Static card: no hover lift, because nothing here is clickable.
            <Reveal
              key={name}
              delay={(i % 4) * 80}
              className="flex flex-col items-center gap-3 rounded-xl border border-steel-700/60 bg-navy-800/60 p-6 text-center shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950 text-steel-300">
                <Icon size={24} />
              </span>
              <span className="text-sm font-semibold text-steel-100">
                {name}
              </span>
              <p className="text-xs leading-relaxed text-steel-100/70">
                {desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
