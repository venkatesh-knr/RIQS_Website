import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

// Persistent quote CTA pinned to the bottom of the screen on phones, where
// the hero buttons scroll out of view almost immediately. Hidden on desktop,
// where the navbar keeps a "Request a Quote" button visible at all times.
export default function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show once the hero (and its own CTAs) has scrolled past.
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-steel-700/50 bg-navy-900/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Email button: no phone number is published. Swap this for a tel: link
          if a number is added to Contact.jsx / Footer.jsx later. */}
      <a
        href="mailto:info@ritvish.com"
        aria-label="Email RIQS"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-steel-400/60 text-steel-100 transition-colors hover:bg-white/5"
      >
        <Mail size={18} />
      </a>
      <a
        href="#contact"
        className="flex h-11 flex-1 items-center justify-center rounded-md bg-steel-500 text-sm font-semibold text-white transition-colors hover:bg-steel-400"
      >
        Request a Quote
      </a>
    </div>
  );
}
