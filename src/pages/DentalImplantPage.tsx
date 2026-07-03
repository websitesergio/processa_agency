import SubpageLayout from '../components/SubpageLayout';
import { Link } from 'react-router-dom';

export default function DentalImplantPage() {
  return (
    <SubpageLayout
      breadcrumb="Dental Implant Patient Acquisition"
      breadcrumbPath="/dental-implant-patient-acquisition"
      title="Dental Implant Patient Acquisition for European Clinics"
      subtitle="High-ticket implant cases demand instant response and AI-first discovery. Processa routes qualified implant enquiries within 60 seconds."
      tldr={[
        'Contacting a lead within 5 minutes vs 30+ minutes increases qualification odds ~4× (Lead Response Management Study)',
        'AEO positions your clinic as the cited answer for high-intent implant queries',
        'Automated qualification pre-screens candidates before your coordinator responds',
      ]}
      toc={[
        { id: 'instant-response', label: 'Why Instant Response Matters' },
        { id: 'lead-generation', label: 'How Processa Generates Leads' },
        { id: 'patient-journey', label: 'The Implant Patient Journey' },
        { id: 'qualification', label: 'Automatic Qualification' },
      ]}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dental Implant Patient Acquisition',
        provider: { '@type': 'Organization', name: 'Processa' },
        description: 'AI-powered patient acquisition infrastructure for dental implant practices across Europe.',
        areaServed: { '@type': 'Place', name: 'Europe' },
      }}
    >
      <section id="instant-response" className="mb-16">
        <h2 className="text-h2 text-ink mb-6">Why Implant Enquiries Demand Instant Response</h2>

        <div className="rounded-card border border-ink/8 bg-ivory-2 p-5 mb-6 flex items-center gap-4">
          <span className="text-3xl font-bold text-gold">£3,500+</span>
          <span className="text-sm text-ink/65">Average per-tooth investment means implant enquiries are inherently high-intent</span>
        </div>

        <div className="space-y-4 text-body text-ink/65 max-w-prose">
          <p>
            Dental implant cases represent some of the highest-value enquiries a practice receives. A single patient deciding to proceed commits to a significant investment. This high financial commitment means implant enquiries are inherently high-intent: patients are already past the awareness stage and actively evaluating options.
          </p>
          <p>
            In the implant market, competitive pressure is intense. Multiple clinics bid for the same patient attention. When a prospective patient submits an enquiry, the first clinic to respond meaningfully wins. Conversion odds fall sharply when the first response is delayed beyond a few minutes.
          </p>
          <p>
            Manual routing — where an enquiry waits for a coordinator to arrive, read, categorise, and route — introduces friction that costs patients. Sub-60-second automated routing closes this gap, ensuring every implant lead is acknowledged before the patient's moment of decision passes.
          </p>
        </div>
      </section>

      <section id="lead-generation" className="mb-16">
        <h2 className="text-h2 text-ink mb-6">How Processa Generates Qualified Implant Leads</h2>

        <div className="space-y-4 text-body text-ink/65 max-w-prose">
          <p>
            Answer Engine Optimisation (AEO) is the foundation. AI search engines now handle the majority of high-intent dental enquiries before they reach traditional search. When a patient asks "best dental implant clinic in Manchester," AI cites one authoritative answer — not ten blue links. If your clinic is cited, the patient finds you.
          </p>
          <p>
            Processa builds the semantic infrastructure that AI engines rely on to cite your clinic: semantic schema (FAQ, Service, and Organization JSON-LD), entity verification, and authoritative content architecture. Being cited consistently creates a steady stream of high-intent leads at zero ad spend.
          </p>
          <p>
            Automated routing closes the gap between lead receipt and first response. The moment a patient enquiry lands, Processa identifies the treatment type, extracts core details, and dispatches a branded response within 60 seconds. This operates 24/7, independent of your practice's opening hours.
          </p>
        </div>
      </section>

      <section id="patient-journey" className="mb-16">
        <h2 className="text-h2 text-ink mb-6">The Implant Patient Journey in 2026</h2>

        <div className="space-y-4 text-body text-ink/65 max-w-prose">
          <p>
            The patient journey has fundamentally shifted. Today, patients begin with an AI query — not a Google search. A patient considering implants types their question into ChatGPT or Perplexity before opening Google. The AI engine presents a single authoritative answer that either names your clinic or doesn't.
          </p>
          <p>
            The journey now reads: (1) AI query, (2) cited answer names your clinic or a competitor, (3) patient clicks through, (4) patient submits an enquiry. The bottleneck is being the cited answer, then responding fast enough to convert that citation into a booked consultation.
          </p>
          <p>
            Practices winning the implant market in 2026 are those visible in AI, reachable instantly, and able to qualify and schedule patients without friction. This is no longer competitive advantage — it's table stakes.
          </p>
        </div>
      </section>

      <section id="qualification" className="mb-16">
        <h2 className="text-h2 text-ink mb-6">Qualifying Implant Candidates Automatically</h2>

        <div className="space-y-4 text-body text-ink/65 max-w-prose">
          <p>
            Not every implant enquiry is a qualified candidate. Some patients lack bone structure, periodontal health, or financial capacity. Processa deploys a qualification layer that runs in real-time, extracting key signals and immediately assessing treatment eligibility.
          </p>
          <p>
            The pre-screening layer asks strategic questions embedded within the response flow: tooth count, timeline, prior experience, and health status. Candidates with green flags are flagged for immediate coordinator follow-up. Those with contraindications are routed to an educational pathway instead.
          </p>
          <p>
            The result: higher conversion rate per enquiry, reduced time-to-consultation, and improved patient experience because suitable candidates get fast-tracked.
          </p>
        </div>
      </section>

      <div className="border-t border-ink/8 pt-8">
        <p className="text-label font-medium uppercase tracking-widest text-ink/40 mb-4">Related</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/invisalign-lead-generation" className="text-sm text-ink/60 hover:text-gold transition-colors">Invisalign Leads &rarr;</Link>
          <Link to="/sub-60-second-lead-routing" className="text-sm text-ink/60 hover:text-gold transition-colors">Lead Routing &rarr;</Link>
          <Link to="/answer-engine-optimisation-dental" className="text-sm text-ink/60 hover:text-gold transition-colors">AEO &rarr;</Link>
        </div>
      </div>
    </SubpageLayout>
  );
}
