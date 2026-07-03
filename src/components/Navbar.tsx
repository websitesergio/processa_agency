import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/method', label: 'Method' },
  { to: '/dental-implant-patient-acquisition', label: 'Implant' },
  { to: '/invisalign-lead-generation', label: 'Invisalign' },
  { to: '/answer-engine-optimisation-dental', label: 'AEO' },
  { to: '/gdpr-dental-data-compliance', label: 'GDPR' },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur-lg border-b border-ivory/8">
      <nav
        className="max-w-site mx-auto px-5 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-ivory hover:text-gold transition-colors"
        >
          Processa
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-label font-medium uppercase tracking-widest transition-colors ${
                location.pathname === to
                  ? 'text-gold'
                  : 'text-ivory/50 hover:text-ivory'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link to="/access" className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5">
          Book Diagnostic Audit
        </Link>

        <button
          type="button"
          className="md:hidden p-2 text-ivory/60 hover:text-ivory"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ivory/8 bg-ink px-5 py-4 space-y-1">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-ivory/8 ${
                location.pathname === to ? 'text-gold' : 'text-ivory/70'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/access"
            onClick={() => setOpen(false)}
            className="block mt-4 btn-primary text-center text-xs"
          >
            Book Diagnostic Audit
          </Link>
        </div>
      )}
    </header>
  );
}
