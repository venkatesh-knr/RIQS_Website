import { ShieldCheck, Award, HardHat, Star, Users } from "lucide-react";
import Reveal from "./Reveal";
import qualityPhoto from "../assets/quality-photo.webp";

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
    <section id="quality" className="section-y bg-navy-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          {/* A jack-up rig at sunset, RIQS's own photograph. On desktop the
              panel stretches to the height of the text beside it (min-h-56
              keeps it substantial on mobile) and object-cover crops the
              portrait photo to fit. The 92% vertical focus keeps the rig
              and a strip of sea in frame; the rig is in the photo's bottom
              fifth, so a centred crop would show only sky. */}
          <div className="order-2 lg:order-1 lg:col-span-2">
            <div className="relative h-full min-h-56 overflow-hidden rounded-2xl bg-navy-950">
              <img
                src={qualityPhoto}
                alt="A jack-up drilling rig silhouetted against a sunset over open water"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[50%_92%]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent"
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

            <div className="mt-5 space-y-3 text-base leading-relaxed text-steel-100/90">
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

        <h3 className="mt-8 text-center font-heading text-xl font-bold text-white">
          Our Core Values
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map(({ icon: Icon, name, desc }, i) => (
            // Static card: nothing here is clickable, so no hover lift.
            <Reveal
              key={name}
              delay={(i % 5) * 80}
              className="flex flex-col items-center gap-2.5 rounded-xl border border-steel-700/60 bg-navy-800/60 p-5 text-center shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950 text-steel-300">
                <Icon size={20} />
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
