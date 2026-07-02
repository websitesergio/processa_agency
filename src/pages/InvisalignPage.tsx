import SubpageLayout from '../components/SubpageLayout';
import { Link } from 'react-router-dom';

export default function InvisalignPage() {
  return (
    <SubpageLayout
      breadcrumb="Invisalign Lead Generation"
      breadcrumbPath="/invisalign-lead-generation"
      title="Invisalign Lead Generation for European Clinics"
      subtitle="Position your Invisalign expertise as the cited authority in AI search. Reduce acquisition cost while increasing consultation volume."
      tldr={[
        'AI citation for Invisalign queries generates pre-qualified leads at zero ad spend',
        'Sub-60-second routing converts educational interest into booked consultations',
        'A single consistent AI citation can generate 50-100 qualified enquiries per month',
      ]}
      toc={[
        { id: 'ai-discovery', label: 'AI-First Patient Discovery' },
        { id: 'positioning', label: 'AEO for Invisalign' },
        { id: 'conversion', label: 'From Citation to Consultation' },
        { id: 'economics', label: 'The Economics' },
      ]}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Invisalign Lead Generation',
        provider: { '@type': 'Organization', name: 'Processa' },
        description: 'AI-powered lead generation for Invisalign dental practices across Europe.',
        areaServed: { '@type': 'Place', name: 'Europe' },
      }}
    >
      <section id="ai-discovery" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">AI-First Patient Discovery</h2>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            Patients considering Invisalign are in research mode. They ask AI engines questions like "is Invisalign faster than braces," "Invisalign cost UK," and "can I get Invisalign if I have crowns." These are educational queries from patients actively evaluating treatment options.
          </p>
          <p>
            AI engines present a single cited answer to these queries. If your clinic is cited in that answer, especially if you've addressed the specific concern the patient is researching, conversion to consultation becomes highly probable.
          </p>
        </div>
      </section>

      <section id="positioning" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">AEO for Invisalign Expertise</h2>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            AEO positioning targets queries that represent patients evaluating whether Invisalign is right for them. Processa builds the semantic infrastructure — structured JSON-LD schema, verified entity signals, and authoritative content — that AI engines use to identify your clinic as the expert in your region.
          </p>
          <p>
            This citation authority compounds over 60-90 days as AI systems index and verify the new content architecture. For practices investing in paid advertising, AEO provides a growing organic complement at zero incremental cost.
          </p>
        </div>
      </section>

      <section id="conversion" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">From Citation to Consultation</h2>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            When a patient acts on an AI citation and submits an enquiry, Processa's routing system responds within 60 seconds with a branded, personalised message. The patient perceives instant, professional engagement regardless of the time of day.
          </p>
          <p>
            Citation-driven leads arrive pre-educated. They already understand treatment basics because the AI response explained them. This means shorter consultation times, higher acceptance rates, and lower coordinator effort per conversion.
          </p>
        </div>
      </section>

      <section id="economics" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">The Economics of AI Citation</h2>
        <div className="rounded-card border border-slate-200 bg-slate-50 p-5 mb-6 flex items-center gap-4">
          <span className="text-3xl font-bold text-brand-accent">50-100</span>
          <span className="text-sm text-slate-600">Qualified monthly enquiries from a single consistent AI citation at zero PPC spend</span>
        </div>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            A single AI citation for a key Invisalign query can generate 50-100 qualified enquiries per month once citation consistency is established. These enquiries cost nothing, are pre-qualified, and convert at higher rates than cold paid traffic because the AI citation carries implicit endorsement.
          </p>
          <p>
            The combination of AEO citation authority and paid advertising amplification produces the highest-efficiency patient acquisition environment in modern dental marketing.
          </p>
        </div>
      </section>

      <div className="border-t border-slate-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">Related</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/dental-implant-patient-acquisition" className="text-sm text-brand-dark hover:text-brand-accent transition-colors">Implant Acquisition &rarr;</Link>
          <Link to="/answer-engine-optimisation-dental" className="text-sm text-brand-dark hover:text-brand-accent transition-colors">AEO &rarr;</Link>
          <Link to="/method" className="text-sm text-brand-dark hover:text-brand-accent transition-colors">14-Day Method &rarr;</Link>
        </div>
      </div>
    </SubpageLayout>
  );
}
