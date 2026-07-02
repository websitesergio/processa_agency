import { CheckCircle } from 'lucide-react';

const QUALIFIERS = [
  'Private Implant or Invisalign practice in UK, Ireland, Spain, Netherlands, or Germany',
  'Receiving 20+ high-ticket enquiries per month you suspect are not converting',
  'Average response time to new leads exceeds 5 minutes',
  'Minimum 5 years in operation with established clinical reputation',
];

export default function Qualification() {
  return (
    <section className="section-light py-24 md:py-32 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-accent mb-3">
            Fit Assessment
          </p>
          <h2 className="text-h2 text-brand-dark">
            Who This Is For
          </h2>
          <p className="text-body text-slate-600 mt-4 max-w-prose mx-auto">
            Processa works with a maximum of two new practices per month. This engagement is built for:
          </p>
        </div>

        <div className="space-y-4">
          {QUALIFIERS.map(q => (
            <div
              key={q}
              className="flex gap-4 items-start p-5 rounded-card border border-slate-200 bg-white"
            >
              <CheckCircle size={20} className="text-brand-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 leading-relaxed">{q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
