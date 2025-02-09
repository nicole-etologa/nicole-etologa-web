export interface Mentoring {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    included: string[];
    bonuses: string[];
    learned: string[];
    originalPrice: string;
    price: string;
    link: string;
  }
  
  export const mentorings: Mentoring[] = [
    {
      id: "plan-premium",
      title: "Plan Premium",
      description: "30 días de acompañamiento",
      fullDescription: "",
      included: [
        "<strong>Evaluación previa: </strong> Análisis detallado del comportamiento de tu gato mediante un formulario digital antes de iniciar el acompañamiento.",
        "<strong>Tres sesiones en vivo vía Zoom (con acceso de por vida a las grabaciones): </strong> <ul className='pl-5 mt-1 space-y-1'> <li><strong>Sesión 1 (2 hr 30 min): </strong> Diagnóstico, estrategias personalizadas, tareas prácticas y calendario de rutinas.</li> <li><strong>Sesión 2 (1 hr):</strong> Evaluación de avances y ajustes al plan de acción. </li><li> <strong>Sesión 3 (1 hr):</strong> Revisión final y ajustes finales en las estrategias.</li></ul>",
        "<strong>Plan de acción personalizado: </strong>Guía en PDF con tratamiento paso a paso para corregir problemas específicos.",
        "<strong>Resolución de dudas ilimitada: </strong>Hasta entrega del plan de acción final. Respuesta vía WhatsApp (Lun-Vie, 09:00-17:00 hrs, Hora Chile)",
        "<strong>Revisión de material audiovisual: </strong> Para ajustar tareas y estrategias según avances.",
        "<strong>Recomendaciones</strong> para rutina diaria y gatificación del hogar."
      ],
      bonuses: [
        "Evolución Felina",
        "Habilidades Cazadoras de los Felinos",
        "Lenguaje Felino",
        "Método Lucky: Mis 6 principios para resolver problemas comunes y fortalecer el vínculo con tu gato."
      ],
      learned: [
        "Identificar causas del comportamiento inadecuado",
        "Interpretar el lenguaje corporal y vocal de tu gato para entender mejor sus necesidades.",
        "Abordar y resolver problemas con estrategias prácticas, sostenibles y personalizadas, enfocándose en implementar cambios efectivos en el hogar que además prevengan futuros conflictos.",
        "Diseñar un entorno enriquecido que satisfaga sus instintos naturales, como la caza, el descanso y el juego.",
        "Establecer rutinas diarias que promuevan la calma y la estabilidad emocional, mientras monitoreas los avances de tu gato mediante un calendario de registro y modificas las estrategias según sea necesario.",
        "Fortalecer el vínculo con tu gato a través de estrategias comprobadas."
      ],
      originalPrice: "180",
      price: "127",
      link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la Asesoría Premium."
    },
    {
      id: "plan-dinamico",
      title: "Plan Dinámico",
      description: "",
      fullDescription: "",
      included: [
        "<strong>Evaluación previa: </strong> Análisis detallado del comportamiento de tu gato mediante un formulario digital antes de iniciar el acompañamiento.",
        "<strong>Una sesión en vivo de 2hr 30min vía Zoom (con acceso de por vida a las grabación): </strong> </br> <strong className='pl-5 mt-1 space-y-1'>En la sesión veremos: </strong> <ul className='pl-10 mt-1 space-y-1'> <li>Diagnóstico, estrategias personalizadas, tareas prácticas y calendario de rutinas.</li> <li> Evaluación de avances y ajustes al plan de acción. </li><li> Revisión final y ajustes finales en las estrategias.</li></ul>",
        "<strong>Plan de acción personalizado: </strong>Guía en PDF con el paso a paso para corregir los comportamientos inadecuados de tu gato.",
        "<strong>Resolución de dudas ilimitada: </strong>Hasta entrega del plan de acción final. Respuesta vía WhatsApp (Lun-Vie, 09:00-17:00 hrs, Hora Chile)",
        "<strong>Revisión de material audiovisual: </strong> Ajustes personalizados según los avances.",
        "<strong>Recomendaciones</strong> para rutina diaria y gatificación del hogar."
      ],
      bonuses: [
        "<strong>Método Lucky:</strong> Los 6 principios clave para resolver problemas de comportamiento y fortalecer el vínculo con tu gato, basados en teoría científica y experiencia personal."
      ],
      learned: [
        "Identificar causas del comportamiento inadecuado",
        "Interpretar el lenguaje corporal y vocal de tu gato para entender mejor sus necesidades.",
        "Implementar cambios inmediatos y prácticos en el hogar para mejorar su bienestar.",
        "Establecer rutinas diarias que promuevan la calma y la estabilidad emocional, mientras monitoreas los avances de tu gato mediante un calendario de registro y modificas las estrategias según sea necesario.",
        "Fortalecer el vínculo con tu gato a través de estrategias comprobadas."
      ],
      originalPrice: "130",
      price: "97",
      link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la Asesoría Dinámica."
    },
    {
      id: "plan-express",
      title: "Plan Express",
      description: "Este servicio está diseñado para ofrecer soluciones rápidas, prácticas y efectivas, adaptadas a las necesidades específicas de tu gato.",
      fullDescription: "",
      included: [
        "<strong>Evaluación previa: </strong> Análisis detallado del comportamiento de tu gato mediante un formulario digital antes de agendar la sesión en vivo.",
        "<strong>Una sesión en vivo de 2hr vía Zoom (con acceso de por vida a las grabación): </strong> </br> <strong className='pl-5 mt-1 space-y-1'>En la sesión veremos: </strong> <ul className='pl-10 mt-1 space-y-1'> <li>Tareas prácticas con objetivos SMART para implementar ajustes en el entorno</li> <li>Calendario de rutinas y registro de comportamiento.</li><li>Resolución de dudas y recomendaciones específicas.</li></ul>"
      ],
      bonuses: [
      ],
      learned: [
        "Realizar ajustes inmediatos y efectivos en el entorno del gato para mejorar su bienestar, aplicando tareas prácticas que aborden problemas específicos de manera eficiente",
        "Establecer rutinas diarias que promuevan la calma y la estabilidad emocional, mientras monitoreas los avances de tu gato.",
        "Fortalecer el vínculo con tu gato a través de estrategias comprobadas.",
      ],
      originalPrice: "90",
      price: "57",
      link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la Asesoría Express."
    }
  ];