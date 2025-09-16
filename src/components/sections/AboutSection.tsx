import { Link } from "react-scroll";
import { Button } from "../ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-16">
      <div
        className="container px-4 sm:px-6 lg:px-8 border rounded-3xl overflow-hidden
             mb-10
             py-16
             max-md:mt-10 max-md:mb-10 max-md:px-6 max-md:py-10"
      >
        {/* Grid com duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Coluna esquerda: título + descrição */}
          <div className="flex flex-col justify-start space-y-6 text-left">
            <h2 className="text-[clamp(1.25rem,4vw,2.5rem)] font-bold text-foreground break-words">
              QUEM SOMOS?
            </h2>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] leading-relaxed max-w-lg break-words">
              Transformamos dados em inteligência que acelera negócios, com
              resultados que refletem nossa experiência e capacidade de
              inovação. Com uma equipe multidisciplinar, ajudamos os gestores a
              tomar decisões assertivas, analisando o passado e prevendo o
              futuro baseado em dados com uso de IA.
            </p>
          </div>

          {/* Coluna direita: placeholder para imagem ou conteúdo extra */}
          <div className="relative border rounded-2xl p-0 max-w-lg bg-[#464E4E] h-72 overflow-hidden">
            <img
              src="/img/cubes.png"
              alt="Cubos flutuando"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <p className="absolute bottom-4 right-4 z-10 text-white font-extrabold text-lg text-right max-w-xs line-clamp-3 opacity-100">
              + DE 330 SOLUÇÕES DE <span className="text-primary">IA</span> E <span className="text-primary">ANALYTICS</span> DESENVOLDIDAS EM DIFERENTES ÁREAS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;