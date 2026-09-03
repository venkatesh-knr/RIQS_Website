import { ShieldCheck, Award, HardHat, Star, Users } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    name: "Integrity",
    desc: "We maintain honesty, independence and professional ethics in every inspection activity.",
  },
  {
    icon: Award,
    name: "Quality",
    desc: "We focus on compliance, accuracy, traceability and continual improvement.",
  },
  {
    icon: HardHat,
    name: "Safety",
    desc: "We promote safe working practices and responsible inspection activities.",
  },
  {
    icon: Star,
    name: "Excellence",
    desc: "We continuously strive to improve our technical knowledge and service delivery.",
  },
  {
    icon: Users,
    name: "Client Focus",
    desc: "We understand our client's requirements and provide practical, responsive solutions.",
  },
];

export default function QualityIntegrity() {
  return (
    <section id="quality" className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Supporting visual block — a large stylized icon panel standing
              in for a photo. Drop a real photo in as
              `src/assets/quality-photo.jpg` and swap the pattern background
              for a cover-and-centered background-image if preferred. */}
          <div className="order-2 lg:order-1 lg:col-span-2">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-navy-950">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(139,179,217,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139,179,217,0.2) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              <ShieldCheck
                className="relative text-steel-500/70"
                size={140}
                strokeWidth={1}
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Our Values
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
              Quality &amp; Integrity
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-steel-300">
              Built on Professionalism. Driven by Quality.
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-steel-100/90 sm:text-lg">
              <p>At RIQS, quality is not limited to identifying defects.</p>
              <p>
                Our approach is to prevent defects, identify risks early,
                maintain traceability and support continuous improvement.
              </p>
              <p>
                We believe that effective inspection should provide clients
                with confidence that their equipment, materials, fabrication
                and construction activities meet the required technical and
                quality standards.
              </p>
            </div>
          </div>
        </div>

        <h3 className="mt-16 text-center font-heading text-xl font-bold text-white">
          Our Core Values
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 rounded-xl border border-steel-700/60 bg-navy-800/60 p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
