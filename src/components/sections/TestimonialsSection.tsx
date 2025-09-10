import { useState } from 'react';
import { ArrowRight, ArrowLeft, Quote } from 'lucide-react';

/**
 * Testimonials section - Customer testimonials carousel
 * Features: 3-card carousel with blur effects and smooth transitions
 * Shows previous, current, and next cards with blur applied to inactive cards
 */
const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      testimonial: '"Depoimento que alguém escreveu."',
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
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 150);
  };

  const getPrevIndex = () => (currentSlide - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (currentSlide + 1) % testimonials.length;

  const TestimonialCard = ({ testimonial, isActive, position }: { testimonial: any, isActive: boolean, position: 'left' | 'center' | 'right' }) => (
    <div
      className={`
        flex-shrink-0 transition-all duration-500 ease-in-out
        ${position === 'center' ? 'w-[592px] h-[360px] z-20' : 'w-[384px] h-[330px] z-10'}
        ${!isActive ? 'filter blur-[2px]' : ''}
        ${position === 'left' ? '-mr-32' : position === 'right' ? '-ml-32' : ''}
      `}
    >
      <div className={`
        bg-logistics-bg rounded-[40px] shadow-card p-10 w-full h-full relative
        ${position === 'center' ? 'shadow-[0_8px_12px_6px_rgba(0,0,0,0.15),0_4px_4px_0_rgba(0,0,0,0.30)]' : ''}
      `}>
        {/* Quote Icon */}
        <Quote
          className={`
            absolute top-6 right-8 flex-shrink-0 text-primary
            ${position === 'center' ? 'w-8 h-8' : 'w-8 h-8'}
          `}
        />

        {/* Testimonial Content */}
        <div className="space-y-6">
          {/* Testimonial Text */}
          <blockquote className={`
            text-yellow-100 leading-relaxed
            ${position === 'center' ? 'text-lg' : 'text-lg'}
          `}>
            {testimonial.testimonial}
          </blockquote>

          {/* Customer Info */}
          <div className={`
            flex items-center space-x-4
            ${position === 'center' ? 'pt-8' : 'pt-6'}
          `}>
            {/* Customer Photo */}
            <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-muted-foreground font-semibold">
                {testimonial.name.charAt(0)}
              </span>
            </div>

            {/* Customer Info */}
            <div>
              <h3 className="text-white text-lg font-bold">
                {testimonial.name}
              </h3>
              <p className="text-white text-base">
                {testimonial.position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
          {/* 3-Card Carousel Container */}
          <div className="flex justify-center items-center space-x-0 overflow-hidden">
            {/* Previous Card */}
            <TestimonialCard
              testimonial={testimonials[getPrevIndex()]}
              isActive={false}
              position="left"
            />

            {/* Current Card */}
            <TestimonialCard
              testimonial={testimonials[currentSlide]}
              isActive={true}
              position="center"
            />

            {/* Next Card */}
            <TestimonialCard
              testimonial={testimonials[getNextIndex()]}
              isActive={false}
              position="right"
            />
          </div>

          {/* Circular Navigation Arrows with Shadow */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 lg:left-64 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-colors disabled:opacity-50"
            style={{
              filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.30)) drop-shadow(0 6px 10px rgba(0, 0, 0, 0.15))'
            }}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 lg:right-64 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-colors disabled:opacity-50"
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
                onClick={() => {
                  if (!isTransitioning) {
                    setCurrentSlide(index);
                  }
                }}
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
