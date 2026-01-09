import Header from './Header';
import Footer from './Footer';

function Clients() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Our Clients</h1>
        <p className="text-lg mb-6">We are proud to have delivered IT and HR solutions for a diverse range of clients in various industries:</p>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>Enterprise businesses</li>
          <li>Startups & scale-ups</li>
          <li>Government & public sector</li>
          <li>Healthcare, education, and manufacturing</li>
        </ul>
        <div className="mt-8 text-blue-600">
          <strong>Interested in working with us?</strong> Contact <a className="underline" href="mailto:info@incrosys.com">info@incrosys.com</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Clients;

