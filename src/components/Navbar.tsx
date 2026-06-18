import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SERVICE_LINKS = [
  { to: '/answer-engine-optimisation-dental', label: 'AEO' },
  { to: '/dental-implant-patient-acquisition', label: 'Implants' },
  { to: '/invisalign-lead-generation', label: 'Invisalign' },
  { to: '/sub-60-second-lead-routing', label: 'Lead Routing' },
  { to: '/gdpr-dental-data-compliance', label: 'GDPR' },
  { to: '/method', label: 'Method' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
        }
      `}</style>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(15,23,42,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(245,242,236,0.07)',
        }}
      >
        <nav
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.25rem',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Processa Advisory — AI Dental Patient Acquisition Europe"
            style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '1.3rem',
              color: '#f5f2ec',
              letterSpacing: '-0.02em',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            Processa
          </Link>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ alignItems: 'center', gap: '1.5rem', display: 'none', flexWrap: 'wrap' }}>
            {SERVICE_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: 'Inter,system-ui,sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: location.pathname === to ? '#D4A853' : 'rgba(245,242,236,0.55)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/access"
              style={{
                fontFamily: 'Inter,system-ui,sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#0f172a',
                textDecoration: 'none',
                background: '#D4A853',
                padding: '9px 20px',
                borderRadius: '9999px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              Free Audit
            </Link>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="nav-hamburger" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '0 0 auto' }}>
            <Link
              to="/access"
              style={{
                fontFamily: 'Inter,system-ui,sans-serif',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#0f172a',
                textDecoration: 'none',
                background: '#D4A853',
                padding: '8px 14px',
                borderRadius: '9999px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              Free Audit
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px', flexShrink: 0 }}
            >
              <span style={{ display: 'block', width: '20px', height: '1.5px', background: '#f5f2ec', borderRadius: '2px', transition: 'transform 0.2s ease, opacity 0.2s ease', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: '20px', height: '1.5px', background: '#f5f2ec', borderRadius: '2px', transition: 'opacity 0.2s ease', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '20px', height: '1.5px', background: '#f5f2ec', borderRadius: '2px', transition: 'transform 0.2s ease', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="nav-mobile-menu"
            style={{ borderTop: '1px solid rgba(245,242,236,0.07)', background: 'rgba(15,23,42,0.97)', padding: '1rem 1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}
          >
            {[...SERVICE_LINKS, { to: '/access', label: 'Free AI-Visibility Audit' }].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Inter,system-ui,sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: to === '/access' ? '#D4A853' : 'rgba(245,242,236,0.65)',
                  textDecoration: 'none',
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(245,242,236,0.05)',
                  display: 'block',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
