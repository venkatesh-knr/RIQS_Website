import { useState } from "react";
import {
  Flame,
  ClipboardCheck,
  Radar,
  PaintBucket,
  Wrench,
  GitBranch,
  Handshake,
  Lightbulb,
  ChevronDown,
  Check,
} from "lucide-react";

const SERVICES = [
  {
    icon: Flame,
    name: "Welding Inspection",
    blurb:
      "Comprehensive welding inspection services covering fabrication and construction activities.",
    checklist: [
      "WPS/PQR review",
      "Welder qualification verification",
      "Fit-up inspection",
      "Welding parameter monitoring",
      "Pre-weld inspection",
      "In-process welding inspection",
      "Visual examination",
      "PWHT monitoring",
      "Weld repair monitoring",
      "Final weld inspection",
      "Weld documentation and traceability",
      "Weld map and weld summary review",
    ],
  },
  {
    icon: ClipboardCheck,
    name: "QA/QC Inspection",
    blurb:
      "Professional quality assurance and quality control support throughout project execution.",
    checklist: [
      "Quality surveillance",
      "Inspection & Test Plan review",
      "Quality documentation review",
      "Material traceability",
      "Inspection coordination",
      "NCR follow-up",
      "Quality records review",
      "Final documentation review",
      "QA/QC audits",
      "Construction quality surveillance",
    ],
  },
  {
    icon: Radar,
    name: "NDT Inspection & Coordination",
    blurb:
      "Support for non-destructive examination activities to verify weld and material integrity.",
    checklist: [
      "Radiographic Testing (RT)",
      "Ultrasonic Testing (UT)",
      "Magnetic Particle Testing (MT)",
      "Liquid Penetrant Testing (PT)",
      "Visual Testing (VT)",
      "NDT procedure review",
      "NDT coordination",
      "NDT report review",
      "Acceptance criteria verification",
    ],
  },
  {
    icon: PaintBucket,
    name: "Coating & Painting Inspection",
    blurb:
      "Inspection of protective coating systems to ensure durability and compliance.",
    checklist: [
      "Surface preparation inspection",
      "Environmental condition monitoring",
      "Surface profile measurement",
      "Dust contamination inspection",
      "Soluble salt testing",
      "Coating application inspection",
      "Wet film thickness measurement",
      "Dry film thickness measurement",
      "Holiday detection",
      "Adhesion testing",
      "Final coating inspection",
      "Coating failure assessment",
    ],
  },
  {
    icon: Wrench,
    name: "Mechanical Inspection",
    blurb: "Inspection support for mechanical equipment and components.",
    checklist: [
      "Pressure equipment inspection",
      "Piping inspection",
      "Valve inspection",
      "Structural inspection",
      "Equipment inspection",
      "Material verification",
      "Dimensional inspection",
      "Fabrication surveillance",
      "Installation inspection",
    ],
  },
  {
    icon: GitBranch,
    name: "Pipeline Inspection",
    blurb:
      "Inspection services supporting pipeline fabrication, construction, and quality activities.",
    checklist: [
      "Pipe material inspection",
      "Welding inspection",
      "Fit-up inspection",
      "NDT coordination",
      "Coating inspection",
      "Welding documentation",
      "Construction surveillance",
      "Pipeline quality documentation",
    ],
  },
  {
    icon: Handshake,
    name: "Vendor & Third-Party Inspection",
    blurb:
      "Independent inspection and surveillance at manufacturers, suppliers, and fabrication facilities.",
    checklist: [
      "Material inspection",
      "Manufacturing surveillance",
      "Welding surveillance",
      "Dimensional inspection",
      "Witness and hold-point inspection",
      "Testing inspection",
      "Documentation review",
      "Final inspection",
      "Release documentation",
    ],
  },
  {
    icon: Lightbulb,
    name: "Technical Consultancy",
    blurb:
      "Practical technical support for project quality and inspection requirements.",
    checklist: [
      "Inspection planning",
      "Quality improvement",
      "Welding technical support",
      "QA/QC consultancy",
      "Inspection documentation",
      "Technical review",
      "Quality problem solving",
      "Project quality support",
    ],
  },
];

function ServiceCard({ index, icon: Icon, name, blurb, checklist }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-transparent bg-white p-6 shadow-sm transition-all duration-200 hover:border-steel-400 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-steel-300">
            <Icon size={24} />
          </span>
          <div>
            <span className="text-xs font-bold tracking-wide text-steel-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold text-navy-900">{name}</h3>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-600">{blurb}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-steel-500 transition-colors hover:text-steel-600"
      >
        {open ? "Hide details" : "View details"}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="mt-4 space-y-2 border-t border-steel-100 pt-4">
          {checklist.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <Check size={16} className="mt-0.5 shrink-0 text-steel-500" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-steel-100/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Our Core Services
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.name} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
