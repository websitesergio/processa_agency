import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://sergiogroup.org/#organization',
  name: 'Processa',
  url: 'https://sergiogroup.org',
  logo: 'https://sergiogroup.org/favicon-192.png',
  email: 'marc@sergiodental.com',
  areaServed: [
    { '@type': 'Country', name: 'GB' },
    { '@type': 'Country', name: 'IE' },
    { '@type': 'Country', name: 'ES' },
    { '@type': 'Country', name: 'NL' },
    { '@type': 'Country', name: 'DE' },
  ],
  knowsAbout: [
    'Answer Engine Optimisation',
    'Dental patient acquisition',
    'Lead routing',
    'GDPR compliance',
    'Implant marketing',
    'Invisalign lead generation',
  ],
};

export default function App() {
  useEffect(() => {
    document.getElementById('root')?.classList.add('hydrated');
  }, []);

  useEffect(() => {
    const el = document.getElementById('org-jsonld');
    if (!el) {
      const script = document.createElement('script');
      script.id = 'org-jsonld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(ORG_JSON_LD);
      document.head.appendChild(script);
    }
    return () => { document.getElementById('org-jsonld')?.remove(); };
  }, []);

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
