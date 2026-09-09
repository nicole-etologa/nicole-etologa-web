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
      title: "Taller En Vivo - Del caos a la calma felina 2",
      live: true,
      new: true,
      description: "Aprende cuándo anticipar, cuándo observar y cuándo intervenir ante la tensión entre tus gatos ¿Tus gatos se vigilan, se bloquean, se persiguen o tienen encuentros que podrían terminar en una pelea? 😿💢 ",
      fullDescription: "Muchas peleas comienzan con señales sutiles que suelen pasar inadvertidas. En este taller aprenderás a reconocerlas y a actuar de manera respetuosa antes de que el conflicto escale.",
      included: [
        "✅ A reconocer las señales tempranas de tensión entre gatos.",
        "✅ Cuándo redirigir y cuándo permitir que se comuniquen.",
        "✅ Cómo intervenir de forma segura si la situación escala.",
        "✅ Cómo prevenir bloqueos, persecuciones y conflictos mediante cambios en el hogar.",
        "✅ El Protocolo de las 3 Etapas para construir una convivencia más segura y tranquila.",
      ],
      bonuses: [
        "💬 Sección de preguntas y respuestas en vivo.",
        "📘 Guía descargable del Protocolo de las 3 Etapas ante la tensión entre gatos." ,
        "🎥 Grabación del taller con acceso de por vida."
      ],
      dateStart:"📅 Jueves 1 de octubre de 2026. 20:00 hrs (hora Chile)",
      duration: "⏰ Duración aproximada: 1 hora y 30 minutos.",
      mode:"💻 Taller grupal privado online y en vivo por Zoom.",
      earlyAccess: true,
      originalPrice: "27",
      price: "22",
      link: "https://nas.com/checkout-global?communityId=6a6baa3f0e9ba41d2b897f5b&communityCode=NICOLEETOLOGAS_BUSIN&requestor=signupRequestor&linkClicked=https%3A%2F%2Fnas.com%2Fes-mx%2Fportal%2Fproducts&sourceInfoType=folder&sourceInfoOrigin=6a9f59f87e3f43d69b8245fd",
      faqs: [
        {
          question: "¿Qué pasa si no puedo asistir en vivo?",
          answer: "No te preocupes, todos los inscritos recibirán la grabación del taller para que puedan verlo en cualquier momento."
        },
        {
          question: "¿Cómo puedo hacer preguntas durante el taller?",
          answer: "Durante el taller habrá un espacio para preguntas y respuestas en vivo, donde podrás plantear tus dudas y recibir orientación directa."
        },
        {
          question: "¿Necesito haber realizado el primer taller?",
          answer: "No. Puedes participar directamente en “Del caos a la calma felina 2”, ya que es un taller independiente. No necesitas esperar a que ocurra una pelea para comenzar a ayudarlos."
        }
      ]
    },
    {
      id: "taller-caos-calma-felina",
      title: "Taller Grabado - Del caos a la calma felina",
      live: false,
      new: false,
      description: "🐾 Un taller para sanar la relación entre tus gatos 🐾",
      fullDescription: "¿Tus gatos pelean, se evitan o viven en tensión constante? 😿💢 <br> Este taller es para ti si sueñas con una convivencia armoniosa, sin conflictos ni estrés entre tus michis. 🧘‍♀️🐱💕",
      included: [
        "Las causas reales que provocan peleas entre gatos.",
        "Cómo identificar los distintos tipos de agresión felina.",
        "Estrategias prácticas para aplicar desde el primer día.",
        "El paso a paso del protocolo de reintroducción para gatos que se rechazan o no se toleran.",
        "Cómo fomentar una convivencia más pacífica y equilibrada.",
      ],
      bonuses: [
        "🎥 Grabación del taller con acceso de por vida.",
        "📘 Guía descargable del protocolo de reintroducción o reparación del vínculo felino." 
      ],
      dateStart:"",
      duration: "",
      mode:"",
      earlyAccess: false,
      originalPrice: "",
      price: "22",
      link: "https://wa.me/56947023420?text=Hola Nicole, me interesa el Taller grabado - Del caos a la calma felina."
    }
  ];