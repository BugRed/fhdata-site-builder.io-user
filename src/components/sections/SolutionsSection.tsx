import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Brain, BarChart3 } from "lucide-react";

/**
 * Solutions section component - Three different sized cards showcasing main services
 * Features: Asymmetric card layout, icons, call-to-action button
 */
const SolutionsSection = () => {
  return (
    <section id="solucoes" className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold text-foreground mb-4">
            Nossas Soluções
          </h2>
          <p className="text-[clamp(1rem,2.5vw,1.125rem)] text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para transformar seus dados em
            vantagem competitiva
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 sm:gap-8 mb-12">
          {/* First Card - Medium Rectangle (Left) */}
          <div className="flex flex-col space-y-6">
            <div className="bg-card rounded-lg shadow-card p-8 h-64 flex flex-col justify-center items-center text-center">
              <Database className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground">
                Alavancagem de maturidade em dados & IA
              </h3>
            </div>
            <p className="text-muted-foreground" style={{ wordSpacing: '0.7rem' }}>
              Desenvolvimento de <span className="text-primary">estratégias</span> e roadmaps para 
              <span className="text-primary"> elevar o nível</span> de
              maturidade em <span className="text-primary">dados</span> e <span className="text-primary">inteligência artificial</span> da sua empresa,
              gerando <span className="text-primary">insights competitivos</span> e <span className="text-primary">inovação</span>.
            </p>
          </div>
          {/* Second Card - Large (Center) */}
          <div className="flex flex-col space-y-6">
            <div className="bg-primary rounded-lg shadow-card p-8 h-80 flex flex-col justify-center items-center text-center">
              <Brain className="w-20 h-20 text-primary-foreground mb-6" />
              <h3 className="text-2xl font-bold text-primary-foreground">
                Forecast HUB
              </h3>
            </div>
            <p className="text-muted-foreground" style={{ wordSpacing: '0.7rem' }}>
              Plataforma centralizada que integra e automatiza a <span className="text-primary">previsão de
              resultados</span>, permitindo uma <span className="text-primary">tomada de decisão ágil</span> e um
              <span className="text-primary"> planejamento estratégico proativo</span>.
            </p>
          </div>

          {/* Third Card - Small Square (Right) */}

          <div className="flex flex-col space-y-6">
            <div className="bg-card rounded-lg shadow-card p-8 h-64 flex flex-col justify-center items-center text-center">
              <BarChart3 className="w-16 h-16 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Governança e segurança e Data Viz
              </h3>
            </div>
            <p className="text-muted-foreground " style={{ wordSpacing: '0.7rem' }}>
              Criação de políticas de governança e segurança para garantir a
              <span className="text-primary"> confiabilidade dos dados</span>, transformando-os em <span className="text-primary">visualizações claras </span>
              e painéis de controle <span className="text-primary">intuitivos</span> para a gestão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
