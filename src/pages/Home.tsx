import Navbar from '../components/layouts/Navbar';
import Hero from '../components/layouts/HeroSection';
import Services from '../components/layouts/ServicesSection';
import Footer from '../components/layouts/Footer';
import EbookSection from '../components/layouts/EbookSection';
import TestimonialsSection from '../components/layouts/TestimonialsSection';
import Contact from '../components/layouts/ContactSection';
import Benefits from '../components/layouts/BenefitsSection';
import About from '../components/layouts/AboutSection';
import FaqSection from '../components/layouts/FaqSection';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Seo from '../components/seo/Seo';
import { homeJsonLd } from '../components/seo/Home.schema';


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
    <>
      <Seo
        title="Educadora conductual felina en Chile y LATAM | Nicole Etologa"
        description="Asesorias de comportamiento felino, talleres y guias para mejorar la convivencia con tu gato. Planes personalizados online para familias gatunas en LATAM."
        path="/"
        image="/cat.svg"
        jsonLd={homeJsonLd}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Benefits />
        <Services />
        <TestimonialsSection />
        <EbookSection />
        <FaqSection />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
