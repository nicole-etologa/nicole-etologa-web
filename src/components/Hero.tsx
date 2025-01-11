import { BookOpen, CalendarHeartIcon } from 'lucide-react';
import profile2 from "../assets/profile2.png"
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-[#e682b6] text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        <div className="md:w-1/3 xs:h-2/3">
          <img 
            src={profile2} 
            alt="Nicole Etologa" 
          />
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Acompañamiento Familias Gatunas
          </h1>
          <p className="text-xl mb-8">
            Ayuda a mejorar el vinculo con tu felino sin métodos complicados y sin tanto estrés
          </p>
          <div className="flex space-x-4">
            <Link to="/ebooks">
            <button className="bg-[#8c8cdc] hover:bg-[#7a7ac8] px-6 py-3 rounded-full flex items-center">
              <BookOpen className="mr-2" />
              Quiero un libro electronico
            </button>
            </Link>
            <Link to="/asesorias">
            <button className="bg-white text-[#e682b6] hover:bg-gray-100 px-6 py-3 rounded-full flex items-center">
              <CalendarHeartIcon className="mr-2" />
              Quiero una asesoría
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}