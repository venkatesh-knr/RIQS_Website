// Badge-style text stand-ins for certification body logos. Swap each box for
// a real logo image (e.g. <img src="/certs/api.svg" alt="API" />) once
// official logo files are available.
const CERTIFICATIONS = ["API", "ASME", "AWS", "ISO", "CSWIP", "BGAS", "ASNT"];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-steel-100/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
          Certifications &amp; Standards
        </h2>
        <p className="mt-4 text-base text-gray-600">
          Working in accordance with:
        </p>

        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-4 sm:gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert}
              className="flex h-20 w-32 items-center justify-center rounded-lg border-2 border-navy-900/10 bg-white text-lg font-bold tracking-wide text-navy-900 shadow-sm transition-colors hover:border-steel-400"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
