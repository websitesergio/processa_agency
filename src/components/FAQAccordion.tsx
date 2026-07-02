import { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: 'How do I get my dental clinic to appear in AI search results like ChatGPT and Google AI Overviews?',
    a: 'AI engines cite practices with structured, authoritative digital content, verified credentials, consistent NAP data, and semantic schema markup. Processa builds this AEO infrastructure for Implant and Invisalign practices across Europe, targeting citation in ChatGPT, Perplexity, Google AI Overviews, and Copilot.',
  },
  {
    q: 'What is Answer Engine Optimisation (AEO) for dental practices?',
    a: "AEO is the process of structuring your clinic's online presence so AI-powered search engines retrieve and cite your clinic as the authoritative answer to patient queries. Unlike SEO, AEO focuses on entity recognition, cited authority signals, and semantic content architecture rather than keyword rankings.",
  },
  {
    q: 'Why are high-ticket patients booking competitors instead of my clinic?',
    a: 'Two structural causes: (1) If your clinic is not the cited answer in AI search, patients discover competitors first. (2) Practices responding to enquiries in under 5 minutes convert at 391% higher rates than those responding in 30+ minutes. Both are addressable infrastructure problems.',
  },
  {
    q: 'How long does it take to see results from AI patient acquisition?',
    a: "Lead routing improvements are active from day one. Citation authority in AI search engines compounds over 60-90 days as AI systems index the new content architecture. The full infrastructure is deployed within Processa's fixed 14-day engagement.",
  },
  {
    q: 'What is the cost of slow response times for a dental clinic?',
    a: 'For a practice receiving 40 monthly high-ticket enquiries at £3,500 LTV, a 12-hour average response time represents an estimated £20,000-£40,000 in annual recoverable revenue lost to competitors who respond faster.',
  },
  {
    q: 'Which AI search engines does Processa optimise for?',
    a: 'Processa builds citation authority across Google AI Overviews, ChatGPT (SearchGPT), Perplexity AI, Microsoft Copilot, and Gemini. The AEO architecture is platform-agnostic — it establishes your clinic as a trusted entity that all AI retrieval systems reward with citations.',
  },
];

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section-dark py-24 md:py-32 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-accent mb-3">
            FAQ
          </p>
          <h2 className="text-h2 text-brand-light">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-card border border-slate-700/50 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-brand-surface/50 transition-colors"
                aria-expanded={openIdx === idx}
              >
                <span className="text-sm font-medium text-brand-light leading-relaxed">
                  {faq.q}
                </span>
                <Plus
                  size={18}
                  className={`text-brand-accent flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                    openIdx === idx ? 'rotate-45' : ''
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
