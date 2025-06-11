import screen1 from "../assets/screen1.jpg"
import screen2 from "../assets/screen2.jpg"
import screen3 from "../assets/screen3.jpg"
import screen4 from "../assets/screen4.jpg"
import screen5 from "../assets/screen5.jpg"
import screen6 from "../assets/screen6.jpg"
import screen7 from "../assets/screen7.jpg"
import screen8 from "../assets/screen8.jpg"

export interface Testimonial {
    id: number;
    image: string;
    platform: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      image: screen6,
      platform: "WhatsApp"
    },
    {
      id: 2,
      image: screen2,
      platform: "WhatsApp"
    },
    {
      id: 3,
      image: screen5,
      platform: "WhatsApp"
    },
    {
      id: 4,
      image: screen4,
      platform: "WhatsApp"
    },
    {
      id: 5,
      image: screen3,
      platform: "WhatsApp"
    },
    {
      id: 6,
      image: screen1,
      platform: "WhatsApp"
    },
    { id: 7,
      image: screen7,
      platform: "WhatsApp"
    },
    { id: 8,
      image: screen8,
      platform: "WhatsApp"
    },
  ];