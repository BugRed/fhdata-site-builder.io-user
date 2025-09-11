import Header from '@/components/layout/Header';
import HomeSection from '@/components/sections/HomeSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import ProductsSection from '@/components/sections/ProductsSection';
import CasesSection from '@/components/sections/CasesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/sections/Footer';
import AboutSection from '@/components/sections/AboutSection';
import TrustSection from '@/components/sections/TrustSection';

/**
 * Main landing page for FH Data company
 * Features: Complete single-page application with scroll navigation
 * All sections are contained in this page with smooth scrolling between them
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with navigation */}
      <Header />
      
      {/* Main content sections */}
      <main>
        <HomeSection/>
        <AboutSection />
        {/* <SolutionsSection /> */}
        <ProductsSection />
        {/* <CasesSection /> */}
        <TrustSection />
        <TestimonialsSection />
      </main>
      
      {/* Footer with contact form */}
      <Footer />
    </div>
  );
};

export default Index;
