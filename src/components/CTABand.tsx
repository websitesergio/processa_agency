import { Link } from 'react-router-dom';

export default function CTABand() {
  return (
    <section className="bg-brand-dark border-t border-slate-700/30 py-16 md:py-20 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-brand-light mb-6">
          Stop losing high-ticket patients to slower competitors.
        </h2>
        <Link to="/access" className="btn-primary">
          Book Your Diagnostic Audit
        </Link>
      </div>
    </section>
  );
}
