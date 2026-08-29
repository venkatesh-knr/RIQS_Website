import logo from "../assets/logo.png";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why Us", href: "#why-us" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 py-12 text-steel-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            {/* Light backing chip keeps the dark-navy wordmark legible
                against the dark footer background. Swap src/assets/logo.png
                for an updated logo file later if needed. */}
            <span className="inline-flex items-center rounded-md bg-white/95 px-3 py-2 shadow-sm">
              <img src={logo} alt="RIQS logo" className="h-9 w-auto" />
            </span>
            <p className="mt-4 text-sm font-medium text-steel-300">
              Integrity | Quality | Excellence
            </p>
            <p className="mt-3 text-sm text-steel-100/80">
              Providing trusted inspection and quality solutions worldwide.
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
              <li>info@riqsinspection.com</li>
              <li>www.riqsinspection.com</li>
              <li>+974 XXX XXXX (placeholder)</li>
              <li>Doha, Qatar</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-steel-700/40 pt-6 text-center text-xs text-steel-100/60">
          © {year} RIQS – Ritvish Inspection &amp; Quality Services. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
