import Header from '../website/Header';
import Footer from '../website/Footer';

function ItProjectStaffingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <section className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">IT Project Staffing</p>
          <h1 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Flexible project staffing pods aligned to your delivery roadmap.
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl">
            Incrosys project staffing augments your teams with the right skills at the right time—across discovery, build,
            and run. We provide full pods or individual experts depending on your needs.
          </p>
        </section>

        <section className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-700">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">Staffing models</h2>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Dedicated pods with product, engineering, QA, and DevOps for end-to-end delivery.',
                'Specialist roles to backfill key capabilities like architecture, SRE, or security.',
                'Ramp-up and ramp-down aligned to project phases and budget cycles.',
                'Onsite, remote, or hybrid models depending on engagement and compliance needs.',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 sm:p-6 shadow-sm text-sm sm:text-base text-slate-800">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">Engagement examples</h3>
            <ul className="mt-3 space-y-2">
              <li>Greenfield product build with a cross-functional delivery pod.</li>
              <li>Platform modernization team focused on cloud migration and refactoring.</li>
              <li>Run-team staffing for L2/L3 support and SRE for critical applications.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ItProjectStaffingPage;


