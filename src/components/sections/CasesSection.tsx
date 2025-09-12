import { Button } from "@/components/ui/button";

/**
 * Cases section - Success stories with full-width cards
 * Features: Image on right, percentage and description on left, CTA button
 */
const CasesSection = () => {
  const cases = [
    {
      percentage: "23%",
      title: "Redução de incidentes de segurança",
      description:
        "Aumento nos planos de ação para previnir incidentes de segurança no período de 2024/2025.",
      side: "left",
    },
    {
      percentage: "37%",
      title: "Previsibilidade para obras de expansão futuras",
      description:
        "Otimização de custos operacionais da expansão da infra de armazenamento e estoque.",
      side: "right",
    },
    {
      percentage: "34%",
      title: "Faturamento no setor alimenticio",
      description:
        "Crescimento no faturamento total de empresa do setor alimenticio no período de 2024/2025.",
      side: "left",
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
