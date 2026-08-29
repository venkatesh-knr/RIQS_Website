// Badge-style text stand-ins for certification body logos. Swap each box for
// a real logo image (e.g. <img src="/certs/api.svg" alt="API" />) once
// official logo files are available.
const CODES_AND_STANDARDS = [
  "ASME",
  "API",
  "AWS",
  "ISO",
  "ASNT",
  "CSWIP",
  "BGAS",
  "Client Specifications",
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-steel-100/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
          Codes &amp; Standards
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600">
          Our inspection activities can be performed in accordance with
          applicable international codes, standards, specifications and
          client requirements, including:
        </p>

        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-4 sm:gap-6">
          {CODES_AND_STANDARDS.map((cert) => (
            <div
              key={cert}
              className="flex h-20 min-w-[8rem] items-center justify-center rounded-lg border-2 border-navy-900/10 bg-white px-4 text-center text-lg font-bold tracking-wide text-navy-900 shadow-sm transition-colors hover:border-steel-400"
            >
              {cert}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-xs text-gray-500">
          The applicable requirements will be established according to the
          specific project, contract and inspection scope.
        </p>
      </div>
    </section>
  );
}
