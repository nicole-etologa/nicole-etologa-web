import Navbar from '../components/layouts/Navbar';
import Hero from '../components/layouts/HeroSection';
import Services from '../components/layouts/ServicesSection';
import Footer from '../components/layouts/Footer';
import EbookSection from '../components/layouts/EbookSection';
import TestimonialsSection from '../components/layouts/TestimonialsSection';
import Contact from '../components/layouts/ContactSection';
import Benefits from '../components/layouts/BenefitsSection';
import About from '../components/layouts/AboutSection';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Verifica si hay un hash en la URL (por ejemplo, #about)
    if (location.hash) {
      // Espera un momento para asegurarse de que la página se haya renderizado
      setTimeout(() => {
        const section = document.querySelector(location.hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Ajusta el tiempo si es necesario
    }
  }, [location.hash]); // Se ejecuta cada vez que cambia el hash
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Benefits/>
      <Services />
      <TestimonialsSection />
      <EbookSection />
      <About/>
      <Contact/>
      <Footer />
    </div>
  );
}