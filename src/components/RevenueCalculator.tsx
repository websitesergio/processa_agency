import { useState, useCallback, useEffect, useRef } from 'react';
import { useAuditor } from '../lib/AuditorContext';

const RESPONSE_OPTIONS = [
  { label: 'Under 5 min', multiplier: 1.0,  minutes: 5 },
  { label: '1 hour',      multiplier: 0.55, minutes: 60 },
  { label: '4 hours',     multiplier: 0.35, minutes: 240 },
  { label: '12 hours',    multiplier: 0.22, minutes: 720 },
  { label: 'Next day',    multiplier: 0.15, minutes: 1440 },
];

const BASE_CONVERSION = 0.20;
const CAPTURE_RATE    = 0.60;

const SPEED_CARDS = [
  { window: '< 5 min',   yield: '100%', highlight: true },
  { window: '1 hour',    yield: '55%',  highlight: false },
  { window: '4 hours',   yield: '35%',  highlight: false },
  { window: '12+ hours', yield: '22%',  highlight: false },
];

function useAnimatedValue(target: number, duration = 600) {
  const [display, setDisplay] = useState(target);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = display;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (target - start) * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return display;
}

export default function RevenueCalculator() {
  const [enquiries,      setEnquiries]      = useState(40);
  const [treatmentValue, setTreatmentValue] = useState(3500);
  const [responseIdx,    setResponseIdx]    = useState(3);
  const { setState: setAuditorState } = useAuditor();

  const calcLeakage = useCallback(() => {
    const m   = RESPONSE_OPTIONS[responseIdx].multiplier;
    const max = enquiries * 12 * BASE_CONVERSION * CAPTURE_RATE * treatmentValue;
    return Math.round(max - max * m);
  }, [enquiries, treatmentValue, responseIdx]);

  const leakage = calcLeakage();
  const animatedLeakage = useAnimatedValue(leakage);

  useEffect(() => {
    setAuditorState({
      monthlyLeads: enquiries,
      caseValue: treatmentValue,
      responseMinutes: RESPONSE_OPTIONS[responseIdx].minutes,
      monthlyBleed: Math.round(leakage / 12),
      hasRun: true,
      updatedAt: Date.now(),
    });
  }, [leakage, enquiries, treatmentValue, responseIdx, setAuditorState]);

  const selectClass =
    'w-full bg-white border border-ink/12 text-ink rounded-btn px-4 py-3 text-sm font-medium ' +
    'focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 appearance-none cursor-pointer';

  return (
    <section id="calculator" className="section-ivory py-24 md:py-32 px-5">
      <div className="max-w-site mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-label font-medium uppercase tracking-widest text-ink/40 mb-3">
            Revenue Diagnostic
          </p>
          <h2 className="text-h2 text-ink mb-4">
            Calculate Your Recoverable Revenue
          </h2>
          <p className="text-body text-ink/60 max-w-prose mx-auto">
            Adjust the sliders to match your practice. The model shows how much revenue response latency costs you each year.
          </p>
        </div>

        {/* Speed-window cards — Mathematics of Speed */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SPEED_CARDS.map(({ window, yield: yld, highlight }) => (
            <div
              key={window}
              className={`rounded-card border p-5 text-center ${
                highlight
                  ? 'bg-ink border-gold/40 shadow-[0_8px_32px_rgb(0_0_0/0.24)]'
                  : 'bg-ivory-2 border-ink/8'
              }`}
            >
              <div className={`text-2xl font-bold mb-1 ${highlight ? 'text-gold' : 'text-ink'}`}>
                {yld}
              </div>
              <div className={`text-label uppercase tracking-widest ${highlight ? 'text-ivory/45' : 'text-ink/45'}`}>
                conversion yield
              </div>
              <div className={`text-xs font-medium mt-2 ${highlight ? 'text-gold/70' : 'text-ink/35'}`}>
                {window}
              </div>
            </div>
          ))}
        </div>

        {/* Calculator card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-card border border-ink/8 bg-white shadow-[0_8px_24px_rgb(8_7_5/0.08)] p-8 md:p-10 space-y-8">

            {/* Enquiries slider */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label htmlFor="enquiries" className="text-sm font-medium text-ink/70">
                  Monthly High-Ticket Enquiries
                </label>
                <span className="text-sm font-bold text-gold">{enquiries}</span>
              </div>
              <input
                id="enquiries" type="range" min={10} max={200} step={5}
                value={enquiries} onChange={e => setEnquiries(Number(e.target.value))}
                aria-valuenow={enquiries} aria-valuemin={10} aria-valuemax={200}
              />
              <div className="flex justify-between text-xs text-ink/35 mt-1">
                <span>10</span><span>200</span>
              </div>
            </div>

            {/* Treatment value slider */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label htmlFor="treatment-value" className="text-sm font-medium text-ink/70">
                  Average Treatment Value
                </label>
                <span className="text-sm font-bold text-gold">£{treatmentValue.toLocaleString()}</span>
              </div>
              <input
                id="treatment-value" type="range" min={1500} max={30000} step={500}
                value={treatmentValue} onChange={e => setTreatmentValue(Number(e.target.value))}
                aria-valuenow={treatmentValue} aria-valuemin={1500} aria-valuemax={30000}
              />
              <div className="flex justify-between text-xs text-ink/35 mt-1">
                <span>£1,500</span><span>£30,000</span>
              </div>
            </div>

            {/* Response time select */}
            <div>
              <label htmlFor="response-time" className="text-sm font-medium text-ink/70 block mb-3">
                Current Average Response Time
              </label>
              <select
                id="response-time"
                value={responseIdx}
                onChange={e => setResponseIdx(Number(e.target.value))}
                className={selectClass}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23080705' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                }}
              >
                {RESPONSE_OPTIONS.map((opt, idx) => (
                  <option key={opt.label} value={idx}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Result */}
            <div
              className="pt-8 border-t border-ink/8 text-center"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="text-label font-medium uppercase tracking-widest text-ink/40 mb-3">
                Estimated Annual Recoverable Revenue
              </p>
              <p className="font-display text-[3.5rem] md:text-[4.5rem] font-bold text-gold leading-none tracking-tight tabular-nums mb-2">
                £{animatedLeakage.toLocaleString()}
              </p>
              <p className="text-xs text-ink/40 mt-2 mb-8">
                Based on {BASE_CONVERSION * 100}% base conversion · {CAPTURE_RATE * 100}% capture rate
              </p>
              <a href="/access?from=calculator" className="btn-primary">
                Get Your Exact Figure — Book the Diagnostic Audit
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
