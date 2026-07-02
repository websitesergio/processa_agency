const STATS = [
  { value: '78%', label: 'Conversion drop after 5 min delay' },
  { value: '<60s', label: 'Response SLA guaranteed' },
  { value: '£18k–£45k', label: 'Typical annual leakage' },
  { value: '14 days', label: 'Fixed deployment timeline' },
];

export default function StatBar() {
  return (
    <section className="section-surface py-16 md:py-20 px-5 border-y border-slate-700/30">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map(({ value, label }) => (
          <div
            key={label}
            className="text-center p-6 rounded-card border border-slate-700/30 bg-brand-dark/40"
          >
            <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-2">
              {value}
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium leading-relaxed">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
