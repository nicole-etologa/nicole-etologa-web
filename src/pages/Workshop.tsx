import Navbar from '../components/layouts/Navbar';
import { NotebookPen, UserRoundPlus } from 'lucide-react';
import PriceDisplay from '../components/common/PriceDisplay';
import Footer from '../components/layouts/Footer';
import parse from 'html-react-parser';
import { workshops } from '../data/workshops';

const workshopDetails = workshops;

export default function Workshops() {
    return (
        <div className="min-h-screen flex flex-col bg-[#e9e9f7]">
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-[#8c8cdc] text-center mb-12">
                    Talleres
                </h1>
                <div className="space-y-8">
                    {workshopDetails.map((workshop, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-5">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#e682b6] p-4 rounded-lg">
                                    <NotebookPen className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h2 className="text-2xl font-bold text-[#8c8cdc] mb-2">
                                            {workshop.title}
                                        </h2>
                                        {/* <div className="flex items-center">
                                        <Star className="w-5 h-5 text-yellow-400" />
                                        <span className="ml-1 text-gray-600">{ebook.rating}</span>
                                        </div> */}
                                    </div> 
                                </div>
                            </div>
                            <div className='flex flex-col my-2'>
                                        <p className="text-gray-600 py-3">{workshop.description}</p>
                                        <p className="text-gray-600 py-3">{parse(workshop.fullDescription)}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-[#8c8cdc] my-2">¿Qué aprenderás?:</h3>
                                <ul className="grid grid-cols-1 gap-2">
                                    {workshop.included.map((include, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <div className="w-2 h-2 bg-[#e682b6] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                            <p className="flex-grow">{parse(include)}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`mb-4 ${workshop.bonuses.length === 0 ? "hidden" : ""}`}>
                                <h3 className="text-lg font-semibold text-[#8c8cdc] my-2">🎁 Ademas incluye: </h3>
                                <ul className={`grid grid-cols-1 ${workshop.bonuses.length > 1 ? "md:grid-cols-2" : ""} gap-2`}>
                                    {workshop.bonuses.map((bonus, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <div className="w-2 h-2 bg-[#e682b6] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                            <p className="flex-grow">{parse(bonus)}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#8c8cdc] mt-2">Fecha:</h3><p>{workshop.dateStart}</p>
                                <h3 className="text-lg font-semibold text-[#8c8cdc] mt-2">Duración:</h3><p className="text-gray-600">{workshop.duration}</p>
                                <h3 className="text-lg font-semibold text-[#8c8cdc] mt-2">Modalidad:</h3><p className="text-gray-600">{workshop.mode}</p>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-[#8c8cdc] mt-2">Valor de Preventa:</h3>
                                <PriceDisplay
                                    originalPrice={workshop.originalPrice}
                                    currentPrice={workshop.price}
                                />
                                <p className="text-gray-600">(el precio sube a <strong>$19 USD</strong> después del periodo de preventa)</p>
                            </div>
                            <p className="text-lg font-semibold text-[#e682b6]">🔗 Reserva tu cupo directamente por WhatsApp +56 9 47023420</p>
                            <p className='text-lg font-semibold text-[#e682b6] my-4'>🐾 ¡Los cupos son limitados! 🐾 </p>
                            <div className="flex flex-wrap justify-center md:justify-end gap-2">
                                <button className="bg-white text-[#e682b6] hover:bg-gray-100 px-6 py-2 rounded-full flex items-center border border-[#e682b6]" onClick={() => window.open(workshop.link, '_blank')}>
                                    <UserRoundPlus className="w-5 h-5 mr-2" />
                                    Reserva tu Cupo
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