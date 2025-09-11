/**
 * About section component - Hero area with main CTA and floating buttons
 * Features: Two-column layout, hero text, floating action buttons
 */
const TrustSection = () => {
  return (
    <section id="about" style={{ backgroundColor: '#252525' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Section - Grid 4x3 */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8 py-5">QUEM CONFIA</h3>
          <div>
            <div className="grid grid-cols-4 gap-6 items-center opacity-60 py-5">
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

export default TrustSection;