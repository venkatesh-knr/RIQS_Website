import { ShieldCheck, Award, Users } from "lucide-react";

const STATS = [
  { icon: ShieldCheck, label: "Independent QA/QC" },
  { icon: Award, label: "International Standards" },
  { icon: Users, label: "Experienced Inspectors" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Who We Are
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
              About RIQS
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-steel-500">
              Quality You Can Trust. Inspection You Can Rely On.
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              <p>
                RIQS is an independent inspection and quality services
                company focused on delivering reliable, technically sound,
                and client-oriented inspection solutions.
              </p>
              <p>
                Our objective is to help clients identify quality risks at an
                early stage, ensure compliance with applicable codes and
                specifications, and support the successful delivery of
                projects.
              </p>
              <p>
                Our services cover activities from material receiving and
                fabrication through welding, NDT, coating, construction,
                installation, testing, and final inspection.
              </p>
              <p>
                With a strong understanding of international standards and
                industrial inspection practices, RIQS aims to become a
                trusted technical partner for clients across the energy and
                industrial sectors.
              </p>
            </div>

            <div className="mt-8 rounded-xl border-l-4 border-amber-500 bg-steel-100/40 p-6 sm:p-8">
              <h3 className="font-heading text-lg font-bold text-navy-900">
                Our Commitment
              </h3>
              <p className="mt-2 text-base italic leading-relaxed text-navy-800 sm:text-lg">
                &ldquo;We don&apos;t just inspect. We help ensure quality,
                integrity and confidence throughout the project.&rdquo;
              </p>
            </div>
          </div>

          {/* Supporting visual block — a stylized icon/stat panel standing in
              for a photo of inspectors or a facility. Drop a real photo in
              as `src/assets/about-photo.jpg` and swap this panel's pattern
              background for a cover-and-centered background-image if preferred. */}
          <div className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-2xl bg-navy-900 p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, transparent 48%, #3B6EA5 49%, #3B6EA5 51%, transparent 52%)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative flex h-full flex-col justify-center gap-6">
                {STATS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-steel-600/30 text-steel-300">
                      <Icon size={28} />
                    </span>
                    <span className="text-base font-semibold text-white">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
