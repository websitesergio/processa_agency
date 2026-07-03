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
      <section className="section-ink py-20 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ivory/40">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-ivory/60">{breadcrumb}</li>
            </ol>
          </nav>

          <h1 className="text-h1 text-ivory mb-4">{title}</h1>
          <p className="text-body text-ivory/60 max-w-2xl leading-relaxed">{subtitle}</p>

          {/* TL;DR card */}
          <div className="mt-8 rounded-card border border-ivory/8 bg-ink-2 p-6">
            <p className="text-label font-medium uppercase tracking-widest text-ivory/40 mb-3">TL;DR</p>
            <ul className="space-y-2">
              {tldr.map((item, idx) => (
                <li key={idx} className="flex gap-2.5 text-sm text-ivory/70 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Content with sticky TOC */}
      <section className="section-ivory py-16 md:py-24 px-5">
        <div className="max-w-7xl mx-auto flex gap-12">
          {/* Sticky TOC - desktop only */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <nav className="sticky top-24" aria-label="Table of contents">
              <p className="text-label font-medium uppercase tracking-widest text-ink/40 mb-4">On this page</p>
              <ul className="space-y-2 border-l border-ink/12 pl-4">
                {toc.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-sm text-ink/60 hover:text-ink transition-colors leading-relaxed block"
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
      <section className="bg-ink-2 border-t border-ivory/8 py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h2 text-ivory mb-6">
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
