import image1 from "../assets/screen.jpg"
export interface Testimonial {
    id: number;
    image: string;
    platform: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      image: image1,
      platform: "WhatsApp"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
      platform: "Instagram"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80",
      platform: "WhatsApp"
    }
  ];