import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cat, MenuIcon, X } from "lucide-react"; // Asegúrate de importar el ícono "Cat"
import SocialIcons from "../common/SocialIcons"; // Asegúrate de importar el componente SocialIcons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#e682b6] px-2 sm:p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between max-md:my-4">
        {/* Botón de menú hamburguesa (solo en móviles) */}
        <button
          onClick={toggleMenu}
          className={`${isMenuOpen ? 'hidden':''} md:hidden text-white focus:outline-none`}
          aria-label="Abrir menú"
        >
          <MenuIcon></MenuIcon>
        </button>

        <button
          onClick={toggleMenu}
          className={`${!isMenuOpen ? 'hidden':''} md:hidden text-white focus:outline-none`}
          aria-label="Cerrar menú"
        >
          <X></X>
        </button>

        {/* Logo y nombre */}
        <Link
          to="/"
          className="flex items-center space-x-1 sm:space-x-2 text-white max-md:w-full max-md:justify-center"
        >
          <Cat className="text-white" size={28} />
          <span className="text-xl font-bold text-white max-md:text-center">
            Nicole Etóloga
          </span>
        </Link>

        {/* Menú de navegación */}
        <div
          className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 absolute md:static top-12 left-0 w-[80%] h-full md:w-auto bg-[#e682b6] md:bg-transparent z-20 transition-transform duration-300 ease-in-out`}
            // {`${
            //   isMenuOpen ? "translate-x-0" : "-translate-x-full"
            // } md:translate-x-0 fixed md:static top-0 left-0 w-[70%] h-full bg-[#e682b6] top-12 md:bg-transparent z-20 transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col md:flex-row selection:md:flex-row space-y-2 md:space-y-0 md:space-x-2 md:mr-6 sm:space-x-6 max-md:pt-2">
            <Link
              to="/"
              className="text-base hover:text-[#8c8cdc] text-white transition-colors p-2"
              onClick={toggleMenu}
            >
              <div className="max-md:flex max-md:flex-row max-md:justify-between">
                <p>Inicio</p>
                <ArrowRight className="md:hidden"></ArrowRight>
              </div>
              
            </Link>
            <Link
              to="/asesorias"
              className="text-base hover:text-[#8c8cdc] text-white transition-colors p-2"
              onClick={toggleMenu}
            >
              <div className="max-md:flex max-md:flex-row max-md:justify-between">
                <p>Asesorías</p>
                <ArrowRight className="md:hidden"></ArrowRight>
              </div>
            </Link>
            <Link
              to="/ebooks"
              className="text-base hover:text-[#8c8cdc] text-white transition-colors p-2"
              onClick={toggleMenu}
            >
              <div className="max-md:flex max-md:flex-row max-md:justify-between">
                <p>Guías</p>
                <ArrowRight className="md:hidden"></ArrowRight>
              </div>
            </Link>
            <Link
              to="/#about"
              className="text-base hover:text-[#8c8cdc] text-white transition-colors p-2"
              onClick={toggleMenu}
            >
              <div className="max-md:flex max-md:flex-row max-md:justify-between">
                <p>Mi historia</p>
                <ArrowRight className="md:hidden"></ArrowRight>
              </div>
            </Link>
            <Link
              to="/#contact"
              className="text-base hover:text-[#8c8cdc] text-white transition-colors p-2"
              onClick={toggleMenu}
            >
              <div className="max-md:flex max-md:flex-row max-md:justify-between">
                <p>Contacto</p>
                <ArrowRight className="md:hidden"></ArrowRight>
              </div>
            </Link>
          </div>
          <SocialIcons className="text-white hover:text-[#8c8cdc] p-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;