import { BookOpen, Heart } from 'lucide-react';
import profile from "../assets/profile.jpeg"
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-[#e682b6] text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        <div className="md:w-1/3">
          <img 
            src={profile} 
            alt="Nicole Etologa" 
          />
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entendiendo a tu Felino
          </h1>
          <p className="text-xl mb-8">
            Descubre el fascinante mundo del comportamiento felino con nuestros servicios profesionales de etología
          </p>
          <div className="flex space-x-4">
            <Link to="/ebooks">
            <button className="bg-[#8c8cdc] hover:bg-[#7a7ac8] px-6 py-3 rounded-full flex items-center">
              <BookOpen className="mr-2" />
              Ver eBooks
            </button>
            </Link>
            <button className="bg-white text-[#e682b6] hover:bg-gray-100 px-6 py-3 rounded-full flex items-center">
              <Heart className="mr-2" />
              Consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}