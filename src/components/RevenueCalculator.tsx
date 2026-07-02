import { useState, useCallback } from 'react';

const RESPONSE_OPTIONS = [
  { label: 'Under 5 min', multiplier: 1.0 },
  { label: '1 hour', multiplier: 0.55 },
  { label: '4 hours', multiplier: 0.35 },
  { label: '12 hours', multiplier: 0.22 },
  { label: 'Next day', multiplier: 0.15 },
];

const BASE_CONVERSION = 0.20;
const CAPTURE_RATE = 0.60;

export default function RevenueCalculator() {
  const [enquiries, setEnquiries] = useState(40);
  const [treatmentValue, setTreatmentValue] = useState(3500);
  const [responseIdx, setResponseIdx] = useState(3);

  const calcLeakage = useCallback(() => {
    const optimalRevenue = enquiries * 12 * BASE_CONVERSION * CAPTURE_RATE * treatmentValue;
    const currentMultiplier = RESPONSE_OPTIONS[responseIdx].multiplier;
    const currentRevenue = enquiries * 12 * BASE_CONVERSION * CAPTURE_RATE * treatmentValue * currentMultiplier;
    return Math.round(optimalRevenue - currentRevenue);
  }, [enquiries, treatmentValue, responseIdx]);

  const leakage = calcLeakage();

  return (
    <section id="calculator" className="section-dark py-24 md:py-32 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-accent mb-3">
            Revenue Diagnostic
          </p>
          <h2 className="text-h2 text-brand-light mb-4">
            Calculate Your Recoverable Revenue
          </h2>
          <p className="text-body text-slate-400 max-w-prose mx-auto">
            Adjust the sliders to match your practice. The model shows how much revenue is lost to response latency each year.
          </p>
        </div>

        <div className="rounded-card border border-slate-700/50 bg-brand-surface p-8 md:p-10 space-y-8">
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

          {/* Response Time */}
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-3">
              Current Average Response Time
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {RESPONSE_OPTIONS.map((opt, idx) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setResponseIdx(idx)}
                  className={`py-2.5 px-3 rounded-btn text-xs font-medium transition-all border ${
                    responseIdx === idx
                      ? 'bg-brand-accent text-brand-dark border-brand-accent'
                      : 'bg-brand-dark border-slate-700 text-slate-400 hover:border-slate-500'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
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
            <p className="text-4xl md:text-5xl font-bold text-brand-accent tracking-tight">
              £{leakage.toLocaleString()}
            </p>
            <p className="text-sm text-slate-500 mt-2 mb-8">
              Based on {BASE_CONVERSION * 100}% base conversion, {CAPTURE_RATE * 100}% capture rate
            </p>
            <a href="/access" className="btn-primary">
              Get Your Exact Figure — Book the Diagnostic Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
