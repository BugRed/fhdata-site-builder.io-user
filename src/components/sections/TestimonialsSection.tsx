import { useState } from 'react';
import { ArrowRight, ArrowLeft, Quote } from 'lucide-react';

/**
 * Testimonials section - Customer testimonials carousel
 * Features: Carousel with customer photos, names, and testimonials
 * Updated to match Figma design with dark theme and circular navigation arrows
 */
const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Nome Sobrenome',
      position: 'Profissão, Empresa',
      testimonial: '"Depoimento que alguém escreveu."',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Nome Sobrenome',
      position: 'Profissão, Empresa',
      testimonial: '"Depoimento que alguém escreve."',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Nome Sobrenome',
      position: 'Profissão, Empresa',
      testimonial: '"Depoimento que alguém escreveu."',
      image: '/api/placeholder/80/80'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            <span className="text-white">CLIENTES QUE JÁ</span>
            <span className="text-primary"> IMPACTAMOS </span>
            <span className="text-white">E O QUE ELES DIZEM</span>
          </h2>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="flex justify-center">
            <div className="bg-logistics-bg rounded-3xl shadow-card p-10 max-w-2xl w-full relative">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-8 w-8 h-8 text-primary" />

              {/* Testimonial Content */}
              <div className="space-y-6">
                {/* Testimonial Text */}
                <blockquote className="text-yellow-100 text-lg leading-relaxed">
                  {testimonials[currentSlide].testimonial}
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center space-x-4 pt-8">
                  {/* Customer Photo */}
                  <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-muted-foreground font-semibold">
                      {testimonials[currentSlide].name.charAt(0)}
                    </span>
                  </div>

                  {/* Customer Info */}
                  <div>
                    <h3 className="text-white text-lg font-bold">
                      {testimonials[currentSlide].name}
                    </h3>
                    <p className="text-white text-base">
                      {testimonials[currentSlide].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Circular Navigation Arrows with Shadow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:left-80 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-colors"
            style={{
              filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.30)) drop-shadow(0 6px 10px rgba(0, 0, 0, 0.15))'
            }}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 lg:right-80 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-colors"
            style={{
              filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.30)) drop-shadow(0 6px 10px rgba(0, 0, 0, 0.15))'
            }}
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
