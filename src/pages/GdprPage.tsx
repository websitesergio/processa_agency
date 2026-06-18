import React from 'react'
import { Link } from 'react-router-dom'
import FAQSection from '../components/FAQSection'

export default function GdprPage() {
  return (
    <article itemScope itemType="https://schema.org/Service">
      <meta itemProp="name" content="GDPR-Compliant Dental Data Infrastructure" />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-slate-400">
            <Link to="/" className="hover:text-amber-100">Home</Link>
            <span className="mx-2">/</span>
            <span>GDPR-Compliant Data Management</span>
          </nav>

          <h1 className="text-5xl font-serif font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            GDPR-Compliant Dental Patient Data Management
          </h1>

          <p className="text-xl mb-8 max-w-2xl leading-relaxed text-slate-200">
            Patient data in dental is regulated. Processa handles enquiry data with full GDPR compliance, ISO 27001 certification, encrypted infrastructure, and transparent Data Processing Agreements that give you and your patients control over information.
          </p>

          <Link
            to="/access"
            className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded text-white font-semibold transition"
            style={{ backgroundColor: '#c9a96e' }}
          >
            Get a free AI-visibility audit
          </Link>
        </div>
      </section>

      {/* Section 1: GDPR Requirements for Dental Patient Acquisition */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            GDPR Requirements for Dental Patient Acquisition
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Patient enquiry data is personal data under the General Data Protection Regulation (GDPR) in the EU and the UK General Data Protection Regulation (UK GDPR) in the United Kingdom. This means that the moment a patient submits their name, contact details, and treatment enquiry to your practice, that data is subject to regulatory requirements. These requirements are non-negotiable and apply whether you're a solo practitioner or a multi-site DSO.
            </p>

            <p>
              GDPR compliance requires three core elements. First: lawful basis. You must have a valid legal reason to process patient data. For enquiry data, the typical basis is "legitimate interest" (you have a legitimate business interest in contacting the patient about treatment) or "contract" (the patient is entering into a treatment agreement). Second: retention limits. You cannot keep patient enquiry data indefinitely. Typical retention is 1–2 years post-consultation unless specific clinical reasons justify longer storage. Third: data subject rights. Patients have the right to access their data, correct it, request deletion, and understand how you're processing it.
            </p>

            <p>
              The UK GDPR mirrors the EU GDPR in most respects, but with separate regulatory authority (the Information Commissioner's Office, not the European Commission). Practices operating across UK and EU jurisdictions must comply with both regimes. This means maintaining separate processing agreements, understanding different enforcement mechanisms, and documenting compliance in both jurisdictions.
            </p>

            <p>
              Beyond GDPR, dental patient data often qualifies as health data, which triggers additional protections. UK GDPR and EU GDPR both restrict processing of health data, requiring explicit patient consent or a lawful basis documented in your Data Processing Agreement. This is where many practices stumble: they process patient enquiry data without a clear DPA or documented lawful basis, creating compliance risk.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Processa's Data Security Infrastructure */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f5f2ec' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            Processa's Data Security Infrastructure
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Patient data is hosted on Google Cloud Platform's EU-region infrastructure, independently certified to ISO 27001 and SOC 2. Data is encrypted at rest (AES-256) and in transit (TLS 1.3) by default across the pipeline. Every engagement includes a Data Processing Agreement defining lawful basis, retention limits, and processing scope. No patient data is shared with advertising platforms or data brokers.
            </p>

            <p>
              This infrastructure is foundational. ISO 27001 certification means Google Cloud has undergone rigorous independent audit of information security management systems. SOC 2 certification means all access controls, logging, and incident response mechanisms meet strict standards for service organizations handling sensitive data. These aren't marketing claims; they're independently verified compliance certifications that form the legal foundation for your data processing.
            </p>

            <p>
              Encryption at rest (AES-256) means that even if someone gained physical access to storage hardware, the data would be unreadable without the encryption key. Encryption in transit (TLS 1.3) means that enquiry data moving from your practice to Processa's servers is encrypted end-to-end, preventing interception. This dual-layer encryption means your patient data is protected both when it's moving and when it's stored.
            </p>

            <p>
              The Data Processing Agreement is not a secondary document; it's central to your compliance posture. It explicitly defines which party (your practice or Processa) is the data controller, which is the processor, what the lawful basis for processing is, how long data is retained, and who can access it. This clarity protects both parties and ensures that if you're ever audited by a regulator, you can demonstrate that patient data has been handled lawfully and transparently.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Your Data Processing Agreement */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            Your Data Processing Agreement
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              When you engage with Processa, you receive a fully executed Data Processing Agreement that covers every aspect of how your patient data is handled. The DPA establishes that your practice is the data controller (you own the data and decide how it's used), and Processa is the processor (Processa processes data on your instructions). This distinction is crucial: under GDPR, only you—the practice—are liable for regulatory compliance. Processa's role is to assist you in complying with that responsibility.
            </p>

            <p>
              The DPA specifies the lawful basis for processing. For patient enquiries, this is typically "legitimate interest" (your practice has a legitimate business interest in responding to treatment enquiries) or "contract" (the patient is considering entering into a treatment relationship). Both are valid under GDPR, but the DPA documents which basis applies, removing ambiguity. The DPA also specifies retention limits: for most enquiries, data is retained for 12 months post-consultation, then securely deleted. For patients who do not convert to treatment, retention is shorter. This ensures you're not holding patient data longer than necessary, meeting GDPR's data minimisation principle.
            </p>

            <p>
              The DPA also covers data subject rights. Your patients can request access to their enquiry data, ask for corrections, or request deletion. Processa's systems are designed to facilitate these requests. If a patient asks your practice for a copy of their data, or requests deletion, your practice can fulfill that request through Processa's infrastructure without legal friction. This transparency builds patient trust and ensures compliance.
            </p>

            <p>
              Additionally, the DPA addresses data breaches. If a breach occurs (unauthorised access to patient data), both parties have clear responsibilities: Processa notifies your practice within 72 hours, you assess regulatory impact and notify patients if required, and both parties cooperate with regulators. This clarity prevents finger-pointing and ensures an organised incident response if the worst happens.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Dual-Compliance for UK and EU Dental Practices */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f5f2ec' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            Dual-Compliance for UK and EU Dental Practices
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              For practices operating across both UK and EU jurisdictions—whether multi-site DSOs, practices with patients across borders, or practices in Northern Ireland—data protection is more complex. The UK GDPR and EU GDPR have different regulatory authorities, slightly different rules, and different enforcement mechanisms. UK practices must comply with the Information Commissioner's Office; EU practices must comply with national Data Protection Authorities in their member state.
            </p>

            <p>
              Processa's infrastructure supports both regimes. Data can be hosted in EU-region infrastructure (meeting EU GDPR requirements) while simultaneously complying with UK GDPR for UK practices. The DPA is structured to accommodate both frameworks, ensuring that whether a patient is in Manchester or Munich, their data is processed lawfully under the applicable regulation.
            </p>

            <p>
              Cross-border transfers are particularly sensitive. If an EU practice sends patient data to a UK practice, or vice versa, that constitutes a data transfer across jurisdictions. Both EU GDPR and UK GDPR restrict such transfers unless specific safeguards are in place. Processa's architecture handles this by maintaining data in EU-region servers by default, only transferring data to practices in their own jurisdiction, and using Standard Contractual Clauses (SCCs) where cross-border transfers are necessary. This ensures compliance even when patient data spans multiple jurisdictions.
            </p>

            <p>
              Practically, this means a multi-site DSO operating across the UK and EU can manage patient enquiries through Processa without creating separate infrastructure. All patient data is handled within the same secure, compliant system. Each patient's data is processed according to the regulation applicable in their jurisdiction. Your practice receives the operational simplicity of one integrated platform, backed by the legal certainty of full compliance in every jurisdiction where you operate.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            Related Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/sub-60-second-lead-routing"
              className="p-6 border-l-4 hover:bg-white transition"
              style={{ borderColor: '#c9a96e' }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">Sub-60-Second Lead Routing</h4>
              <p className="text-sm text-slate-600">
                Learn how patient enquiry routing operates within this compliant data infrastructure.
              </p>
            </Link>

            <Link
              to="/answer-engine-optimisation-dental"
              className="p-6 border-l-4 hover:bg-white transition"
              style={{ borderColor: '#c9a96e' }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">Answer Engine Optimisation for Dental</h4>
              <p className="text-sm text-slate-600">
                See how AEO infrastructure handles patient data securely while building your visibility.
              </p>
            </Link>

            <Link
              to="/method"
              className="p-6 border-l-4 hover:bg-white transition"
              style={{ borderColor: '#c9a96e' }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">The Processa 14-Day Deployment Method</h4>
              <p className="text-sm text-slate-600">
                Understand how GDPR compliance is built into every phase of your deployment.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </article>
  )
}
