import SubpageLayout from '../components/SubpageLayout';
import { Link } from 'react-router-dom';

export default function LeadRoutingPage() {
  return (
    <SubpageLayout
      breadcrumb="Sub-60-Second Lead Routing"
      title="Sub-60-Second Lead Routing for Dental Practices"
      subtitle="Close the response-latency gap that research links to lost conversions. Every enquiry acknowledged and triaged within 60 seconds, 24/7."
      tldr={[
        '391% higher conversion when leads are contacted within 5 minutes vs 30 minutes',
        'Automated routing operates 24/7 independent of practice opening hours',
        'Branded responses via SMS, WhatsApp, or email dispatched within 60 seconds',
      ]}
      toc={[
        { id: 'speed-matters', label: 'Why Speed Matters' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'always-on', label: '24/7 Operation' },
        { id: 'results', label: 'Measurable Results' },
      ]}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Sub-60-Second Lead Routing',
        provider: { '@type': 'Organization', name: 'Processa' },
        description: 'Automated lead routing that responds to dental patient enquiries within 60 seconds.',
        areaServed: { '@type': 'Place', name: 'Europe' },
      }}
    >
      <section id="speed-matters" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">Why Speed Matters</h2>
        <div className="rounded-card border border-slate-200 bg-slate-50 p-5 mb-6 flex items-center gap-4">
          <span className="text-3xl font-bold text-brand-accent">391%</span>
          <span className="text-sm text-slate-600">Higher conversion probability when contacted within 5 minutes vs 30 minutes</span>
        </div>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            Research from Harvard Business Review shows a 391% higher conversion probability when a dental enquiry is contacted within 5 minutes versus 30 minutes. Lead conversion probability drops by 78% when response is delayed beyond five minutes.
          </p>
          <p>
            For a practice receiving 40 monthly high-ticket enquiries at £3,500 LTV, a 12-hour average response time represents £20,000-£40,000 in annual recoverable revenue lost to competitors who respond faster. This leakage is invisible on standard financial reports because it comprises patients who never booked, not patients who cancelled.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">How It Works</h2>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            When a patient submits an enquiry through your website, Google Ads landing page, or social media lead form, Processa's routing system immediately identifies the treatment type, selects the appropriate response template, and dispatches a branded, personalised message via SMS, WhatsApp, or email.
          </p>
          <p>
            A structured follow-up task is simultaneously queued for your patient coordinator with full lead context: treatment interest, urgency signals, and qualification data. Your coordinator picks up a warm, acknowledged patient — not a cold enquiry that's been sitting in an inbox.
          </p>
        </div>
      </section>

      <section id="always-on" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">24/7 Operation</h2>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            This automation operates 24 hours a day, seven days a week, with no dependency on practice opening hours. A patient submitting an enquiry at 11pm receives the same instant, professional acknowledgment as one submitting at 9am on a Tuesday.
          </p>
          <p>
            Weekend and evening enquiries represent a disproportionate share of high-intent leads — patients researching treatments in their own time. Without automated routing, these enquiries sit unanswered until Monday morning, by which time the patient has already consulted competitors.
          </p>
        </div>
      </section>

      <section id="results" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">Measurable Results</h2>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            Practices operating with sub-60-second lead routing see measurable conversion improvements within 30 days of deployment. Each enquiry is converted to a booked consultation at dramatically higher rates than manual, human-dependent response processes.
          </p>
          <p>
            The routing SLA is confirmed and auditable from Day 11 of Processa's 14-day deployment. Every enquiry response time is logged, and the sub-60-second guarantee is verified against actual performance data.
          </p>
        </div>
      </section>

      <div className="border-t border-slate-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">Related</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/dental-implant-patient-acquisition" className="text-sm text-brand-dark hover:text-brand-accent transition-colors">Implant Acquisition &rarr;</Link>
          <Link to="/invisalign-lead-generation" className="text-sm text-brand-dark hover:text-brand-accent transition-colors">Invisalign Leads &rarr;</Link>
          <Link to="/gdpr-dental-data-compliance" className="text-sm text-brand-dark hover:text-brand-accent transition-colors">GDPR Compliance &rarr;</Link>
        </div>
      </div>
    </SubpageLayout>
  );
}
