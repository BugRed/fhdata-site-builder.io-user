import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { MagicButton } from '../ui/magicbutton';

/**
 * Home section component - Hero area with main CTA and floating buttons
 * Features: Two-column layout, hero text, floating action buttons with alternating alignment
 * Updated to match Figma design with dark background and improved styling
 */
const HomeSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-background -mt-[90px] pt-[90px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/0079fe7d6747303bf0250fa3ac55e8097136dfd5?width=2880')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-500/20 via-transparent to-background"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start py-32 min-h-screen">
          {/* Left Column - Hero Text */}
          <div className="space-y-8 lg:pl-[calc((100vw-80rem)/2)] xl:pl-20 2xl:pl-[calc((100vw-80rem)/2)]">
            <div className="space-y-4">
              <p className="text-base font-bold text-yellow-100 tracking-wide uppercase">
                REVOLUCIONE SUA GESTÃO
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Transforme dados em decisões de{' '}
                <span className="text-primary">alto impacto</span>
              </h1>
            </div>

            <p className="text-white text-base font-normal leading-relaxed max-w-lg">
              Somos a aceleradora digital que traz diferenciais de alto impacto para o seu negócio.
              Alavanque seu negócio com ferramentas personalizadas.
            </p>

            <Button
              variant="hero"
              className="group font-bold px-8 py-4 rounded-full text-base"
            >
              Saiba mais
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* MagicButtons em formato de lista para telas menores (abaixo do botão Saiba Mais) */}
            <div className="lg:hidden flex flex-col space-y-4 mt-8">
              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg w-full justify-start"
                style={{ animationDelay: '0.2s' }}
              >
                Dados
              </MagicButton>

              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg w-full justify-start"
                style={{ animationDelay: '0.4s' }}
              >
                Inteligência Artificial
              </MagicButton>

              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg w-full justify-start"
                style={{ animationDelay: '0.6s' }}
              >
                Analytics
              </MagicButton>
            </div>
          </div>

          {/* Right Column - Floating Buttons com Alinhamento Alternado (apenas em telas grandes) */}
          {/* Mantém todas as configurações originais, mas centraliza os botões próximos */}
          {/* Alinhado verticalmente com o H1 */}
          <div className="hidden lg:flex flex-col justify-between h-[180px] lg:items-center lg:pr-[calc((100vw-80rem)/2)] xl:pr-20 2xl:pr-[calc((100vw-80rem)/2)] mt-0 lg:col-span-1">

            {/* Primeira linha - 'Dados' alinhado à esquerda - altura inicial do H1 */}
            <div className="flex justify-start w-80">
              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg"
                style={{ animationDelay: '0.2s' }}
              >
                Dados
              </MagicButton>
            </div>

            {/* Segunda linha - 'Inteligência Artificial' alinhado à direita - meio do H1 */}
            <div className="flex justify-end w-80">
              <MagicButton
                variant="floating"
                side="right"
                className="animate-fade-in shadow-lg"
                style={{ animationDelay: '0.4s' }}
              >
                Inteligência Artificial
              </MagicButton>
            </div>

            {/* Terceira linha - 'Analytics' alinhado à esquerda - altura final do H1 */}
            <div className="flex justify-start w-80">
              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg"
                style={{ animationDelay: '0.6s' }}
              >
                Analytics
              </MagicButton>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
