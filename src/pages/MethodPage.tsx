import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';

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
    <article itemScope itemType="https://schema.org/Service">
      <meta itemProp="name" content="Processa 14-Day AI Patient Acquisition Deployment" />
      <meta itemProp="provider" content="Processa Advisory" />

      {/* Hero */}
      <section
        style={{
          background: '#0f172a',
          padding: 'clamp(5rem, 10vw, 9rem) clamp(1rem, 5vw, 2rem) clamp(4rem, 8vw, 7rem)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', padding: 0, flexWrap: 'wrap' }}>
              <li><Link to="/" style={{ color: 'rgba(245,242,236,0.45)', fontSize: '12px', fontFamily: 'Inter,system-ui,sans-serif', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: 'rgba(245,242,236,0.3)', fontSize: '12px', fontFamily: 'Inter,system-ui,sans-serif' }}>›</li>
              <li><span style={{ color: 'rgba(245,242,236,0.7)', fontSize: '12px', fontFamily: 'Inter,system-ui,sans-serif' }}>Method</span></li>
            </ol>
          </nav>

          <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '1.25rem' }}>
            The 14-Day Engagement
          </p>
          <h1
            itemProp="description"
            style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.08, letterSpacing: '-0.03em', color: '#f5f2ec', marginBottom: '1.5rem' }}
          >
            The Processa 14-Day Deployment Method
          </h1>
          <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,242,236,0.65)', maxWidth: '620px', marginBottom: '2.5rem' }}>
            No discovery calls that go nowhere. No proposal decks. A fixed 14-day engagement with a confirmed deliverable on every single day.
          </p>
          <Link
            to="/access"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#c9a96e', color: '#0f172a', fontFamily: 'Inter,system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', padding: '14px 32px', borderRadius: '9999px' }}
          >
            Apply for This Engagement
          </Link>
        </div>
      </section>

      {/* Three phases */}
      <section style={{ background: '#ffffff', padding: 'clamp(4rem,8vw,7rem) clamp(1rem,5vw,2rem)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {PHASES.map((phase) => (
              <div key={phase.label} style={{ borderTop: '1px solid rgba(15,23,42,0.1)', paddingTop: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a96e' }}>{phase.label}</span>
                  <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: 'clamp(1.25rem,3vw,1.75rem)', letterSpacing: '-0.02em', color: '#0f172a' }}>{phase.title}</h2>
                </div>
                <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {phase.items.map((item) => (
                    <li key={item.day} style={{ display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '1rem', padding: '0.875rem 0', borderBottom: '1px solid rgba(15,23,42,0.06)', alignItems: 'start' }}>
                      <span style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#c9a96e', paddingTop: '2px' }}>{item.day}</span>
                      <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '0.9375rem', fontWeight: 400, lineHeight: 1.65, color: '#475569', margin: 0 }}>{item.action}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing proposition */}
      <section style={{ background: '#f8fafc', padding: 'clamp(4rem,8vw,7rem) clamp(1rem,5vw,2rem)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: 'clamp(1.5rem,4vw,2.25rem)', lineHeight: 1.15, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: '1.25rem' }}>
            A Fixed Engagement, Not a Retainer
          </h2>
          <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.8, color: '#475569', marginBottom: '1rem' }}>
            The engagement ends. The pipeline does not. Everything we build belongs to your practice — the schema infrastructure, the AEO content architecture, the lead routing layer, and the attribution dashboard. No lock-in, no monthly retainer dependency. We build the patient acquisition engine and hand you the keys on Day 14.
          </p>
          <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.8, color: '#475569', marginBottom: '2.5rem' }}>
            We open two new mandates per month. Selection is based on practice profile, treatment mix, and the practice owner's readiness to act on what the diagnostic reveals. Implant and Invisalign practices only. Minimum five years in operation. European market.
          </p>
          <Link
            to="/access"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0f172a', color: '#ffffff', fontFamily: 'Inter,system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', padding: '14px 32px', borderRadius: '9999px' }}
          >
            Apply for This Engagement
          </Link>
        </div>
      </section>

      {/* Related services */}
      <section style={{ background: '#ffffff', padding: 'clamp(3rem,6vw,5rem) clamp(1rem,5vw,2rem)', borderTop: '1px solid rgba(15,23,42,0.06)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(15,23,42,0.4)', marginBottom: '1.5rem' }}>Related Services</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              { to: '/answer-engine-optimisation-dental', label: 'Answer Engine Optimisation' },
              { to: '/sub-60-second-lead-routing', label: 'Sub-60-Second Lead Routing' },
              { to: '/gdpr-dental-data-compliance', label: 'GDPR Compliance' },
              { to: '/dental-implant-patient-acquisition', label: 'Implant Patient Acquisition' },
            ].map(({ to, label }) => (
              <Link key={to} to={to} style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '13px', fontWeight: 500, color: '#0f172a', textDecoration: 'none', padding: '8px 16px', border: '1px solid rgba(15,23,42,0.15)', borderRadius: '9999px' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </article>
  );
}
