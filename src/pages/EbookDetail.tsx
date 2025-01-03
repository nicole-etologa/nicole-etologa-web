import { useParams, Navigate, Link } from 'react-router-dom';
import { Book, Star, ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';
import { ebooks } from '../data/ebooks';
import PriceDisplay from '../components/PriceDisplay';

export default function EbookDetail() {
  const { id } = useParams();
  const ebook = ebooks.find(e => e.id === id);

  if (!ebook) {
    return <Navigate to="/ebooks" replace />;
  }

  return (
    <div className="min-h-screen bg-[#e9e9f7]">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-start gap-6">
            <div className="bg-[#e682b6] p-4 rounded-lg">
              <Book className="w-16 h-16 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-[#8c8cdc] mb-2">
                  {ebook.title}
                </h2>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="ml-1 text-gray-600">{ebook.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{ebook.fullDescription}</p>
              <div className="mb-4">
                <h3 className="font-semibold text-[#8c8cdc] mb-2">Contenido:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {ebook.chapters.map((chapter, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-[#e682b6] rounded-full mr-1"></span>
                      {chapter}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
              <PriceDisplay
                  originalPrice={ebook.originalPrice} 
                  currentPrice={ebook.price}
                />
                <button className="bg-[#8c8cdc] text-white px-6 py-2 rounded-full hover:bg-[#7a7ac8] flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='fixed bottom-0 left-0 w-full bg-white p-4'>
        <Link to="/home" className="text-[#8c8cdc] hover:text-[#e682b6] ">
          ← Volver al Inicio
        </Link>
        </div>
      </div>
    </div>
  );
}