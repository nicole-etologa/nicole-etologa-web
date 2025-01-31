import { CheckSquare, Contact2, GraduationCap, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits= [
  {
    icon: <CheckSquare className="h-12 w-12" />,
    title: "Resultados reales",
    description: "Mejora la convivencia y reduce el estrés."
  },
  {
    icon: <Wrench className="h-12 w-12" />,
    title: "Acceso a herramientas prácticas",
    description: "Consejos, guías y estrategias fáciles de implementar."
  },
  {
    icon: <Contact2 className="h-12 w-12" />,
    title: "Atención personalizada",
    description: "Cada caso es único y recibe todo el tiempo y cuidado que necesita."
  }
  // {
  //   icon: <Users className="w-8 h-8" />,
  //   title: "Consultas Grupales",
  //   description: "Sesiones interactivas para múltiples familias con sus gatos"
  // }
];

export default function Benefits() {
  return (
    <div className="py-8 sm:py-16 bg-gradient-to-b from-white to-[#e9e9f7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-[#8c8cdc]">
          Beneficios de trabajar conmigo
        </h2>
        <div className="w-full mb-8">
          <div className="h-1 mx-auto gradient w-64 opacity-50 my-0 py-0 rounded-t"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 mb-10">
          {benefits.map((service, index) => (
            <div key={index} className="p-6 flex flex-col items-center text-center">
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
          <button className="bg-[#e682b6] text-white text-base sm:text-xl hover:bg-[#e682b6]/80 border border-white px-5 sm:px-12 py-4 rounded-full flex items-center hover:transform hover:scale-105 transition-transform">
            <GraduationCap className="mr-2" />
            Quiero empezar hoy
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}