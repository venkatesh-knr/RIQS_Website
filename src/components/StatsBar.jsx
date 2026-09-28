// Figures supplied by RIQS.
const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "100+", label: "Inspections Completed" },
  { value: "10+", label: "Certified Inspectors" },
  { value: "7+", label: "Industries Served" },
];

export default function StatsBar() {
  return (
    <div className="bg-navy-950 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="font-heading text-3xl font-bold text-amber-400 sm:text-4xl">
              {value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-steel-100/80 sm:text-sm">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
