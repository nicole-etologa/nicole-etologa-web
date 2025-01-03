import { testimonials } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#8c8cdc]">
          Experiencias de Éxito
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubre cómo hemos ayudado a otros dueños de gatos a mejorar la relación con sus mascotas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}