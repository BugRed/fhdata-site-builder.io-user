import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
      title: 'MAPEAMENTO E GOVERNANÇA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-12 flex items-center justify-center">
            <svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 24L45.4456 40.5H18.5544L32 24Z" fill="#7B7B7B"/>
              <path d="M41 33L52.4861 48H29.5139L41 33Z" fill="#7B7B7B"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      title: 'PREVISÃO E IA APLICADA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-12 flex items-center justify-center">
            <svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 24L45.4456 40.5H18.5544L32 24Z" fill="#7B7B7B"/>
              <path d="M41 33L52.4861 48H29.5139L41 33Z" fill="#7B7B7B"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      title: 'DASHBOARDS E AUTOMAÇÃO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-12 flex items-center justify-center">
            <svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 24L45.4456 40.5H18.5544L32 24Z" fill="#7B7B7B"/>
              <path d="M41 33L52.4861 48H29.5139L41 33Z" fill="#7B7B7B"/>
            </svg>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            <span className="text-white">SOLUÇÕES COMPLETAS EM </span>
            <span className="text-primary">ANÁLISE DE DADOS</span>
          </h2>
        </div>

        {/* Three Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center mb-12">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative bg-muted rounded-3xl h-80 overflow-hidden cursor-pointer w-full"
            >
              {/* Default State: Title + Image */}
              <div className="absolute inset-0 flex flex-col justify-between p-10 transition-all duration-300 group-hover:opacity-0">
                <h3 className="text-white text-xl font-bold leading-tight">
                  {sector.title}
                </h3>
                <div className="flex-1 flex items-center justify-center">
                  {sector.image}
                </div>
              </div>

              {/* Hover State: Text slides in from top */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center p-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <div className="text-center space-y-6">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    {sector.title}
                  </h3>
                  <p className="text-white text-base leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - Center */}
        <div className="flex justify-center">
          <Button
            variant="hero"
            className="group font-bold px-8 py-4 rounded-full"
          >
            QUERO SABER MAIS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
