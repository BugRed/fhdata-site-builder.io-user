import { Link } from "react-scroll";
import { Button } from "../ui/button";
/**
 * About section component - Hero area with main CTA and floating buttons
 * Features: Two-column layout, hero text, floating action buttons
 */
const JornadaSection = () => {
  return (
    <section id="jorney" className="bg-background">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 border rounded-3xl overflow-hidden
             mt-0 mb-10
             pt-10 pb-16
             max-md:mt-10 max-md:mb-10 max-md:px-6 max-md:py-10"
      >
        {/* About Section */}
        <div className="text-center space-y-6">
          <h2 className="text-[clamp(1rem,4vw,2rem)] font-medium text-foreground overflow-hidden break-words">
            ALAVANQUE SEU NEGÓCIO
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-8 mt-12">
            {/* Coluna 1 */}
            <div className="space-y-3 text-left">
              <h3 className="text-[clamp(1rem,4vw,1.25rem)] font-bold text-white overflow-hidden break-words">
                Inicio da jornada em dados & IA
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[clamp(0.75rem,2.5vw,1rem)] overflow-hidden break-words">
                O primeiro passo para sair do escuro e começar a operar com
                inteligência de dados real.
              </p>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-3 text-left">
              <h3 className="text-[clamp(1rem,4vw,1.25rem)] font-bold text-white overflow-hidden break-words">
                Alavancagem com uso de dados & IA
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[clamp(0.75rem,2.5vw,1rem)] overflow-hidden break-words">
                Escalar resultados sem aumentar custo operacional.
              </p>
            </div>

            {/* Coluna 3 */}
            <div className="space-y-3 text-left">
              <h3 className="text-[clamp(1rem,4vw,1.25rem)] font-bold text-white overflow-hidden break-words">
                IA no DNA da Empresa
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[clamp(0.75rem,2.5vw,1rem)] overflow-hidden break-words">
                Inteligência de dados como parte do DNA da empresa e vantagem
                competitiva definitiva.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <Link to="contact-form" smooth={true} duration={500}>
          <Button
            variant="default"
            size="sm"
            className="font-bold px-6 py-3 rounded-full overflow-hidden break-words text-center"
          >
            {/* Texto para telas médias/grandes */}
            <span className="hidden sm:inline">Entre em contato</span>
            {/* Texto curto para telas pequenas */}
            <span className="inline sm:hidden">Contato</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default JornadaSection;
