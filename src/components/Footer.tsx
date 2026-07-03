import { Link } from 'react-router-dom';

const SERVICES = [
  { to: '/method', label: '14-Day Method' },
  { to: '/dental-implant-patient-acquisition', label: 'Implant Acquisition' },
  { to: '/invisalign-lead-generation', label: 'Invisalign Leads' },
  { to: '/answer-engine-optimisation-dental', label: 'AEO' },
  { to: '/sub-60-second-lead-routing', label: 'Lead Routing' },
  { to: '/gdpr-dental-data-compliance', label: 'GDPR' },
];

const COMPANY = [
  { to: '/access', label: 'Book Diagnostic' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms' },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ivory/8 pt-16 pb-8 px-5">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold text-ivory">
              Processa
            </Link>
            <p className="text-sm text-ivory/50 mt-3 max-w-sm leading-relaxed">
              AI patient acquisition infrastructure for elite Implant and Invisalign practices across Europe.
            </p>
            <a
              href="mailto:marc@sergiodental.com"
              className="text-sm text-ivory/40 hover:text-gold mt-3 inline-block transition-colors"
            >
              marc@sergiodental.com
            </a>
          </div>

          <div>
            <p className="text-label font-medium uppercase tracking-widest text-ivory/35 mb-4">Services</p>
            <ul className="space-y-2.5">
              {SERVICES.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-ivory/50 hover:text-ivory transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label font-medium uppercase tracking-widest text-ivory/35 mb-4">Company</p>
            <ul className="space-y-2.5">
              {COMPANY.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-ivory/50 hover:text-ivory transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/8 pt-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-label text-ivory/25">
            GDPR-aligned &middot; EU-hosted &middot; ISO 27001 infrastructure
          </p>
          <p className="text-label text-ivory/25">
            &copy; {new Date().getFullYear()} Processa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
