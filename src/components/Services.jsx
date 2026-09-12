import { useId, useRef } from "react";
import Reveal from "./Reveal";
import {
  Flame,
  ClipboardCheck,
  Radar,
  PaintBucket,
  Wrench,
  GitBranch,
  Handshake,
  Lightbulb,
  ChevronRight,
  Check,
  X,
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

// Each card opens its full scope of work in a modal <dialog>. This replaced
// an inline accordion that pushed the rest of the page down by ~370px
// whenever a card expanded; a modal leaves the page layout untouched. The
// native dialog supplies the focus trap, Escape-to-close and aria-modal.
function ServiceCard({ index, icon: Icon, name, blurb, checklist }) {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  // Set when the dialog closes via its "Request a Quote" link, so focus
  // follows the visitor to the form instead of snapping back to the card.
  const goingToContact = useRef(false);
  const titleId = useId();
  const number = String(index + 1).padStart(2, "0");

  const openDialog = () => {
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    document.body.style.overflow = "";
    dialogRef.current?.close();
  };

  // Runs however the dialog closed: close button, Escape, backdrop click,
  // or the quote link.
  const handleClose = () => {
    document.body.style.overflow = "";
    const target = goingToContact.current
      ? document.getElementById("name")
      : triggerRef.current;
    goingToContact.current = false;
    target?.focus({ preventScroll: true });
  };

  // The inner panel fills the dialog box, so a click whose target is the
  // <dialog> element itself can only have landed on the backdrop.
  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) closeDialog();
  };

  return (
    <div className="relative flex h-full flex-col rounded-xl border border-transparent bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg">
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-steel-300">
            <Icon size={24} />
          </span>
          <div>
            <span className="text-xs font-bold tracking-wide text-amber-700">
              {number}
            </span>
            <h3 className="text-lg font-semibold text-navy-900">
              {/* Stretched ::after overlay makes the whole card the click
                  target while the accessible name stays the service title. */}
              <button
                ref={triggerRef}
                type="button"
                onClick={openDialog}
                aria-haspopup="dialog"
                className="text-left after:absolute after:inset-0 after:rounded-xl after:content-['']"
              >
                {name}
              </button>
            </h3>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-gray-600">{blurb}</p>

        {/* Decorative: the button already announces that it opens details. */}
        <span
          aria-hidden="true"
          className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-semibold text-steel-500"
        >
          View full scope
          <ChevronRight size={16} />
        </span>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={handleClose}
        onClick={handleDialogClick}
        className="m-auto w-[calc(100%-2rem)] max-w-2xl rounded-xl border-0 bg-white p-0 text-left shadow-2xl backdrop:bg-navy-950/70 backdrop:backdrop-blur-sm"
      >
        <div className="max-h-[90svh] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-steel-300">
                <Icon size={24} />
              </span>
              <div>
                <span className="text-xs font-bold tracking-wide text-amber-700">
                  {number}
                </span>
                <h3
                  id={titleId}
                  className="font-heading text-2xl font-bold text-navy-900"
                >
                  {name}
                </h3>
              </div>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              aria-label={`Close ${name} details`}
              className="-mr-2 -mt-2 rounded-md p-2 text-gray-500 transition-colors hover:bg-steel-100 hover:text-navy-900"
            >
              <X size={20} />
            </button>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            {blurb}
          </p>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            Scope includes
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <Check size={16} className="mt-0.5 shrink-0 text-steel-500" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-end border-t border-steel-100 pt-6">
            <a
              href="#contact"
              onClick={() => {
                goingToContact.current = true;
                closeDialog();
              }}
              className="rounded-md bg-steel-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-steel-400"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-steel-100/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            What We Do
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Our Core Services
          </h2>
        </Reveal>

        {/* Default stretch alignment gives each row equal-height cards now
            that nothing expands in place. */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.name} delay={(index % 3) * 90}>
              <ServiceCard index={index} {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
