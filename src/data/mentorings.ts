export interface Mentoring {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    included: string[];
    bonuses: string[];
    learned: string[];
    about?: string[];
    finalText?: string;
    originalPrice: string;
    price: string;
    textButton?: string;
    link: string;
  }
  
  export const mentorings: Mentoring[] = [
    // {
    //   id: "plan-premium",
    //   title: "Plan Premium",
    //   description: "60 días de acompañamiento",
    //   fullDescription: "",
    //   included: [
    //     "<strong>🔍 Diagnóstico inicial: </strong> Te entregaré material para que conozcas mejor a tu michi y te solicitaré información (como un formulario y algunos videos). Todo esto me ayudará a entender bien el caso y preparar las primeras recomendaciones en el feedback inicial.",
    //     "<strong>📋 Feedback inicial personalizado: </strong> Te entregaré un informe con estrategias iniciales y documentos de apoyo diseñados especialmente para los problemas más urgentes a trabajar.",
    //     "<strong>📆 Acompañamiento formal (60 días): </strong>Una vez implementadas las primeras tareas y al observar avances, agendamos la primera sesión en vivo y comienza oficialmente el seguimiento: <ul className='pl-5 mt-1 space-y-1'> <li><strong>🧠Sesión 1 (2 hr 30 min): </strong> Diagnóstico, revisión del entorno, revisión de estrategias en planilla de monitoreo y calendario de rutinas.</li> <li><strong>🔁 Sesión 2 (1 hr):</strong> Evaluación de avances y ajustes de estrategias y tareas. </li><li> <strong>🧩 Sesión 3 (1 hr): </strong> Revisión final, cierre del proceso y adaptación de estrategias a largo plazo.</li><li><strong>*Tendrás acceso de por vida a grabación de las sesiones por Zoom</strong></li></ul> ",
    //     "<strong>📁 Planes de acción por conducta: </strong>Tendrás acceso exclusivo a una carpeta con todos los planes de acción con tratamientos y tareas prácticas paso a paso para abordar comportamientos inadecuados. ¡Úsalos ahora o cuando los necesites en el futuro!",
    //     "<strong>💬 Dudas ilimitadas por WhatsApp: </strong>Te acompaño durante todo el proceso, de Lun-Vie entre 09:00-18:00 hrs (Hora de Chile), respondiendo tus preguntas con cariño y estrategia.",
    //     "<strong>🎥 Revisión de videos: </strong> Podrás enviarme videos del comportamiento de tu gato para afinar y ajustar las tareas.",
    //     "<strong>🏠 Rutinas y gatificación:</strong> Te ayudaré a crear un entorno estimulante, seguro y calmado para tu michi."
    //   ],
    //   bonuses: [
    //     "Guía con juego dirigido, estimulación mental y alimentación por porciones.",
    //     "Guía con 5 pilares para una familia gatuna feliz.",
    //     "Actividades caseras para estimular su mente",
    //     "🧬 Evolución felina",
    //     "🐾 Habilidades cazadoras",
    //     "🗣 Lenguaje felino",
    //     "💛 Método Lucky: mis 6 principios para resolver comportamiento inadecuado y fortalecer el vínculo."
    //   ],
    //   learned: [
    //     "✅ Entender qué le pasa a tu gato y por qué se comporta inadecuadamente.",
    //     "✅ Aprenderás a interpretar el lenguaje corporal y vocal para entender mejor sus necesidades.",
    //     "✅ Resolver problemas de forma práctica y sostenible.",
    //     "✅ Enriquecer su vida con juegos, rutinas y desafíos.",
    //     "✅ Fortalecer su confianza y el vínculo contigo."
    //   ],
    //   originalPrice: "",
    //   price: "",
    //   link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la Asesoría Premium."
    // },
    // {
    //   id: "plan-dinamico",
    //   title: "Plan Dinámico",
    //   description: "30 días de acompañamiento",
    //   fullDescription: "",
    //   included: [
    //     "<strong>🔍 Diagnóstico inicial: </strong> Te entregaré material para que conozcas mejor a tu michi y te solicitaré información clave (formulario, videos, etc.). Con eso prepararé un primer análisis del caso.",
    //     "<strong>📋 Feedback inicial personalizado: </strong> Recibirás un informe con estrategias prácticas y documentos de apoyo diseñados especialmente para abordar los comportamientos más urgentes.",
    //     "<strong>📆 Sesión en vivo: </strong> Una vez implementadas las primeras tareas y al observar avances, coordinaremos la sesión en vivo. </br> <strong className='pl-5 mt-1 space-y-1'>🧠Sesión 1 (2 hr 30 min): </strong> Diagnóstico, estrategias personalizadas, tareas prácticas y calendario de rutinas. <br> <strong>*Tendrás acceso de por vida a grabación de las sesiones por Zoom</strong> ",
    //     "<strong>📁 Planes de acción por conducta: </strong>Accederás a guías detalladas con tratamientos y tareas prácticas, diseñadas paso a paso para abordar los comportamientos específicos que presenten tus michis, de forma sencilla y efectiva.",
    //     "<strong>💬 Dudas ilimitadas por WhatsApp:</strong>Te acompaño durante todo el proceso, de Lun-Vie entre 09:00-18:00 hrs (Hora de Chile), respondiendo tus preguntas con cariño y estrategia.",
    //     "<strong>🎥 Revisión de videos: </strong> Podrás enviarme videos del comportamiento de tu gato para afinar y ajustar las tareas.",
    //     "<strong>🏠 Rutinas y gatificación:</strong> Te ayudaré a crear un entorno estimulante, seguro y calmado para tu michi."
    //   ],
    //   bonuses: [
    //     "Guía con juego dirigido, estimulación mental y alimentación por porciones.",
    //     "Guía con 5 pilares para una familia gatuna feliz",
    //     "Actividades caseras para estimular su mente",
    //     "💛 Método Lucky: mis 6 principios para resolver comportamiento inadecuado y fortalecer el vínculo."
    //   ],
    //   learned: [
    //     "✅ Entender qué le pasa a tu gato y por qué se comporta inadecuadamente",
    //     "✅ Aprenderás a interpretar el lenguaje corporal y vocal para entender mejor sus necesidades.",
    //     "✅ Enriquecer su vida con juegos, rutinas y desafíos.",
    //     "✅ Fortalecer su confianza y el vínculo contigo."
    //   ],
    //   originalPrice: "",
    //   price: "",
    //   link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la Asesoría Dinámica."
    // },
    {
      id: "plan-express",
      title: "🐱 Asesoría Felina Personalizada | 60 minutos",
      description: "Maullidos constantes, agresividad, peleas entre gatos, eliminación fuera del arenero, miedos o comportamientos que están afectando la convivencia en casa… ¡No tienes que seguir buscando soluciones a ciegas!.",
      fullDescription: "En esta asesoría online de 60 minutos conmigo, analizaremos lo que está ocurriendo con tu gato, comprenderemos qué factores podrían estar influyendo en su comportamiento y trabajaremos en estrategias prácticas, respetuosas y adaptadas a tu realidad. Mi objetivo es que termines nuestra sesión comprendiendo mejor a tu gato, sabiendo qué cambios priorizar y cómo comenzar a implementarlos.🐾💛",
      included: [
        "<strong>🔍 Análisis previo de tu caso:</strong> revisaré tu formulario y registros en video antes de nuestro encuentro para conocer los antecedentes y aprovechar mejor nuestra sesión.",
        "<strong>🎥 60 minutos de asesoría privada por Zoom:</strong>  trabajaremos directamente sobre uno o dos problemas específicos de comportamiento de tu gato.",
        "<strong>🎯 Recomendaciones personalizadas:</strong> recibirás orientación sobre los cambios que puedes realizar en el entorno, las rutinas y las interacciones para favorecer su bienestar y mejorar la convivencia.",
        "<strong>😺 Resuelve tus dudas conmigo:</strong> tendrás un espacio para realizar preguntas y comprender el porqué de las recomendaciones.",
        "<strong>▶️ Grabación de tu sesión:</strong> podrás volver a revisar nuestra asesoría cuando lo necesites, con acceso permanente.",
        "<strong>📕 Material de apoyo: </strong> recibirás un documento relacionado con la conducta trabajada para ayudarte a implementar las estrategias en casa.",
      ],
      bonuses: [
        "<strong> Clase grabada sobre juego y bienestar felino: </strong> <p> ¿Sabías que jugar con tu gato no se trata simplemente de mover un juguete? </p> Con tu asesoría recibirás GRATIS mi clase grabada sobre juego felino, donde aprenderás a comprender sus necesidades de caza, elegir juguetes adecuados, reconocer por qué algunos gatos no quieren jugar e incorporar actividades de estimulación física y mental. <p>Una herramienta que te ayudará a enriquecer su día a día y favorecer su bienestar, incluso después de nuestra sesión. </p>",
      ],
      learned: [
      ],
      about: [
        "<strong> 🐾 ¿Es esta asesoría para ti? </strong> <p>¡Sí, si quieres dejar de improvisar y comenzar a comprender realmente a tu gato!</p> <p>Esta asesoría es ideal para familias que necesitan orientación profesional sobre uno o dos comportamientos específicos y desean comenzar a aplicar cambios concretos sin contratar inicialmente un programa de acompañamiento prolongado.</p> <p> No necesitas saber qué está provocando el problema antes de reservar. Para eso analizaremos tu caso juntos.</p>"
      ],
      finalText: "<div className='mb-4'><h4 className='font-semibold text-gray-600 dark:text-gray-300'>Importante: esta asesoría incluye una sesión individual de 60 minutos y no contempla seguimiento posterior por WhatsApp. Algunos problemas de comportamiento pueden requerir un acompañamiento más prolongado, dependiendo de su complejidad.</h4><p><br />💛 ¡Comienza hoy a construir una mejor convivencia con tu gato!<br /><br />Reserva tu Asesoría Felina Personalizada y recibe tu clase de juego felino de regalo.<br /><br />Del caos a la calma, un paso a la vez. 🐾💛</p></div>",
      originalPrice: "",
      price: "",
      textButton: "Agendar cita",
      link: "https://pagar.nicoleeducadorafelina.com/agenda-plan-express"
    }
  ];