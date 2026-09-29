import riqsLogo from "../assets/logo.webp";
import heroPhoto from "../assets/hero-bg.webp";

export default function Hero() {
  return (
    <section
      // flex-1: fills the home screen above the stats strip. The wrapper in
      // App.jsx is min-h-svh, so mobile browser chrome can't hide the CTAs.
      className="relative flex flex-1 items-center overflow-hidden bg-navy-950 pt-20"
    >
      {/* Background: an offshore platform at sunset (RIQS's own photograph,
          1920px wide, metadata stripped). Decorative, so no alt text. The
          original is kept out of the repo in /images. */}
      <img
        src={heroPhoto}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Dark navy overlay. This is what keeps the white hero text legible:
          the photo's sky is bright, so lighten it here only with care. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-900/75 to-navy-950/85"
      />

      <div className="relative mx-auto max-w-5xl hero-y px-4 text-center sm:px-6 lg:px-8">
        {/* The division's own mark leads the hero; Ritvish, the parent brand,
            leads the navbar. On a light chip because the wordmark is dark
            navy and would otherwise disappear into the hero. */}
        <span className="mb-6 inline-flex items-center rounded-lg bg-white/95 px-4 py-2.5 shadow-lg shadow-navy-950/40">
          <img src={riqsLogo} alt="RIQS" className="h-10 w-auto sm:h-12" />
        </span>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 sm:text-sm sm:tracking-[0.3em]">
          Integrity • Quality • Excellence
        </p>
        <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Trusted Inspection &amp; Quality Solutions
        </h1>
        {/* steel-100, not the steel-300 it used over the plain gradient: over
            the photo's brightest patch steel-300 measured 3.47:1, under the
            4.5:1 that 18px text needs. steel-100 measures 6.4:1. */}
        <p className="mx-auto mt-5 max-w-3xl text-base font-semibold text-steel-100 sm:text-lg">
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
