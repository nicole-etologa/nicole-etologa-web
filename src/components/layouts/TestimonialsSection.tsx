import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from '../../data/testimonials';

// Adaptar los datos al nuevo formato
const formattedTestimonials = testimonials.map((t) => ({
  quote: 'Testimonio compartido en ' + t.platform,
  name: t.platform,
  designation: '',
  src: t.image,
}));

const AnimatedTestimonials = ({ testimonials, autoplay = false }: { testimonials: typeof formattedTestimonials; autoplay?: boolean }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto py-4 font-sans antialiased w-[75%]">
      <div className="relative w-[95%] flex justify-center items-center h-[30rem] max-w-full md:h-[40rem] lg:h-[40rem] xl:h-[40rem] sm:max-w-md md:max-w-3xl lg:max-w-4xl">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index)
                  ? 40
                  : testimonials.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom flex items-center justify-center"
            >
              <img
                src={testimonial.src}
                alt={testimonial.name}
                draggable={false}
                className="rounded-3xl shadow-lg w-full h-full object-cover md:w-auto md:h-full"
                style={{maxHeight: '100%', maxWidth: '100%'}}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-[#e682b6] hover:bg-[#e682b6]/80  text-white transition-colors"
          aria-label="Anterior"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        <button
          onClick={handleNext}
          className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-[#e682b6] hover:bg-[#e682b6]/80  text-white transition-colors"
          aria-label="Siguiente"
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <div className="py-8 sm:py-16 bg-gradient-to-b to-[#e9e9f7] from-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-[#8c8cdc]">
          Casos de Éxito
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-50 my-0 py-0 rounded-t"></div>
        </div>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Testimonios reales de nuestros clientes.
        </p>
        <div className="max-w-4xl mx-auto relative">
          <AnimatedTestimonials testimonials={formattedTestimonials} autoplay={false} />
        </div>
      </div>
    </div>
  );
}