import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-accent mb-4 opacity-0 animate-fade-in-up">
            AI Patient Acquisition Infrastructure
          </p>
          <h1 className="text-h1 text-brand-light mb-6 opacity-0 animate-fade-in-up animate-delay-100">
            AI Patient Acquisition for European Dental Clinics
          </h1>
          <p className="text-body text-slate-400 mb-8 max-w-prose opacity-0 animate-fade-in-up animate-delay-200">
            Calculate the exact revenue your slow response time loses every year. Processa delivers sub-60-second lead routing and AI search citation for Implant and Invisalign practices.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animate-delay-300">
            <a href="#calculator" className="btn-primary">
              Calculate Your Leakage
            </a>
            <Link to="/method" className="btn-secondary">
              See the 14-Day Method
            </Link>
          </div>
        </div>

        {/* Right: abstract dashboard mockup */}
        <div className="hidden lg:block" aria-hidden="true">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-card border border-slate-700/50 bg-brand-surface p-6 overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-400/60" />
        <div className="w-3 h-3 rounded-full bg-amber-400/60" />
        <div className="w-3 h-3 rounded-full bg-green-400/60" />
        <div className="ml-4 h-2 w-32 rounded bg-slate-600/50" />
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {['78%', '<60s', '14d'].map((val, i) => (
          <div key={i} className="rounded-lg bg-brand-dark/60 border border-slate-700/30 p-3">
            <div className="text-brand-accent font-bold text-lg">{val}</div>
            <div className="h-1.5 w-12 rounded bg-slate-700/50 mt-1" />
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="relative h-32 rounded-lg bg-brand-dark/40 border border-slate-700/20 p-4 overflow-hidden">
        <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 50 Q25 48 50 40 T100 25 T150 15 T200 5"
            fill="none"
            stroke="#2DD4BF"
            strokeWidth="2"
          />
          <path
            d="M0 50 Q25 48 50 40 T100 25 T150 15 T200 5 V60 H0 Z"
            fill="url(#chartGrad)"
          />
        </svg>
      </div>

      {/* Bottom list */}
      <div className="mt-4 space-y-2">
        {[75, 60, 45].map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-brand-accent/60" />
            <div className={`h-2 rounded bg-slate-700/40`} style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}
