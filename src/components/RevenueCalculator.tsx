import { useState, useCallback, useEffect, useRef } from 'react';

const RESPONSE_OPTIONS = [
  { label: 'Under 5 min', multiplier: 1.0 },
  { label: '1 hour', multiplier: 0.55 },
  { label: '4 hours', multiplier: 0.35 },
  { label: '12 hours', multiplier: 0.22 },
  { label: 'Next day', multiplier: 0.15 },
];

const BASE_CONVERSION = 0.20;
const CAPTURE_RATE = 0.60;

function useAnimatedValue(target: number, duration = 600) {
  const [display, setDisplay] = useState(target);
  const rafRef = useRef<number>(0);
  const startRef = useRef({ value: target, time: 0 });

  useEffect(() => {
    const start = display;
    const startTime = performance.now();
    startRef.current = { value: start, time: startTime };

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (target - start) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return display;
}

export default function RevenueCalculator() {
  const [enquiries, setEnquiries] = useState(40);
  const [treatmentValue, setTreatmentValue] = useState(3500);
  const [responseIdx, setResponseIdx] = useState(3);

  const calcLeakage = useCallback(() => {
    const currentMultiplier = RESPONSE_OPTIONS[responseIdx].multiplier;
    const maxRevenue = enquiries * 12 * BASE_CONVERSION * CAPTURE_RATE * treatmentValue;
    const currentRevenue = maxRevenue * currentMultiplier;
    return Math.round(maxRevenue - currentRevenue);
  }, [enquiries, treatmentValue, responseIdx]);

  const leakage = calcLeakage();
  const animatedLeakage = useAnimatedValue(leakage);

  return (
    <section id="calculator" className="section-surface py-24 md:py-32 px-5 border-y border-slate-700/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-3">
            Revenue Diagnostic
          </p>
          <h2 className="text-h2 text-brand-light mb-4">
            Calculate Your Recoverable Revenue
          </h2>
          <p className="text-body text-slate-400 max-w-prose mx-auto">
            Adjust the sliders to match your practice. The model shows how much revenue is lost to response latency each year.
          </p>
        </div>

        <div className="rounded-card border border-slate-700/50 bg-brand-dark p-8 md:p-10 space-y-8">
          {/* Monthly Enquiries */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label htmlFor="enquiries" className="text-sm font-medium text-slate-300">
                Monthly Enquiries
              </label>
              <span className="text-sm font-bold text-brand-accent">{enquiries}</span>
            </div>
            <input
              id="enquiries"
              type="range"
              min={10}
              max={200}
              step={5}
              value={enquiries}
              onChange={e => setEnquiries(Number(e.target.value))}
              aria-valuenow={enquiries}
              aria-valuemin={10}
              aria-valuemax={200}
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>10</span>
              <span>200</span>
            </div>
          </div>

          {/* Treatment Value */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label htmlFor="treatment-value" className="text-sm font-medium text-slate-300">
                Average Treatment Value
              </label>
              <span className="text-sm font-bold text-brand-accent">
                £{treatmentValue.toLocaleString()}
              </span>
            </div>
            <input
              id="treatment-value"
              type="range"
              min={1500}
              max={30000}
              step={500}
              value={treatmentValue}
              onChange={e => setTreatmentValue(Number(e.target.value))}
              aria-valuenow={treatmentValue}
              aria-valuemin={1500}
              aria-valuemax={30000}
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>£1,500</span>
              <span>£30,000</span>
            </div>
          </div>

          {/* Response Time - Dropdown */}
          <div>
            <label htmlFor="response-time" className="text-sm font-medium text-slate-300 block mb-3">
              Current Average Response Time
            </label>
            <select
              id="response-time"
              value={responseIdx}
              onChange={e => setResponseIdx(Number(e.target.value))}
              className="w-full bg-brand-surface border border-slate-700 text-brand-light rounded-btn px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
            >
              {RESPONSE_OPTIONS.map((opt, idx) => (
                <option key={opt.label} value={idx}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Result */}
          <div
            className="mt-8 pt-8 border-t border-slate-700/50 text-center"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
              Estimated Annual Recoverable Revenue
            </p>
            <p className="text-4xl md:text-5xl font-bold text-brand-accent tracking-tight tabular-nums">
              £{animatedLeakage.toLocaleString()}
            </p>
            <p className="text-sm text-slate-500 mt-2 mb-8">
              Based on {BASE_CONVERSION * 100}% base conversion, {CAPTURE_RATE * 100}% capture rate
            </p>
            <a href="/access?from=calculator" className="btn-primary">
              Get Your Exact Figure — Book the Diagnostic Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
