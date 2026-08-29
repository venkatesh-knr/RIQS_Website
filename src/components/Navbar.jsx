import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why Us", href: "#why-us" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

// Logo image lives at src/assets/logo.png (icon + wordmark, cropped and
// cleaned up from the source file RIQS_logo.jpg). Swap the import above to
// replace it with an updated logo file later.
function LogoBadge() {
  return (
    <a href="#top" className="flex items-center gap-3">
      {/* Light backing chip: the logo's wordmark is dark navy, so it needs a
          light surface to stay legible against the dark navbar background. */}
      <span className="flex items-center rounded-md bg-white/95 px-2.5 py-1.5 shadow-sm">
        <img src={logo} alt="RIQS logo" className="h-8 w-auto sm:h-9" />
      </span>
      <span className="hidden text-[11px] font-medium leading-tight text-steel-300 md:block">
        Ritvish Inspection
        <br />& Quality Services
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-900/95 shadow-lg shadow-black/20 backdrop-blur"
          : "bg-navy-900/70 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <LogoBadge />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-steel-100/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-md bg-steel-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-steel-400"
          >
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-steel-700/50 bg-navy-900 lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-steel-100/90 hover:bg-navy-800 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-steel-500 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-steel-400"
              >
                Request a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
