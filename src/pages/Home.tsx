import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import EbookSection from '../components/EbookSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Contact from '../components/Contact';
import Benefits from '../components/Benefits';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      {/* <LegendSection/> */}
      <Services />
      <TestimonialsSection />
      <Benefits/>
      <EbookSection />
      <Contact/>
      <Footer />
    </div>
  );
}