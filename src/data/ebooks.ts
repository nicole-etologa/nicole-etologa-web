export interface Ebook {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  chapters: string[];
  originalPrice: string;
  price: string;
  link: string;
}

export const ebooks: Ebook[] = [
  {
    id: "lenguaje-noverbal",
    title: "Lenguaje no verbal en gatos",
    description: "Con esta guía, lograrás entender mejor a tu gato, mejorar su bienestar y fortalecer su vínculo con él.",
    fullDescription: "Los gatos se comunican constantemente a través de su cuerpo, pero muchas de sus señales pueden pasar desapercibidas. Esta guía te ayudará a comprender qué te quiere decir tu gato mediante sus posturas, movimientos y expresiones, permitiéndote interpretar sus emociones y responder mejor a sus necesidades.",
    chapters: [
      "Movimientos corporales: Cómo interpretar el lenguaje de la cola, orejas, bigotes y ojos.",
      "Postura corporal: Qué indica su posición general y cómo identificar si está relajado o en alerta.",
      "Estados de ánimo: Aprende a reconocer si tu gato está amigable, inseguro, ansioso, relajado, enojado, miedoso, juguetón, entre otros.",
      "Sobreestimulación: Cómo detectar señales de incomodidad antes de que tu gato reaccione con un mordisco o arañazo.",
      "Comunicación social: El papel del olfato y las feromonas en la interacción entre gatos y con su entorno."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Lenguaje no verbal en gatos."
  },
  {
    id: "estres-veterinario-domicilio",
    title: "Estrés al veterinario a domicilio",
    description: "Prepara a tu gato para recibir atención veterinaria en casa con menos miedo, tensión y agresividad.",
    fullDescription: "Esta guía entrega un protocolo gradual para gatos que se estresan o reaccionan agresivamente ante visitas veterinarias a domicilio. Aprenderás a preparar el ambiente, habituarlo a objetos médicos, manejar el contacto físico de forma segura y reforzar experiencias positivas.",
    chapters: [
      "Preparación previa: Cómo reducir olores, estímulos y factores que aumentan el estrés.",
      "Espacio seguro: Organización de una zona tranquila para la consulta veterinaria.",
      "Habituación a objetos: Exposición gradual a transportador, toallas, instrumentos y elementos médicos.",
      "Reintroducción del veterinario: Primeras visitas sin contacto y acercamiento progresivo.",
      "Manejo físico gradual: Cómo practicar contacto, contención y uso opcional de toalla.",
      "Procedimientos médicos: División en etapas, pausas y distracciones durante la atención.",
      "Seguimiento: Registro de avances, reacciones y ajustes necesarios para futuras visitas."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Estrés al veterinario a domicilio."
  },
  {
    id: "agresion-entre-gatos",
    title: "Agresión entre gatos",
    description: "Aprende a manejar conflictos entre gatos, reducir la tensión territorial y recuperar la convivencia.",
    fullDescription: "Este plan de acción aborda la agresividad entre gatos desde sus causas más frecuentes: presentaciones incorrectas, competencia por recursos, miedo, territorialidad y agresión redirigida. Incluye estrategias para reintroducción, gatificación, manejo de recursos y refuerzo de conductas tranquilas.",
    chapters: [
      "Evaluación inicial: Cómo reconocer el impacto de la agresión en la convivencia.",
      "Causas principales: Presentación incorrecta, recursos insuficientes, cambios, salud y territorialidad.",
      "Señales de conflicto: Evitación, posturas ofensivas, eliminación fuera del arenero y competencia por espacios.",
      "Reintroducción estructurada: Separación, intercambio de olores y avance gradual.",
      "Recursos múltiples: Distribución adecuada de areneros, comida, agua, descanso y rascadores.",
      "Gatificación: Uso de altura, rutas de escape y espacios verticales para disminuir tensión.",
      "Juego y refuerzo: Sesiones separadas, supervisión y premios por calma.",
      "Zonas de conflicto: Cómo bloquear pasillos, puntos de tensión y accesos problemáticos."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Agresión entre gatos."
  },
  {
    id: "metodo-tratar-agresion-ocasional",
    title: "Método para tratar agresión ocasional",
    description: "Un método paso a paso para prevenir, manejar y reducir episodios de agresión ocasional entre gatos.",
    fullDescription: "Esta guía entrega un método estructurado en tres pasos para actuar antes, durante y después de un encuentro agresivo entre gatos. Aprenderás a anticiparte a las señales de tensión, redirigir sin castigos ni refuerzos negativos, separar de forma segura y reforzar la calma con juego dirigido y estimulación mental.",
    chapters: [
      "Prevención: Cómo actuar antes de un encuentro agresivo y redirigir al gato con juguetes, snacks o actividades atractivas.",
      "Refuerzo adecuado: Cuándo entregar premios para reforzar calma y evitar premiar la agresión.",
      "Manejo durante el conflicto: Uso de un cartón como bloqueo visual para separar sin contacto físico ni palabras.",
      "Separación segura: Cómo llevar al gato a una habitación aparte y esperar a que se calme completamente.",
      "Juego dirigido: Rutinas de 5 a 10 minutos para liberar energía después del episodio.",
      "Errores a evitar: Regaños, contacto visual directo, manipulación, cargar al gato o acariciarlo después de la agresión.",
      "Extinción de maullidos post agresión: Cómo no reforzar rascados, vigilancia o demanda tras la separación.",
      "Estimulación mental: Uso de LiquiMat, Kitty Kong o actividades de olfato y lamido para favorecer relajación."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Método para tratar agresión ocasional."
  },
  {
    id: "agresion-miedo-personas",
    title: "Agresión por miedo a personas",
    description: "Ayuda a tu gato a sentirse más seguro frente a tutores, visitas y personas nuevas.",
    fullDescription: "Esta guía explica cómo la agresividad por miedo aparece cuando el gato se siente amenazado por personas. Entrega estrategias para eliminar castigos, evitar contacto forzado, crear refugios seguros y trabajar la desensibilización gradual con miembros del hogar y visitas.",
    chapters: [
      "Diagnóstico conductual: Por qué el gato reacciona desde el miedo y no desde la malicia.",
      "Causas principales: Socialización deficiente, castigos, traumas, genética y falta de exposición.",
      "Miedo hacia tutores: Eliminación del castigo, respeto del espacio y lectura corporal.",
      "Entorno seguro: Refugios, enriquecimiento ambiental, rutinas predecibles y feromonas.",
      "Preparación ante visitas: Cómo reducir estímulos y educar a las personas que llegan al hogar.",
      "Interacción inicial: Uso de golosinas y juguetes para crear asociaciones positivas.",
      "Progresión gradual: Avance por etapas según tolerancia, señales y nivel de seguridad del gato."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Agresión por miedo a personas."
  },
  {
    id: "ansiedad-alimenticia",
    title: "Ansiedad alimenticia",
    description: "Controla la demanda excesiva de comida y mejora la relación de tu gato con la alimentación.",
    fullDescription: "Este plan de acción aborda la ansiedad alimenticia en gatos que piden comida constantemente, comen con desesperación o intentan robar alimento. Aprenderás a organizar horarios, enriquecer la alimentación y detectar posibles causas médicas o emocionales.",
    chapters: [
      "Evaluación inicial: Cómo identificar demanda compulsiva, maullidos y búsqueda insistente de comida.",
      "Causas principales: Alimentación libre, escasez, competencia, estrés y dieta inadecuada.",
      "Rutinas previsibles: Organización de horarios estables para reducir ansiedad.",
      "Alimentación regulada: Distribución de porciones según energía, edad y necesidades del gato.",
      "Recipientes complementarios: Uso de comederos interactivos y estrategias de búsqueda de alimento.",
      "Dieta adecuada: Importancia del alimento húmedo y proteínas de origen animal.",
      "Enriquecimiento ambiental: Actividades que conectan alimentación, caza y estimulación mental.",
      "Monitoreo: Registro de avances y ajuste del plan según la respuesta del gato."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Ansiedad alimenticia."
  },
  {
    id: "estres-post-patologia-medica-gatos",
    title: "Estrés post patología médica en gatos",
    description: "Acompaña la recuperación emocional de tu gato después de una enfermedad, cirugía o tratamiento.",
    fullDescription: "Esta guía ayuda a abordar el estrés que puede quedar después de una patología médica, hospitalización o manejo veterinario prolongado. Incluye estrategias para recuperar autonomía, reconstruir el vínculo con el tutor y crear un ambiente seguro durante la recuperación.",
    chapters: [
      "Evaluación inicial: Cómo reconocer miedo, hipervigilancia, irritabilidad o desconexión post tratamiento.",
      "Causas principales: Dolor, medicación forzada, contención, hospitalización y pérdida de control.",
      "Autonomía: Cómo devolverle al gato capacidad de elección y control sobre su entorno.",
      "Entorno seguro: Preparación de espacios relajados, refugios y recursos accesibles.",
      "Vínculo con el tutor: Recuperación de la confianza después de manipulaciones incómodas.",
      "Estimulación positiva: Reintroducción sensorial, juego terapéutico y movimiento controlado.",
      "Apoyo complementario: Feromonas, actividades mentales y revisión veterinaria si no hay avance."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Estrés post patología médica en gatos."
  },
  {
    id: "fugas-gatos",
    title: "Fugas en gatos",
    description: "Previene escapes y fortalece el vínculo de tu gato con el hogar interior.",
    fullDescription: "Este plan de acción explica por qué algunos gatos intentan escapar y cómo reducir ese riesgo mediante bloqueos físicos, enriquecimiento ambiental, juego de caza, catios seguros y refuerzo positivo por permanecer dentro.",
    chapters: [
      "Evaluación inicial: Riesgos de fugas, accidentes, peleas, enfermedades y pérdida.",
      "Causas principales: Falta de estímulos, curiosidad, animales externos, accesos inseguros y estrés.",
      "Rutas de escape: Cómo detectar puertas, ventanas y momentos críticos.",
      "Bloqueo físico: Medidas para prevenir salidas accidentales o repetidas.",
      "Vínculo con el interior: Cómo hacer que el hogar sea más atractivo y seguro.",
      "Juego de caza diario: Descarga de energía y satisfacción de necesidades naturales.",
      "Exterior seguro: Uso de catio o zonas controladas para explorar sin riesgo.",
      "Refuerzo positivo: Premiar la permanencia dentro y reducir ansiedad con feromonas."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Fugas en gatos."
  },
  {
    id: "pica-gatos",
    title: "Pica en gatos",
    description: "Identifica y maneja la masticación o ingestión de objetos no comestibles en gatos.",
    fullDescription: "Esta guía aborda la pica como trastorno alimenticio y conductual, explicando sus posibles causas médicas, emocionales, nutricionales y ambientales. Incluye estrategias para proteger el hogar, enriquecer el entorno y consultar al veterinario cuando corresponde.",
    chapters: [
      "Evaluación inicial: Cómo reconocer la ingestión de papel, plástico, telas, muebles u otros objetos.",
      "Causas médicas: Importancia del examen veterinario antes de iniciar el manejo conductual.",
      "Causas comportamentales: Estrés, cambios, destete precoz y conductas repetitivas.",
      "Protección del entorno: Retiro de objetos peligrosos y prevención de accidentes.",
      "Alternativas de masticación: Opciones seguras y gatificación para redirigir la conducta.",
      "Juego estructurado: Rutinas físicas y mentales para reducir ansiedad y frustración.",
      "Nutrición: Evaluación de dieta, raciones frecuentes y posibles deficiencias.",
      "Terapia de relajación: Estrategias complementarias para disminuir compulsión y estrés."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Pica en gatos."
  },
  {
    id: "agresion-juego-personas",
    title: "Agresión por juego a personas",
    description: "Redirige mordidas, ataques a manos o pies y exceso de energía hacia juegos adecuados.",
    fullDescription: "Este plan de acción explica la agresividad por juego en gatos que acechan, muerden o atacan partes del cuerpo humano como si fueran presas. Incluye estrategias para anticiparse, leer lenguaje corporal, evitar refuerzos y estructurar el juego diario.",
    chapters: [
      "Evaluación inicial: Cómo diferenciar agresión por juego de miedo o defensa.",
      "Causas principales: Destete temprano, juego incorrecto con manos, soledad y falta de estímulos.",
      "Eliminar castigos: Por qué regañar o gritar aumenta el problema.",
      "No reforzar ataques: Cómo evitar movimientos o reacciones que intensifican el juego.",
      "Anticipación: Identificación de horarios de mayor energía y señales previas.",
      "Juego adecuado: Uso de cañas, presas simuladas y sesiones diarias estructuradas.",
      "Enriquecimiento ambiental: Espacios verticales, juguetes y alternativas de descarga.",
      "Durante el ejercicio humano: Estrategias para evitar ataques mientras el tutor se mueve o entrena."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Agresión por juego a personas."
  },
  {
    id: "agresion-tolerancia-personas",
    title: "Agresión por tolerancia a personas",
    description: "Aprende a reconocer los límites de tu gato y reducir agresiones durante caricias, manipulación o contacto.",
    fullDescription: "Esta guía aborda la agresividad por tolerancia, que aparece cuando el gato supera su límite físico o emocional. Incluye registro de patrones, lectura corporal, manejo sin castigo, habituación al contacto y pautas para situaciones como corte de uñas o cargar al gato.",
    chapters: [
      "Evaluación inicial: Cómo identificar agresión tras caricias, manipulación o contacto prolongado.",
      "Causas principales: Dolor, baja tolerancia, estrés acumulado y señales corporales ignoradas.",
      "Registro de patrones: Horarios, lugares, duración del contacto y contexto del episodio.",
      "Lenguaje no verbal: Orejas, cola, postura, mirada y señales de saturación.",
      "Manejo sin castigo: Evitar correcciones y permitir que el gato inicie el contacto.",
      "Habituación al contacto: Progresión gradual para personas que conviven con el gato.",
      "Corte de uñas: Preparación del ambiente, sesiones cortas, herramientas y recompensas.",
      "Cargar al gato: Aproximación calma, evaluación de disposición y manipulación segura."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Agresión por tolerancia a personas."
  },
  {
    id: "agresion-redirigida",
    title: "Agresión redirigida",
    description: "Comprende y maneja ataques que ocurren cuando tu gato descarga tensión por un estímulo externo.",
    fullDescription: "Este plan de acción aborda la agresividad redirigida en gatos, incluyendo detonantes como ruidos, olores, otros gatos, duchas, veterinarios en casa o pérdida de control del entorno. Entrega fases de manejo, desensibilización, refugios y recuperación de confianza.",
    chapters: [
      "Diagnóstico conductual: Qué es la agresión redirigida y por qué ocurre.",
      "Detonantes frecuentes: Ruidos, olores, gatos externos, duchas, veterinarios y estímulos inesperados.",
      "Agresión post ducha: Rutina previa, distancia segura, recuperación de olores familiares y calma.",
      "Miedo a ruidos: Refugio, expansión territorial gradual y reducción de estímulos.",
      "Espacios seguros: Capullos, zonas verticales, refugios y bloqueadores visuales.",
      "Gatificación: Ajustes para devolver control ambiental y reducir tensión acumulada.",
      "Feromonas y aromas calmantes: Apoyo para crear asociaciones de seguridad.",
      "Recuperación de confianza: Respeto del ritmo del gato y refuerzo de momentos tranquilos."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Agresión redirigida."
  },
  {
    id: "demanda-atencion-gatos",
    title: "Demanda de atención",
    description: "Basta de maullidos excesivos, botar objetos, rascar puertas y pedir atención de forma insistente.",
    fullDescription: "Esta guía ayuda a comprender y manejar la demanda excesiva de atención en gatos. Incluye estrategias para estructurar rutinas, enriquecer el ambiente, reducir maullidos, manejar rascado de puertas, evitar que bote objetos y canalizar hiperactividad o demanda de comida y agua.",
    chapters: [
      "Causas principales: Refuerzo accidental, aburrimiento, falta de rutina y necesidades emocionales.",
      "Rutinas 3R: Rutinas, rituales y ritmo para entregar predictibilidad.",
      "Alimentación: Horarios fijos, proteína adecuada y manejo de hambre nocturna.",
      "Enriquecimiento ambiental: Gatificación, juguetes, refugios y recursos autónomos.",
      "Maullidos excesivos: Extinción, prevención AM/PM y refuerzo de la calma.",
      "Rascar puertas: Técnica NO/SÍ, rascadores, feromonas e interacción previa.",
      "Botar objetos: Registro de patrones, redirección y prevención de acceso.",
      "Hiperactividad y demanda de agua: Juego estructurado, descanso nocturno y fuentes atractivas."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Demanda de atención."
  },
  {
    id: "eliminacion-inadecuada-gatos",
    title: "Eliminación inadecuada en gatos",
    description: "Resuelve problemas de arenero, orina o deposiciones fuera de lugar con un enfoque completo.",
    fullDescription: "Esta guía explica cómo abordar la eliminación inadecuada en gatos, diferenciando problemas médicos, marcación territorial, aversión al arenero y factores de estrés. Incluye pautas para elegir arena, ubicar bandejas, limpiar correctamente y recuperar la asociación positiva con el arenero.",
    chapters: [
      "Evaluación inicial: Cómo analizar cuándo, dónde y cómo ocurre la eliminación fuera del arenero.",
      "Causas principales: Aversión al arenero, marcación por estrés territorial y problemas médicos.",
      "Patrones: Uso de luz UV, observación de zonas y registro de frecuencia.",
      "Secuencia normal de uso: Entrada, olfato, escarbado, eliminación y cubrimiento.",
      "Areneros adecuados: Tamaño, cantidad, ubicación, accesibilidad y bandejas descubiertas.",
      "Arena correcta: Sustrato sin perfume, profundidad moderada y variedad para detectar preferencias.",
      "Limpieza: Mantenimiento frecuente y uso de detergentes enzimáticos.",
      "Plan de manejo: Restringir zonas problemáticas y crear asociación positiva con el arenero."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Eliminación inadecuada en gatos."
  },
  {
    id: "estres-post-duelo-gatos",
    title: "Estrés post duelo en gatos",
    description: "Acompaña a tu gato después de la pérdida de una persona o animal importante en su vida.",
    fullDescription: "Este plan de acción aborda el estrés post duelo en gatos tras la pérdida de una figura humana o animal conviviente. Entrega estrategias para sostener rutinas, conservar olores, crear zonas seguras y acompañar emocionalmente sin forzar vínculos nuevos.",
    chapters: [
      "Evaluación inicial: Cambios emocionales, conductuales y físicos tras una pérdida.",
      "Causas principales: Pérdida de apego, cambios de rutina, vacío sensorial y estrés emocional.",
      "Pérdida humana: Rutina estable, objetos con olor y acompañamiento respetuoso.",
      "Zona segura: Espacio silencioso para descanso, observación y contención.",
      "Estimulación diaria: Juego, gatificación emocional y actividades suaves.",
      "No sustituir vínculos: Por qué no forzar la llegada de otro animal o nueva relación.",
      "Pérdida de animal conviviente: Exploración a su ritmo y conservación temporal de objetos.",
      "Apoyo complementario: Feromonas, esencias y ajustes si el compañero era perro."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Estrés post duelo en gatos."
  },
  {
    id: "estres-transporte-traslado-cambio-entorno",
    title: "Estrés por transporte, traslado y cambio de entorno",
    description: "Prepara a tu gato para viajes, transportador, mudanzas temporales y regreso al hogar.",
    fullDescription: "Esta guía entrega estrategias para reducir el estrés durante traslados en vehículo, uso del transportador, estadías en nuevos entornos y retorno al hogar habitual. Incluye desensibilización, elección del transportador, preparación antes del viaje y adaptación territorial gradual.",
    chapters: [
      "Evaluación inicial: Maullidos, temblores, babeo, vómitos, escape y micción por estrés.",
      "Causas principales: Asociaciones negativas, falta de habituación, ruidos, olores y experiencias previas.",
      "Transportador ideal: Cómo elegirlo y convertirlo en un recurso familiar.",
      "Desensibilización gradual: Exposición progresiva al transportador y al viaje.",
      "Antes del viaje: Preparación de feromonas, objetos familiares y manejo del tutor.",
      "Durante y después del viaje: Señales de estrés, pausas y llegada al destino.",
      "Nuevo entorno: Habitación refugio, recursos básicos y adaptación por etapas.",
      "Regreso al hogar: Reintroducción territorial y recuperación de rutinas."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Estrés por transporte, traslado y cambio de entorno."
  },
  {
    id: "miedo-gatos",
    title: "Miedo en gatos",
    description: "Ayuda a tu gato a sentirse seguro frente a estímulos, personas, ambientes y cambios.",
    fullDescription: "Este plan de acción explica el miedo en gatos como una emoción natural que puede afectar su bienestar cuando es frecuente o intenso. Incluye reconocimiento de señales, causas principales, creación de zonas seguras y desensibilización gradual hacia personas o estímulos.",
    chapters: [
      "Evaluación inicial: Cómo el miedo afecta exploración, alimentación, vínculo y conducta.",
      "Tipos de gatos: Preferencias de altura, refugio o suelo según su estilo de seguridad.",
      "Señales de miedo: Pupilas dilatadas, pelaje erizado, orejas atrás, temblores y huidas.",
      "Causas principales: Socialización, castigos, traumas, genética, salud y ambiente.",
      "Zona segura: Espacio tranquilo con refugios, recursos y control del entorno.",
      "Asociaciones positivas: Uso de premios, juego y calma para cambiar la percepción del estímulo.",
      "Desensibilización gradual: Exposición progresiva sin forzar interacción.",
      "Miedo a tutores o visitas: Conducta humana adecuada, lenguaje corporal y contacto voluntario."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Miedo en gatos."
  },
  {
    id: "rascado-indebido",
    title: "Rascado indebido",
    description: "Redirige el rascado de muebles, alfombras y puertas hacia alternativas adecuadas.",
    fullDescription: "Esta guía explica por qué los gatos rascan y cómo transformar el rascado indebido en una conducta saludable y dirigida. Incluye elección de rascadores, técnica NO/SÍ, enriquecimiento ambiental, estimulación física y mental, corte de uñas y eliminación de castigos.",
    chapters: [
      "Evaluación inicial: Cómo interpretar el rascado en muebles, alfombras y zonas no deseadas.",
      "Causas principales: Rascadores inadecuados, marcaje, estiramiento, aburrimiento y estrés.",
      "Técnica NO/SÍ: Hacer menos atractiva la zona indebida y ofrecer una alternativa positiva.",
      "Rascadores adecuados: Formatos, ubicación, textura y variedad según preferencia del gato.",
      "Estimulación mental: Juguetes, rotación, trucos y entretenimiento independiente.",
      "Estimulación física: Juego y descarga de energía para reducir rascado por frustración.",
      "Gatificación: Espacios verticales, recursos y zonas de descanso.",
      "Corte de uñas y manejo sin castigo: Prevención de daño sin aumentar estrés."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Rascado indebido."
  },
  {
    id: "protocolo-reintroduccion-entre-gatos",
    title: "Protocolo de reintroducción entre gatos",
    description: "Un protocolo paso a paso para volver a presentar gatos que ya tuvieron conflictos.",
    fullDescription: "Esta guía desarrolla el protocolo de reintroducción entre gatos bajo el enfoque de avanzar un sentido a la vez. Incluye separación inicial, manejo territorial, intercambio de olores, comida cercana, acceso visual progresivo y presentación física supervisada.",
    chapters: [
      "Diagnóstico conductual: Cuándo aplicar una reintroducción y por qué no apresurar el contacto.",
      "Preparación del hogar: Horarios, recursos, gatificación y estrategia territorial.",
      "Separación inicial: Sin contacto visual ni acceso para espiar.",
      "Refugio seguro: Creación de espacios independientes para cada gato.",
      "Asociación con comida: Platos separados, cercanía progresiva y señales de calma.",
      "Intercambio territorial: Exploración alternada de espacios sin contacto visual.",
      "Acceso visual: Puerta entreabierta, valla o puerta mosquitera con control del entorno.",
      "Presentación física: Sesiones breves, juego, premios, bloqueadores visuales y supervisión."
    ],
    originalPrice: "42",
    price: "17",
    link: "https://wa.me/56947023420?text=Hola Nicole, me interesa adquirir la guía de Protocolo de reintroducción entre gatos."
  }
];
