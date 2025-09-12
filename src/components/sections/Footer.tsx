import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Copyright,
  Facebook,
  Twitter,
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
  PhoneCall,
} from "lucide-react";
import { Link } from "react-scroll";

/**
 * Footer component with contact form and company information
 * Features: Contact form, contact info, navigation links
 * Updated to match Figma design with dark theme and improved layout
 */
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Soluções", to: "solucoes" },
    { name: "Cases", to: "cases" },
    { name: "Quem somos", to: "about" },
    { name: "Produtos", to: "produtos" },
  ];

  return (
    <footer className="bg-background">
      {/* Contact Form Section with Background */}
      <div
        id="contact-form"
        className="relative py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/88269a69ae6a8a4b86d7acd817252d4279b94f3a?width=2432')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8 sm:gap-12 items-start">
            {/* Left Column - Title and Description */}
            <div className="space-y-6">
              <h2 className="text-white text-[clamp(1.5rem,3.2vw,2rem)] font-bold leading-tight">
                PRONTO PARA TRANSFORMAR SEUS DADOS?
              </h2>
              <p className="text-white text-lg leading-relaxed max-w-lg">
                Agende um diagnóstico gratuito e personalizado e descubra como
                podemos potencializar seu negócio com dados
              </p>
            </div>

            {/* Right Column - Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-white text-base font-normal">
                    Nome
                  </label>
                  <Input
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-base font-normal">
                    E-mail
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-base font-normal">
                    Contato
                  </label>
                  <Input
                    name="contact"
                    placeholder="(xx) xxxx-xxxx"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-base font-normal">
                    Nome da empresa
                  </label>
                  <Input
                    name="company"
                    placeholder="Nome da empresa"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-white border border-gray-300 text-gray-800 placeholder-gray-500"
                    required
                  />
                </div>

                <Button
                  variant="hero"
                  className="group font-bold w-full sm:w-auto px-6 sm:px-10 md:px-12 py-4 rounded-full text-base"
                >
                  Agendar diagnóstico gratuito
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-logistics-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-bold">Entre em contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-white text-base">
                    R. do Brum, 248 - Recife, PE, 50030-260
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-white text-base">
                    +55 (81) 99133-0615
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-4 text-primary flex-shrink-0" />
                  <span className="text-white text-base">
                    contato@fhdataanalysis.com.br
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-bold">Páginas</h3>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="text-white hover:text-primary cursor-pointer transition-colors text-base"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media */}
            {/* Social Media & Support */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/fh.data/"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/fh-data-analysis"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  {/* <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <PhoneCall className="w-6 h-6" />
                  </a> */}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  ATENDIMENTO
                </h4>
                <div className="flex flex-col space-y-2">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Use
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    FAQ
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Report Issues
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-primary py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <Copyright className="w-6 h-6 text-white" />
            <p className="text-white text-base text-center">2025 FH Data</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
