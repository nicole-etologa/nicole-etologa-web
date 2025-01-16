import { Video, MessageCircle, Search, CalendarHeartIcon, LandPlot, NotebookPen, BookOpen, PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Evaluación previa detallada",
    description: "Analizamos a fondo el comportamiento de tu gato para diseñar estrategias únicas."
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Sesión en vivo",
    description: "Resolvemos tus dudas y trazamos un plan práctico."
  },
  {
    icon: <NotebookPen className="w-8 h-8" />,
    title: "Plan de acción",
    description: "Un plan paso a paso sencillo y efectivo, diseñado exclusivamente para tu caso."
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Seguimiento cercano y apoyo continuo",
    description: "Estoy contigo en cada paso, resolviendo dudas y ajustando estrategias según los avances."
  },
  {
    icon: <PawPrint className="w-8 h-8" />,
    title: "Métodos respetuosos y efectivos",
    description: "Estrategias sin estrés, siempre priorizando el bienestar de tu gato"
  },
  {
    icon: <LandPlot className="w-8 h-8" />,
    title: "Objetivos claros y alcanzables",
    description: "Cambios visibles desde el primer día, enfocados en mejorar su relación."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Recursos adicionales",
    description: "Guías y materiales complementarios para reforzar el proceso."
  },
  // {
  //   icon: <Users className="w-8 h-8" />,
  //   title: "Consultas Grupales",
  //   description: "Sesiones interactivas para múltiples familias con sus gatos"
  // }
];

export default function Services() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-[#e9e9f7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-[#8c8cdc]">
          ¿Cómo puedo ayudarte?
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-50 my-0 py-0 rounded-t"></div>
        </div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ya sea que necesites resolver un problema de comportamiento o entender mejor a tu gato, aquí encontrarás la solución perfecta para ti y tu gato.
        </p>
        <p className="text-left text-xl text-[#8c8cdc] mb-2 font-bold">
          Asesorías Personalizadas
        </p>
        <p className="text-left text-gray-600 mb-4">
          Una solución hecha a tu medida para abordar las necesidades específicas de tu gato.
        </p>
        <p className="text-left text-lg text-[#8c8cdc] mb-4 font-bold">
          Incluye:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
              <div className="text-[#e682b6] mb-3">
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
        <Link to="/asesorias">
          <button className="bg-white text-[#e682b6] text-xl hover:bg-gray-100 border border-[#e682b6] px-12 py-4 rounded-full flex items-center hover:transform hover:scale-105 transition-transform">
            <CalendarHeartIcon className="mr-2" />
            Quiero una Asesoría
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}