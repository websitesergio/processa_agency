import React from 'react'
import { Link } from 'react-router-dom'
import FAQSection from '../components/FAQSection'

export default function LeadRoutingPage() {
  return (
    <article itemScope itemType="https://schema.org/Service">
      <meta itemProp="name" content="Automated Sub-60-Second Dental Lead Routing" />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-slate-400">
            <Link to="/" className="hover:text-amber-100">Home</Link>
            <span className="mx-2">/</span>
            <span>Sub-60-Second Lead Routing</span>
          </nav>

          <h1 className="text-5xl font-serif font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Sub-60-Second Lead Routing for Dental Practices
          </h1>

          <p className="text-xl mb-8 max-w-2xl leading-relaxed text-slate-200">
            Every minute a patient enquiry sits in an inbox, conversion probability drops. Processa routes qualified leads to the right coordinator within 60 seconds, operating 24/7 independent of office hours, turning enquiry velocity into revenue.
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

      {/* Section 1: Why Response Speed Defines Revenue */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            Why Response Speed Defines Revenue
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Research on online lead response consistently shows conversion odds fall sharply when the first response is delayed beyond a few minutes. This is not a soft metric; it's predictive. When a patient submits a dental enquiry—whether for implants, Invisalign, or general treatment—they are in an active decision-making state. They're comparing options, mentally preparing for a phone call, and evaluating which practice feels responsive. A practice that responds in 5 minutes feels engaged. A practice that responds in 2 hours feels slow. The patient has already moved on.
            </p>

            <p>
              The competitive context amplifies this. Most dental practices respond to enquiries manually. An enquiry lands in an inbox. A coordinator logs in, reads the message, categorises it by treatment type, and routes it to the appropriate team member. This manual process introduces delay: 30 minutes on average, often longer. In that 30-minute window, high-intent patients have enquired with 2–3 competitors. The first practice to respond meaningfully gets the patient. Everyone else is competing for leftovers.
            </p>

            <p>
              High-value treatments make this even more acute. A patient enquiring about implant treatment (£3,500–15,000 depending on complexity) or comprehensive Invisalign (£2,500–4,000) is not casual. They've made a decision to move forward. The practice that acknowledges their enquiry first, provides clarity on next steps, and schedules them for consultation before objections set in, wins. The practice that lets the enquiry age in an inbox loses.
            </p>

            <p>
              This directly impacts revenue. Faster response means higher conversion per enquiry. Higher conversion per enquiry means lower Patient Acquisition Cost. Lower PAC means either higher profit margin per patient or reallocation of marketing spend to generate more volume. In any case, response speed is not a service differentiator; it's a revenue lever.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: How Sub-60-Second Routing Works */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f5f2ec' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            How Sub-60-Second Routing Works
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              The mechanism is straightforward but technically rigorous. When a patient enquiry lands—via your website contact form, WhatsApp, email, or any connected channel—Processa's routing engine receives the message immediately. In the first 10 seconds, the system extracts key signals: treatment type (implant, Invisalign, general check-up, emergency), patient contact details, and any clinical information provided. Natural language processing identifies which treatment category best matches the enquiry.
            </p>

            <p>
              Within 20–30 seconds, Processa generates a branded response in the patient's preferred channel (SMS, WhatsApp, email, or in-app message). This response acknowledges the enquiry, confirms treatment type, provides a high-level timeline ("We'll schedule you within 48 hours"), and requests any clarifying information needed for scheduling. The response is warm but efficient—it shows the patient that a real practice, not a chatbot, has received their message.
            </p>

            <p>
              Simultaneously, Processa queues the enquiry for a coordinator follow-up and updates your internal practice management system or CRM. The coordinator assigned to that treatment type is immediately notified (via push notification or dashboard update). If they're available, they can initiate a conversation immediately. If they're with a patient, the enquiry is queued for their next available slot. The entire process—enquiry receipt, response dispatch, coordinator notification—happens within 60 seconds.
            </p>

            <p>
              The patient perceives instant professionalism. They receive acknowledgment of their enquiry before they've finished scrolling their phone. A coordinator reaches out within hours (often minutes) with a consultation booking. The practice demonstrates clarity and operational excellence. This responsiveness compounds: patients feel valued, are more likely to book, and are more likely to accept proposed appointment times without objection.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: 24/7 Patient Enquiry Handling */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            24/7 Patient Enquiry Handling
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Most practices operate during office hours. Patient enquiries arrive at all hours—late evening after work, early morning before appointments, on weekends, during holidays. A patient enquiring about implant treatment at 9 PM on a Saturday does not get a response until Monday morning. By that time, they've contacted competitors or scheduled with another clinic.
            </p>

            <p>
              Processa's routing operates 24/7, independent of your practice's opening hours. An enquiry arriving at 11 PM on Sunday receives an immediate branded response and is queued for coordinator follow-up first thing Monday morning. The patient perception is that you're always available—a modern, responsive practice. The practice reality is that your coordinators receive a clean queue of enquiries ready to work on the next business day, prioritised by urgency and treatment type.
            </p>

            <p>
              This 24/7 operation also creates a competitive advantage in emergency scenarios. A patient with severe tooth pain enquiring about emergency treatment at midnight receives immediate guidance on next steps (attend an out-of-hours clinic if necessary, or book emergency appointment first thing Monday). They're not left wondering if anyone is listening. They're directed with clarity. When Monday arrives and they need ongoing treatment, your practice is the obvious choice—you already helped them through the crisis.
            </p>

            <p>
              Additionally, 24/7 routing surfaces patterns in enquiry timing. If most Invisalign enquiries arrive on weekday evenings (patients researching after work), your coordinators can be scheduled to handle those spikes. If emergency enquiries spike on weekends, you can prep your emergency on-call system. Processa's reporting shows you when high-intent enquiries arrive, allowing you to optimise your team's working patterns around genuine patient demand rather than traditional office hours.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Integration with Your Existing Practice Systems */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f5f2ec' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: '#0f172a', fontFamily: 'Playfair Display, serif' }}>
            Integration with Your Existing Practice Systems
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Processa does not require you to replace your existing practice management system (PMS), CRM, or calendar. It integrates with the systems you already use: Dentally, Curve, DentisteGo, Google Calendar, Zapier, Slack, and dozens more. Your coordinators work in the same interface they use today. Enquiry routing simply feeds into the systems already in place.
            </p>

            <p>
              When an enquiry is routed, it can automatically create a task in your PMS, update your Google Calendar with a hold slot, or post a notification in your Slack channel. Your coordinators see enquiries appear in their normal workflow—no context switching, no new logins required. This seamless integration ensures adoption is high and friction is minimal. Your team doesn't need training; they just see enquiries arrive faster and more intelligently categorised than before.
            </p>

            <p>
              The routing engine also learns your team's preferences and availability over time. If certain coordinators close more Invisalign cases, the system begins preferentially routing Invisalign enquiries to them. If a coordinator is on leave, enquiries are automatically routed to their backup. If your practice closes for holidays, the system knows and can either queue enquiries for your return or route them to an emergency partner practice. The system becomes progressively smarter with your practice's operational rhythm.
            </p>

            <p>
              Furthermore, Processa integrates with your calendar to prevent over-scheduling. If your schedule is already full for the next week, routing messages can reflect that truthfully ("We'll schedule you for the week of the 15th") rather than making promises the practice can't keep. This transparency further improves the patient experience and reduces no-shows because expectations are calibrated accurately from the outset.
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
                Combine instant routing with AEO to capture and convert high-value implant enquiries.
              </p>
            </Link>

            <Link
              to="/invisalign-lead-generation"
              className="p-6 border-l-4 hover:bg-white transition"
              style={{ borderColor: '#c9a96e' }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">Invisalign Lead Generation</h4>
              <p className="text-sm text-slate-600">
                Pair sub-60-second routing with AEO to reduce Invisalign acquisition cost and volume.
              </p>
            </Link>

            <Link
              to="/gdpr-dental-data-compliance"
              className="p-6 border-l-4 hover:bg-white transition"
              style={{ borderColor: '#c9a96e' }}
            >
              <h4 className="font-semibold text-slate-900 mb-2">GDPR-Compliant Dental Data Management</h4>
              <p className="text-sm text-slate-600">
                Understand how patient enquiry routing maintains full GDPR compliance and data security.
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
