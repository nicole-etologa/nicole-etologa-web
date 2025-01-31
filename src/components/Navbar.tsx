import { Cat } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

export default function Navbar() {
  return (
    <nav className="bg-[#e682b6] px-2 sm:p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between max-md:my-4">
        <Link to="/" className="flex items-center space-x-1 sm:space-x-2 text-white">
          <Cat className="text-white max-sm:hidden" size={32} />
          <span className="text-base sm:text-xl font-bold text-white">Nicole Etologa</span>
        </Link>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <div className="flex space-x-2 md:mr-6 sm:space-x-6">
            <Link to="/" className="text-sm sm:text-base hover:text-[#8c8cdc] text-white transition-colors">Inicio</Link>
            <Link to="/ebooks" className="text-sm sm:text-base hover:text-[#8c8cdc] text-white transition-colors">eBooks</Link>
            <Link to="/asesorias" className="text-sm sm:text-base hover:text-[#8c8cdc] text-white transition-colors">Asesorías</Link>
            <a href="https://api.whatsapp.com/send?phone=56947023420" target="_blank" className="text-sm sm:text-base hover:text-[#8c8cdc] text-white transition-colors">Contacto</a>
          </div>
          <SocialIcons className="text-white hover:text-[#8c8cdc]" />
        </div>
      </div>
    </nav>
  );
  {/* <nav className="bg-white px-2 sm:p-4 shadow-lg">
<div className="container mx-auto flex items-center justify-between max-md:my-4">
  <Link to="/" className="flex items-center space-x-1 sm:space-x-2 text-white">
    <Cat className="text-[#e682b6] max-sm:hidden" size={32} />
    <span className="text-base sm:text-xl font-bold text-[#e682b6]">Nicole Etologa</span>
  </Link>
  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
    <div className="flex space-x-2 md:mr-6 sm:space-x-6">
      <Link to="/" className="text-sm sm:text-base hover:text-[#e682b6] text-[#8c8cdc] transition-colors">Inicio</Link>
      <Link to="/ebooks" className="text-sm sm:text-base hover:text-[#e682b6] text-[#8c8cdc] transition-colors">eBooks</Link>
      <Link to="/asesorias" className="text-sm sm:text-base hover:text-[#e682b6] text-[#8c8cdc] transition-colors">Asesorías</Link>
      <a href="/#contact" className="text-sm sm:text-base hover:text-[#e682b6] text-[#8c8cdc]  transition-colors">Contacto</a>
    </div>
    <SocialIcons className="text-[#8c8cdc] hover:text-[#e682b6]" />
  </div>
</div>
</nav> */}
}