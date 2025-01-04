import Navbar from '../components/Navbar';
import { Book, Star, ShoppingCart, CalendarHeartIcon, CalendarPlusIcon } from 'lucide-react';
import PriceDisplay from '../components/PriceDisplay';
import Footer from '../components/Footer';
import { mentorings } from '../data/mentorings';

const mentoringDetails = mentorings;

export default function Ebooks() {
    return (
        <div className="min-h-screen bg-[#e9e9f7]">
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-[#8c8cdc] text-center mb-12">
                    Asesorías
                </h1>
                <div className="space-y-8">
                    {mentoringDetails.map((mentoring, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#e682b6] p-4 rounded-lg">
                                    <Book className="w-16 h-16 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h2 className="text-2xl font-bold text-[#8c8cdc] mb-2">
                                            {mentoring.title}
                                        </h2>
                                        {/* <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="ml-1 text-gray-600">{ebook.rating}</span>
                    </div> */}
                                    </div>
                                    <p className="text-gray-600 mb-4">{mentoring.description}</p>
                                    <div className="mb-4">
                                        <h3 className="font-semibold text-[#8c8cdc] mb-2">Contenido:</h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {mentoring.chapters.map((chapter, idx) => (
                                                <li key={idx} className="flex items-center text-gray-600">
                                                    <span className="w-2 h-2 bg-[#e682b6] rounded-full mr-2"></span>
                                                    {chapter}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <PriceDisplay
                                    originalPrice={mentoring.originalPrice}
                                    currentPrice={mentoring.price}
                                />
                                <button className="bg-white text-[#e682b6] hover:bg-gray-100 px-6 py-3 rounded-full flex items-center border border-[#e682b6]">
                                    <CalendarPlusIcon className="mr-2" />
                                    Agendar esta Asesoría
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}