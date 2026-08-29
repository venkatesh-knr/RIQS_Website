import { ShieldCheck, Award, Users } from "lucide-react";

const STATS = [
  { icon: ShieldCheck, label: "Independent QA/QC" },
  { icon: Award, label: "International Standards" },
  { icon: Users, label: "Experienced Inspectors" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            About RIQS
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-steel-500">
            Quality You Can Trust. Inspection You Can Rely On.
          </p>
        </div>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-gray-600 sm:text-lg">
          <p>
            RIQS is an independent inspection and quality services company
            focused on delivering reliable, technically sound, and
            client-oriented inspection solutions.
          </p>
          <p>
            Our objective is to help clients identify quality risks at an
            early stage, ensure compliance with applicable codes and
            specifications, and support the successful delivery of projects.
          </p>
          <p>
            Our services cover activities from material receiving and
            fabrication through welding, NDT, coating, construction,
            installation, testing, and final inspection.
          </p>
          <p>
            With a strong understanding of international standards and
            industrial inspection practices, RIQS aims to become a trusted
            technical partner for clients across the energy and industrial
            sectors.
          </p>
        </div>

        <div className="mt-10 rounded-xl border-l-4 border-steel-500 bg-steel-100/40 p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold text-navy-900">
            Our Commitment
          </h3>
          <p className="mt-2 text-base italic leading-relaxed text-navy-800 sm:text-lg">
            &ldquo;We don&apos;t just inspect. We help ensure quality,
            integrity and confidence throughout the project.&rdquo;
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {STATS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl border border-steel-100 bg-steel-100/40 p-6 text-center shadow-sm"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-steel-300">
                <Icon size={28} />
              </span>
              <span className="text-sm font-semibold text-navy-900">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
