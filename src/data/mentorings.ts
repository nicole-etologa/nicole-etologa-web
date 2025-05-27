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
        "<strong>🔍 Diagnóstico inicial: </strong> Te entregaré material para que conozcas mejor a tu michi y te solicitaré información (como un formulario y algunos videos). Todo esto me ayudará a entender bien el caso y preparar las primeras recomendaciones en el feedback inicial.",
        "<strong>📋 Feedback inicial personalizado: </strong> Te entregaré un informe con estrategias iniciales y documentos de apoyo diseñados especialmente para los problemas más urgentes a trabajar.",
        "<strong>📆 Acompañamiento formal (30 días): </strong>Una vez implementadas las primeras tareas y al observar avances, agendamos la primera sesión en vivo y comienza oficialmente el seguimiento: <ul className='pl-5 mt-1 space-y-1'> <li><strong>🧠Sesión 1 (2 hr 30 min): </strong> Diagnóstico, revisión del entorno, revisión de estrategias en planilla de monitoreo y calendario de rutinas.</li> <li><strong>🔁 Sesión 2 (1 hr):</strong> Evaluación de avances y ajustes de estrategias y tareas. </li><li> <strong>🧩 Sesión 3 (1 hr): </strong> Revisión final, cierre del proceso y adaptación de estrategias a largo plazo.</li><li><strong>*Tendrás acceso de por vida a grabación de las sesiones por Zoom</strong></li></ul> ",
        "<strong>📁 Planes de acción por conducta: </strong>Tendrás acceso exclusivo a una carpeta con todos los planes de acción con tratamientos y tareas prácticas paso a paso para abordar comportamientos inadecuados. ¡Úsalos ahora o cuando los necesites en el futuro!",
        "<strong>💬 Dudas ilimitadas por WhatsApp: </strong>Te acompaño durante todo el proceso, de Lun-Vie entre 09:00-18:00 hrs (Hora de Chile), respondiendo tus preguntas con cariño y estrategia.",
        "<strong>🎥 Revisión de videos: </strong> Podrás enviarme videos del comportamiento de tu gato para afinar y ajustar las tareas.",
        "<strong>🏠 Rutinas y gatificación:</strong> Te ayudaré a crear un entorno estimulante, seguro y calmado para tu michi."
      ],
      bonuses: [
        "Guía con juego dirigido, estimulación mental y alimentación por porciones.",
        "Guía con 5 pilares para una familia gatuna feliz.",
        "Actividades caseras para estimular su mente",
        "🧬 Evolución felina",
        "🐾 Habilidades cazadoras",
        "🗣 Lenguaje felino",
        "💛 Método Lucky: mis 6 principios para resolver conflictos y fortalecer el vínculo."
      ],
      learned: [
        "✅ Entender qué le pasa a tu gato y por qué se comporta inadecuadamente.",
        "✅ Aprenderás a interpretar el lenguaje corporal y vocal para entender mejor sus necesidades.",
        "✅ Resolver problemas de forma práctica y sostenible.",
        "✅ Enriquecer su vida con juegos, rutinas y desafíos.",
        "✅ Fortalecer su confianza y el vínculo contigo."
      ],
      originalPrice: "",
      price: "",
      link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la Asesoría Premium."
    },
    {
      id: "plan-dinamico",
      title: "Plan Dinámico",
      description: "",
      fullDescription: "",
      included: [
        "<strong>🔍 Diagnóstico inicial: </strong> Te entregaré material para que conozcas mejor a tu michi y te solicitaré información clave (formulario, videos, etc.). Con eso prepararé un primer análisis del caso.",
        "<strong>📋 Feedback inicial personalizado: </strong> Recibirás un informe con estrategias prácticas y documentos de apoyo diseñados especialmente para abordar los comportamientos más urgentes.",
        "<strong>📆 Sesión en vivo: </strong> Una vez implementadas las primeras tareas y al observar avances, coordinaremos la sesión en vivo. </br> <strong className='pl-5 mt-1 space-y-1'>🧠Sesión 1 (2 hr 30 min): </strong> Diagnóstico, estrategias personalizadas, tareas prácticas y calendario de rutinas. <br> <strong>*Tendrás acceso de por vida a grabación de las sesiones por Zoom</strong> ",
        "<strong>📁 Planes de acción por conducta: </strong>Accederás a guías detalladas con tratamientos y tareas prácticas, diseñadas paso a paso para abordar los comportamientos específicos que presenten tus michis, de forma sencilla y efectiva.",
        "<strong>💬 Dudas ilimitadas por WhatsApp:</strong>Te acompaño durante todo el proceso, de Lun-Vie entre 09:00-18:00 hrs (Hora de Chile), respondiendo tus preguntas con cariño y estrategia.",
        "<strong>🎥 Revisión de videos: </strong> Podrás enviarme videos del comportamiento de tu gato para afinar y ajustar las tareas.",
        "<strong>🏠 Rutinas y gatificación:</strong> Te ayudaré a crear un entorno estimulante, seguro y calmado para tu michi."
      ],
      bonuses: [
        "Guía con juego dirigido, estimulación mental y alimentación por porciones.",
        "Guía con 5 pilares para una familia gatuna feliz",
        "Actividades caseras para estimular su mente",
        "💛 Método Lucky: mis 6 principios para resolver conflictos y fortalecer el vínculo."
      ],
      learned: [
        "✅ Entender qué le pasa a tu gato y por qué se comporta inadecuadamente",
        "✅ Aprenderás a interpretar el lenguaje corporal y vocal para entender mejor sus necesidades.",
        "✅ Enriquecer su vida con juegos, rutinas y desafíos.",
        "✅ Fortalecer su confianza y el vínculo contigo."
      ],
      originalPrice: "",
      price: "",
      link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la Asesoría Dinámica."
    },
    {
      id: "plan-express",
      title: "Plan Express",
      description: "Este plan es perfecto si necesitas orientación directa y soluciones rápidas, sin perder tiempo ni dar vueltas. ¡Ideal para poner manos a la obra desde el día uno! 🐾💛",
      fullDescription: "",
      included: [
        "<strong>🔍 Evaluación previa: </strong> Antes de la sesión, te pediré que completes un formulario para conocer mejor a tu michi, más material audiovisual para entender qué está ocurriendo en casa.",
        "<strong>Una sesión en vivo de 90 minutos vía Zoom </strong> </br> <strong className='pl-5 mt-1 space-y-1'>Una sesión intensa y súper práctica donde abordaremos: </strong> <ul className='pl-10 mt-1 space-y-1'> <li>🔎 Diagnóstico del comportamiento actual</li> <li>🏠 Revisión del entorno y qué ajustes hacer</li><li>🎯 Estrategias claras para los problemas más urgentes</li><li>💬 Resolución de dudas en el momento</li><li>✨ ¡Y te llevas la grabación para siempre!</li></ul>"
      ],
      bonuses: [
      ],
      learned: [
        "✅ Cómo hacer cambios inmediatos en el entorno para mejorar el bienestar de tu gato.",
        "✅ Qué tareas prácticas aplicar para resolver los problemas específicos que te preocupan.",
        "✅ Cómo establecer una rutina que traiga más calma y equilibrio al hogar.",
      ],
      originalPrice: "",
      price: "",
      link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la Asesoría Express."
    }
  ];