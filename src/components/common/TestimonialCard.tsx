// import { Star } from 'lucide-react';
// import type { Testimonial } from '../data/testimonials';

// interface TestimonialCardProps {
//   testimonial: Testimonial;
// }

// export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <div className="flex items-center mb-4">
//         <img
//           src={testimonial.image}
//           alt={testimonial.name}
//           className="w-12 h-12 rounded-full object-cover mr-4"
//         />
//         <div>
//           <h3 className="font-semibold text-[#8c8cdc]">{testimonial.name}</h3>
//           <p className="text-sm text-gray-500">{testimonial.location}</p>
//         </div>
//       </div>
//       <div className="flex mb-3">
//         {[...Array(testimonial.rating)].map((_, i) => (
//           <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//         ))}
//       </div>
//       <p className="text-gray-600">{testimonial.text}</p>
//     </div>
//   );
// }