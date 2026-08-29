import { ShieldCheck, Award, Users } from "lucide-react";

const STATS = [
  { icon: ShieldCheck, label: "Independent QA/QC" },
  { icon: Award, label: "International Standards" },
  { icon: Users, label: "Experienced Inspectors" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            RIQS is committed to providing reliable inspection and quality
            assurance services to the oil &amp; gas, petrochemical, offshore,
            onshore, and construction industries. Our experienced inspectors
            help clients achieve the highest standards of safety, quality, and
            regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
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
