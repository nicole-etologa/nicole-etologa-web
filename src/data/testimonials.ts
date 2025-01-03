export interface Testimonial {
    id: string;
    name: string;
    location: string;
    text: string;
    image: string;
    rating: number;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "María González",
      location: "Madrid",
      text: "Gracias a la consulta de etología, mi gato Luna dejó de tener problemas de ansiedad. ¡Los consejos fueron muy efectivos!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5
    },
    {
      id: "2",
      name: "Carlos Ruiz",
      location: "Barcelona",
      text: "El ebook de enriquecimiento ambiental transformó completamente el espacio de mi gato. Ahora está más activo y feliz.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5
    },
    {
      id: "3",
      name: "Ana Martínez",
      location: "Valencia",
      text: "Las sesiones online fueron muy convenientes y efectivas. Mi gatita mejoró su comportamiento en pocas semanas.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5
    }
  ];