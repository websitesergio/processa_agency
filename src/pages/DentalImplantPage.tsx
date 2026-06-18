import React from 'react'
import { Link } from 'react-router-dom'
import FAQSection from '../components/FAQSection'

export default function DentalImplantPage() {
  return (
    <article itemScope itemType="https://schema.org/Service">
      <meta itemProp="name" content="AI-Powered Dental Implant Patient Acquisition" />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6 sticky-cta-anchor">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-slate-400">
            <Link to="/" className="hover:text-amber-100">Home</Link>
            <span className="mx-2">/</span>
            <span>Dental Implant Patient Acquisition</span>
          </nav>

          <h1 className="text-5xl font-serif font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Dental Implant Patient Acquisition for European Clinics
          </h1>

          <p className="text-xl mb-8 max-w-2xl leading-relaxed text-slate-200">
            High-ticket implant cases demand instant response and AI-first discovery. Processa routes qualified implant enquiries within 60 seconds, positioning your clinic to win before competitors respond.
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

      {/* Section 1: Why Implant Enquiries Demand Instant Response */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            Why Implant Enquiries Demand Instant Response
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Dental implant cases represent some of the highest-value enquiries a practice receives. A single patient deciding to proceed with implant treatment commits to a significant investment—often £3,500 or more per tooth. This high financial commitment means implant enquiries are inherently high-intent: patients asking about implants are already past the awareness stage and actively evaluating treatment options.
            </p>

            <p>
              In the implant market, competitive pressure is intense. Multiple clinics are bidding for the same patient attention. When a prospective implant patient submits an enquiry—whether through AI citation, your website, or a review platform—the first clinic to respond meaningfully wins. Research on online lead response consistently shows conversion odds fall sharply when the first response is delayed beyond a few minutes. A patient enquiry sits in an inbox for an hour, and they've already consulted three competitors.
            </p>

            <p>
              The response window for high-value treatments is brutally narrow. Your practice cannot afford to let enquiries age. Manual routing—where an enquiry must wait for a coordinator to arrive, read the message, categorise it, and route it—introduces friction that costs patients. Sub-60-second automated routing closes this gap, ensuring every implant lead is acknowledged and triaged before the patient's moment of decision-making passes.
            </p>

            <p>
              Additionally, implant cases often require pre-screening. Not every enquiry is a qualified implant candidate. A patient may be asking out of curiosity, lack sufficient bone structure, or be priced out by the investment. Automated qualification layers—applied in real-time—filter genuine candidates from tire-kickers, allowing your coordinators to focus on patient conversations that convert rather than qualifying leads manually.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: How Processa Generates Qualified Implant Leads */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f5f2ec' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            How Processa Generates Qualified Implant Leads
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Answer Engine Optimisation (AEO) is the foundation. AI search engines—ChatGPT, Perplexity, Google AI Overviews—now handle the majority of high-intent dental enquiries before they reach traditional search. When a patient asks "best dental implant clinic in Manchester" or "what's the cost of a full-mouth implant restoration," they're querying an AI engine, not Google. That AI engine cites one authoritative answer, not ten blue links. If your clinic is cited, the patient finds you. If not, they find your competitor.
            </p>

            <p>
              Processa builds the semantic infrastructure that AI engines rely on to cite your clinic. This includes semantic schema (FAQ, Service, and Organization JSON-LD), entity verification across your online presence, and authoritative content architecture that signals to AI engines that your clinic is the expert on implant treatment in your region. Being cited consistently in AI responses creates a steady stream of high-intent leads.
            </p>

            <p>
              Automated routing closes the gap between lead receipt and first response. The moment a patient enquiry lands—whether via contact form, AI referral, or messaging platform—Processa identifies the treatment type (implant), extracts core details (tooth count, timeline, location), and dispatches a branded response (SMS, WhatsApp, email) within 60 seconds. A coordinator is queued for follow-up. The patient perceives instant, professional engagement. This operates 24/7, independent of your practice's opening hours.
            </p>

            <p>
              Over time, this combination—AI citation visibility + instant routing + automated qualification—generates a compounding lead pipeline. Patients discover your clinic through AI, receive immediate acknowledgment, and are routed to the right team member without delay. Your coordinators spend time on patient conversations, not on email triage.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The Implant Patient Journey in 2026 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            The Implant Patient Journey in 2026
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              The patient journey for high-value dental treatments has fundamentally shifted. A decade ago, implant patients began with a Google search. Today, they begin with an AI query. A patient considering whether implants are right for them, or how much implants cost in Europe, or what recovery looks like, types that question into ChatGPT or Perplexity before opening Google. The AI engine synthesises multiple sources and presents a single authoritative answer. That answer might cite your clinic's content, your surgeon's credentials, or your patient testimonials—or it might cite your competitor's.
            </p>

            <p>
              The patient journey now reads: (1) AI query from the patient; (2) AI engine's cited answer (which either names your clinic or doesn't); (3) patient clicks through to your site or competitor's; (4) patient submits an enquiry. The bottleneck is not Google ranking anymore. The bottleneck is being the cited answer in AI overviews, and then responding fast enough to convert that citation into a booked consultation.
            </p>

            <p>
              Processa addresses both. AEO positions your clinic to be cited consistently in AI overviews for high-value implant queries. Automated routing then ensures that when a patient acts on that citation and submits an enquiry, your practice responds immediately. Being cited and responding fast creates a compounding effect: more lead volume + higher conversion rate = higher revenue per patient acquisition pound.
            </p>

            <p>
              In 2026, the practices winning the implant market are those visible in AI, reachable instantly, and able to qualify and schedule patients without friction. This is no longer competitive advantage—it's table stakes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Qualifying Implant Candidates Automatically */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f5f2ec' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            Qualifying Implant Candidates Automatically
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Not every implant enquiry is a qualified candidate. Some patients are enquiring out of curiosity; others lack the bone structure, periodontal health, or financial capacity for treatment. Manual qualification—where a coordinator must gather detailed information via phone or email—is slow, labour-intensive, and frustrating for patients who aren't suitable candidates. Processa deploys a qualification layer that runs in real-time, extracting key signals from the initial enquiry and immediately assessing treatment eligibility.
            </p>

            <p>
              The pre-screening layer asks strategic questions embedded within the response flow: tooth count, timeline, prior implant experience, and general health status. The patient perceives this as natural conversation. Behind the scenes, Processa is evaluating whether the patient is a qualified implant candidate based on your clinic's treatment criteria. Candidates with green flags are flagged for immediate coordinator follow-up. Those with red flags (obvious contra-indications, unrealistic budgets, or immediate expectations) are routed to an educational pathway instead—keeping the door open without burning your coordinator's time.
            </p>

            <p>
              This automation multiplies your team's efficiency. Your coordinators receive a clean list of genuinely qualified implant patients, pre-qualified by the system and ready for consultation booking. The result: higher conversion rate per enquiry, reduced time-to-consultation, and improved patient experience because suitable candidates get fast-tracked and unsuitable candidates are handled transparently.
            </p>

            <p>
              Over a year, this qualification layer compounds. You're not processing loose enquiries—you're processing qualified patients, each one pre-vetted and ready for a conversation that leads to treatment.
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
              to="/invisalign-lead-generation"
              className="p-6 border-l-4 hover:bg-white transition"
              style={{ borderColor: '#c9a96e' }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">Invisalign Lead Generation</h4>
              <p className="text-sm text-slate-600">
                Apply the same AI-first methodology to Invisalign patient acquisition and reduce CAC on paid media.
              </p>
            </Link>

            <Link
              to="/sub-60-second-lead-routing"
              className="p-6 border-l-4 hover:bg-white transition"
              style={{ borderColor: '#c9a96e' }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">Sub-60-Second Lead Routing</h4>
              <p className="text-sm text-slate-600">
                Learn how instant routing closes the response-latency gap for all high-value enquiries.
              </p>
            </Link>

            <Link
              to="/answer-engine-optimisation-dental"
              className="p-6 border-l-4 hover:bg-white transition"
              style={{ borderColor: '#c9a96e' }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">Answer Engine Optimisation for Dental</h4>
              <p className="text-sm text-slate-600">
                Discover how AEO positions your implant expertise in AI overviews and drives organic lead flow.
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
