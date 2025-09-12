import { Link } from "react-scroll";
import { Button } from "../ui/button";
/**
 * About section component - Hero area with main CTA and floating buttons
 * Features: Two-column layout, hero text, floating action buttons
 */
const AboutSection = () => {
  return (
    <section id="about" className="bg-background">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 border rounded-3xl
             mt-[112px] mb-10
             py-16
             max-md:mt-10 max-md:mb-10 max-md:px-6 max-md:py-10"
      >
        {/* About Section */}
        <div className="text-center space-y-6">
          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-medium text-foreground">
            ALAVANQUE SEU NEGÓCIO
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 mt-12">
            {/* Coluna 1 */}
            <div className="space-y-3 text-left">
              <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-white">
                Mais rentabilidade
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-3 text-left">
              <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-white">Redução de custo</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>

            {/* Coluna 3 */}
            <div className="space-y-3 text-left">
              <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-white">Mais velocidade</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <Link to="contact-form" smooth={true} duration={500}>
          <Button
            variant="hero"
            className="group font-bold w-full sm:w-auto px-6 sm:px-10 md:px-12 py-4 rounded-full text-base"
          >
            Solicite um diagnóstico gratuito
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
