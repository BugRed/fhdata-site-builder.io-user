import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Database, TrendingUp, Brain } from "lucide-react";
import { MagicButton } from "../ui/magicbutton";
import { Link } from "react-scroll";

/**
 * Home section component - Hero area with main CTA and floating buttons
 * Features: Two-column layout, hero text, floating action buttons with alternating alignment
 * Updated to match Figma design with dark background and improved styling
 */
const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-20px)] bg-background -mt-[122px] pt-[127px] py-10"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:`url('/img/world.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-500/20 via-transparent to-background"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-start pt-16 pb-0">

          {/* Left Column */}
          <div className="space-y-8 lg:pl-0 xl:pl-20 2xl:pl-0">
            <div className="space-y-4">
              <p className="text-base font-bold text-[#FAF6E6] tracking-wide uppercase">
                REVOLUCIONE SUA GESTÃO
              </p>
              <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-extrabold text-foreground leading-tight max-w-md font-avenir">
                Transforme dados em decisões de
                <span className="block text-primary">alto impacto</span>
              </h1>
            </div>

            <p className="text-white text-base font-normal leading-relaxed max-w-lg">
              Somos a aceleradora digital que traz diferenciais de alto impacto
              para o seu negócio.
            </p>

            <div>
              <Link to="contact-form" smooth={true} duration={500}>
                <Button
                  variant="hero"
                  className="group font-bold w-full sm:w-auto px-6 sm:px-10 md:px-12 py-4 rounded-full text-base"
                >
                  Saiba mais
                </Button>
              </Link>
            </div>

            {/* MagicButtons em formato de lista para telas menores (abaixo do botão Saiba Mais) */}
            <div className="lg:hidden flex flex-col space-y-4 mt-8">
              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg w-full justify-start"
                style={{ animationDelay: "0.2s" }}
              >
                Inovação
              </MagicButton>

              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg w-full justify-start"
                style={{ animationDelay: "0.4s" }}
              >
                Gestão de Dados
              </MagicButton>

              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg w-full justify-start"
                style={{ animationDelay: "0.6s" }}
              >
                Analytics
              </MagicButton>

              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg w-full justify-start"
                style={{ animationDelay: "0.6s" }}
              >
                Inteligência Artificial
              </MagicButton>
            </div>
          </div>

          {/* Right Column - Floating Buttons reorganizados em formato de escada */}
          <div className="hidden lg:flex flex-col justify-start items-center lg:pr-0 xl:pr-20 2xl:pr-0 mt-0 lg:col-span-1 relative">
            
            {/* Primeiro botão - Inovação no meio e em cima */}
            <div className="flex justify-center w-full ml-96 mt-24">
              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg text-[#B8C1BF] border-[#B8C1BF]"
                style={{ animationDelay: "0.2s" }}
                icon={<Lightbulb className="w-[14px] h-[14px] text-primary fill-current" />}
              >
                Inovação
              </MagicButton>
            </div>

            {/* Segunda linha - Gestão de Dados à esquerda, um pouco acima */}
            <div className="flex justify-start w-full mt-16 ml-16">
              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg text-[#B8C1BF] border-[#B8C1BF]"
                style={{ animationDelay: "0.4s" }}
                icon={<Database className="w-[14px] h-[14px] text-primary fill-current" />}
              >
                Gestão de Dados
              </MagicButton>
            </div>

            {/* Terceira linha - Analytics à direita, um pouco abaixo */}
            <div className="flex justify-end w-full mb-6 mt-5 mr-16">
              <MagicButton
                variant="floating"
                side="right"
                className="animate-fade-in shadow-lg text-[#B8C1BF] border-[#B8C1BF]"
                style={{ animationDelay: "0.6s" }}
                icon={<TrendingUp className="w-[14px] h-[14px] text-primary fill-current" />}
              >
                Analytics 
              </MagicButton>
            </div>

            {/* Quarta linha - Inteligência Artificial à esquerda, um pouco abaixo */}
            <div className="flex justify-start w-full ml-48">
              <MagicButton
                variant="floating"
                side="left"
                className="animate-fade-in shadow-lg text-[#B8C1BF] border-[#B8C1BF]"
                style={{ animationDelay: "0.8s" }}
                icon={<Brain className="w-[14px] h-[14px] text-primary fill-current" />}
              >
                Inteligência Artificial
              </MagicButton>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;