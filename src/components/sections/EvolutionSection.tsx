import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export default function EvolutionSection() {
  return (
    <section id="evolution" className="px-4 xs:px-6 sm:px-10">
      <div
        className="relative py-8 sm:py-12 rounded-3xl mx-2 xs:mx-4 sm:mx-6 lg:mx-8 mb-16 overflow-hidden"
        style={{
          backgroundImage: `url('/img/flash.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 sm:gap-8 items-center px-4 xs:px-6 sm:px-10">
          {/* Coluna da esquerda - Textos */}
          <div className="space-y-4 sm:space-y-6 text-left">
            <h2 className="text-white text-[clamp(0.875rem,3.5vw,2rem)] font-bold leading-tight">
              PRONTO PARA TRANSFORMAR SEUS DADOS?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg text-[clamp(0.7rem,2.2vw,1rem)]">
              Descubra em qual nível sua empresa está hoje e receba um plano
              personalizado para chegar ao nível 5 de maturidade em dados.
            </p>
          </div>

          {/* Coluna da direita - Botão responsivo para telas muito pequenas */}
          <div className="flex justify-center items-center w-full">
            <Link to="contact-form" smooth={true} duration={500}>
              <Button
                type="submit"
                variant="forms"
                className="group font-bold w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[400px] min-w-[140px] xs:min-w-[160px] sm:min-w-[200px] md:min-w-[280px] px-3 xs:px-4 sm:px-8 md:px-14 lg:px-16 py-3 xs:py-3 sm:py-4 rounded-full text-xs xs:text-sm sm:text-base text-center whitespace-nowrap"
              >
                <span className="block sm:hidden text-xs xs:text-sm">
                  Descubra
                </span>
                <span className="hidden sm:block">Descubra agora</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
