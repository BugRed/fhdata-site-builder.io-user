import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Products/Services section - Three equal rectangular cards for different sectors
 * Features: Uniform card layout with image/text hover animations
 * Updated to match Figma design with hover animations:
 * - Default: title + image
 * - Hover: text slides in from top-to-bottom, image hidden
 * - Exit: text slides out bottom-to-top, image returns
 */
const ProductsSection = () => {
  const sectors = [
    {
      title: "INICIO DA JORNADA EM DADOS & IA",
      description:
        "O primeiro passo para sair do escuro e começar a operar com inteligência de dados real.",
      image: "/img/ex-woman.jpg",
    },
    {
      title: "ALAVANCAGEM COM USO DE DADOS & IA",
      description: "Escalar resultados sem aumentar custo operacional.",
      image: "/img/ex-store.jpg",
    },
    {
      title: "IA NO DNA DA EMPRESA",
      description:
        "Inteligência de dados como parte do DNA da empresa — e vantagem competitiva definitiva.",
      image: "/img/ex-smile2.jpg",
    },
  ];

  return (
    <section id="produtos" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-foreground mb-4">
            <span className="text-white">SOLUÇÕES COMPLETAS EM </span>
            <span className="text-primary">ANÁLISE DE DADOS</span>
          </h2>
        </div>

        {/* Three Equal Cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-2 sm:gap-4 justify-center mb-12">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative rounded-3xl 
                 h-[clamp(6rem,20vw,18rem)] 
                 overflow-hidden cursor-pointer w-full max-w-full flex-shrink-0
                 bg-muted transition-colors duration-300 ease-out 
                 group-hover:bg-primary-foreground"
            >
              <img
                src={sector.image}
                alt={sector.title}
                className="absolute inset-0 w-full h-full object-cover 
                   transform transition-transform duration-500 ease-out 
                   group-hover:translate-y-full"
              />

              <h3
                className="absolute top-1 left-1 text-primary 
                   text-[clamp(0.55rem,1.5vw,0.95rem)] 
                   font-medium transition-opacity duration-300 
                   group-hover:opacity-0 z-20 break-words"
              >
                {sector.title}
              </h3>

              <div
                className="absolute inset-0 flex items-center justify-center p-1 
                   transform translate-y-full group-hover:translate-y-0 
                   transition-transform duration-500 ease-out bg-transparent"
              >
                <div className="text-center space-y-1 overflow-hidden">
                  <h3
                    className="text-primary 
                         text-[clamp(0.6rem,1.8vw,1rem)] 
                         font-bold leading-tight line-clamp-2 break-words"
                  >
                    {sector.title}
                  </h3>
                  <p
                    className="text-primary 
                        text-[clamp(0.5rem,1.5vw,0.9rem)] 
                        leading-snug line-clamp-3 break-words"
                  >
                    {sector.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
