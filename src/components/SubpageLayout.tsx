import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface TocItem {
  id: string;
  label: string;
}

interface SubpageLayoutProps {
  breadcrumb: string;
  breadcrumbPath: string;
  title: string;
  subtitle: string;
  tldr: string[];
  toc: TocItem[];
  children: ReactNode;
  schema?: object;
}

export default function SubpageLayout({ breadcrumb, breadcrumbPath, title, subtitle, tldr, toc, children, schema }: SubpageLayoutProps) {
  const { pathname } = useLocation();
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sergiogroup.org/' },
      { '@type': 'ListItem', position: 2, name: breadcrumb, item: `https://sergiogroup.org${breadcrumbPath}` },
    ],
  };

  return (
    <main>
      {/* Hero */}
      <section className="section-dark py-20 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-slate-300">{breadcrumb}</li>
            </ol>
          </nav>

          <h1 className="text-h1 text-brand-light mb-4">{title}</h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>

          {/* TL;DR card */}
          <div className="mt-8 rounded-card border border-slate-700/50 bg-brand-surface p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-3">TL;DR</p>
            <ul className="space-y-2">
              {tldr.map((item, idx) => (
                <li key={idx} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Content with sticky TOC */}
      <section className="section-light py-16 md:py-24 px-5">
        <div className="max-w-7xl mx-auto flex gap-12">
          {/* Sticky TOC - desktop only */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <nav className="sticky top-24" aria-label="Table of contents">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">On this page</p>
              <ul className="space-y-2 border-l border-slate-200 pl-4">
                {toc.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-sm text-slate-500 hover:text-brand-dark transition-colors leading-relaxed block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 max-w-3xl">
            {children}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-brand-surface border-t border-slate-700/30 py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-brand-light mb-6">
            Ready to stop losing patients to response latency?
          </h2>
          <Link to={`/access?from=${encodeURIComponent(pathname)}`} className="btn-primary">
            Book Your Diagnostic Audit
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </main>
  );
}
