import { useId, useState, useCallback, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useInView } from '../lib/useInView';
import { useAuditor, formatGBP } from '../lib/AuditorContext';

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

type ValidationResult = string | null;

function validateFullName(v: string): ValidationResult {
  const s = v.trim();
  if (s.length < 3) return 'Min 3 characters';
  if (!s.includes(' ')) return 'First & last name required';
  return null;
}

function validateMinLen(min: number) {
  return (v: string): ValidationResult => v.trim().length < min ? `Min ${min} characters` : null;
}

function validateEmail(v: string): ValidationResult {
  return EMAIL_RE.test(v.trim()) ? null : 'Invalid email address';
}

function validateSelect(v: string): ValidationResult {
  return v ? null : 'Selection required';
}

function leadsToSelectValue(monthlyLeads: number): string {
  if (monthlyLeads <= 20) return 'under_20';
  if (monthlyLeads <= 50) return '20_50';
  if (monthlyLeads <= 100) return '50_100';
  return 'over_100';
}

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-ink-2 border border-red-500/45 rounded-[10px] px-5 py-3.5 flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] max-w-[460px] w-[calc(100vw-2rem)]">
      <p className="text-[13px] font-normal text-ivory flex-1 leading-relaxed">{message}</p>
      <button type="button" onClick={onClose} className="text-ivory/40 hover:text-ivory/70 p-0.5 flex-shrink-0 transition-colors">
        <X size={14} />
      </button>
    </div>
  );
}

