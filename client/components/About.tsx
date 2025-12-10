import { Check } from 'lucide-react';

export default function About() {
  const differentials = [
    'Tecnologia de ponta em detalhamento',
    'Produtos premium e eco-friendly',
    'Equipe especializada e certificada',
    'Garantia de qualidade em cada serviço',
    'Atendimento personalizado',
    'Cronograma flexível',
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=800&fit=crop"
              alt="Detalhamento profissional de veículo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="inline-block mb-4 md:mb-6">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                Sobre Nós
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transformando Veículos, Criando Experiências
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Há 5 anos, a Estética Automotiva dedica-se a oferecer os mais altos padrões de
              detalhamento automotivo. Cada veículo que passa por nosso workshop recebe atenção
              meticulosa e cuidado excepcional.
            </p>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Nossa Missão</h3>
                <p className="text-gray-700 text-sm">
                  Restaurar e manter a beleza premium dos veículos com excelência e inovação
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Nossa Visão</h3>
                <p className="text-gray-700 text-sm">
                  Ser referência em detalhamento automotivo no Brasil
                </p>
              </div>
            </div>

            {/* Differentials */}
            <h3 className="font-bold text-xl text-gray-900 mb-4">Por que nos escolher?</h3>
            <div className="grid grid-cols-1 gap-3">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
