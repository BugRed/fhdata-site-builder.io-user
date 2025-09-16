const TrustSection = () => {
  // Array de clientes com logo
  const clients = [
    { src: "/assets/logo-brose.png", alt: "Brose" },
    { src: "/assets/logo-suzano.png", alt: "Suzano" },
    { src: "/assets/logo-vibra.png", alt: "Vibra" },
    { src: "/assets/logo-estadao.png", alt: "Estadão" },
    { src: "/assets/logo-fricarne.png", alt: "Fricarne" },
    { src: "/assets/logo-grupopq.png", alt: "Grupo PQ" },
    { src: "/assets/logo-hebron.png", alt: "Hebron" },
    { src: "/assets/logo-pgquimica.png", alt: "PG Química" },
    { src: "/assets/logo-pref-recife.png", alt: "Prefeitura do Recife" },
    { src: "/assets/logo-bwa.png", alt: "BWA" },
    { src: "/assets/logo-usp.png", alt: "USP" },
    { src: "/assets/logo-emprel.png", alt: "Emprel" },
  ];

  // Define escala personalizada por cliente
  const getScaleClass = (alt) => {
    switch (alt) {
      case "Prefeitura do Recife":
        return "scale-[1.0] hover:scale-[1.2]";
      case "Estadão":
        return "scale-[1.0] hover:scale-[1.2]";
      case "Grupo PQ":
        return "scale-[1.0] hover:scale-[1.2]";
      case "Hebron":
        return "scale-[1.0] hover:scale-[1.2]";
      case "BWA":
        return "scale-[1.0] hover:scale-[1.2]";
      default:
        return "scale-[3.5] hover:scale-[3.7]";
    }
  };

  return (
    <section id="trust" style={{ backgroundColor: "#252525" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="text-center">
          <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-foreground mb-8 py-5">
            QUEM CONFIA NA GENTE
          </h3>
          <div
            className="
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
              gap-x-6 gap-y-12 items-center opacity-60
            "
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="rounded flex items-center justify-center overflow-hidden"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={`
                    h-16 w-auto object-contain transition-transform duration-300
                    ${getScaleClass(client.alt)}
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
