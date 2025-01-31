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
      description: "Lo que necesitas para entender mejor a tu gato.",
      fullDescription: "Guía práctica para identificar y resolver los problemas de comportamiento más comunes en gatos. Incluye casos de estudio y soluciones paso a paso.",
      chapters: [
        "Agresividad",
        "Marcaje territorial",
        "Problemas de eliminación",
        "Ansiedad y estrés"
      ],
      originalPrice: "32",
      price: "9",
      link: "https://bit.ly/3Cj8Www"
    },
    {
      id: "demanda-atencion",
      title: "Demanda de atención",
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
      originalPrice: "20",
      price: "7",
      link: "https://bit.ly/3PJdv6l"
    }
  ];