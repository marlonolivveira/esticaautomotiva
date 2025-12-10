import { Check } from 'lucide-react';

interface PricingPlan {
  id: number;
  name: string;
  price: number;
  description: string;
  duration: string;
  popular: boolean;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    id: 1,
    name: 'Essencial',
    price: 299,
    description: 'Perfeito para limpeza e proteção básica',
    duration: 'por veículo',
    popular: false,
    features: [
      'Lavagem detalhada',
      'Secagem sem marcas',
      'Limpeza interna básica',
      'Protetor de pneus',
    ],
  },
  {
    id: 2,
    name: 'Premium',
    price: 649,
    description: 'Transformação completa do exterior',
    duration: 'por veículo',
    popular: true,
    features: [
      'Lavagem detalhada',
      'Polimento técnico',
      'Vitrificação 6 meses',
      'Higienização interna',
      'Limpeza do motor',
      'Revitalização de plásticos',
      'Garantia de qualidade',
    ],
  },
  {
    id: 3,
    name: 'Deluxe',
    price: 999,
    description: 'Transformação premium com máxima proteção',
    duration: 'por veículo',
    popular: false,
    features: [
      'Todos os serviços Premium',
      'Vitrificação 2 anos',
      'Correção de pintura avançada',
      'Tratamento de vidros',
      'Limpeza de faróis',
      'Aromatização profissional',
      'Relatório fotográfico completo',
      'Acompanhamento pós-serviço',
    ],
  },
];

interface PricingCardProps {
  plan: PricingPlan;
}

function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
        plan.popular
          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-2xl relative'
          : 'bg-white text-gray-900 shadow-lg border border-gray-200'
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 text-sm font-bold rounded-bl-lg">
          MAIS POPULAR
        </div>
      )}

      <div className="p-8">
        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? '' : 'text-gray-900'}`}>
          {plan.name}
        </h3>
        <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
          {plan.description}
        </p>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-5xl font-bold">R$ {plan.price}</span>
            <span className={`ml-2 text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
              {plan.duration}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`block w-full py-3 rounded-lg font-semibold text-center transition-all mb-8 ${
            plan.popular
              ? 'bg-white text-blue-600 hover:bg-gray-50'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Quero este Serviço
        </a>

        {/* Features */}
        <div className="space-y-4">
          <p className={`font-semibold mb-4 text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-700'}`}>
            INCLUSO NESTE PLANO
          </p>
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check
                size={20}
                className={plan.popular ? 'text-yellow-400 flex-shrink-0' : 'text-blue-500 flex-shrink-0'}
              />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              Tabela de Preços
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pacotes de Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o pacote perfeito para seu veículo. Todos incluem garantia de qualidade
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalize seu Serviço</h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Todos os nossos pacotes podem ser customizados de acordo com suas necessidades
            específicas. Fale conosco para um orçamento personalizado!
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-lg"
          >
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
