import { Video, MessageCircle, CalendarHeartIcon, LandPlot, NotebookPen} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Video className="h-12 w-12" />,
    title: "Sesión en vivo",
    description: "Resolvemos tus dudas y trazamos un plan práctico."
  },
  {
    icon: <NotebookPen className="h-12 w-12" />,
    title: "Plan de acción",
    description: "Un plan paso a paso sencillo y efectivo, diseñado exclusivamente para tu caso."
  },
  {
    icon: <MessageCircle className="h-12 w-12" />,
    title: "Seguimiento cercano y apoyo continuo",
    description: "Estoy contigo en cada paso, resolviendo dudas y ajustando estrategias según los avances."
  },
  {
    icon: <LandPlot className="h-12 w-12" />,
    title: "Objetivos claros y alcanzables",
    description: "Cambios visibles desde el primer día, enfocados en mejorar su relación."
  },
  // {
  //   icon: <Users className="w-8 h-8" />,
  //   title: "Consultas Grupales",
  //   description: "Sesiones interactivas para múltiples familias con sus gatos"
  // }
];

export default function Services() {
  return (
    <div className="py-8 sm:py-16 bg-gradient-to-b to-white from-[#e9e9f7] dark:from-[#1d1b28] dark:to-[#15141d]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-[#8c8cdc] dark:text-[#b8b8f0]">
          ¿Cómo puedo ayudarte?
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-50 my-0 py-0 rounded-t"></div>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Ya sea que necesites resolver un problema de comportamiento o entender mejor a tu gato, aquí encontrarás la solución perfecta para ti y tu gato.
        </p>
        <p className="text-left text-xl text-[#8c8cdc] dark:text-[#b8b8f0] mb-2 font-bold">
          Asesorías Personalizadas
        </p>
        <p className="text-left text-gray-600 dark:text-gray-300 mb-4">
          Una solución hecha a tu medida para abordar las necesidades específicas de tu gato.
        </p>
        <p className="text-left text-lg text-[#8c8cdc] dark:text-[#b8b8f0] mb-4 font-bold">
          Incluye:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-8 mb-10">
          {services.map((service, index) => (
            <div key={index} className="p-6 flex flex-col items-center text-center">
              <div className="text-[#e682b6] dark:text-[#f09ac7] mb-3">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#8c8cdc] dark:text-[#b8b8f0]">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
        <Link to="/asesorias">
          <button className="bg-white text-[#c24f8b] dark:bg-[#211f2c] dark:text-[#f09ac7] text-base sm:text-xl hover:bg-gray-100 dark:hover:bg-[#2b2838] border border-[#e682b6] px-5 sm:px-12 py-4 rounded-full flex items-center hover:transform hover:scale-105 transition-all">
            <CalendarHeartIcon className="mr-2" />
            Quiero saber más
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
