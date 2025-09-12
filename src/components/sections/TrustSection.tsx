/**
 * About section component - Hero area with main CTA and floating buttons
 * Features: Grid of client logos
 */
const TrustSection = () => {
  // Array de clientes com logo
  const clients = [
    { src: "/assets/logo-brose.png", alt: "Cliente 1" },
    { src: "/assets/logo-bwa.png", alt: "Cliente 2" },
    { src: "/assets/logo-emprel.png", alt: "Cliente 3" },
    { src: "/assets/logo-estadao.png", alt: "Cliente 4" },
    { src: "/assets/logo-fricarne.png", alt: "Cliente 5" },
    { src: "/assets/logo-grupopq.png", alt: "Cliente 6" },
    { src: "/assets/logo-hebron.png", alt: "Cliente 7" },
    { src: "/assets/logo-pgquimica.png", alt: "Cliente 8" },
    { src: "/assets/logo-pref-recife.png", alt: "Cliente 9" },
    { src: "/assets/logo-suzano.png", alt: "Cliente 10" },
    { src: "/assets/logo-usp.png", alt: "Cliente 11" },
    { src: "/assets/logo-vibra.png", alt: "Cliente 12" },
  ];
  /* seria bom aqui o link para a empresa que confia */ 
  return (
    <section id="about" style={{ backgroundColor: "#252525" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Section - Grid 4x3 */}
        <div className="text-center">
          <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-foreground mb-8 py-5">
            QUEM CONFIA
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-6 items-center opacity-60 py-5">
            {clients.map((client, index) => (
              <div
                key={index}
                className="h-16 rounded flex items-center justify-center"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
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
