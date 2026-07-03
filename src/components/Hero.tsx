import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="section-ink relative overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #F5F2EC 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Warm radial glow */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at 70% 30%, #D4A853, transparent 60%)' }}
      />

      <div className="max-w-site mx-auto px-5 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div className="max-w-xl">
          {/* Gold left rule */}
          <div className="flex gap-5 items-start mb-6">
            <div className="w-px h-16 bg-gold flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <p className="text-label font-medium uppercase tracking-widest text-ivory/45 mb-3 animate-start-hidden animate-fade-in-up">
                AI Patient Acquisition Infrastructure
              </p>
              <h1 className="text-h1 text-ivory animate-start-hidden animate-fade-in-up animate-delay-100">
                AI Patient Acquisition for European Dental Clinics
              </h1>
            </div>
          </div>
          <p className="text-body text-ivory/60 mb-8 max-w-prose animate-start-hidden animate-fade-in-up animate-delay-200">
            Calculate the exact revenue your slow response time loses every year. Processa delivers sub-60-second lead routing and AI search citation for Implant and Invisalign practices.
          </p>
          <div className="flex flex-wrap gap-4 animate-start-hidden animate-fade-in-up animate-delay-300">
            <a href="#calculator" className="btn-primary">
              Calculate Your Leakage
            </a>
            <Link to="/method" className="btn-secondary">
              See the 14-Day Method
            </Link>
          </div>
        </div>

        {/* Right: dashboard mockup */}
        <div className="hidden lg:block" aria-hidden="true">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-card border border-ivory/8 bg-ink-2 p-6 overflow-hidden">
      {/* Window controls */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-ivory/10" />
        <div className="w-3 h-3 rounded-full bg-ivory/10" />
        <div className="w-3 h-3 rounded-full bg-ivory/10" />
        <div className="ml-4 h-2 w-32 rounded bg-ivory/8" />
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {['~4×', '<60s', '14d'].map((val, i) => (
          <div key={i} className="rounded-lg bg-ink border border-ivory/8 p-3">
            <div className="text-gold font-bold text-lg">{val}</div>
            <div className="h-1.5 w-12 rounded bg-ivory/8 mt-1" />
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="relative h-32 rounded-lg bg-ink/60 border border-ivory/8 p-4 overflow-hidden">
        <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D4A853" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4A853" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 50 Q25 48 50 40 T100 25 T150 15 T200 5" fill="none" stroke="#D4A853" strokeWidth="2" />
          <path d="M0 50 Q25 48 50 40 T100 25 T150 15 T200 5 V60 H0 Z" fill="url(#chartGrad)" />
        </svg>
      </div>

      {/* Legend rows */}
      <div className="mt-4 space-y-2">
        {[75, 60, 45].map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gold/50" />
            <div className="h-2 rounded bg-ivory/8" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}
