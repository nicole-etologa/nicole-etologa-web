import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import EbookSection from '../components/EbookSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e9e9f7]">
      <Navbar />
      <Hero />
      <EbookSection />
      <Services />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}