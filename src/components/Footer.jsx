import ritvishLogo from "../assets/ritvish-logo.webp";

const QUICK_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
  // A separate page, so it needs the build's base path, not a bare "#".
  { label: "Privacy Notice", href: `${import.meta.env.BASE_URL}privacy.html` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  // Extra bottom padding on phones so the sticky quote bar doesn't cover the
  // copyright line.
  return (
    <footer className="border-t-2 border-amber-500 bg-navy-950 pb-28 pt-12 text-steel-100 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            {/* Parent brand only, as in the navbar — the RIQS mark leads the
                hero. The light chip keeps the dark-navy wordmark legible on
                the dark footer. */}
            <span className="inline-flex items-center rounded-md bg-white/95 px-3 py-2 shadow-sm">
              <img src={ritvishLogo} alt="Ritvish" className="h-9 w-auto" />
            </span>
            <p className="mt-4 text-sm font-medium text-steel-300">
              Integrity | Quality | Excellence
            </p>
            <p className="mt-2 text-xs text-steel-100/70">
              RIQS is a division of Ritvish Services.
            </p>
            <p className="mt-3 text-xs text-steel-100/70">
              Inspection • QA/QC • Welding • NDT • Coating • Technical
              Services
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-steel-100/80 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-steel-100/80">
              <li>info@ritvish.com</li>
              <li>ritvish.com</li>
              <li>Trichy, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-steel-700/40 pt-6 text-center text-xs text-steel-100/60">
          <p>
            © {year} RIQS – Ritvish Inspection &amp; Quality Services. All
            Rights Reserved.
          </p>
          <p className="mt-1">
            Professional Inspection &amp; Quality Solutions for the Energy
            and Industrial Sectors.
          </p>
        </div>
      </div>
    </footer>
  );
}
