import { Link } from 'react-router-dom';

const SERVICES = [
  { to: '/answer-engine-optimisation-dental', label: 'Answer Engine Optimisation' },
  { to: '/dental-implant-patient-acquisition', label: 'Implant Patient Acquisition' },
  { to: '/invisalign-lead-generation', label: 'Invisalign Lead Generation' },
  { to: '/sub-60-second-lead-routing', label: 'Sub-60-Second Routing' },
  { to: '/gdpr-dental-data-compliance', label: 'GDPR Compliance' },
  { to: '/method', label: '14-Day Method' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0f172a',
        borderTop: '1px solid rgba(245,242,236,0.07)',
        padding: 'clamp(3.5rem,7vw,6rem) clamp(1rem,5vw,2rem) 2.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Top: brand + services + contact */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '3rem', marginBottom: '3.5rem' }}>

          {/* Brand */}
          <div>
            <Link
              to="/"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", fontStyle: 'italic', fontWeight: 400, fontSize: '1.5rem', color: '#f5f2ec', letterSpacing: '-0.02em', textDecoration: 'none', display: 'block', marginBottom: '1rem' }}
              aria-label="Processa Advisory — AI Dental Patient Acquisition Europe"
            >
              Processa
            </Link>
            <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,242,236,0.45)', maxWidth: '260px' }}>
              AI patient acquisition infrastructure for elite Implant and Invisalign practices across Europe.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Service pages">
            <p style={colHeadStyle}>Services</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {SERVICES.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} style={footerLinkStyle}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / NAP */}
          <address style={{ fontStyle: 'normal' }}>
            <p style={colHeadStyle}>Contact</p>
            <p style={napStyle}>
              <span itemProp="name">Processa Advisory</span>
            </p>
            <a
              href="mailto:marc@sergiodental.com"
              itemProp="email"
              style={{ ...footerLinkStyle, display: 'block', marginBottom: '0.375rem' }}
            >
              marc@sergiodental.com
            </a>
            <p style={napStyle} itemProp="areaServed">
              United Kingdom · Ireland · Spain · Netherlands · Germany
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              {[
                { href: 'https://linkedin.com/company/processa-advisory', label: 'LinkedIn' },
              ].map(({ href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>{label}</a>
              ))}
            </div>
          </address>
        </div>

        {/* Trust strip */}
        <div style={{ borderTop: '1px solid rgba(245,242,236,0.07)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.3)' }}>
            GDPR-aligned · EU-hosted · ISO 27001 infrastructure
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/privacy" style={footerLinkStyle}>Privacy Policy</Link>
            <Link to="/terms" style={footerLinkStyle}>Terms</Link>
            <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '12px', color: 'rgba(245,242,236,0.2)', margin: 0 }}>
              © {new Date().getFullYear()} Processa Advisory Ltd.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

const colHeadStyle: React.CSSProperties = {
  fontFamily: 'Inter,system-ui,sans-serif',
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'rgba(245,242,236,0.3)',
  marginBottom: '1.25rem',
};

const footerLinkStyle: React.CSSProperties = {
  fontFamily: 'Inter,system-ui,sans-serif',
  fontSize: '0.8125rem',
  fontWeight: 400,
  color: 'rgba(245,242,236,0.5)',
  textDecoration: 'none',
};

const napStyle: React.CSSProperties = {
  fontFamily: 'Inter,system-ui,sans-serif',
  fontSize: '0.8125rem',
  fontWeight: 400,
  color: 'rgba(245,242,236,0.35)',
  marginBottom: '0.375rem',
};
