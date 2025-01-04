import { Video, MessageCircle, Search, CalendarHeartIcon, LandPlot, NotebookPen } from 'lucide-react';

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Evaluación Inicial Personalizada",
    description: "Sesiones interactivas para múltiples familias con sus gatos"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Sesión en vivo 100% adaptada para ti",
    description: "Asesoramiento profesional desde la comodidad de tu hogar"
  },
  {
    icon: <NotebookPen className="w-8 h-8" />,
    title: "Plan de acción personalizado",
    description: " "
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Seguimiento y soporte continuo",
    description: " "
  },
  {
    icon: <LandPlot className="w-8 h-8" />,
    title: "Objetivos claros y alcanzables",
    description: " "
  },
  // {
  //   icon: <Users className="w-8 h-8" />,
  //   title: "Consultas Grupales",
  //   description: "Sesiones interactivas para múltiples familias con sus gatos"
  // }
];

export default function Services() {
  return (
    <div className="py-16 bg-[#e9e9f7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#8c8cdc]">
          Detalle de la Asesoría
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
              <div className="text-[#e682b6] mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#8c8cdc]">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-white text-[#e682b6] text-xl hover:bg-gray-100 border border-[#e682b6] px-12 py-4 rounded-full flex items-center hover:transform hover:scale-105 transition-transform">
              <CalendarHeartIcon className="mr-2" />
              Quiero una Asesoría
        </button>
        </div>
      </div>
    </div>
  );
}