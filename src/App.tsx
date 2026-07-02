import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DentalImplantPage from './pages/DentalImplantPage';
import InvisalignPage from './pages/InvisalignPage';
import LeadRoutingPage from './pages/LeadRoutingPage';
import GdprPage from './pages/GdprPage';
import AeoPage from './pages/AeoPage';
import MethodPage from './pages/MethodPage';
import AccessPage from './pages/AccessPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import { FAQS } from './lib/faqData';

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://sergiogroup.org/#organization',
  name: 'Processa',
  description: 'AI patient acquisition infrastructure for elite private dental practices across Europe.',
  url: 'https://sergiogroup.org',
  areaServed: { '@type': 'Place', name: 'Europe' },
  knowsAbout: [
    'Answer Engine Optimisation',
    'Dental Patient Acquisition',
    'AI Search Citation',
    'High-Ticket Lead Generation',
    'Implant Marketing',
    'Invisalign Patient Acquisition',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'marc@sergiodental.com',
    contactType: 'Sales',
  },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

function injectJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  document.getElementById(id)?.remove();
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.getElementById('root')?.classList.add('hydrated');
    document.documentElement.classList.add('js-loaded');
  }, []);

  useEffect(() => {
    injectJsonLd('processa-jsonld-org', ORG_SCHEMA);
    if (location.pathname === '/') {
      injectJsonLd('processa-jsonld-faq', FAQ_SCHEMA);
    } else {
      removeJsonLd('processa-jsonld-faq');
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dental-implant-patient-acquisition" element={<DentalImplantPage />} />
        <Route path="/invisalign-lead-generation" element={<InvisalignPage />} />
        <Route path="/sub-60-second-lead-routing" element={<LeadRoutingPage />} />
        <Route path="/gdpr-dental-data-compliance" element={<GdprPage />} />
        <Route path="/answer-engine-optimisation-dental" element={<AeoPage />} />
        <Route path="/method" element={<MethodPage />} />
        <Route path="/access" element={<AccessPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/roadmap" element={<Navigate to="/method" replace />} />
        <Route path="/diagnostic" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
