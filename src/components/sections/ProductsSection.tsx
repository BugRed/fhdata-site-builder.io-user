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
      title: "COMERCIAL",
      description:
        "Impulsione vendas com previsão de demanda, precificação inteligente e recomendações personalizadas de produtos, além de concessão de crédito mais seguras.",
      image: "/img/img-left.png",
    },
    {
      title: "LOGÍSTICA & ESTOQUE",
      description: "Otimize a cadeia de suprimentos com previsão de estoque, roteirização eficiente, precificação de fretes e redistribuição inteligente entre unidades.",
      image: "/img/img-center.png",
    },
    {
      title: "PRODUÇÃO",
      description:
        "Simule cenários e aumente a eficiência operacional com modelos de Digital Twin para decisões mais rápidas e precisas.",
      image: "/img/img-product.png",
    },
    {
      title: "SEGURANÇA DO TRABALHO",
      description:
        "Reduza riscos com visão computacional para monitorar EPIs, previsão incidentes e reforço da cultura de segurança no trabalho.",
      image: "/img/img-right.png",
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
                 group-hover:bg-primary-foreground "
            >
              <img
                src={sector.image}
                alt={sector.title}
                className="absolute inset-0 w-full h-full object-cover 
                   transform transition-transform duration-500 ease-out 
                   group-hover:translate-y-full opacity-30"
              />

              <h3
                className="absolute inset-0 flex items-center justify-center 
             text-center text-white 
             text-[clamp(0.9rem,2.5vw,1.6rem)] 
             transition-opacity duration-300 
             group-hover:opacity-0 z-20 break-words font-extrabold px-2"
              >
                {sector.title}
              </h3>

              <div
                className="absolute inset-0 flex items-center justify-center p-1 
                   transform translate-y-full group-hover:translate-y-0 
                   transition-transform duration-500 ease-out bg-transparent h-full"
              >
                <div className="text-center space-y-1 overflow-hidden">
                  <h3
                    className="text-primary 
                         text-[clamp(0.6rem,1.8vw,1rem)] 
                         font-extrabold leading-tight line-clamp-2 break-words"
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
