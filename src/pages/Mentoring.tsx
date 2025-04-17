import Navbar from '../components/layouts/Navbar';
import { CalendarPlusIcon, GraduationCap } from 'lucide-react';
import PriceDisplay from '../components/common/PriceDisplay';
import Footer from '../components/layouts/Footer';
import { mentorings } from '../data/mentorings';
import parse from 'html-react-parser';

const mentoringDetails = mentorings;

export default function Mentorings() {
    return (
        <div className="min-h-screen flex flex-col bg-[#e9e9f7]">
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-[#8c8cdc] text-center mb-12">
                    Asesorías Online
                </h1>
                <div className="space-y-8">
                    {mentoringDetails.map((mentoring, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-5">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#e682b6] p-4 rounded-lg">
                                    <GraduationCap className="w-8 h-8 text-white" />
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
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-[#8c8cdc] my-2">Servicios Incluidos:</h3>
                                <ul className="grid grid-cols-1 gap-2">
                                    {mentoring.included.map((include, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <div className="w-2 h-2 bg-[#e682b6] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                            <p className="flex-grow">{parse(include)}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`mb-4 ${mentoring.bonuses.length === 0 ? "hidden" : ""}`}>
                                <h3 className="text-lg font-semibold text-[#8c8cdc] my-2">Bonos GRATIS (valorados en $100 USD):</h3>
                                <ul className={`grid grid-cols-1 ${mentoring.bonuses.length > 1 ? "md:grid-cols-2" : ""} gap-2`}>
                                    {mentoring.bonuses.map((bonus, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <div className="w-2 h-2 bg-[#e682b6] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                            <p className="flex-grow">{parse(bonus)}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-[#8c8cdc] my-2">Lo que aprenderás:</h3>
                                <ol className="grid grid-cols-1 gap-2">
                                    {mentoring.learned.map((learn, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600">
                                            <div className="w-2 h-2 bg-[#e682b6] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                            <p className="flex-grow">{parse(learn)}</p>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <div className="mb-4">
                                <PriceDisplay
                                    originalPrice={mentoring.originalPrice}
                                    currentPrice={mentoring.price}
                                />
                            </div>
                            99
                            <div className="flex flex-wrap justify-center md:justify-end gap-2">
                                <button className="bg-white text-[#e682b6] hover:bg-gray-100 px-6 py-2 rounded-full flex items-center border border-[#e682b6]" onClick={() => window.open(mentoring.link, '_blank')}>
                                    <CalendarPlusIcon className="w-5 h-5 mr-2" />
                                    Cotizar esta Asesoría
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