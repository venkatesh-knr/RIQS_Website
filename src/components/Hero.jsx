export default function Hero() {
  return (
    <section
      // Subtle industrial-themed gradient + geometric pattern stands in for a
      // photo. Swap the background layer below for a real photo of an
      // offshore/industrial site later (e.g. an <img> or bg-image utility).
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(45deg, transparent 48%, #3B6EA5 49%, #3B6EA5 51%, transparent 52%)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-steel-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-steel-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
          Integrity • Quality • Excellence
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Trusted Inspection &amp; Quality Solutions
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base font-semibold text-steel-300 sm:text-lg">
          Independent Inspection | Quality Assurance | Technical Services
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-base text-steel-100/90 sm:text-lg">
          RIQS – Ritvish Inspection &amp; Quality Services provides
          professional inspection, quality assurance, and technical services
          to the Oil &amp; Gas, Petrochemical, Energy, Marine, Construction,
          and Industrial sectors.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-base text-steel-100/90 sm:text-lg">
          We support clients, EPC contractors, fabrication yards, and project
          teams in maintaining the highest standards of quality, safety,
          integrity, and regulatory compliance throughout the project
          lifecycle.
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
