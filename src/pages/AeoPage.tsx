import React from 'react'
import { Link } from 'react-router-dom'
import FAQSection from '../components/FAQSection'

export default function AeoPage() {
  return (
    <article itemScope itemType="https://schema.org/Service">
      <meta itemProp="name" content="Answer Engine Optimisation for Dental Practices" />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-slate-400">
            <Link to="/" className="hover:text-amber-100">Home</Link>
            <span className="mx-2">/</span>
            <span>Answer Engine Optimisation</span>
          </nav>

          <h1 className="text-5xl font-serif font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Answer Engine Optimisation for Dental Practices
          </h1>

          <p className="text-xl mb-8 max-w-2xl leading-relaxed text-slate-200">
            AI engines no longer list links; they cite answers. Processa builds the semantic infrastructure that makes AI engines cite your clinic as the authority on implants, Invisalign, and cosmetic dentistry, driving qualified patients directly to your practice.
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

      {/* Section 1: What Is Answer Engine Optimisation (AEO)? */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            What Is Answer Engine Optimisation (AEO)?
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Answer Engine Optimisation (AEO) is distinct from traditional Search Engine Optimisation (SEO). SEO optimises for keyword rankings—your practice ranks on page one of Google for "dental implants London." When users search, they see a list of ten results, click on whichever looks most relevant, and explore your site. AEO optimises for being cited by AI engines—ChatGPT, Perplexity, Google AI Overviews, Microsoft Copilot, Claude—which synthesise information from multiple sources and present a single authoritative answer.
            </p>

            <p>
              The fundamental difference is structural. Google search presents links. An AI engine presents a synthesised answer that names one or two authoritative sources. When a patient asks ChatGPT "what is the recovery time for dental implants," the AI synthesises information from dental schools, clinic websites, and clinical research, then provides an answer that might cite your clinic as "according to Dr Smith at Bright Dental, implant recovery typically spans 3–6 months." That citation is worth exponentially more than a link on page three of Google: it's social proof, expert attribution, and patient education delivered in one sentence.
            </p>

            <p>
              AEO relies on semantic signals rather than keyword matching. Instead of optimising a page around the keyword "dental implants cost," you structure your website and content with semantic schema (JSON-LD markup) that tells AI engines: "This is a Dental practice, offering Implant procedures, with qualified practitioners, in these locations, with this pricing." Entity recognition—the AI engine's ability to identify your clinic as a specific, authoritative entity—becomes more important than keyword density. An AI engine cross-references your clinic website, your Google Business Profile, your professional credentials, and patient reviews to verify you are who you claim to be. If these signals are consistent, you become a trusted source for citations.
            </p>

            <p>
              The net effect is a different discovery path. Instead of ranking on page one for keywords (which is increasingly difficult given Google's own AI Overviews now occupy the top spot), you become the source cited within those AI overviews. Patients discover you through AI-driven education, not keyword search. This is fundamentally more valuable for high-ticket treatments because patients seeking implants or Invisalign are asking educational questions ("How does it work?", "What does it cost?", "What's recovery like?"), not navigational queries ("Bright Dental implants"). AEO captures educational intent at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why Dental Practices Need AEO in 2026 */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f5f2ec' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            Why Dental Practices Need AEO in 2026
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              The discovery landscape has shifted dramatically. Majority of high-intent dental queries now go to AI engines first, not Google. A patient considering whether implants are right for them, or how much Invisalign costs, or what to expect after a wisdom tooth extraction, opens ChatGPT or Perplexity before Google. These AI engines have become primary sources of health information—more trusted than a Google search because they present synthesised expert consensus rather than a list of potentially biased clinic websites.
            </p>

            <p>
              This shift is not marginal; it's wholesale. For practices targeting patients who are in early-stage treatment exploration (not yet ready to book but researching options), AI discovery now represents 40–50% of qualified lead volume in many markets. This is higher in cosmetic and elective treatments (implants, Invisalign, cosmetic bonding) where patients are actively comparing options and spending time in educational queries. If your clinic is not cited in AI overviews, you are invisible to half the qualified patients in your market.
            </p>

            <p>
              The competitive implication is severe. If your competitor is cited consistently in AI overviews for "best implant clinic Europe" and you're not, patients in the research phase discover them, not you. By the time patients reach traditional search or referral pathways, they already have a preferred option. Your practice is competing from behind rather than from ahead. This is existential for high-ticket services where early-stage visibility determines which practices make the final consideration set.
            </p>

            <p>
              Furthermore, if your practice is not cited in AI, you're missing lead volume that never reaches any competitor—it stays within the AI's response. If ChatGPT provides a complete answer to "how much do implants cost" without citing any clinic, the patient learns pricing but has no action path. If your clinic is cited, that patient now has a direct contact point. Over time, this citation advantage compounds: more lead volume, higher conversion (because patients arrive pre-educated), and lower Customer Acquisition Cost compared to paid media (because visibility is earned, not bought).
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The AEO Infrastructure Processa Builds */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            The AEO Infrastructure Processa Builds
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              AEO infrastructure is foundational and systematic. First: semantic schema. Processa deploys structured data (FAQPage, Service, Organization, and Physician JSON-LD) across your website that tells AI engines exactly what services you offer, who provides them, where you operate, and how to contact you. This schema is not visible to humans browsing your site; it's metadata that AI engines read to understand your clinic's identity and specialties. Proper schema implementation increases the likelihood that AI engines cite you when synthesising answers about your services.
            </p>

            <p>
              Second: entity verification. AI engines cross-reference multiple sources to verify you are who you claim to be. This means your clinic name, address, phone number, and practitioner credentials must be consistent across your website, Google Business Profile, practice directories, professional registers, and review platforms. Inconsistencies (listing "Bright Dental" on your website but "Dr John Smith Implants" on Google) confuse AI engines and reduce citation probability. Processa audits and coordinates this NAP (Name, Address, Phone) consistency across all platforms, making your clinic's identity clear and verifiable to AI systems.
            </p>

            <p>
              Third: authoritative content architecture. Your website structure and content must signal authority on the topics you treat. If your practice specialises in implants, your site should have comprehensive, educational content on implant procedures, bone grafting, long-term implant care, and treatment planning. This content should be written at expert level (or by practitioners), not at clickbait level. AI engines reward depth and expertise. A 400-word blog post on "implant recovery" ranks lower for citation than a comprehensive 2,000-word guide written by your practitioner. Processa's content infrastructure is designed to build this depth efficiently.
            </p>

            <p>
              Fourth: consistent signals across the pipeline. Your website, your social profiles, your directory listings, your patient testimonials, and your published articles should all reinforce the same message: you're the expert in your specialities, you've treated many patients, patients trust you, and you're visible and credible. When AI engines cross-reference all these signals and find consistency, your clinic becomes a trusted citation source. When they find inconsistency or low signal volume, your clinic remains invisible. Processa's infrastructure ensures signal consistency across all touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: AEO for Implant and Invisalign Practices */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f5f2ec' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            AEO for Implant and Invisalign Practices
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Implant and Invisalign cases represent the highest-value patient segments in dentistry. Both treatments have high financial commitment, long treatment timelines, and significant patient education requirements. This makes them perfect targets for AEO. Patients are already in deep research mode when they first query AI engines about these treatments. If your clinic is cited as the expert source during that research, you've won the patient's initial attention before any competitor has the opportunity.
            </p>

            <p>
              For implants specifically, AEO positioning targets queries like "best implant clinic Europe," "how much do full-mouth implants cost," "implant bone grafting timeline," "what to expect after implant surgery." These are educational queries from high-intent patients. If your clinic is cited as the authoritative source on implant bone grafting, you've positioned yourself as the expert that patients want to book with. Patients don't choose based on price in implant treatment; they choose based on perceived expertise and trust. AEO builds that positioning efficiently.
            </p>

            <p>
              For Invisalign, AEO targets queries like "is Invisalign faster than braces," "Invisalign cost UK," "can I get Invisalign if I have crowns," "Invisalign for severe crowding." These queries represent patients who are considering Invisalign but evaluating whether it's right for them. If your clinic is cited in the answer—especially if you've addressed the specific concern the patient is researching—conversion to consultation becomes highly probable. You've answered their question, built credibility, and provided a direct contact path in one interaction.
            </p>

            <p>
              The economic effect is pronounced. A single AI citation for "best Invisalign clinic Manchester" can generate 50–100 qualified enquiries per month once citation consistency is established. These enquiries cost nothing (no PPC spend), are pre-qualified (patients are already researching Invisalign), and arrive with high educational foundation (patients already understand treatment basics). This citation-driven lead volume compounds: as your citation frequency increases, brand awareness builds passively. Patients see your clinic mentioned repeatedly in AI responses, building familiarity and trust before they ever click through to your website.
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
              to="/dental-implant-patient-acquisition"
              className="p-6 border-l-4 hover:bg-white transition"
              style={{ borderColor: '#c9a96e' }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">Dental Implant Patient Acquisition</h4>
              <p className="text-sm text-slate-600">
                Combine AEO visibility with automated routing to capture and convert implant leads.
              </p>
            </Link>

            <Link
              to="/invisalign-lead-generation"
              className="p-6 border-l-4 hover:bg-white transition"
              style={{ borderColor: '#c9a96e' }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">Invisalign Lead Generation</h4>
              <p className="text-sm text-slate-600">
                Use AEO to position your Invisalign expertise and reduce acquisition cost.
              </p>
            </Link>

            <Link
              to="/method"
              className="p-6 border-l-4 hover:bg-white transition"
              style={{ borderColor: '#c9a96e' }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">The Processa 14-Day Deployment Method</h4>
              <p className="text-sm text-slate-600">
                Learn how AEO infrastructure is deployed systematically in days, not months.
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
