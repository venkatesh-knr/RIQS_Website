import { useEffect, useRef, useState } from "react";

// Fades and lifts its children into view once they enter the viewport.
//
// Two deliberate safeguards, because the un-revealed state is visually
// hidden: anyone who has asked for reduced motion, and any browser without
// IntersectionObserver, gets the content shown immediately rather than
// hidden forever. The markup is always in the DOM either way, so crawlers
// and screen readers are unaffected.
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  // Decided during render rather than in the effect, so the content is never
  // briefly hidden for the people who most need it visible.
  const [shown, setShown] = useState(
    () =>
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (shown) return undefined;

    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(el);

    // Fail-safe. The un-revealed state is visually hidden, so anything that
    // stops the observer from firing — a throttled background tab, a
    // browser that never produces frames for this document — would strand
    // the content invisible. Reveal it regardless after a short grace
    // period; in the normal case the observer has long since won.
    const fallback = window.setTimeout(() => setShown(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [shown]);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
