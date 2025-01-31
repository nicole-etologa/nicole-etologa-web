import { BookOpen, CalendarHeartIcon } from 'lucide-react';
import banner from "../assets/banner2.png"
import { Link } from 'react-router-dom';
import SVGComponent from '../assets/svgComponent';

export default function Hero() {
  return (
    <div className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-40 relative bg-no-repeat bg-local bg-cover md:bg-[0%_15%] bg-left-bottom" 
    style={{ backgroundImage: `url(${banner})`}} >
       <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row md:items-end md:justify-end">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            Acompañamiento Familias Gatunas
          </h1>
          <p className="text-xl mb-8 text-white">
            Descubre como mejorar el vinculo con tu gato de manera sencilla y sin estrés.
          </p>
          <div className="flex space-x-2 md:space-x-4">
            <Link to="/ebooks">
            <button className="bg-[#8c8cdc] hover:bg-[#7a7ac8] px-6 py-3 rounded-full text-white text-xs md:text-base">
              <div className="flex flex-row gap-2 items-center">
              <BookOpen className="text-[6rem]"/>
              Quiero una guía
              </div>
            </button>
            </Link>
            <Link to="/asesorias">
            <button className="bg-white text-[#e682b6] hover:bg-gray-100 px-6 py-3 rounded-full flex items-center text-xs md:text-base">
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