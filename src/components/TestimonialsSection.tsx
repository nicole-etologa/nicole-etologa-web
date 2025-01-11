import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6 text-[#8c8cdc]" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6 text-[#8c8cdc]" />
    </button>
  );
}

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="py-16 bg-gradient-to-b from-[#e9e9f7] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#8c8cdc]">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Testimonios reales de nuestros clientes en redes sociales
        </p>
        <div className="max-w-lg mx-auto relative max-md:max-w-md">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={`Testimonio de ${testimonial.platform}`}
                    className="w-full h-[600px] object-contain"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-sm text-gray-600">
                      Testimonio compartido en {testimonial.platform}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}