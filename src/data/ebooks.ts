export interface Ebook {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    chapters: string[];
    originalPrice: string;
    price: string;
    rating: number;
  }
  
  export const ebooks: Ebook[] = [
    {
      id: "demanda-atencion",
      title: "Demanda de Atención",
      description: "Basta de maullidos excesivos, botar objetos, subirse en lugares indebidos y más",
      fullDescription: "Un completo manual que te introduce en el fascinante mundo del comportamiento felino. Aprenderás sobre las bases del comportamiento, comunicación y necesidades básicas de los gatos.",
      chapters: [
        "Identificar las causas de los maullidos excesivos.",
        "Gestionar la demanda de atención de forma positiva.",
        "Reducir la hiperactividad con estrategias efectivas.",
        "Crear rutinas de alimentación adecuadas y consistentes.",
        "Elegir alimentos que favorezcan el bienestar de tu gato",
        "Mejorar su entorno con ideas de gatificación",
        "Corregir comportamientos inadecuados con técnicas efectivas.",
        "Reducir el estrés y fortalecer el vinculo con el gato."
      ],
      originalPrice: "50 USD",
      price: "13 USD",
      rating: 4.8
    },
    {
      id: "lenguaje-noverbal",
      title: "Guía de Lenguaje No Verbal",
      description: "Lo que necesitas para entender mejor a tu gato.",
      fullDescription: "Guía práctica para identificar y resolver los problemas de comportamiento más comunes en gatos. Incluye casos de estudio y soluciones paso a paso.",
      chapters: [
        "Agresividad",
        "Marcaje territorial",
        "Problemas de eliminación",
        "Ansiedad y estrés"
      ],
      originalPrice: "70 USD",
      price: "24.99 USD",
      rating: 4.9
    },
    {
      id: "enriquecimiento-ambiental",
      title: "Enriquecimiento Ambiental",
      description: "Guía para crear espacios felinos estimulantes",
      fullDescription: "Aprende a crear un ambiente estimulante y seguro para tu gato. Incluye proyectos DIY y recomendaciones de productos.",
      chapters: [
        "Principios del enriquecimiento",
        "Diseño de espacios",
        "Juguetes y actividades",
        "Rutinas diarias"
      ],
      originalPrice: "80 USD",
      price: "22.99 USD",
      rating: 4.7
    }
  ];