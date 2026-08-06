import { BookOpen, CalendarHeartIcon } from 'lucide-react';
import banner from "../../assets/banner2.png"
import { Link } from 'react-router-dom';
import SVGComponent from '../../assets/svgComponent';

export default function Hero() {
  return (
    <div className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-40 relative bg-no-repeat bg-local bg-cover md:bg-[0%_15%] bg-left-bottom" 
    style={{ backgroundImage: `url(${banner})`}} >
       <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row md:items-end md:justify-end">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-2xl text-center md:text-4xl font-bold mb-6 text-white">
            Acompañamiento para Familias Gatunas
          </h1>
          <p className="text-xl mb-8 text-center text-white">
            Descubre como mejorar el vinculo con tu gato de manera sencilla y sin estrés.
          </p>
          <div className="flex flex-col sm:flex-row md:space-x-4 gap-4 justify-center items-center">
            <Link to="/ebooks">
            <button className="flex items-center bg-[#8c8cdc] hover:bg-[#7a7ac8] px-6 py-3 rounded-full text-white text-base">
              <BookOpen className="mr-2"/>
              Quiero una guía
            </button>
            </Link>
            <Link to="/asesorias">
             <button className="bg-white text-[#c24f8b] hover:bg-gray-100 dark:bg-[#211f2c] dark:text-[#f09ac7] dark:hover:bg-[#2b2838] px-6 py-3 rounded-full flex items-center text-base transition-colors">
              <CalendarHeartIcon className="mr-2" />
              Quiero una asesoría
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative -mt-3">
      <SVGComponent />
      </div>
    </div>
  );
}
