import { Mail } from "lucide-react";
import Reveal from "./Reveal";

// The disciplines the site already lists under Core Services, so the band
// promises nothing the rest of the page doesn't.
const DISCIPLINES = [
  "Welding Inspection",
  "QA/QC",
  "NDT",
  "Coating Inspection",
  "Mechanical",
  "Pipeline",
];

// Applications arrive by plain email to their own mailbox, kept apart from
// quote requests. quality@ritvish.com is a Zoho mailbox on the company domain.
const CV_EMAIL = "quality@ritvish.com";

// A slim band between Contact and the footer rather than a full section: with
// no open roles to list it would be mostly empty, and it stays out of the nav
// (nine links already fill the bar) — the footer links here instead.
// scroll-mt clears the fixed navbar when the footer link jumps to it.
export default function Careers() {
  return (
    <section
      id="careers"
      className="scroll-mt-20 bg-steel-100/40 py-14 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8">
        <Reveal className="lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            Careers
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Build your career with RIQS
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-600">
            We&apos;re always glad to hear from experienced inspectors and
            engineers. Email us your CV and the discipline you work in, and
            we&apos;ll be in touch when a suitable role opens up.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {DISCIPLINES.map((d) => (
              <li
                key={d}
                className="rounded-full border border-steel-100 bg-white px-3.5 py-1.5 text-xs font-medium text-navy-900"
              >
                {d}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-2 lg:justify-self-end">
          <a
            href={`mailto:${CV_EMAIL}?subject=${encodeURIComponent("Career enquiry")}`}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-800 sm:w-auto"
          >
            <Mail size={18} aria-hidden="true" />
            {CV_EMAIL}
          </a>
          <p className="mt-3 text-xs leading-relaxed text-gray-500">
            Attach your CV to your email.{" "}
            <a
              href={`${import.meta.env.BASE_URL}privacy.html`}
              className="font-medium text-steel-600 underline hover:text-steel-500"
            >
              Privacy Notice
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
