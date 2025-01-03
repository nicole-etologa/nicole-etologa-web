import { Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ebooks } from '../data/ebooks';

export default function EbookSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#8c8cdc]">
          eBooks Destacados
        </h2>
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
              <div className="flex justify-between items-center">
                {/* <span className="text-xs font-bold text-[#e682b6] line-through">
                  ${ebook.pastPrice}
                </span> */}
                <span className="text-[#e682b6] font-bold">${ebook.price}</span>
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

