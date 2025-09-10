/**
 * About section component - Hero area with main CTA and floating buttons
 * Features: Two-column layout, hero text, floating action buttons
 */
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Sobre a FH Data</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A FH Data é uma empresa especializada em transformação digital através da análise 
              inteligente de dados. Com mais de uma década de experiência, oferecemos soluções 
              inovadoras que capacitam organizações a tomar decisões estratégicas baseadas em 
              insights precisos e actionables. Nossa missão é democratizar o acesso aos dados, 
              tornando a inteligência artificial e analytics acessíveis para empresas de todos os portes.
            </p>
          </div>
        </div>

        {/* Trust Section - Grid 4x3 */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">QUEM CONFIA</h3>
          <div className="rounded-lg p-8 shadow-card">
            <div className="grid grid-cols-4 gap-6 items-center opacity-60">
              {/* Grid 4x3 - 12 clientes total */}
              {Array.from({ length: 12 }, (_, index) => (
                <div key={index} className="h-16 bg-muted rounded flex items-center justify-center">
                  <span className="text-muted-foreground font-semibold">Cliente {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;