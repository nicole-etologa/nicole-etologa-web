import { BookOpen, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-[#e682b6] text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entendiendo a tu Felino
          </h1>
          <p className="text-xl mb-8">
            Descubre el fascinante mundo del comportamiento felino con nuestros servicios profesionales de etología
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#8c8cdc] hover:bg-[#7a7ac8] px-6 py-3 rounded-full flex items-center">
              <BookOpen className="mr-2" />
              Ver eBooks
            </button>
            <button className="bg-white text-[#e682b6] hover:bg-gray-100 px-6 py-3 rounded-full flex items-center">
              <Heart className="mr-2" />
              Consulta
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Gato feliz" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}