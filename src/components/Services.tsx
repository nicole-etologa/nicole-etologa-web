import { Users, Video, MessageCircle, Home } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consultas Grupales",
    description: "Sesiones interactivas para múltiples familias con sus gatos"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Consultas Online",
    description: "Asesoramiento profesional desde la comodidad de tu hogar"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Seguimiento Personalizado",
    description: "Acompañamiento continuo en el proceso de adaptación"
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Visitas a Domicilio",
    description: "Evaluación del entorno y comportamiento en su hábitat natural"
  }
];

export default function Services() {
  return (
    <div className="py-16 bg-[#e9e9f7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#8c8cdc]">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </div>
  );
}