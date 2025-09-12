import { Button } from '@/components/ui/button';
import { ArrowRight, Database, Brain, BarChart3 } from 'lucide-react';

/**
 * Solutions section component - Three different sized cards showcasing main services
 * Features: Asymmetric card layout, icons, call-to-action button
 */
const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-11">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold text-foreground mb-4">Nossas Soluções</h2>
          <p className="text-[clamp(1rem,2.5vw,1.125rem)] text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para transformar seus dados em vantagem competitiva
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 sm:gap-8 mb-12">
          {/* First Card - Medium Rectangle (Left) */}
          <div className="flex flex-col space-y-6">
            <div className="bg-card rounded-lg shadow-card p-8 h-64 flex flex-col justify-center items-center text-center">
              <Database className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground">Início da jornada em dados e IA</h3>
            </div>
            <p className="text-muted-foreground">
              Estruturamos e organizamos seus dados com governança robusta, 
              garantindo qualidade, segurança e compliance em todos os processos.
            </p>
          </div>

          {/* Second Card - Large (Center) */}
          <div className="flex flex-col space-y-6">
            <div className="bg-primary rounded-lg shadow-card p-8 h-80 flex flex-col justify-center items-center text-center">
              <Brain className="w-20 h-20 text-primary-foreground mb-6" />
              <h3 className="text-2xl font-bold text-primary-foreground">Forscast HUB</h3>
            </div>
            <p className="text-muted-foreground">
              Implementamos modelos preditivos e soluções de inteligência artificial 
              que antecipam tendências e otimizam seus resultados de negócio.
            </p>
          </div>

          {/* Third Card - Small Square (Right) */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground text-center">DASHBOARD & AUTOMAÇÃO</h3>
              <div className="bg-card rounded-lg shadow-card p-8 h-48 flex flex-col justify-center items-center">
                <BarChart3 className="w-16 h-16 text-primary" />
              </div>
            </div>
            <p className="text-muted-foreground">
              Criamos dashboards interativos e automatizamos processos para 
              facilitar a tomada de decisões em tempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
