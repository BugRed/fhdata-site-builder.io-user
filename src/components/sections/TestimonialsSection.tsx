import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from 'react-scroll';


const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      name: "Maria Silva",
      position: "Diretora de TI, TechCorp",
      testimonial:
        '"A FH Data transformou nossa análise de dados. Agora temos insights em tempo real que impulsionaram nosso crescimento em 40%."',
      image: "/api/placeholder/80/80",
    },
    {
      name: "João Santos",
      position: "CEO, StartupInovadora",
      testimonial:
        '"Implementar IA com a FH Data foi um divisor de águas. Nossa eficiência operacional aumentou drasticamente."',
      image: "/api/placeholder/80/80",
    },
    {
      name: "Ana Costa",
      position: "Gerente de Analytics, BigCompany",
      testimonial:
        '"O suporte da FH Data é excepcional. Eles não apenas fornecem dados, mas insights acionáveis que fazem a diferença."',
      image: "/api/placeholder/80/80",
    },
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
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setIsTransitioning(false);
    }, 150);
  };

  const getPrevIndex = () =>
    (currentSlide - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (currentSlide + 1) % testimonials.length;

  const TestimonialCard = ({
    testimonial,
    isActive,
    position,
  }: {
    testimonial: any;
    isActive: boolean;
    position: "left" | "center" | "right";
  }) => (
    <div
      className={`
        flex-shrink-0 transition-all duration-500 ease-in-out relative
        ${
          position === "center"
            ? "w-full md:w-[500px] h-[250px] z-20"
            : "w-[380px] h-[220px] z-10"
        }
        ${!isActive ? "blur-[2px] opacity-60" : ""}
        ${
          position === "left"
            ? "md:-mr-20"
            : position === "right"
            ? "md:-ml-20"
            : ""
        }
      `}
    >
      <div
        className={`
        bg-logistics-bg rounded-[30px] shadow-card w-full h-full relative
        ${
          position === "center"
            ? "shadow-[0_8px_12px_6px_rgba(0,0,0,0.15),0_4px_4px_0_rgba(0,0,0,0.30)] p-6 md:p-8"
            : "p-6"
        }
      `}
      >
        {/* Ícone de citação */}
        <span
          className={`
            material-symbols-light absolute top-4 right-6 flex-shrink-0 text-primary
            ${position === "center" ? "text-2xl" : "text-xl"}
          `}
        >
          format_quote
        </span>

        {/* Conteúdo */}
        <div className="space-y-4">
          <blockquote
            className={`
            text-yellow-100 leading-relaxed
            ${position === "center" ? "text-base" : "text-sm"}
          `}
          >
            {testimonial.testimonial}
          </blockquote>

          <div
            className={`
            flex items-center space-x-3
            ${position === "center" ? "pt-4" : "pt-2"}
          `}
          >
            {/* Foto com borda */}
            <div
              className={`
                bg-muted rounded-full flex items-center justify-center flex-shrink-0 border border-white/80
                ${position === "center" ? "w-12 h-12" : "w-10 h-10"}
              `}
            >
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span
                  className={`
                  text-muted-foreground font-semibold
                  ${position === "center" ? "text-base" : "text-sm"}
                `}
                >
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>

            <div>
              <h3
                className={`
                text-white font-bold
                ${position === "center" ? "text-base" : "text-sm"}
              `}
              >
                {testimonial.name}
              </h3>
              <p
                className={`
                text-white
                ${position === "center" ? "text-sm" : "text-xs"}
              `}
              >
                {testimonial.position}
              </p>
            </div>
          </div>
        </div>

        {/* Setas dentro do card central, fixadas na borda externa */}
        {position === "center" && (
          <>
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute top-1/2 -translate-y-1/2 z-30 left-3 md:left-0 md:-translate-x-full md:ml-2.5
                bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg transition-all disabled:opacity-50 hover:scale-105"
            >
              <span className="material-symbols-light text-xl">arrow_back</span>
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute top-1/2 -translate-y-1/2 z-30 right-3 md:right-0 md:translate-x-full md:mr-2.5
                bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg transition-all disabled:opacity-50 hover:scale-105"
            >
              <span className="material-symbols-light text-xl">
                arrow_forward
              </span>
            </button>
          </>
        )}
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

        <div className="relative flex justify-center items-center overflow-hidden">
          <div className="flex justify-center items-center space-x-0 w-full">
            <div className="hidden md:block">
              <TestimonialCard
                testimonial={testimonials[getPrevIndex()]}
                isActive={false}
                position="left"
              />
            </div>
            <div className="w-full">
              <TestimonialCard
                testimonial={testimonials[currentSlide]}
                isActive={true}
                position="center"
              />
            </div>
            <div className="hidden md:block">
              <TestimonialCard
                testimonial={testimonials[getNextIndex()]}
                isActive={false}
                position="right"
              />
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="contact-form" smooth={true} duration={500}>
          <Button
          variant="hero"
          className="group font-bold px-32 py-4 rounded-full text-base"
        >
          Começe sua transformação
        </Button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
