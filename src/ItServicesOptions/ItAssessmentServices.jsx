import Header from '../website/Header';
import Footer from '../website/Footer';

function ItAssessmentServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <section className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
            IT Assessment Services
          </p>
          <h1 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Clear, actionable assessments for your IT landscape.
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl">
            Our assessments give you a factual view of your current-state architecture, operations, security, and delivery
            practices—with prioritized recommendations and a roadmap.
          </p>
        </section>

        <section className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-700">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">Assessment focus areas</h2>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Application and platform architecture, including integration points and dependencies.',
                'Cloud, infrastructure, and security posture vs. best practices and compliance needs.',
                'SDLC, DevOps, QA, and release processes for speed and reliability.',
                'Monitoring, incident response, and SRE maturity across critical services.',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm text-sm sm:text-base text-slate-800">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">Deliverables</h3>
            <ul className="mt-3 space-y-2">
              <li>Current-state documentation and key risk summary.</li>
              <li>Prioritized recommendations with effort and impact scoring.</li>
              <li>90/180 day roadmap and capability uplift plan.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ItAssessmentServicesPage;


