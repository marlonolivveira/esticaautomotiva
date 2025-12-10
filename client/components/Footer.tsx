import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight">
                  ESTÉTICA
                </span>
                <span className="text-blue-400 text-xs font-semibold tracking-widest">
                  AUTOMOTIVA
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Transformando veículos com excelência há mais de 5 anos. Serviços
              profissionais de detalhamento automotivo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Preços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+5500000000000"
                  className="hover:text-blue-400 transition-colors"
                >
                  WhatsApp: +55 (00) 00000-0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:contato@exemplo.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  contato@exemplo.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span>Cidade, UF - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/exemplo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/exemplo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com/company/exemplo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <p className="text-sm text-gray-500">
              © {currentYear} Estética Automotiva. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 justify-center text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                Termos de Uso
              </a>
            </div>
            <p className="text-sm text-gray-500 text-right md:text-left">
              Desenvolvido com ❤️ para sua excelência
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
