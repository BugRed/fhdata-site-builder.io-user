import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Copyright,
  Linkedin,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    role: "",
  });

  const [popup, setPopup] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Soluções", to: "solucoes" },
    // { name: "Cases", to: "cases" },
    // { name: "Produtos", to: "produtos" },
    { name: "Quem confia", to: "trust" },
    { name: "Quem somos", to: "about" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      () => {
        setPopup({
          message: "Formulário enviado com sucesso!",
          type: "success",
        });
        setFormData({
          name: "",
          email: "",
          contact: "",
          company: "",
          role: "",
        });

        setTimeout(() => setPopup(null), 5000); // popup desaparece em 5s
      },
      () => {
        setPopup({
          message: "Ocorreu um erro ao enviar o formulário.",
          type: "error",
        });
        setTimeout(() => setPopup(null), 5000);
      }
    );
  };

  return (
    <footer className="bg-background relative py-10" id="contact-form">
      {/* Popup */}
      {popup && (
        <div
          className={`fixed top-5 right-5 z-50 flex items-center space-x-3 px-5 py-4 rounded-lg shadow-lg ${
            popup.type === "success" ? "bg-primary-dark" : "bg-red-700"
          }`}
        >
          {popup.type === "success" ? (
            <CheckCircle className="w-6 h-6 text-creme" />
          ) : (
            <XCircle className="w-6 h-6 text-creme" />
          )}
          <span className="text-creme font-medium">{popup.message}</span>
        </div>
      )}

      {/* Contact Form Section */}
      <div
        
        className="relative py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16 overflow-hidden"
        style={{
          backgroundImage:`url('/img/flash.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-8 sm:gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-white text-[clamp(1rem,4vw,2rem)] font-bold leading-tight">
                PRONTO PARA TRANSFORMAR SEUS DADOS?
              </h2>
              <p className="text-white leading-relaxed max-w-lg text-[clamp(0.75rem,2.5vw,1rem)]">
                Agende um diagnóstico gratuito e personalizado e descubra como
                podemos potencializar seu negócio com dados
              </p>
            </div>

            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {["nome", "email", "contato", "company", "role"].map(
                  (field) => (
                    <div key={field} className="space-y-2">
                      <label className="text-white text-base font-normal capitalize">
                        {field === "role"
                          ? "Cargo"
                          : field === "company"
                          ? "Nome da empresa"
                          : field}
                      </label>
                      <Input
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        placeholder={
                          field === "role"
                            ? "Seu cargo"
                            : field === "company"
                            ? "Nome da empresa"
                            : field === "contato" ? "(xx) xxxx-xxxx"
                            : `Seu ${field}`
                        }
                        value={formData[field as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full max-w-full min-w-0 bg-white border border-gray-300 text-gray-800 placeholder-gray-500"
                        required
                      />
                    </div>
                  )
                )}

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="forms"
                    className="group font-bold px-4 py-3 text-sm rounded-full text-center min-[680px]:px-6 min-[680px]:py-3.5 min-[930px]:px-12 min-[930px]:py-4 min-[930px]:text-base"
                  >
                    <span className="block min-[930px]:hidden">Agendar</span>
                    <span className="hidden min-[930px]:block">
                      Agendar diagnóstico gratuito
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-logistics-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
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
                    contato@fhdataanalysis.com
                  </span>
                </div>
              </div>
            </div>

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

            <div className="space-y-6">
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

      {/* Copyright */}
      <div className="bg-[#2AC59E] py-6">
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
