export interface Workshop {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    included: string[];
    bonuses: string[];
    dateStart: string;
    duration: string;
    mode: string;
    originalPrice: string;
    price: string;
    link: string;
  }
  
  export const workshops: Workshop[] = [
    {
      id: "taller-caos-calma-felina",
      title: "Taller grupal en vivo - Del caos a la calma felina",
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
        "💬 Sección de preguntas y respuestas en vivo para resolver tus dudas.",
        "🎉 Sorteo de una asesoría personalizada de 2 horas (vía Zoom) entre los asistentes.",
        "🎥 Grabación del taller con acceso de por vida.",
        "🎊 Regalos sorpresa.",
        "📘 Guía descargable del protocolo de reintroducción o reparación del vínculo felino."  
      ],
      dateStart:"Lunes 5 de mayo del 2025 - 20:00 Hora de Chile.",
      duration: "2,5 horas aproximadamente.",
      mode:"Taller grupal en vivo vía Zoom.",
      originalPrice: "19",
      price: "17",
      link: "https://wa.me/56947023420?text=Hola Nicole, me interesa inscribirme para el Taller del caos a la calma felina."
    }
  ];