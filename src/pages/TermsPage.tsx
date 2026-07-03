import { Link } from 'react-router-dom';

const LAST_UPDATED = '20 April 2026';

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing and using this website (processa.co) you accept and agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and Processa Advisory — European Operations ("Processa", "we", "us").\n\nIf you do not agree to these Terms, you must cease using this website immediately. We reserve the right to amend these Terms at any time. Continued use of the website after any amendment constitutes your acceptance of the revised Terms.`,
  },
  {
    title: 'About Processa Advisory',
    body: `Processa Advisory — European Operations is a strategic advisory firm. We provide AI patient acquisition infrastructure, Answer Engine Optimisation (AEO), and automated patient routing systems to private dental practices across Europe.\n\nAll advisory engagements are governed by separate Engagement Letters and Data Processing Agreements, which take precedence over these Terms in the event of any conflict.`,
  },
  {
    title: 'Use of This Website',
    body: `This website is provided for informational and qualification purposes. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.\n\nYou must not:\n\n• Attempt to gain unauthorised access to any part of the website, its servers, or any database connected to it.\n• Transmit any unsolicited commercial communications ("spam") through this website.\n• Upload or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.\n• Use any automated tool, bot, spider, or scraper to access, index, or collect data from this website without our prior written consent.\n• Impersonate any person or entity or misrepresent your affiliation with any person or entity in connection with your use of this website.`,
  },
  {
    title: 'Diagnostic Calculator & Data',
    body: `The revenue exposure calculator on this website is provided as an indicative diagnostic tool only. All figures generated are estimates based on industry benchmarks and self-reported inputs. They do not constitute financial advice, guaranteed outcomes, or a representation of any specific result that Processa can deliver.\n\nProcessa does not warrant the accuracy, completeness, or fitness for a particular purpose of any calculator output. You should not make business decisions solely on the basis of the calculator estimates without independent verification.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content on this website — including but not limited to text, design, graphics, brand elements, methodology descriptions, and diagnostic tools — is the intellectual property of Processa Advisory and is protected by applicable copyright law and international treaties.\n\nYou may view and print content from this website for your personal, non-commercial use only. You must not reproduce, distribute, modify, publicly display, or create derivative works from any content on this website without our prior written consent.\n\n"Processa" and all associated brand marks are proprietary to Processa Advisory. Nothing on this website grants any licence to use our trade marks, brand names, or other proprietary marks.`,
  },
  {
    title: 'Application Forms & Qualification',
    body: `Submission of an application form via this website does not constitute an offer, acceptance, or binding contract. All applications are subject to review and qualification at our sole discretion.\n\nWe reserve the right to decline any application without providing a reason. Submission of false, misleading, or incomplete information in an application form may result in immediate disqualification and, where applicable, reporting to relevant authorities.\n\nWhere an engagement proceeds following a successful application, the specific terms, fees, scope, and deliverables will be documented in a separate Engagement Letter signed by both parties.`,
  },
  {
    title: 'Limitation of Liability',
    body: `To the fullest extent permitted by applicable law, Processa Advisory excludes all liability for any direct, indirect, incidental, special, or consequential loss or damage arising from:\n\n• Your use of, or inability to use, this website.\n• Any reliance on information or estimates provided by the diagnostic calculator.\n• Unauthorised access to or alteration of your data.\n• Any matter beyond our reasonable control.\n\nNothing in these Terms shall limit or exclude our liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under applicable law.\n\nOur total aggregate liability to you in connection with any matter arising from these Terms shall not exceed €500.`,
  },
  {
    title: 'Third-Party Links',
    body: `This website may contain links to third-party websites for reference or convenience. We do not control, endorse, or accept responsibility for the content, privacy policies, or practices of any third-party sites. Accessing third-party sites is entirely at your own risk.`,
  },
  {
    title: 'Data Protection',
    body: `The collection, processing, and storage of personal data submitted through this website is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy before submitting any personal data.\n\nWe are committed to compliance with the EU General Data Protection Regulation (EU GDPR) (Regulation (EU) 2016/679). All data is processed lawfully, fairly, and transparently.`,
  },
  {
    title: 'Confidentiality',
    body: `Any diagnostic information, revenue data, or business details you share with us in connection with an application or engagement will be treated as strictly confidential. We will not disclose such information to third parties except where required by law, regulation, or court order, or where you have given explicit consent.\n\nThis obligation of confidentiality survives the termination of any engagement and these Terms.`,
  },
  {
    title: 'Governing Law & Jurisdiction',
    body: `These Terms and any dispute or claim arising from or in connection with them are governed by and construed in accordance with applicable European law.\n\nThe parties agree to attempt to resolve any dispute through good-faith negotiation before resorting to formal proceedings. Where disputes cannot be resolved informally, they shall be submitted to the competent courts of the jurisdiction in which the client's practice is domiciled.`,
  },
  {
    title: 'Contact',
    body: `For any questions regarding these Terms, or to report a potential breach, please contact:\n\nProcessa Advisory — European Operations\nEmail: marc@sergiodental.com\n\nWe aim to respond to all written enquiries within 5 business days.`,
  },
];

export default function TermsPage() {
  return (
    <main className="section-ivory min-h-screen">

      {/* Hero */}
      <section className="border-b border-ink/7 px-8 pt-[clamp(6rem,12vw,10rem)] pb-[clamp(4rem,8vw,6rem)]">
        <div className="max-w-[720px] mx-auto">
          <p className="text-label font-medium uppercase tracking-widest text-ink/40 mb-8">
            Legal
          </p>
          <h1 className="text-h1 text-ink mb-6">Terms of Service</h1>
          <p className="text-[13px] text-ink/50 leading-[1.7]">
            Last updated: {LAST_UPDATED} &nbsp;&middot;&nbsp; Processa Advisory &nbsp;&middot;&nbsp; EU GDPR Compliant
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 py-[clamp(5rem,10vw,8rem)]">
        <div className="max-w-[720px] mx-auto">

          <p className="text-body text-ink/65 leading-[2] mb-16 pb-12 border-b border-ink/7">
            These Terms of Service govern your access to and use of the Processa website and its diagnostic tools. Please read them carefully before proceeding. References to "you" or "your" means the individual accessing or using this website.
          </p>

          <div className="flex flex-col gap-16">
            {SECTIONS.map((section, i) => (
              <article key={section.title}>
                <div className="flex items-baseline gap-6 mb-6">
                  <span className="font-display text-2xl font-normal text-ink/10 leading-none tracking-tight flex-shrink-0 min-w-[2ch]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-h2 text-ink">{section.title}</h2>
                </div>
                <div className="pl-[calc(1.5rem+2ch)]">
                  {section.body.split('\n').map((para, j) =>
                    para.trim() === '' ? null : (
                      <p
                        key={j}
                        className={`text-sm leading-[1.95] mb-3 ${para.startsWith('•') ? 'text-ink/70' : 'text-ink/55'}`}
                      >
                        {para}
                      </p>
                    )
                  )}
                </div>
                {i < SECTIONS.length - 1 && (
                  <div className="mt-16 h-px bg-ink/6" />
                )}
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA band */}
      <section className="bg-ink-2 py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h2 text-ivory mb-6">
            Ready to discuss your patient acquisition infrastructure?
          </h2>
          <Link to="/access" className="btn-primary">
            Book Your Diagnostic Audit
          </Link>
        </div>
      </section>

    </main>
  );
}
