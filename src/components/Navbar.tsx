import { Cat } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

export default function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-white">
          <Cat className="text-[#e682b6] max-sm:hidden" size={32} />
          <span className="text-xl font-bold text-[#e682b6]">Nicole Etologa</span>
        </Link>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
        <div className="flex space-x-2 md:mr-6 sm:space-x-6">
          <Link to="/" className="text-[#8c8cdc] hover:text-[#e682b6] transition-colors">Inicio</Link>
          <Link to="/ebooks" className="text-[#8c8cdc] hover:text-[#e682b6] transition-colors">eBooks</Link>
          <Link to="/asesorias" className="text-[#8c8cdc] hover:text-[#e682b6] transition-colors">Asesorías</Link>
          <a href="/#contact" className="text-[#8c8cdc] hover:text-[#e682b6] transition-colors">Contacto</a>
        </div>
        <SocialIcons className="text-[#8c8cdc]"/>
        </div>
      </div>
    </nav>
  );
}