import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.webp";

// In page order, one entry per section, so every section is reachable from
// the nav and the active-section highlight below can track all of them.
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Approach", href: "#approach" },
  { label: "Certifications", href: "#certifications" },
  { label: "Why Us", href: "#why-us" },
  { label: "Quality", href: "#quality" },
  { label: "Working With Us", href: "#working" },
  { label: "Contact", href: "#contact" },
];

// Logo image lives at src/assets/logo.webp (icon + wordmark, cropped and
// cleaned up from the source file RIQS_logo.jpg, then resized to 80px tall —
// 2x the largest rendered size). Swap the import above to replace it with an
// updated logo file later; keep it small, the original 520px PNG was 145KB.
//
// It links to #top, the zero-height anchor at the start of the page in
// App.jsx, rather than to this fixed header.
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
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href),
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape, and stop the page behind it scrolling
  // while it's open.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-900/95 shadow-lg shadow-black/20 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <LogoBadge />

        {/* Nine links need roughly 1100px alongside the logo and the quote
            button, so the inline nav starts at xl; below that the menu
            button takes over. */}
        <ul className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => {
            const active = activeHref === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative whitespace-nowrap pb-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-200 ${
                    active
                      ? "text-white after:w-full"
                      : "text-steel-100/90 after:w-0 hover:text-white hover:after:w-full"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden whitespace-nowrap rounded-md bg-steel-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-steel-400 lg:block"
          >
            Request a Quote
          </a>

          <button
            type="button"
            className="text-white xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          // Scrolls internally: with nine links the list can outgrow a phone
          // held in landscape, and the page behind it is scroll-locked.
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-steel-700/50 bg-navy-900 xl:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-navy-800 hover:text-white ${
                    activeHref === link.href
                      ? "bg-navy-800 text-white"
                      : "text-steel-100/90"
                  }`}
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
