import { Building2 } from "lucide-react";

const PARTNERS = [
  "Oil & Gas Operators",
  "EPC Contractors",
  "Engineering Companies",
  "Fabrication Contractors",
  "Construction Companies",
  "Equipment Manufacturers",
  "Inspection Agencies",
  "Maintenance Contractors",
  "Industrial Facilities",
];

export default function ClientsPartners() {
  return (
    <section id="clients" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
          Our Clients &amp; Project Partners
        </h2>
        <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-steel-500">
          RIQS aims to support:
        </p>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {PARTNERS.map((partner) => (
            <div
              key={partner}
              className="flex items-center gap-2 rounded-full border border-steel-100 bg-steel-100/30 px-5 py-2.5"
            >
              <Building2 className="shrink-0 text-steel-500" size={18} />
              <span className="text-sm font-medium text-navy-900">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border-l-4 border-steel-500 bg-steel-100/40 p-6 sm:p-8">
          <p className="font-heading text-xl font-bold text-navy-900 sm:text-2xl">
            &ldquo;Your project quality is our responsibility.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
