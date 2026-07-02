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
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-lg border-b border-slate-700/50">
      <nav
        className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-brand-light hover:text-brand-accent transition-colors"
        >
          Processa
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-xs font-medium uppercase tracking-wider transition-colors ${
                location.pathname === to
                  ? 'text-brand-accent'
                  : 'text-slate-400 hover:text-brand-light'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link to="/access" className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5">
          Book Diagnostic Audit
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-700/50 bg-brand-dark/98 backdrop-blur-lg px-5 py-4 space-y-1">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-slate-800 ${
                location.pathname === to ? 'text-brand-accent' : 'text-slate-300'
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
