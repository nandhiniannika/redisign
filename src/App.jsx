import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FAQ from "./components/FAQ";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 mt-20">
        <Hero />
        <Features />
        <Workflow />
        <Testimonials />
      </main>
      <FAQ />
      {/* Footer */}
      <Footer />
    </div>
  );
}
