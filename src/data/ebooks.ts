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
      originalPrice: "32",
      price: "9",
      link: "https://bit.ly/3Cj8Www"
    },
    {
      id: "demanda-atencion",
      title: "Demanda de atención",
      description: "Basta de maullidos excesivos, botar objetos, subirse en lugares indebidos y más.",
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