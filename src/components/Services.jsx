import {
  Flame,
  ClipboardCheck,
  Radar,
  PaintBucket,
  GitBranch,
  Gauge,
  Handshake,
  HardHat,
  Wrench,
  Lightbulb,
} from "lucide-react";

const SERVICES = [
  {
    icon: Flame,
    name: "Welding Inspection (CSWIP)",
    blurb:
      "CSWIP-certified inspectors verifying weld quality and procedure compliance.",
  },
  {
    icon: ClipboardCheck,
    name: "QA/QC Inspection",
    blurb:
      "End-to-end quality assurance and control across every project phase.",
  },
  {
    icon: Radar,
    name: "NDT Coordination",
    blurb:
      "Coordinating non-destructive testing to confirm material and joint integrity.",
  },
  {
    icon: PaintBucket,
    name: "Coating & Painting Inspection (BGAS)",
    blurb:
      "BGAS-qualified inspection of surface preparation and protective coatings.",
  },
  {
    icon: GitBranch,
    name: "Pipeline Inspection",
    blurb:
      "Assessing pipeline construction and integrity against code requirements.",
  },
  {
    icon: Gauge,
    name: "Pressure Equipment Inspection",
    blurb:
      "Verifying pressure vessels and equipment meet safety and design codes.",
  },
  {
    icon: Handshake,
    name: "Vendor & Third-Party Inspection",
    blurb:
      "Independent oversight of vendor deliverables and supplier quality.",
  },
  {
    icon: HardHat,
    name: "Fabrication & Construction Surveillance",
    blurb:
      "On-site surveillance ensuring fabrication meets specification and code.",
  },
  {
    icon: Wrench,
    name: "Mechanical Completion Inspection",
    blurb:
      "Verifying systems are complete, tested, and ready for commissioning.",
  },
  {
    icon: Lightbulb,
    name: "Technical Consultancy",
    blurb:
      "Expert guidance on quality, inspection strategy, and compliance matters.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-steel-100/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, name, blurb }) => (
            <div
              key={name}
              className="group rounded-xl border border-transparent bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-steel-400 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-steel-300 transition-colors group-hover:bg-steel-500 group-hover:text-white">
                <Icon size={24} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
