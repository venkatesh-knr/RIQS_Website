import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      // Sits above the sticky mobile quote bar on phones, back to the corner
      // on desktop where that bar is hidden.
      className={`fixed bottom-20 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-steel-500 text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-steel-400 lg:bottom-6 lg:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
