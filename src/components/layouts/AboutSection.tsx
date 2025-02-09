import story from "../../assets/story-large-transp.png"
export default function About() {
    return (
        <div id="about" className="py-8 sm:py-16 bg-gradient-to-b from-white to-[#e9e9f7]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-3 text-[#8c8cdc]">
                    Mi Historia
                </h2>
                <div className="w-full mb-8">
                    <div className="h-1 mx-auto gradient w-64 opacity-50 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-col gap-2 text-left text-gray-600 mb-4 mx-auto">
                <p><strong>Mi nombre es Nicole Saavedra, etóloga felina e ingeniera civil.</strong></p>
                <p>Desde niña, siempre tuve una conexión especial con los gatos, y eso me llevó a estudiar su comportamiento y convertir esa pasión en lo que hago hoy.</p>
                <p>Además desarrollé el Método Lucky inspirado en mi propio gato Lucky, que ha sido mi gran maestro. Este método no solo viene de mi experiencia con él, sino que también está respaldado por estudios y el conocimiento de expertos y referentes.</p>
                <p>Este método ya ha sido implementado y probado con mucho éxito en varias familias como la tuya, que quieren mejorar los malos hábitos de sus gatos y además mejorar el vinculo y relación con ellos.</p>
                </div>
                <div className="grid place-items-center w-full lg:max-w-[75%] py-4 mx-auto">
                    <img src={story} alt="Productos Nicole Etologa" />
                </div>
            </div>
        </div>
    );
}