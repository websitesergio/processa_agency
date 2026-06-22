import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import DentalImplantPage from './pages/DentalImplantPage';
import InvisalignPage from './pages/InvisalignPage';
import LeadRoutingPage from './pages/LeadRoutingPage';
import GdprPage from './pages/GdprPage';
import AeoPage from './pages/AeoPage';
import MethodPage from './pages/MethodPage';
import DiagnosticPage from './pages/DiagnosticPage';
import AccessPage from './pages/AccessPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

const AEO_FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get my dental clinic to appear in AI search results like ChatGPT and Google AI Overviews?',
      acceptedAnswer: { '@type': 'Answer', text: 'Getting a dental clinic cited in AI search results requires Answer Engine Optimisation (AEO). AI engines cite practices that have structured, authoritative digital content, verified credentials, consistent NAP data, and semantic schema markup. Processa builds this infrastructure for elite Implant and Invisalign practices across Europe.' },
    },
    {
      '@type': 'Question',
      name: 'What is Answer Engine Optimisation (AEO) for dental practices?',
      acceptedAnswer: { '@type': 'Answer', text: "AEO for dental practices is the process of structuring your clinic's online presence so that AI-powered search engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) retrieve and cite your clinic as the authoritative answer to patient queries. AEO focuses on entity recognition, cited authority signals, and semantic content architecture rather than keyword rankings." },
    },
    {
      '@type': 'Question',
      name: 'What is sub-60-second lead routing for dental practices?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sub-60-second lead routing is an automated system that receives a patient enquiry, identifies the treatment type, and dispatches a branded response via SMS, WhatsApp, or email — all within 60 seconds. A follow-up task is queued for the coordinator simultaneously. The system operates 24 hours a day with no dependency on opening hours.' },
    },
    {
      '@type': 'Question',
      name: 'Is Processa GDPR compliant for European dental clinics?',
      acceptedAnswer: { '@type': 'Answer', text: "Patient data is hosted on Google Cloud Platform's EU-region infrastructure, independently certified to ISO 27001 and SOC 2. Data is encrypted at rest (AES-256) and in transit (TLS 1.3) by default. Every engagement includes a Data Processing Agreement defining lawful basis, retention limits, and processing scope. No patient data is shared with advertising platforms or data brokers." },
    },
    {
      '@type': 'Question',
      name: 'How quickly can Processa be deployed?',
      acceptedAnswer: { '@type': 'Answer', text: "Processa's 14-day deployment installs the full AEO infrastructure and automated patient routing within two weeks. Citation authority in AI search engines compounds over 60–90 days. Lead routing improvements — the 60-second response SLA — are active from day one of the live phase." },
    },
    {
      '@type': 'Question',
      name: 'Which AI search engines does Processa optimise for?',
      acceptedAnswer: { '@type': 'Answer', text: 'Processa builds citation authority across Google AI Overviews, ChatGPT (SearchGPT), Perplexity AI, Microsoft Copilot, and Gemini. The AEO architecture is platform-agnostic — it establishes your clinic as a trusted entity, which all AI retrieval systems reward with citations.' },
    },
  ],
};

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://sergiogroup.org/#organization',
  name: 'Processa',
  legalName: 'Processa Advisory',
  description: 'AI patient acquisition infrastructure for elite private dental practices across Europe. Specialists in AEO, implant lead generation, Invisalign lead generation, and automated patient routing.',
  url: 'https://sergiogroup.org',
  logo: 'https://sergiogroup.org/favicon-192.png',
  email: 'marc@sergiodental.com',
  sameAs: [
    'https://linkedin.com/company/processa-advisory',
    'https://sergiodental.com',
    'https://sergiosystems.com',
  ],
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

function useJsonLd(schemas: object[]) {
  useEffect(() => {
    const ids: string[] = [];
    schemas.forEach((schema, i) => {
      const id = `processa-jsonld-${i}`;
      ids.push(id);
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement('script');
        el.id = id;
        el.type = 'application/ld+json';
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(schema);
    });
    return () => { ids.forEach(id => document.getElementById(id)?.remove()); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default function App() {
  useJsonLd([ORG_JSON_LD, AEO_FAQ_JSON_LD]);

  useEffect(() => {
    document.getElementById('root')?.classList.add('hydrated');
  }, []);

  return (
    <div className="min-h-screen bg-warmMidnight">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dental-implant-patient-acquisition" element={<DentalImplantPage />} />
        <Route path="/invisalign-lead-generation" element={<InvisalignPage />} />
        <Route path="/sub-60-second-lead-routing" element={<LeadRoutingPage />} />
        <Route path="/gdpr-dental-data-compliance" element={<GdprPage />} />
        <Route path="/answer-engine-optimisation-dental" element={<AeoPage />} />
        <Route path="/method" element={<MethodPage />} />
        <Route path="/diagnostic" element={<DiagnosticPage />} />
        <Route path="/access" element={<AccessPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/roadmap" element={<Navigate to="/method" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </div>
  );
}
