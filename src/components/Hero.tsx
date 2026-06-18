import { useEffect, useState } from 'react';

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 400),
      setTimeout(() => setPhase(3), 700),
      setTimeout(() => setPhase(4), 1000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const enter = (n: number, delay = 0): React.CSSProperties => ({
    opacity: phase >= n ? 1 : 0,
    transform: phase >= n ? 'translate3d(0,0,0)' : 'translate3d(0,16px,0)',
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    willChange: phase < 4 ? 'opacity, transform' : 'auto',
  });

  return (
    <section
      id="hero"
      style={{
        background: '#080705',
        minHeight: '60svh',
        display: 'flex',
        alignItems: 'center',
        contain: 'layout style',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* parchmentGold left accent bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '3px',
          background: '#D4A853',
        }}
      />

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: 'clamp(4rem,10vw,7rem) clamp(1.5rem, 5vw, 2rem)',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            ...enter(1),
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.26em',
            textTransform: 'uppercase' as const,
            color: 'rgba(245,242,236,0.6)',
            marginBottom: '2rem',
          }}
        >
          AI Patient Acquisition — Implant &amp; Invisalign Practices
        </p>

        {/* Headline */}
        <h1
          style={{
            ...enter(2),
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 7vw, 6.5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: '#F5F2EC',
            maxWidth: '16ch',
            marginBottom: '1.75rem',
            fontFeatureSettings: "'liga' 1, 'kern' 1",
            wordBreak: 'break-word' as const,
            overflowWrap: 'break-word' as const,
            hyphens: 'auto' as const,
          }}
        >
          AI-Powered Patient Acquisition for European Dental Excellence.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            ...enter(3),
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'rgba(245,242,236,0.7)',
            maxWidth: '52ch',
            marginBottom: '3rem',
          }}
        >
          A 60-second diagnostic for premier Invisalign &amp; Implant clinics. Calculate the exact revenue your slow response time costs you every year.
        </p>

        {/* CTA */}
        <div style={enter(4)}>
          <a
            href="#calculator"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              color: '#F5F2EC',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              padding: '1.125rem 3rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              border: '1px solid rgba(245,242,236,0.3)',
              transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = '#D4A853';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(212,168,83,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(245,242,236,0.3)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Start Audit
          </a>
        </div>

        {/* Divider rule */}
        <div
          style={{
            ...enter(4),
            marginTop: '4rem',
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, rgba(245,242,236,0.18), transparent)',
          }}
        />
      </div>
    </section>
  );
}
