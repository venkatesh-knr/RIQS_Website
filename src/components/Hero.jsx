export default function Hero() {
  return (
    <section
      // Placeholder hero background: a blueprint-style grid layered over an
      // industrial-toned navy gradient stands in for a real photo. Drop a
      // licensed photo (e.g. an offshore platform or inspector on site) in
      // as `src/assets/hero-bg.jpg`, import it above, and swap the two
      // background layers below for a single
      // background-image (cover, centered) layer plus the overlay div that
      // already follows it.
      // flex-1: fills the home screen above the stats strip. The wrapper in
      // App.jsx is min-h-svh, so mobile browser chrome can't hide the CTAs.
      className="relative flex flex-1 items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-20"
    >
      {/* Layer 1: industrial-toned base gradient + blueprint grid, standing in for a photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,179,217,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139,179,217,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(45deg, transparent 48%, #3B6EA5 49%, #3B6EA5 51%, transparent 52%)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Layer 2: dark navy gradient overlay — keeps hero text legible over a real photo later */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-900/80 to-navy-900/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-steel-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-steel-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl hero-y px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 sm:text-sm sm:tracking-[0.3em]">
          Integrity • Quality • Excellence
        </p>
        <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Trusted Inspection &amp; Quality Solutions
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base font-semibold text-steel-300 sm:text-lg">
          Independent Inspection | Quality Assurance | Technical Services
        </p>
        {/* Kept to a single sentence so the CTAs stay above the fold on small
            phones. The longer supporting copy lives in the About section. */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-steel-100/90 sm:text-lg">
          Professional inspection, quality assurance and technical services
          for the Oil &amp; Gas, Petrochemical, Energy, Marine, Construction
          and Industrial sectors.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-md bg-steel-500 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-steel-900/30 transition-colors hover:bg-steel-400 sm:w-auto"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="w-full rounded-md border-2 border-steel-300/60 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-steel-300 hover:bg-white/5 sm:w-auto"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
