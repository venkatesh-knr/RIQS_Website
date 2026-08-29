import { BadgeCheck } from "lucide-react";

const AREAS = [
  "Welding Inspection",
  "Coating Inspection",
  "NDT",
  "Mechanical Inspection",
  "QA/QC",
  "API Inspection",
  "ISO Quality Management",
  "Client-approved inspection requirements",
];

export default function CertificationCompetence() {
  return (
    <section id="competence" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
          Certification &amp; Professional Competence
        </h2>

        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
          <p>
            RIQS is committed to providing services through competent and
            appropriately qualified inspection professionals.
          </p>
          <p>
            Depending on the scope of work, inspection personnel may hold
            relevant qualifications and certifications in areas such as:
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 rounded-lg border border-steel-100 bg-steel-100/30 p-4"
            >
              <BadgeCheck className="shrink-0 text-steel-500" size={22} />
              <span className="text-sm font-medium text-navy-900">
                {area}
              </span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-xs text-gray-500">
          Certification details and personnel qualifications can be provided
          upon request.
        </p>
      </div>
    </section>
  );
}
