import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import profile from "../assets/profile.jpeg"
export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-gradient-to-b from-white to-[#e9e9f7]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-[#8c8cdc]">
                    Contacto
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                    ¿Tienes alguna duda o necesitas más información?
                </p>
                <div className="grid place-items-center max-w-[400px] mx-auto mb-4">
                    <img src={profile} alt="Productos Nicole Etologa" />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="w-40 h-12 rounded-full transition ease-in-out delay-150 bg-[#73c86a] hover:-translate-y-1 hover:scale-110 hover:hover:bg-[#73c86a]/80 duration-300 flex items-center text-white" onClick={() => window.open('https://api.whatsapp.com/send?phone=56947023420', '_blank')} >
                        <SiWhatsapp className="h-5 w-5 mx-3" />
                        Via Whatsapp
                    </button>
                </div>
            </div>
        </section>
    );
}