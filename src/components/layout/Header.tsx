import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-scroll";

/**
 * Header component for FH Data landing page
 * Features: Logo, navigation menu, search icon with hover functionality, contact button
 * Responsive design with mobile menu
 * Updated to match Figma design with dark theme and search functionality
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Soluções", to: "solucoes" },
    // { name: "Cases", to: "cases" },
    // { name: "Produtos", to: "produtos" },
    { name: "Quem confia", to: "trust" },
    { name: "Quem somos", to: "about" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#464E4E]/100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 min-h-[60px] lg:min-h-[90px]">
          {/* Left Side: Logo and Navigation */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="rounded-md flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/688e6eccb8cc47deb53560c4cf3f762f2748f03f?width=80"
                  alt="FH Data Logo"
                  className="w-10 h-12"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-[#FAF6E6] hover:text-primary cursor-pointer font-extralight text-sm tracking-wide transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

          {/* Right Side: Search and Contact */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-6">

          </div>

          {/* Search Input with Figma Design - Responsive widths */}
          <div className="relative">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center w-[160px] lg:w-[190px] xl:w-[220px] 2xl:w-[240px] h-[50px] bg-[#03120C] rounded-[32px] shadow-[0_4px_12px_rgba(13,10,44,0.06)]">
                <div className="flex-1 px-3 lg:px-4">
                  <input
                    type="text"
                    placeholder="Procurar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-[#B8C1BF] placeholder-[#B8C1BF] text-base lg:text-lg font-normal outline-none border-none"
                  />
                </div>
                <div className="flex items-center justify-center p-[10px]">
                  <Search className="w-5 h-5 lg:w-6 lg:h-6 text-[#B8C1BF]" />
                </div>
              </div>
            </form>
          </div>


            <Link to="contact-form" smooth={true} duration={500}>
              <Button
                variant="default"
                size="sm"
                className="font-extralight px-4 lg:px-5 xl:px-6 py-3 rounded-full text-center text-sm lg:text-base whitespace-nowrap"
              >
                {/* Texto para telas grandes (>= 1280px) */}
                <span className="hidden xl:inline">
                  Entre em contato
                </span>

                {/* Texto para telas entre 1024px e 1279px */}
                <span className="hidden lg:inline xl:hidden">Contato</span>

                {/* Texto para telas médias (< 1024px) */}
                <span className="inline lg:hidden">Contato</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? (
                <span className="material-symbols-light text-2xl">close</span>
              ) : (
                <span className="material-symbols-light text-2xl">menu</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="block px-3 py-2 text-foreground hover:text-primary cursor-pointer font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-4 px-3 py-2">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-background border-border text-foreground"
                  />
                  <Button type="submit" variant="default" size="sm">
                    <span className="material-symbols-light text-lg">
                      search
                    </span>
                  </Button>
                </form>

                <Link to="contact-form" smooth={true} duration={500}>
                  <Button variant="default" size="sm" className="w-full">
                    Entre em contato
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
