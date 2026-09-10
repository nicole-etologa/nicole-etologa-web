import Navbar from '../components/layouts/Navbar';
import { ClipboardPenLine, NotebookPen, ShoppingCart, Video } from 'lucide-react';
import PriceDisplay from '../components/common/PriceDisplay';
import Footer from '../components/layouts/Footer';
import parse from 'html-react-parser';
import { workshops } from '../data/workshops';
import Seo from '../components/seo/Seo';
import { workshopsJsonLd } from '../components/seo/Workshop.schema';

const workshopDetails = workshops;

export default function Workshops() {
    return (
        <>
            <Seo
                title="Talleres de comportamiento felino | Nicole Saavedra"
                description="Talleres online para resolver conflictos entre gatos, reducir estres felino y mejorar la convivencia en casa con estrategias practicas."
                path="/talleres"
                image="/cat.svg"
                type="product"
                jsonLd={workshopsJsonLd}
            />
            <div className="min-h-screen flex flex-col bg-[#e9e9f7] dark:bg-[#15141d]">
                <Navbar />
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl font-bold text-[#8c8cdc] dark:text-[#b8b8f0] text-center mb-12">
                        Talleres
                    </h1>
                    <div className="space-y-8">
                        {workshopDetails.map((workshop, index) => (
                            <div id={workshop.id} key={index} className="relative bg-white dark:bg-[#211f2c] text-gray-800 dark:text-gray-200 rounded-lg shadow-lg dark:shadow-black/25 p-5">
                            {workshop.new && (
                                <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-[#c24f8b] px-3 py-1 text-xs font-bold tracking-wide text-white shadow-sm dark:bg-[#e682b6] dark:text-[#211f2c]">
                                    NUEVO
                                </span>
                            )}
                            <div className={`flex items-start gap-4 ${workshop.new ? "pr-20" : ""}`}>
                                <div className="bg-[#e682b6] p-4 rounded-lg">
                                    {workshop.live ? (
                                        <Video className="w-8 h-8 text-white" />
                                    ) : (
                                        <NotebookPen className="w-8 h-8 text-white" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h2 className="text-2xl font-bold text-[#8c8cdc] dark:text-[#b8b8f0] mb-2">
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
                                <p className="text-gray-600 dark:text-gray-300 py-3">{workshop.description}</p>
                                <p className="text-gray-600 dark:text-gray-300 py-3">{parse(workshop.fullDescription)}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-[#8c8cdc] dark:text-[#b8b8f0] my-2">¿Qué aprenderás?:</h3>
                                <ul className="grid grid-cols-1 gap-2">
                                    {workshop.included.map((include, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                                            <div className="w-2 h-2 bg-[#e682b6] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                            <p className="flex-grow">{parse(include)}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`mb-4 ${workshop.bonuses.length === 0 ? "hidden" : ""}`}>
                                <h3 className="text-lg font-semibold text-[#8c8cdc] dark:text-[#b8b8f0] my-2">🎁 Ademas incluye: </h3>
                                <ul className={`grid grid-cols-1 ${workshop.bonuses.length > 1 ? "md:grid-cols-2" : ""} gap-2`}>
                                    {workshop.bonuses.map((bonus, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                                            <div className="w-2 h-2 bg-[#e682b6] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                            <p className="flex-grow">{parse(bonus)}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                {workshop.dateStart && (
                                    <>
                                        <h3 className="text-lg font-semibold text-[#8c8cdc] dark:text-[#b8b8f0] mt-2">Fecha:</h3>
                                        <p>{workshop.dateStart}</p>
                                    </>
                                )}
                                {workshop.duration && (
                                    <>
                                        <h3 className="text-lg font-semibold text-[#8c8cdc] dark:text-[#b8b8f0] mt-2">Duración:</h3><p className="text-gray-600 dark:text-gray-300">{workshop.duration}</p>
                                    </>
                                )}
                                {workshop.mode && (
                                    <>
                                        <h3 className="text-lg font-semibold text-[#8c8cdc] dark:text-[#b8b8f0] mt-2">Modalidad:</h3><p className="text-gray-600 dark:text-gray-300">{workshop.mode}</p>
                                    </>
                                )}
                            </div>
                            {workshop.faqs && workshop.faqs.length > 0 && (
                                <div className="my-8">
                                    <ul className="space-y-2">
                                        {workshop.faqs.map((faq, idx) => (
                                            <li key={idx}>
                                                <p className="text-lg font-semibold text-[#8c8cdc] dark:text-[#b8b8f0] mt-2">{faq.question}</p>
                                                <p className="text-gray-600 dark:text-gray-300 mt-1">{faq.answer}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-[#8c8cdc] dark:text-[#b8b8f0] mt-2">Valor {workshop.earlyAccess ? 'Preventa :' : ':'}</h3>
                                <PriceDisplay
                                    originalPrice={workshop.originalPrice}
                                    currentPrice={workshop.price}
                                />
                                {workshop.live ? (
                                    <>
                                       <p className="text-gray-600 dark:text-gray-300"><strong>Preventa disponible hasta el 20 de septiembre de 2026.</strong></p>
                                    </>
                                ):(
                                    <>
                                       <p className="text-gray-600 dark:text-gray-300"><strong>(Pago único – acceso inmediato)</strong></p>
                                    </>
                                )}
                                
                            </div>
                            
                            <p className="text-lg font-semibold text-[#c24f8b] dark:text-[#f09ac7]">🔗 Tambien puedes solicitar el acceso por WhatsApp +56 9 47023420</p>
                            <p className='text-lg font-semibold text-[#c24f8b] dark:text-[#f09ac7] my-4'>🐾 Del caos a la calma, un paso a la vez. 🐾 </p>
                            <div className="flex flex-wrap justify-center md:justify-end gap-2">
                                {workshop.earlyAccess ? (
                                    <>
                                         <button className="bg-white text-[#c24f8b] hover:bg-gray-100 dark:bg-[#211f2c] dark:text-[#f09ac7] dark:hover:bg-[#2b2838] px-6 py-2 rounded-full flex items-center border border-[#e682b6] transition-colors" onClick={() => window.open(workshop.link, '_blank')}>
                                            <ClipboardPenLine className="w-5 h-5 mr-2" />
                                            Quiero inscribirme en preventa
                                        </button>
                                    </>
                                ):(
                                    <>
                                         <button className="bg-white text-[#c24f8b] hover:bg-gray-100 dark:bg-[#211f2c] dark:text-[#f09ac7] dark:hover:bg-[#2b2838] px-6 py-2 rounded-full flex items-center border border-[#e682b6] transition-colors" onClick={() => window.open(workshop.link, '_blank')}>
                                            <ShoppingCart className="w-5 h-5 mr-2" />
                                            Comprar Ahora
                                        </button>
                                    </>
                                )}
                            </div>

                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
