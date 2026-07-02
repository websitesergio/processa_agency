import { Link } from 'react-router-dom';
import { Radio, Zap, Shield } from 'lucide-react';

const PILLARS = [
  {
    icon: Radio,
    title: 'Answer Engine Optimisation',
    bullets: [
      'Get cited in ChatGPT, Perplexity & Google AI Overviews',
      'Semantic schema + entity verification across all platforms',
      'Compounding organic lead volume at zero ad spend',
    ],
    link: '/answer-engine-optimisation-dental',
  },
  {
    icon: Zap,
    title: 'Sub-60-Second Lead Routing',
    bullets: [
      'Instant branded response via SMS, WhatsApp or email',
      '24/7 operation independent of practice hours',
      '391% higher conversion vs 30-minute response',
    ],
    link: '/sub-60-second-lead-routing',
  },
  {
    icon: Shield,
    title: 'GDPR-Compliant Infrastructure',
    bullets: [
      'EU-hosted on GCP with ISO 27001 certification',
      'AES-256 at rest, TLS 1.3 in transit',
      'Data Processing Agreement included as standard',
    ],
    link: '/gdpr-dental-data-compliance',
  },
];

export default function ThreePillars() {
  return (
    <section className="section-light py-24 md:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-accent mb-3">
            The Infrastructure
          </p>
          <h2 className="text-h2 text-brand-dark">
            Three Pillars of Patient Acquisition
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map(({ icon: Icon, title, bullets, link }) => (
            <div
              key={title}
              className="rounded-card border border-slate-200 bg-white p-8 hover:shadow-lg hover:shadow-slate-900/5 transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-dark flex items-center justify-center mb-5">
                <Icon size={20} className="text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-4">{title}</h3>
              <ul className="space-y-3 mb-6">
                {bullets.map(b => (
                  <li key={b} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to={link}
                className="text-sm font-medium text-brand-dark hover:text-brand-accent transition-colors"
              >
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
