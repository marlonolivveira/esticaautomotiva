import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] md:min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("/img/hero-bg.png")',
            filter: 'brightness(0.6)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <div className="max-w-2xl">
          <div className="inline-block mb-4 md:mb-6 animate-fade-in">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400 text-blue-200 text-sm font-semibold rounded-full">
              Transformação Automotiva Profissional
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-slide-up leading-tight">
            Seu carro como novo{' '}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              todos os dias
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-xl animate-slide-up leading-relaxed">
            Detalhamento profissional com tecnologia de ponta. Transforme seu veículo com nossos
            serviços premium de estética automotiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-fade-in">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Ver Serviços
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center gap-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span>Mais de 3000 veículos transformados</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span>5 anos de experiência</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
