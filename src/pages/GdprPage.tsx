import SubpageLayout from '../components/SubpageLayout';
import { Link } from 'react-router-dom';

export default function GdprPage() {
  return (
    <SubpageLayout
      breadcrumb="GDPR Compliance"
      breadcrumbPath="/gdpr-dental-data-compliance"
      title="GDPR-Compliant Dental Data Infrastructure"
      subtitle="Patient data hosted on EU-region infrastructure, independently certified to ISO 27001 and SOC 2. Encrypted at rest and in transit by default."
      tldr={[
        'EU-hosted on Google Cloud Platform with ISO 27001 and SOC 2 certification',
        'AES-256 encryption at rest, TLS 1.3 in transit, EU-region key management',
        'Data Processing Agreement included as standard with every engagement',
      ]}
      toc={[
        { id: 'infrastructure', label: 'Infrastructure Security' },
        { id: 'encryption', label: 'Encryption Standards' },
        { id: 'compliance', label: 'Compliance Framework' },
        { id: 'data-policy', label: 'Data Processing Policy' },
      ]}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'GDPR-Compliant Dental Data Infrastructure',
        provider: { '@type': 'Organization', name: 'Processa' },
        description: 'EU-hosted, GDPR-compliant data infrastructure for dental patient acquisition.',
        areaServed: { '@type': 'Place', name: 'Europe' },
      }}
    >
      <section id="infrastructure" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">Infrastructure Security</h2>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            Patient data is hosted on Google Cloud Platform's EU-region infrastructure, independently certified to ISO 27001 and SOC 2. All data processing occurs within EU boundaries, with no transfer to non-EU jurisdictions.
          </p>
          <p>
            No patient data is shared with advertising platforms or data brokers. All encryption keys are managed within EU-region Key Management Services, and all processing logs are retained for audit purposes.
          </p>
        </div>
      </section>

      <section id="encryption" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">Encryption Standards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-card border border-slate-200 bg-slate-50 p-4">
            <span className="text-sm font-bold text-brand-dark">At Rest</span>
            <p className="text-sm text-slate-600 mt-1">AES-256 encryption</p>
          </div>
          <div className="rounded-card border border-slate-200 bg-slate-50 p-4">
            <span className="text-sm font-bold text-brand-dark">In Transit</span>
            <p className="text-sm text-slate-600 mt-1">TLS 1.3 by default</p>
          </div>
        </div>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            Data is encrypted at rest (AES-256) and in transit (TLS 1.3) by default. Encryption is not optional or add-on — it's the baseline configuration for all patient data processed through Processa's infrastructure.
          </p>
        </div>
      </section>

      <section id="compliance" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">Compliance Framework</h2>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            For dental clinics operating across multiple European jurisdictions, Processa supports dual-compliance frameworks covering both EU GDPR and applicable national implementing legislation.
          </p>
          <p>
            Your practice receives audit-ready documentation and compliance assurance as standard. This includes data flow mapping, lawful basis documentation, and retention policy schedules specific to dental patient data.
          </p>
        </div>
      </section>

      <section id="data-policy" className="mb-16">
        <h2 className="text-h2 text-brand-dark mb-6">Data Processing Policy</h2>
        <div className="space-y-4 text-body text-slate-600 max-w-prose">
          <p>
            Every engagement includes a Data Processing Agreement defining lawful basis, retention limits, and processing scope. The DPA specifies exactly what data is collected, how it's processed, how long it's retained, and the mechanisms for patient access requests and data deletion.
          </p>
          <p>
            No patient data is used for model training, shared with third parties, or retained beyond the contractually agreed retention period. Data minimisation is applied by default — only the minimum data required for lead routing and qualification is processed.
          </p>
        </div>
      </section>

      <div className="border-t border-slate-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">Related</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/sub-60-second-lead-routing" className="text-sm text-brand-dark hover:text-brand-accent transition-colors">Lead Routing &rarr;</Link>
          <Link to="/method" className="text-sm text-brand-dark hover:text-brand-accent transition-colors">14-Day Method &rarr;</Link>
          <Link to="/privacy" className="text-sm text-brand-dark hover:text-brand-accent transition-colors">Privacy Policy &rarr;</Link>
        </div>
      </div>
    </SubpageLayout>
  );
}
