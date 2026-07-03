import { Link } from 'react-router-dom';

const PHASES = [
  {
    days: 'Days 1–5',
    title: 'Diagnostic',
    bullets: [
      'Full AEO audit and competitor intent mapping',
      'Revenue leakage quantification from your own data',
    ],
  },
  {
    days: 'Days 6–10',
    title: 'Architecture',
    bullets: [
      'Schema, AEO content and lead routing deployed',
      'Attribution dashboard wired to all channels',
    ],
  },
  {
    days: 'Days 11–14',
    title: 'Activation',
    bullets: [
      'System live with sub-60s routing SLA confirmed',
      'PAC dashboard handover and month-one projections',
    ],
  },
];

export default function Timeline() {
  return (
    <section className="section-ivory py-24 md:py-32 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-label font-medium uppercase tracking-widest text-ink/40 mb-3">
            Deployment
          </p>
          <h2 className="text-h2 text-ink">
            The 14-Day Method
          </h2>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:grid grid-cols-3 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-6 left-[16.66%] right-[16.66%] h-px bg-ink/12" aria-hidden="true" />

          {PHASES.map(({ days, title, bullets }, idx) => (
            <div key={title} className="relative flex flex-col items-center text-center px-6">
              {/* Node */}
              <div className="w-12 h-12 rounded-full bg-ivory border-2 border-gold flex items-center justify-center text-sm font-bold text-gold z-10 mb-5">
                {idx + 1}
              </div>
              <span className="text-label uppercase tracking-widest text-gold font-medium mb-1">
                {days}
              </span>
              <h3 className="text-h3 text-ink mb-3">{title}</h3>
              <ul className="space-y-2 text-left">
                {bullets.map(b => (
                  <li key={b} className="flex gap-2 text-sm text-ink/65 leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-8 relative pl-8 border-l-2 border-ink/12">
          {PHASES.map(({ days, title, bullets }, idx) => (
            <div key={title} className="relative">
              <div className="absolute -left-[calc(1rem+5px)] top-0 w-6 h-6 rounded-full bg-ivory border-2 border-gold flex items-center justify-center text-xs font-bold text-gold">
                {idx + 1}
              </div>
              <span className="text-label uppercase tracking-widest text-gold font-medium">
                {days}
              </span>
              <h3 className="text-h3 text-ink mt-1 mb-2">{title}</h3>
              <ul className="space-y-1.5">
                {bullets.map(b => (
                  <li key={b} className="text-sm text-ink/65 leading-relaxed">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/method" className="btn-secondary">
            View Full Day-by-Day Breakdown
          </Link>
        </div>
      </div>
    </section>
  );
}
