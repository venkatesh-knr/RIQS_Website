import { CheckCircle2 } from "lucide-react";

const REASONS = [
  "Experienced and Certified Inspectors",
  "International Codes & Standards",
  "Independent Quality Assurance",
  "Timely Reporting",
  "Client-Focused Solutions",
  "Commitment to Safety and Integrity",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Why Choose RIQS?
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <div
              key={reason}
              className="flex items-start gap-3 rounded-lg border border-steel-100 bg-steel-100/30 p-5"
            >
              <CheckCircle2
                className="mt-0.5 shrink-0 text-steel-500"
                size={24}
              />
              <span className="text-base font-medium text-navy-900">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
