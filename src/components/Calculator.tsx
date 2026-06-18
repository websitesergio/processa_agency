import { useState, useRef, useEffect } from 'react';

const RESPONSE_OPTIONS = [
  { label: '< 5 minutes', value: '<5min', multiplier: 0 },
  { label: 'Under 1 hour', value: 'under1hr', multiplier: 0.15 },
  { label: '1–4 hours', value: '1-4hrs', multiplier: 0.30 },
  { label: '4–12 hours', value: '4-12hrs', multiplier: 0.45 },
  { label: 'Next day', value: 'nextday', multiplier: 0.60 },
] as const;

const BASELINE_CONVERSION = 0.35;

function formatCurrency(n: number) {
  if (n >= 1_000_000) return `£${(n / 1_000_000).toFixed(1)}m`;
  if (n >= 1_000) return `£${Math.round(n / 1000)}k`;
  return `£${Math.round(n).toLocaleString('en-GB')}`;
}

function useCountUp(target: number, duration = 900) {
  const [display, setDisplay] = useState(0);
  const raf = useRef<number>(0);
  useEffect(() => {
    if (target === 0) { setDisplay(0); return; }
    const start = performance.now();
    const from = display;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplay(from + (target - from) * ease);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return display;
}

export default function Calculator() {
  const [enquiries, setEnquiries] = useState<string>('40');
  const [avgValue, setAvgValue] = useState<string>('3500');
  const [responseKey, setResponseKey] = useState<string>('4-12hrs');
  const [hasResult, setHasResult] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const bucket = RESPONSE_OPTIONS.find(o => o.value === responseKey) ?? RESPONSE_OPTIONS[3];
  const recoverableRevenue = Number(enquiries) * 12 * Number(avgValue) * BASELINE_CONVERSION * bucket.multiplier;
  const animated = useCountUp(hasResult ? recoverableRevenue : 0);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setHasResult(true);
    setEmailSent(false);
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          enquiries: Number(enquiries),
          avgValue: Number(avgValue),
          responseTime: responseKey,
          recoverableRevenue,
        }),
      });
    } catch {
      // POST to placeholder — connection failure expected until wired to n8n
    }
    setSubmitting(false);
    setEmailSent(true);
  }

  return (
    <section
      id="calculator"
      style={{
        background: '#080705',
        borderTop: '3px solid #D4A853',
        padding: 'clamp(4rem,8vw,7rem) clamp(1rem,5vw,2rem)',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        <p style={{ fontFamily: '"IBM Plex Mono","Courier New",monospace', fontSize: '11px', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#D4A853', marginBottom: '1rem' }}>
          The Diagnostic Engine
        </p>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: 'clamp(1.75rem,4vw,2.75rem)', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#F5F2EC', marginBottom: '0.875rem' }}>
          Calculate Your Recoverable Revenue
        </h2>
        <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '1rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,242,236,0.55)', marginBottom: '3rem', maxWidth: '560px' }}>
          Enter your practice parameters below. The estimate is based on your own enquiry volume and response time.
        </p>

        <form onSubmit={handleCalculate}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <label style={labelStyle} htmlFor="calc-enquiries">Monthly inbound enquiries</label>
              <input
                id="calc-enquiries"
                type="number"
                min="1"
                max="9999"
                value={enquiries}
                onChange={e => setEnquiries(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="calc-value">Average treatment value (£)</label>
              <input
                id="calc-value"
                type="number"
                min="100"
                max="100000"
                value={avgValue}
                onChange={e => setAvgValue(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="calc-response">Current average response time</label>
              <select
                id="calc-response"
                value={responseKey}
                onChange={e => setResponseKey(e.target.value)}
                style={{ ...inputStyle, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23f5f2ec' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem' }}
              >
                {RESPONSE_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            style={ctaBtnStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 32px rgba(212,168,83,0.35)';
              e.currentTarget.style.borderColor = '#D4A853';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(245,242,236,0.35)';
            }}
          >
            Calculate
          </button>
        </form>

        {hasResult && (
          <div style={{ marginTop: '3rem', padding: '2.5rem', border: '1px solid rgba(212,168,83,0.25)', background: 'rgba(212,168,83,0.04)' }}>
            {recoverableRevenue === 0 ? (
              <>
                <p style={resultLabelStyle}>Estimated recoverable annual revenue</p>
                <p style={resultNumberStyle}>£0</p>
                <p style={resultNoteStyle}>Your practice already responds within 5 minutes — you are operating at the optimal threshold.</p>
              </>
            ) : (
              <>
                <p style={resultLabelStyle}>Estimated recoverable annual revenue</p>
                <p style={resultNumberStyle}>{formatCurrency(animated)}</p>
                <p style={resultNoteStyle}>
                  Based on your own enquiry volume and response time. This is an estimate, not a guaranteed result.
                </p>

                {!emailSent ? (
                  <form onSubmit={handleEmailSubmit} style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <div style={{ flex: '1 1 240px' }}>
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your email address"
                        aria-label="Email address for full breakdown"
                        style={inputStyle}
                      />
                      {emailError && (
                        <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '12px', color: '#f87171', marginTop: '4px' }}>{emailError}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      style={{ ...ctaBtnStyle, background: '#D4A853', color: '#080705', borderColor: '#D4A853', flexShrink: 0 }}
                    >
                      {submitting ? 'Sending…' : 'Get the full breakdown'}
                    </button>
                  </form>
                ) : (
                  <p style={{ marginTop: '2rem', fontFamily: 'Inter,system-ui,sans-serif', fontSize: '0.9375rem', color: '#D4A853', fontWeight: 500 }}>
                    Received — we will send your full breakdown shortly.
                  </p>
                )}
              </>
            )}
          </div>
        )}

        <p style={{ fontFamily: 'Inter,system-ui,sans-serif', fontSize: '11px', color: 'rgba(245,242,236,0.22)', lineHeight: 1.6, marginTop: '1.5rem' }}>
          Formula: monthly enquiries × 12 × treatment value × 35% baseline conversion rate × response-time loss factor (0–0.60). Research on online lead response consistently shows conversion odds fall sharply when the first response is delayed beyond a few minutes.
        </p>
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: '"IBM Plex Mono","Courier New",monospace',
  fontSize: '10px',
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'rgba(245,242,236,0.5)',
  marginBottom: '8px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(245,242,236,0.05)',
  border: '1px solid rgba(245,242,236,0.12)',
  color: '#F5F2EC',
  fontFamily: 'Inter,system-ui,sans-serif',
  fontSize: '1rem',
  fontWeight: 300,
  padding: '12px 16px',
  borderRadius: '4px',
  outline: 'none',
  appearance: 'none' as const,
};

const ctaBtnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  color: '#F5F2EC',
  fontFamily: 'Inter,system-ui,sans-serif',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  padding: '14px 32px',
  borderRadius: '9999px',
  border: '1px solid rgba(245,242,236,0.35)',
  cursor: 'pointer',
  transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
};

const resultLabelStyle: React.CSSProperties = {
  fontFamily: '"IBM Plex Mono","Courier New",monospace',
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#D4A853',
  marginBottom: '0.75rem',
};

const resultNumberStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display',Georgia,serif",
  fontWeight: 700,
  fontSize: 'clamp(2.5rem,6vw,4.5rem)',
  color: '#D4A853',
  letterSpacing: '-0.04em',
  lineHeight: 1,
};

const resultNoteStyle: React.CSSProperties = {
  fontFamily: 'Inter,system-ui,sans-serif',
  fontSize: '0.8125rem',
  color: 'rgba(245,242,236,0.4)',
  marginTop: '0.75rem',
  lineHeight: 1.6,
};