function FieldGroup({
  id, label, optional, error, touched, children,
}: {
  id: string; label: string; optional?: boolean;
  error: ValidationResult; touched: boolean;
  children: React.ReactNode;
}) {
  const hasError = touched && error !== null;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2.5">
        <label htmlFor={id} className="text-label font-medium uppercase tracking-widest text-ivory/40 flex items-baseline gap-2">
          {label}
          {optional && <span className="normal-case tracking-normal text-[11px] text-ivory/25">optional</span>}
        </label>
        {hasError && (
          <span className="text-label font-medium uppercase tracking-wider text-red-400/85">
            {error}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

const inputBase =
  'w-full bg-ivory/5 border border-ivory/12 rounded-btn px-4 py-3.5 text-[16px] font-normal text-ivory placeholder-ivory/25 outline-none transition-[border-color,box-shadow] duration-200';
const inputError = 'border-red-500/60';
const inputNormal = 'border-ivory/12';

function inputClass(hasError: boolean) {
  return `${inputBase} ${hasError ? inputError : inputNormal}`;
}

interface FormFields {
  full_name: string;
  business_name: string;
  business_email: string;
  website: string;
  business_size: string;
  problem_statement: string;
}

const INITIAL: FormFields = {
  full_name: '', business_name: '', business_email: '',
  website: '', business_size: '', problem_statement: '',
};

type TouchedFields = Record<'full_name' | 'business_name' | 'business_email' | 'business_size' | 'problem_statement', boolean>;

const INITIAL_TOUCHED: TouchedFields = {
  full_name: false, business_name: false, business_email: false,
  business_size: false, problem_statement: false,
};

type Status = 'idle' | 'submitting' | 'success';

const CRITERIA = [
  'Implant or Invisalign practices only',
  'Minimum 5 years in operation',
  'European market operations',
  'Practice owner must receive the audit directly',
];

const VOLUME_OPTIONS = [
  { value: 'under_20', label: 'Under 20 high-ticket enquiries / month' },
  { value: '20_50',    label: '20–50 enquiries / month' },
  { value: '50_100',   label: '50–100 enquiries / month' },
  { value: 'over_100', label: '100+ enquiries / month' },
];

export default function AccessPage() {
  const [form, setForm] = useState<FormFields>(INITIAL);
  const [status, setStatus] = useState<Status>('idle');
  const [touched, setTouched] = useState<TouchedFields>(INITIAL_TOUCHED);
  const [consentChecked, setConsentChecked] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [searchParams] = useSearchParams();
  const sourcePage = searchParams.get('from') || '/';
  const uid = useId();
  const { state: auditState } = useAuditor();
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [formRef, formVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });

  useEffect(() => {
    if (auditState.hasRun && auditState.monthlyLeads > 0) {
      setForm((prev) => ({
        ...prev,
        business_size: prev.business_size || leadsToSelectValue(auditState.monthlyLeads),
      }));
    }
  }, [auditState.hasRun, auditState.monthlyLeads]);

  const set = (field: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const touch = (field: keyof TouchedFields) =>
    setTouched((p) => ({ ...p, [field]: true }));

  const errors = {
    full_name: validateFullName(form.full_name),
    business_name: validateMinLen(3)(form.business_name),
    business_email: validateEmail(form.business_email),
    business_size: validateSelect(form.business_size),
    problem_statement: validateMinLen(20)(form.problem_statement),
  };

  const isFormValid = Object.values(errors).every((e) => e === null) && consentChecked;
  const dismissToast = useCallback(() => setToast(null), []);

  function buildMailtoFallback() {
    const subject = encodeURIComponent('Strategic Audit Request');
    const body = encodeURIComponent(
      `Name: ${form.full_name}\nPractice: ${form.business_name}\nEmail: ${form.business_email}\nWebsite: ${form.website}\nLead Volume: ${form.business_size}\n\nProblem Statement:\n${form.problem_statement}${auditState.hasRun ? `\n\nDiagnosed annual exposure: ${formatGBP(auditState.monthlyBleed * 12)}` : ''}`
    );
    return `mailto:marc@sergiodental.com?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ full_name: true, business_name: true, business_email: true, business_size: true, problem_statement: true });

    if (!isFormValid) {
      setToast('Incomplete Data: Please provide full details for a valid audit.');
      return;
    }

    if (honeypot) {
      setStatus('success');
      return;
    }

    if (status === 'submitting') return;
    setStatus('submitting');

    const enrichedProblem = auditState.hasRun
      ? `${form.problem_statement}\n\n[Quick Audit Result: Annual exposure = ${formatGBP(auditState.monthlyBleed * 12)}, response time = ${auditState.responseMinutes} min avg]`
      : form.problem_statement;

    const payload = {
      full_name: form.full_name.trim(),
      business_name: form.business_name.trim(),
      business_email: form.business_email.trim(),
      website: form.website.trim() || null,
      business_size: form.business_size,
      automation_goal: 'AI patient acquisition — Implant and Invisalign lead conversion',
      problem_statement: enrichedProblem.trim(),
      budget_range: null,
      status: 'new',
      source_page: sourcePage,
    };

    try {
      const { error } = await supabase.from('contact_submissions').insert([payload]);
      if (error) throw error;

      const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL;
      if (webhookUrl) {
        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch(() => {});
      }

      setStatus('success');
      setForm(INITIAL);
    } catch {
      window.location.href = buildMailtoFallback();
      setStatus('idle');
    }
  }

  const getInputClass = (field: keyof typeof errors) =>
    inputClass(touched[field] && errors[field] !== null);

  const handleBlur = (field: keyof TouchedFields) =>
    () => touch(field);

  return (
    <>
      {toast && <Toast message={toast} onClose={dismissToast} />}

      <main className="section-ink min-h-screen">
        <section className="px-6 md:px-12 py-36 md:py-48">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

              {/* Left col */}
              <div
                ref={headerRef}
                className={`lg:col-span-5 lg:sticky lg:top-28 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <p className="text-label font-medium uppercase tracking-widest text-gold mb-5">
                  Qualification Portal
                </p>
                <h1 className="text-h1 text-ivory mb-6">
                  This Engagement<br />Is Not for Everyone.
                </h1>

                <div className="flex flex-col gap-6 mb-12">
                  <p className="text-sm text-ivory/60 leading-[1.9]">
                    We open two new mandates per month. Selection is based on practice profile, treatment mix, and the practice owner's readiness to act on what the diagnostic reveals.
                  </p>
                  <p className="text-sm text-ivory/60 leading-[1.9]">
                    If your application is approved, you will receive the PAC diagnostic brief within 48 hours. No cost, no call, no obligation attached to the audit itself.
                  </p>
                </div>

                {auditState.hasRun && (
                  <div className="rounded-card border border-ivory/8 bg-ink-2 p-6 mb-10">
                    <p className="text-label font-medium uppercase tracking-widest text-ivory/40 mb-2.5">
                      Your Quick Audit Result
                    </p>
                    <p className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-gold leading-none tracking-tight mb-1.5">
                      {formatGBP(auditState.monthlyBleed * 12)}
                    </p>
                    <p className="text-[11px] text-ivory/45 font-normal">
                      Estimated annual revenue exposure — pre-filled below
                    </p>
                  </div>
                )}

                <div className="flex flex-col gap-4 pt-6 border-t border-ivory/8">
                  {CRITERIA.map((criterion) => (
                    <div key={criterion} className="flex items-start gap-3">
                      <span className="mt-[5px] w-[5px] h-[5px] rounded-full bg-gold/70 flex-shrink-0" />
                      <p className="text-[13px] text-ivory/60 leading-[1.7]">{criterion}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right col */}
              <div
                ref={formRef}
                className={`lg:col-span-6 lg:col-start-7 transition-[opacity,transform] duration-[800ms] delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {status === 'success' ? (
                  <div className="rounded-card border border-ivory/8 bg-ink-2 px-[clamp(2rem,5vw,4rem)] py-[clamp(3rem,8vw,5rem)] text-center">
                    <div className="mb-8">
                      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-ivory/10 font-display italic text-2xl text-ivory/25 leading-none">
                        P
                      </span>
                    </div>
                    <p className="text-label font-medium uppercase tracking-widest text-ivory/35 mb-6">
                      Application Received
                    </p>
                    <h2 className="text-h1 text-ivory mb-0">Application</h2>
                    <h2 className="text-h1 text-ivory/35 italic mb-8">Received.</h2>
                    <div className="w-8 h-px bg-ivory/10 mx-auto mb-8" />
                    <p className="text-[15px] text-ivory/60 leading-[1.9] max-w-[34ch] mx-auto">
                      Marc or Sergio will contact you within 60 minutes for your strategic brief.
                    </p>
                  </div>
                ) : (
                  <div className="rounded-card border border-ivory/8 bg-ink-2 p-[clamp(2rem,4vw,3.5rem)]">
                    <p className="text-label font-medium uppercase tracking-widest text-ivory/40 mb-6 pl-3.5 border-l-2 border-ivory/12">
                      Qualification Application
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">

                      {/* Honeypot */}
                      <div aria-hidden="true" className="absolute left-[-9999px] opacity-0 h-0 overflow-hidden">
                        <label htmlFor={`${uid}-company-url`}>Company URL</label>
                        <input
                          id={`${uid}-company-url`}
                          type="text"
                          name="company_url"
                          tabIndex={-1}
                          autoComplete="off"
                          value={honeypot}
                          onChange={e => setHoneypot(e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FieldGroup id={`${uid}-name`} label="Full Name" error={errors.full_name} touched={touched.full_name}>
                          <input
                            id={`${uid}-name`} type="text" autoComplete="name" placeholder="Dr. Sarah Mitchell"
                            value={form.full_name} onChange={set('full_name')}
                            onBlur={handleBlur('full_name')}
                            className={`${getInputClass('full_name')} focus:border-gold/40 focus:ring-2 focus:ring-gold/10`}
                          />
                        </FieldGroup>
                        <FieldGroup id={`${uid}-practice`} label="Practice Name" error={errors.business_name} touched={touched.business_name}>
                          <input
                            id={`${uid}-practice`} type="text" placeholder="Mitchell Dental"
                            value={form.business_name} onChange={set('business_name')}
                            onBlur={handleBlur('business_name')}
                            className={`${getInputClass('business_name')} focus:border-gold/40 focus:ring-2 focus:ring-gold/10`}
                          />
                        </FieldGroup>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FieldGroup id={`${uid}-email`} label="Practice Email" error={errors.business_email} touched={touched.business_email}>
                          <input
                            id={`${uid}-email`} type="email" autoComplete="email" placeholder="dr@mitchelldental.co.uk"
                            value={form.business_email} onChange={set('business_email')}
                            onBlur={handleBlur('business_email')}
                            className={`${getInputClass('business_email')} focus:border-gold/40 focus:ring-2 focus:ring-gold/10`}
                          />
                        </FieldGroup>
                        <FieldGroup id={`${uid}-website`} label="Website" optional error={null} touched={false}>
                          <input
                            id={`${uid}-website`} type="url" placeholder="https://"
                            value={form.website} onChange={set('website')}
                            className={`${inputClass(false)} focus:border-gold/40 focus:ring-2 focus:ring-gold/10`}
                          />
                        </FieldGroup>
                      </div>

                      <FieldGroup id={`${uid}-size`} label="Monthly Lead Volume" error={errors.business_size} touched={touched.business_size}>
                        <select
                          id={`${uid}-size`} value={form.business_size} onChange={set('business_size')}
                          onBlur={handleBlur('business_size')}
                          className={`${getInputClass('business_size')} appearance-none cursor-pointer focus:border-gold/40 focus:ring-2 focus:ring-gold/10 ${form.business_size === '' ? 'text-ivory/25' : 'text-ivory'}`}
                        >
                          <option value="" disabled>Select monthly lead volume</option>
                          {VOLUME_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value} className="bg-ink text-ivory">{o.label}</option>
                          ))}
                        </select>
                      </FieldGroup>

                      <FieldGroup id={`${uid}-problem`} label="Describe Your Current Pipeline Problem" error={errors.problem_statement} touched={touched.problem_statement}>
                        <textarea
                          id={`${uid}-problem`} rows={5}
                          placeholder={
                            auditState.hasRun
                              ? `Our diagnosed annual exposure is ${formatGBP(auditState.monthlyBleed * 12)}. We receive enquiries but Lead Velocity is poor...`
                              : 'We receive enquiries but our Lead Velocity is poor. Our PAC has increased 40% but conversion has not moved... (min 20 characters)'
                          }
                          value={form.problem_statement} onChange={set('problem_statement')}
                          onBlur={handleBlur('problem_statement')}
                          className={`${getInputClass('problem_statement')} resize-none leading-[1.9] focus:border-gold/40 focus:ring-2 focus:ring-gold/10`}
                        />
                      </FieldGroup>

                      <div>
                        <label className="flex items-start gap-3 mb-4.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={consentChecked}
                            onChange={(e) => setConsentChecked(e.target.checked)}
                            className="mt-0.5 flex-shrink-0 accent-gold w-3.5 h-3.5 cursor-pointer"
                          />
                          <span className="text-xs leading-[1.7] text-ivory/50">
                            I agree to the processing of my data in accordance with the{' '}
                            <Link to="/privacy" className="text-ivory/70 font-normal underline underline-offset-2 decoration-ivory/30 hover:text-ivory transition-colors">
                              Privacy Policy
                            </Link>.
                          </span>
                        </label>

                        <button
                          type="submit"
                          disabled={status === 'submitting' || !isFormValid}
                          className="btn-primary w-full"
                          style={{ opacity: isFormValid ? 1 : 0.45, cursor: isFormValid && status !== 'submitting' ? 'pointer' : 'not-allowed', transition: 'opacity 0.2s ease' }}
                        >
                          {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                        </button>
                        <p className="mt-3.5 text-label uppercase tracking-widest text-ivory/30 text-center">
                          Applications reviewed within 24 hours &nbsp;&middot;&nbsp; No cold outreach
                        </p>
                      </div>
                    </form>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
