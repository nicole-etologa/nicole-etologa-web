import { useParams, Navigate} from 'react-router-dom';
import { Book, ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';
import { ebooks } from '../data/ebooks';
import PriceDisplay from '../components/PriceDisplay';
import Footer from '../components/Footer';

export default function EbookDetail() {
  const { id } = useParams();
  const ebook = ebooks.find(e => e.id === id);

  if (!ebook) {
    return <Navigate to="/ebooks" replace />;
  }

  return (
 <div className="min-h-screen flex flex-col bg-[#e9e9f7]">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#8c8cdc] text-center mb-12">
          Detalle Biblioteca Digital
        </h1>
        <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-5">
              <div className="flex items-start gap-4">
                <div className="bg-[#e682b6] p-4 rounded-lg">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <div className="flex justify-between items-start">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#8c8cdc] mb-2">
                    {ebook.title}
                  </h2>
                  {/* <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="ml-1 text-gray-600">{ebook.rating}</span>
                    </div> */}
                </div>
              </div>
              <div className='flex flex-col'>
                <p className="text-gray-600 py-3">{ebook.description}</p>
                <p className="text-gray-600 py-3">{ebook.fullDescription}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#8c8cdc] my-2">Contenido:</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {ebook.chapters.map((chapter, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="w-2 h-2 bg-[#e682b6] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <p className="flex-grow">
                        {chapter}
                      </p>
                    </li>
                  ))}
                </ul>

              </div>
              <div className="mb-4">
                <PriceDisplay
                  originalPrice={ebook.originalPrice}
                  currentPrice={ebook.price}
                />
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-2">
                <button className="bg-[#8c8cdc] text-white px-6 py-2 rounded-full hover:bg-[#7a7ac8] flex items-center" onClick={() => window.open(ebook.link, '_blank')}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Comprar ahora
                </button>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}