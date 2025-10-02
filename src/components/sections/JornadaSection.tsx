import MaturityCard from "../ui/MaturityCard";

const JornadaSection = () => {
  const maturityLevels = [
    {
      number: 1,
      title: "Start",
      description: "Primeiros passos com dados (dashboards básicos, estruturação inicial)."
    },
    {
      number: 2,
      title: "Grow",
      description: "Crescimento no uso de BI e automação de análises."
    },
    {
      number: 3,
      title: "Smart",
      description: "Inteligência aplicada, insights mais profundos."
    },
    {
      number: 4,
      title: "Predict",
      description: "Modelos preditivos e machine learning."
    },
    {
      number: 5,
      title: "Global AI",
      description: "IA no DNA do negócio, impacto transformacional."
    }
  ];

  return (
    <section id="jorney" className="bg-[#0B0A0A] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#FAF6E6] rounded-[10px]">
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M3 18V17H8.664V11.5H14.327V6H21V7H15.337V12.5H9.673V18H3Z" 
                fill="#14AE5C"
              />
            </svg>
            <span className="text-[#252525] font-poppins text-sm sm:text-base font-normal leading-[150%]">
              Jornada de Crescimento
            </span>
          </div>
        </div>

        <h2 className="text-white text-center font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[120%] tracking-[-0.72px] mb-4 sm:mb-6">
          5 NÍVEIS DE MATURIDADE EM DADOS
        </h2>

        <p className="text-[#B8C1BF] text-center font-poppins text-sm sm:text-base md:text-lg leading-[150%] max-w-[630px] mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
          Descubra onde sua empresa está hoje e como pode evoluir para se tornar uma organização verdadeiramente orientada por dados e IA.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12">
          <div className="order-1">
            <MaturityCard {...maturityLevels[0]} />
          </div>
          <div className="order-2">
            <MaturityCard {...maturityLevels[1]} />
          </div>
          <div className="order-3">
            <MaturityCard {...maturityLevels[2]} />
          </div>
          <div className="order-4 sm:col-start-1 lg:col-start-2">
            <MaturityCard {...maturityLevels[3]} />
          </div>
          <div className="order-5 sm:col-start-2 lg:col-start-3">
            <MaturityCard {...maturityLevels[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JornadaSection;
