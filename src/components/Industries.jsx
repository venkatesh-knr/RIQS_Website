import {
  Fuel,
  FlaskConical,
  Snowflake,
  Anchor,
  Factory,
  GitBranch,
  Zap,
  Building2,
} from "lucide-react";

const INDUSTRIES = [
  { icon: Fuel, name: "Oil & Gas" },
  { icon: FlaskConical, name: "Petrochemical" },
  { icon: Snowflake, name: "LNG" },
  { icon: Anchor, name: "Offshore Platforms" },
  { icon: Factory, name: "Refineries" },
  { icon: GitBranch, name: "Pipelines" },
  { icon: Zap, name: "Power Plants" },
  { icon: Building2, name: "Construction & Infrastructure" },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Industries We Serve
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 rounded-xl border border-steel-700/60 bg-navy-800/60 p-6 text-center transition-colors hover:border-steel-400"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-steel-600/30 text-steel-300">
                <Icon size={24} />
              </span>
              <span className="text-sm font-semibold text-steel-100">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
