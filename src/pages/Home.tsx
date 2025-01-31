import Navbar from '../components/Navbar';
import Hero from '../components/HeroSection';
import Services from '../components/ServicesSection';
import Footer from '../components/Footer';
import EbookSection from '../components/EbookSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Contact from '../components/ContactSection';
import Benefits from '../components/BenefitsSection';

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