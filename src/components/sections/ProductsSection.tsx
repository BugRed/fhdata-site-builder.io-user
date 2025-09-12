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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 sm:gap-8 justify-center mb-12">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative rounded-3xl h-80 overflow-hidden cursor-pointer w-full bg-muted transition-colors duration-300 ease-out group-hover:bg-primary-foreground"
            >
              {/* Imagem ocupando todo o card */}
              <img
                src={sector.image}
                alt={sector.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:translate-y-full"
              />

              {/* Título inicial no canto superior esquerdo */}
              <h3 className="absolute top-4 left-4 text-primary text-lg font-medium transition-opacity duration-300 group-hover:opacity-0 z-20">
                {sector.title}
              </h3>

              {/* Hover State: descrição deslizando de baixo para cima */}
              <div className="absolute inset-0 flex items-center justify-center p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-transparent">
                <div className="text-center space-y-4">
                  <h3 className="text-primary text-[clamp(1rem,2.5vw,1.25rem)] font-avenir font-bold leading-tight line-clamp-2">
                    {sector.title}
                  </h3>
                  <p className="text-primary text-[clamp(0.9rem,2vw,1rem)] leading-relaxed line-clamp-3">
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
