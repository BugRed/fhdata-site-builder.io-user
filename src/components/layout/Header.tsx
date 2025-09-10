import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-scroll';

/**
 * Header component for FH Data landing page
 * Features: Logo, navigation menu, search icon with hover functionality, contact button
 * Responsive design with mobile menu
 * Updated to match Figma design with dark theme and search functionality
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Soluções', to: 'solucoes' },
    { name: 'Cases', to: 'cases' },
    { name: 'Quem somos', to: 'about' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 min-h-[90px]">
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
                  className="text-yellow-100 hover:text-primary cursor-pointer font-bold text-sm tracking-wide transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side: Search and Contact */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Search Icon with Hover Functionality */}
            <div className="relative">
              <button
                className="text-yellow-100 hover:text-primary transition-colors p-2"
                onMouseEnter={() => setIsSearchOpen(true)}
                onMouseLeave={() => setIsSearchOpen(false)}
              >
                <span className="material-symbols-light text-xl">search</span>
              </button>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-80 bg-card rounded-lg shadow-card border border-border p-4"
                  onMouseEnter={() => setIsSearchOpen(true)}
                  onMouseLeave={() => setIsSearchOpen(false)}
                >
                  <form onSubmit={handleSearch} className="space-y-3">
                    <Input
                      type="text"
                      placeholder="Digite sua busca..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-background border-border text-foreground"
                      autoFocus
                    />
                    <Button
                      type="submit"
                      variant="default"
                      size="sm"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Buscar
                    </Button>
                  </form>
                </div>
              )}
            </div>

            <Link to="contact-form" smooth={true} duration={500}>
              <Button
                variant="default"
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-full"
              >
                Entre em contato
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <span className="material-symbols-light text-2xl">close</span> : <span className="material-symbols-light text-2xl">menu</span>}
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
                    <span className="material-symbols-light text-lg">search</span>
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
