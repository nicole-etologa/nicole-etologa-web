export interface Workshop {
    id: string;
    title: string;
    live: boolean;
    new: boolean;
    description: string;
    fullDescription: string;
    included: string[];
    bonuses: string[];
    dateStart: string;
    duration: string;
    mode: string;
    earlyAccess: boolean;
    originalPrice: string;
    price: string;
    link: string;
    faqs?: { question: string; answer: string }[];
  }
  
  export const workshops: Workshop[] = [
    {
      id: "taller-caos-calma-felina-2",
      title: "Taller Grabado – Del caos a la calma felina 2",
      live: false,
      new: true,
      description: "Aprende cuándo observar, cuándo redirigir y cómo intervenir ante la tensión entre tus gatos. ¿Tus gatos se vigilan, se bloquean, se persiguen o tienen encuentros que podrían terminar en una pelea? 😿💢 ",
      fullDescription: "Muchas peleas comienzan con señales sutiles que suelen pasar inadvertidas. En este taller aprenderás a reconocerlas y a actuar de manera respetuosa antes de que el conflicto escale.",
      included: [
        "✅ A reconocer las señales tempranas de tensión entre gatos.",
        "✅ Cuándo redirigir y cuándo permitir que se comuniquen.",
        "✅ Cómo intervenir de forma segura si la situación escala.",
        "✅ Cómo prevenir bloqueos, persecuciones y conflictos mediante cambios en el hogar.",
        "✅ El Protocolo de las 3 Etapas para construir una convivencia más segura y tranquila.",
      ],
      bonuses: [
        "💬 Acceso a la sección de preguntas y respuestas realizada durante el taller en vivo.",
        "📘 Documento de apoyo: Protocolo de las 3 Etapas ante la tensión entre gatos." ,
        "🎥 Grabación completa del taller.",
        "♾️ Acceso de por vida para que puedas verlo todas las veces que necesites."
      ],
      dateStart:"",
      duration: "⏰ Duración aproximada: 1 hora y 30 minutos.",
      mode:"💻 Taller online grabado.",
      earlyAccess: false,
      originalPrice: "40",
      price: "27",
      link: "https://nas.com/checkout-global?communityId=6a6baa3f0e9ba41d2b897f5b&communityCode=NICOLEETOLOGAS_BUSIN&requestor=signupRequestor&linkClicked=https%3A%2F%2Fnas.com%2Fes-mx%2Fportal%2Fproducts&sourceInfoType=folder&sourceInfoOrigin=6a9f59f87e3f43d69b8245fd",
      faqs: [
        {
          question: "¿Necesito haber realizado el primer taller?",
          answer: "No. Del caos a la calma felina 2 es un taller independiente, por lo que puedes realizarlo aunque no hayas participado en la primera edición."
        },
        {
          question: "¿Cuándo podré ver el taller?",
          answer: "Inmediatamente después de realizar la compra podrás acceder a la grabación completa y al documento de apoyo."
        },
        {
          question: "¿Puedo verlo más de una vez?",
          answer: "Sí. Tendrás acceso de por vida para revisarlo todas las veces que lo necesites."
        },
        {
          question: "¿Puedo realizarlo si mis gatos todavía no se han peleado?",
          answer: "Sí. No necesitas esperar a que ocurra una pelea. El taller también te ayudará a reconocer señales tempranas y prevenir que la tensión aumente."
        },
        {
          question: "¿El taller incluye una evaluación personalizada de mis gatos?",
          answer: "No. El taller entrega herramientas generales y prácticas, pero no incluye el análisis individual del caso ni acompañamiento personalizado."
        }
      ]
     },
    // {
    //   id: "taller-caos-calma-felina",
    //   title: "Taller Grabado - Del caos a la calma felina",
    //   live: false,
    //   new: false,
    //   description: "🐾 Un taller para sanar la relación entre tus gatos 🐾",
    //   fullDescription: "¿Tus gatos pelean, se evitan o viven en tensión constante? 😿💢 <br> Este taller es para ti si sueñas con una convivencia armoniosa, sin conflictos ni estrés entre tus michis. 🧘‍♀️🐱💕",
    //   included: [
    //     "Las causas reales que provocan peleas entre gatos.",
    //     "Cómo identificar los distintos tipos de agresión felina.",
    //     "Estrategias prácticas para aplicar desde el primer día.",
    //     "El paso a paso del protocolo de reintroducción para gatos que se rechazan o no se toleran.",
    //     "Cómo fomentar una convivencia más pacífica y equilibrada.",
    //   ],
    //   bonuses: [
    //     "🎥 Grabación del taller con acceso de por vida.",
    //     "📘 Guía descargable del protocolo de reintroducción o reparación del vínculo felino." 
    //   ],
    //   dateStart:"",
    //   duration: "",
    //   mode:"",
    //   earlyAccess: false,
    //   originalPrice: "",
    //   price: "22",
    //   link: "https://wa.me/56947023420?text=Hola Nicole, me interesa el Taller grabado - Del caos a la calma felina."
    // }
  ];