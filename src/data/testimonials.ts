import screen1 from "../assets/screen1.jpg"
import screen2 from "../assets/screen2.jpg"
import screen3 from "../assets/screen3.jpg"
import screen4 from "../assets/screen4.jpg"
export interface Testimonial {
    id: number;
    image: string;
    platform: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      image: screen1,
      platform: "WhatsApp"
    },
    {
      id: 2,
      image: screen2,
      platform: "WhatsApp"
    },
    {
      id: 3,
      image: screen3,
      platform: "WhatsApp"
    },
    {
      id: 4,
      image: screen4,
      platform: "WhatsApp"
    }
  ];