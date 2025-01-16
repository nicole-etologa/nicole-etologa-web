import { Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ebooks } from '../data/ebooks';
import PriceDisplay from './PriceDisplay';

export default function EbookSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-[#e9e9f7] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-[#8c8cdc]">
        Libros Electrónicos Destacados
        </h2>
        <div className="w-full mb-6">
          <div className="h-1 mx-auto gradient w-64 opacity-50 my-0 py-0 rounded-t"></div>
        </div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        ¿Prefieres empezar con una solución práctica y accesible?
        </p>
        <p className="text-left text-[#8c8cdc] mb-4 font-semibold">
        Explora nuestras guías digitales para aprender más sobre tu gato:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ebooks.map((ebook) => (
            <div key={ebook.id} className="bg-[#e9e9f7] p-6 rounded-lg shadow-lg">
              <Book className="w-12 h-12 text-[#e682b6] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#8c8cdc]">
                {ebook.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {ebook.description}
              </p>
              <PriceDisplay
                originalPrice={ebook.originalPrice}
                currentPrice={ebook.price}
              />
              <div className="flex justify-end mt-4">
                <Link
                  to={`/ebooks/${ebook.id}`}
                  className="bg-[#8c8cdc] text-white px-4 py-2 rounded-full hover:bg-[#7a7ac8]"
                >
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

