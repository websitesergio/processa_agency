import { Link } from 'react-router-dom';
import CTABand from '../components/CTABand';

const PHASES = [
  {
    label: 'Days 1–5',
    title: 'Diagnostic Phase',
    items: [
      { day: 'D1', action: 'Full technical AEO audit — every page crawled for AI-visibility and citation failure points.' },
      { day: 'D2', action: 'Competitor intent map — identify which high-intent queries your rivals own that you should.' },
      { day: 'D3', action: 'Pipeline haemorrhage reconstruction — trace exactly where enquiry velocity collapses.' },
      { day: 'D4', action: 'PAC attribution baseline — current case mix, source performance, conversion by channel.' },
      { day: 'D5', action: 'Diagnostic brief delivered — single document, no jargon, exact cost of inaction in recoverable revenue.' },
    ],
  },
  {
    label: 'Days 6–10',
    title: 'Architecture Phase',
    items: [
      { day: 'D6', action: 'Schema deployment — FAQ, Service, and Organisation JSON-LD for AI citation across all platforms.' },
      { day: 'D7', action: 'AEO content architecture — authoritative answer pages for every target high-intent query.' },
      { day: 'D8', action: 'Lead routing infrastructure live — sub-60-second response SLA active across all channels.' },
      { day: 'D9', action: 'Qualification layer deployed — automated pre-screening for Implant and Invisalign candidates.' },
      { day: 'D10', action: 'Attribution layer complete — unified dashboard tracking call, form, chat, and booking events.' },
    ],
  },
  {
    label: 'Days 11–14',
    title: 'Activation Phase',
    items: [
      { day: 'D11', action: 'First AI citation target confirmed in Google AI Overviews.' },
      { day: 'D12', action: 'Live PAC dashboard handover — practice owner sees every conversion driver.' },
      { day: 'D13', action: 'Lead routing SLA audit — every enquiry verified at under 60 seconds.' },
      { day: 'D14', action: 'Pipeline baseline confirmed — month-one projection versus prior 3-month average, signed off.' },
    ],
  },
];

export default function MethodPage() {
  return (
    <article>
      {/* Hero */}
      <section className="section-dark py-20 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-slate-300">Method</li>
            </ol>
          </nav>

          <h1 className="text-h1 text-brand-light mb-4">
            The 14-Day Deployment Method
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            No discovery calls that go nowhere. No proposal decks. A fixed 14-day engagement with a confirmed deliverable every single day.
          </p>

          {/* TL;DR */}
          <div className="mt-8 rounded-card border border-slate-700/50 bg-brand-surface p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-accent mb-3">TL;DR</p>
            <ul className="space-y-2">
              {['Days 1-5: Full diagnostic audit quantifying your exact revenue leakage',
                'Days 6-10: AEO schema, content architecture, and lead routing deployed',
                'Days 11-14: System live, dashboard handover, no ongoing retainer required',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-light py-16 md:py-24 px-5">
        <div className="max-w-4xl mx-auto">
          {/* Vertical timeline */}
          <div className="relative pl-8 md:pl-12 border-l-2 border-slate-200 space-y-12">
            {PHASES.map((phase) => (
              <div key={phase.label}>
                {/* Phase header */}
                <div className="flex items-baseline gap-4 mb-6 -ml-8 md:-ml-12">
                  <div className="w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-accent flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-accent" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-widest text-brand-accent">
                    {phase.label}
                  </span>
                  <h2 className="text-xl font-bold text-brand-dark">{phase.title}</h2>
                </div>

                {/* Day items */}
                <div className="space-y-3">
                  {phase.items.map((item) => (
                    <div
                      key={item.day}
                      className="flex gap-4 p-4 rounded-card border border-slate-100 bg-white hover:border-slate-200 transition-colors"
                    >
                      <span className="text-xs font-bold text-brand-accent uppercase w-8 flex-shrink-0 pt-0.5">
                        {item.day}
                      </span>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="mt-16 p-8 rounded-card border border-slate-200 bg-white">
            <h2 className="text-xl font-bold text-brand-dark mb-4">
              A Fixed Engagement, Not a Retainer
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              The engagement ends on Day 14. Everything built belongs to your practice — schema infrastructure, AEO content, lead routing, and attribution dashboard. No lock-in, no monthly retainer dependency.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We open two new mandates per month. Selection is based on practice profile, treatment mix, and readiness to act. Implant and Invisalign practices only. Minimum five years in operation. European market.
            </p>
          </div>
        </div>
      </section>

      <CTABand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Processa 14-Day AI Patient Acquisition Deployment',
            provider: { '@type': 'Organization', name: 'Processa' },
            description: 'Fixed 14-day deployment of AI patient acquisition infrastructure for European dental practices.',
            areaServed: { '@type': 'Place', name: 'Europe' },
          }),
        }}
      />
    </article>
  );
}
