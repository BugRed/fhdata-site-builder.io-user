import { Button } from "@/components/ui/button";

/**
 * Cases section - Success stories with full-width cards
 * Features: Image on right, percentage and description on left, CTA button
 */
const CasesSection = () => {
  const cases = [
    {
      percentage: "85%",
      title: "Redução de custos operacionais",
      description:
        "Implementação de sistema preditivo para manutenção industrial reduziu paradas não programadas e otimizou recursos.",
      side: "left",
    },
    {
      percentage: "60%",
      title: "Aumento na eficiência logística",
      description:
        "Otimização de rotas e gestão inteligente de estoque resultou em entregas mais rápidas e menor desperdício.",
      side: "right",
    },
    {
      percentage: "120%",
      title: "Crescimento na produtividade agrícola",
      description:
        "Análise de dados climáticos e monitoramento IoT aumentaram significativamente a produção por hectare.",
      side: "left",
    },
    {
      percentage: "95%",
      title: "Precisão nas previsões de demanda",
      description:
        "Modelo de machine learning implementado para prever demanda sazonal com alta precisão e reduzir perdas.",
      side: "right",
    },
  ];

  return (
    <section id="cases" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados reais que transformaram negócios
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-card p-8 space-y-12">
          {cases.map((caseItem, index) => {
            const isRight = caseItem.side === "right";

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isRight ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`
          flex-1 space-y-4
          text-center lg:text-left
          ${isRight ? "lg:text-right" : "lg:text-left"}
        `}
                >
                  <h3 className="text-6xl font-bold text-primary">
                    {caseItem.percentage}
                  </h3>
                  <h4 className="text-2xl font-semibold text-foreground">
                    {caseItem.title}
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {caseItem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
