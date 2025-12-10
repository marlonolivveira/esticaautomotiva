import { useState } from 'react';
import {
  Sparkles,
  Shield,
  Droplet,
  Wrench,
  Zap,
  Palette,
  RefreshCw,
  Star,
  X,
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Sparkles,
    title: 'Polimento Técnico',
    description: 'Remove microscópicos riscos e oxidação, restaurando o brilho original da pintura',
    details:
      'Nosso polimento técnico utiliza máquinas profissionais e produtos premium para remover riscos finos, swirl marks e oxidação superficial, deixando a pintura com brilho espelho.',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Vitrificação de Pintura',
    description: 'Proteção extra com revestimento cerâmico durador até 2 anos',
    details:
      'A vitrificação oferece uma camada de proteção nano-cerâmica que repele água, sujeira e contaminantes. Mantém o brilho e facilita a limpeza do veículo.',
  },
  {
    id: 3,
    icon: Droplet,
    title: 'Higienização Interna',
    description: 'Limpeza profunda de bancos, carpetes e acabamentos internos',
    details:
      'Limpeza completa com aspiração profunda, detergentes específicos para cada material e tratamento bactericida para um interior impecável e saudável.',
  },
  {
    id: 4,
    icon: Wrench,
    title: 'Limpeza do Motor',
    description: 'Desengordurante técnico para motor e compartimento',
    details:
      'Limpeza profunda do motor e bay com produtos específicos, removendo acúmulo de óleo e sujeira para melhor funcionamento e aparência.',
  },
  {
    id: 5,
    icon: Zap,
    title: 'Lavagem Detalhada',
    description: 'Processo em duas etapas com espuma e enxague de alta pressão',
    details:
      'Lavagem em múltiplas etapas com pre-wash, shampoo pH neutro, enxague profundo e secagem sem marcas, protegendo a pintura.',
  },
  {
    id: 6,
    icon: Palette,
    title: 'Correção de Pintura',
    description: 'Reparo e nivelamento de pequenos amassados e riscas profundas',
    details:
      'Técnicas avançadas de correção de pintura para eliminar riscas profundas, descascados e pequenos amassados, restaurando a pintura.',
  },
  {
    id: 7,
    icon: RefreshCw,
    title: 'Revitalização de Plásticos',
    description: 'Restaura cor e brilho de painéis, faróis e molduras',
    details:
      'Tratamento especial que revitaliza plásticos desbotados, recupera cor vibrante e oferece proteção contra UV.',
  },
  {
    id: 8,
    icon: Star,
    title: 'Pacote Premium',
    description: 'Combinação de todos os serviços para transformação total',
    details:
      'Pacote completo incluindo lavagem, polimento, vitrificação, higienização interna, limpeza do motor e revitalização de plásticos.',
  },
];

interface ServiceDetailModalProps {
  service: (typeof services)[0] | null;
  onClose: () => void;
}

function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  if (!service) return null;

  const IconComponent = service.icon;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-lg max-w-md w-full p-8 relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
            <IconComponent size={28} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
        </div>

        <p className="text-gray-700 text-lg font-semibold mb-3">{service.description}</p>

        <p className="text-gray-600 mb-6 leading-relaxed">{service.details}</p>

        <button
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
            onClose();
          }}
          className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
        >
          Solicitar este Serviço
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Soluções Completas em Estética Automotiva
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços profissionais para manter seu veículo
            impecável e protegido
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                onClick={() => setSelectedService(service)}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                  <IconComponent size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 group">
                  Saiba mais
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />
    </section>
  );
}
