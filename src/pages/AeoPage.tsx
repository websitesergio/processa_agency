import SubpageLayout from '../components/SubpageLayout';
import { Link } from 'react-router-dom';

export default function AeoPage() {
  return (
    <SubpageLayout
      breadcrumb="Answer Engine Optimisation"
      breadcrumbPath="/answer-engine-optimisation-dental"
      title="Answer Engine Optimisation for Dental Practices"
      subtitle="AI engines no longer list links — they cite answers. Processa builds the semantic infrastructure that makes AI engines cite your clinic as the authority."
      tldr={[
        'AEO positions your clinic as the cited answer in ChatGPT, Perplexity, and Google AI Overviews',
        'Semantic schema + entity verification = AI engines trust and cite your practice',
        'Citation authority compounds over 60-90 days, generating leads at zero ad spend',
      ]}
      toc={[
        { id: 'what-is-aeo', label: 'What Is AEO?' },
        { id: 'why-2026', label: 'Why AEO in 2026' },
        { id: 'infrastructure', label: 'The Infrastructure' },
        { id: 'implant-invisalign', label: 'For Implant & Invisalign' },
      ]}
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Answer Engine Optimisation for Dental Practices',
        provider: { '@type': 'Organization', name: 'Processa' },
        description: 'AEO infrastructure that positions dental clinics for citation in AI search engines.',
        areaServed: { '@type': 'Place', name: 'Europe' },
      }}
    >
      <section id="what-is-aeo" className="mb-16">
        <h2 className="text-h2 text-ink mb-6">What Is Answer Engine Optimisation?</h2>
        <div className="space-y-4 text-body text-ink/65 max-w-prose">
          <p>
            Answer Engine Optimisation (AEO) is distinct from traditional SEO. SEO optimises for keyword rankings — your practice ranks on page one for "dental implants London." AEO optimises for being cited by AI engines — ChatGPT, Perplexity, Google AI Overviews, Microsoft Copilot — which synthesise information and present a single authoritative answer.
          </p>
          <p>
            The fundamental difference is structural. Google presents links. An AI engine presents a synthesised answer that names one or two authoritative sources. When a patient asks ChatGPT about implant recovery, the AI cites your clinic as the expert — that citation is worth exponentially more than a link on page three.
          </p>
          <p>
            AEO relies on semantic signals rather than keyword matching. Instead of optimising around keywords, you structure your website with semantic schema (JSON-LD) that tells AI engines: "This is a dental practice, offering these procedures, with these qualified practitioners, in these locations." Entity recognition becomes more important than keyword density.
          </p>
          <p>
            The net effect is a different discovery path. Instead of ranking on page one for keywords (increasingly difficult with AI Overviews occupying the top spot), you become the source cited within those overviews. Patients discover you through AI-driven education, not keyword search.
          </p>
        </div>
      </section>

      <section id="why-2026" className="mb-16">
        <h2 className="text-h2 text-ink mb-6">Why Dental Practices Need AEO in 2026</h2>
        <div className="space-y-4 text-body text-ink/65 max-w-prose">
          <p>
            The discovery landscape has shifted dramatically. The majority of high-intent dental queries now go to AI engines first. A patient considering implants opens ChatGPT or Perplexity before Google. These AI engines have become primary sources of health information — more trusted than search because they present synthesised expert consensus.
          </p>
          <p>
            For practices targeting patients in early-stage treatment exploration, AI discovery now represents 40-50% of qualified lead volume in many markets. This is higher in cosmetic and elective treatments where patients are actively comparing options.
          </p>
          <p>
            The competitive implication: if your competitor is cited consistently in AI overviews and you're not, patients in the research phase discover them. By the time patients reach traditional search, they already have a preferred option. Your practice competes from behind.
          </p>
          <p>
            Furthermore, citation advantage compounds: more lead volume, higher conversion (patients arrive pre-educated), and lower Customer Acquisition Cost (visibility is earned, not bought).
          </p>
        </div>
      </section>

      <section id="infrastructure" className="mb-16">
        <h2 className="text-h2 text-ink mb-6">The AEO Infrastructure Processa Builds</h2>
        <div className="space-y-4 text-body text-ink/65 max-w-prose">
          <p>
            <strong className="text-ink">Semantic schema:</strong> Processa deploys structured data (FAQPage, Service, Organization, and Physician JSON-LD) that tells AI engines exactly what services you offer, who provides them, where you operate, and how to contact you.
          </p>
          <p>
            <strong className="text-ink">Entity verification:</strong> AI engines cross-reference multiple sources to verify you are who you claim. Your clinic name, address, phone, and credentials must be consistent across website, Google Business Profile, directories, and reviews. Inconsistencies reduce citation probability.
          </p>
          <p>
            <strong className="text-ink">Authoritative content:</strong> Your site must signal authority on topics you treat. A comprehensive guide written by your practitioner ranks higher for citation than a 400-word blog post. Processa's content architecture builds this depth efficiently.
          </p>
          <p>
            <strong className="text-ink">Signal consistency:</strong> Website, social profiles, directories, testimonials, and articles should all reinforce the same message. When AI engines find consistency across all touchpoints, your clinic becomes a trusted citation source.
          </p>
        </div>
      </section>

      <section id="implant-invisalign" className="mb-16">
        <h2 className="text-h2 text-ink mb-6">AEO for Implant and Invisalign Practices</h2>
        <div className="space-y-4 text-body text-ink/65 max-w-prose">
          <p>
            Implant and Invisalign represent the highest-value patient segments. Both have high financial commitment, long timelines, and significant education requirements — making them perfect AEO targets. Patients are in deep research mode when they first query AI engines about these treatments.
          </p>
          <p>
            For implants, AEO targets queries like "best implant clinic Europe," "full-mouth implant cost," and "implant bone grafting timeline." For Invisalign, it targets "Invisalign vs braces," "Invisalign cost UK," and "Invisalign for severe crowding."
          </p>
          <p>
            Patients don't choose based on price in high-ticket treatment. They choose based on perceived expertise and trust. AEO builds that positioning efficiently — when AI engines consistently cite your clinic as the authority, you've won the patient's confidence before they ever visit your website.
          </p>
        </div>
      </section>

      <div className="border-t border-ink/8 pt-8">
        <p className="text-label font-medium uppercase tracking-widest text-ink/40 mb-4">Related</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/dental-implant-patient-acquisition" className="text-sm text-ink/60 hover:text-gold transition-colors">Implant Acquisition &rarr;</Link>
          <Link to="/invisalign-lead-generation" className="text-sm text-ink/60 hover:text-gold transition-colors">Invisalign Leads &rarr;</Link>
          <Link to="/method" className="text-sm text-ink/60 hover:text-gold transition-colors">14-Day Method &rarr;</Link>
        </div>
      </div>
    </SubpageLayout>
  );
}
