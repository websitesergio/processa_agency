const STATS = [
  { value: '~4×', label: 'More likely to convert: <5 min vs 30+ min response' },
  { value: '<60s', label: 'Response SLA guaranteed' },
  { value: '£18k–£45k', label: 'Typical annual leakage' },
  { value: '14 days', label: 'Fixed deployment timeline' },
];

export default function StatBar() {
  return (
    <section className="section-light py-16 md:py-20 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map(({ value, label }) => (
          <div
            key={label}
            className="text-center p-6 rounded-card border border-slate-200 bg-white"
          >
            <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-2">
              {value}
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-medium leading-relaxed">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
