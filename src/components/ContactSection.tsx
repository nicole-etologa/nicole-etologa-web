import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import profile from "../assets/profile.jpeg"
export default function Contact() {
    return (
        <section id="contact" className="py-8 sm:py-16 bg-gradient-to-b from-white to-[#e9e9f7]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-[#8c8cdc]">
                    Contacto
                </h2>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-50 my-0 py-0 rounded-t"></div>
                </div>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                    ¿Tienes alguna duda o necesitas más información?
                </p>
                <div className="grid place-items-center max-w-[300px] mx-auto mb-6">
                    <img className="rounded-lg" src={profile} alt="Productos Nicole Etologa" />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-[#73c86a] text-white text-base sm:text-xl hover:bg-[#73c86a]/80 px-5 sm:px-12 py-4 rounded-full flex items-center hover:transform hover:scale-105 transition-transform" onClick={() => window.open('https://api.whatsapp.com/send?phone=56947023420', '_blank')}>
                        <SiWhatsapp className="mr-2" />
                        Hablemos por Whatsapp
                    </button>
                </div>
            </div>
        </section>
    );
}