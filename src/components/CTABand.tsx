import { Link, useLocation } from 'react-router-dom';

export default function CTABand() {
  const { pathname } = useLocation();
  return (
    <section className="bg-ink-2 border-t border-ivory/8 py-16 md:py-20 px-5">
      <div className="max-w-site mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-ivory mb-6">
          Stop losing high-ticket patients to slower competitors.
        </h2>
        <Link to={`/access?from=${encodeURIComponent(pathname)}`} className="btn-primary">
          Book Your Diagnostic Audit
        </Link>
      </div>
    </section>
  );
}
