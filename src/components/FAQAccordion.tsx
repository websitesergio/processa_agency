import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '../lib/faqData';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section-dark py-24 md:py-32 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-3">
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

    </section>
  );
}
