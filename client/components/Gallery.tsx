import { useState } from 'react';

interface BeforeAfterImage {
  id: number;
  title: string;
  before: string;
  after: string;
}

const galleryImages: BeforeAfterImage[] = [
  {
    id: 1,
    title: 'Polimento Completo',
    before: '/img/before-after/polimento-before.png',
    after: '/img/before-after/polimento-after.png',
  },
  {
    id: 2,
    title: 'Vitrificação Premium',
    before: '/img/before-after/vitrificacao-before.png',
    after: '/img/before-after/vitrificacao-after.png',
  },
  {
    id: 3,
    title: 'Restauração Total',
    before: '/img/before-after/restauracao-before.png',
    after: '/img/before-after/restauracao-after.png',
  },
  {
    id: 4,
    title: 'Limpeza Detalhada',
    before: '/img/before-after/limpeza-before.png',
    after: '/img/before-after/limpeza-after.png',
  },
];

interface BeforeAfterCardProps {
  image: BeforeAfterImage;
}

function BeforeAfterCard({ image }: BeforeAfterCardProps) {
  const [slider, setSlider] = useState(50);

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-200 group cursor-ew-resize">
      {/* After Image */}
      <img
        src={image.after}
        alt={`${image.title} - Depois`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Before Image with Slider */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${slider}%` }}
      >
        <img
          src={image.before}
          alt={`${image.title} - Antes`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${100 / (slider / 100)}%` }}
          loading="lazy"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${slider}%` }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.parentElement?.getBoundingClientRect();
          if (rect) {
            const newSlider = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
            setSlider(newSlider);
          }
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="text-gray-700 text-2xl font-bold">⟨ ⟩</div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full">
        <span className="text-white text-sm font-semibold">Antes</span>
      </div>
      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full">
        <span className="text-white text-sm font-semibold">Depois</span>
      </div>

      {/* Title Overlay on Hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
          {image.title}
        </h3>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              Galeria
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Antes & Depois
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja a transformação impressionante dos nossos trabalhos. Arraste o controle deslizante
            para comparar
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image) => (
            <BeforeAfterCard key={image.id} image={image} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Seu veículo pode estar na próxima galeria de transformações
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-lg"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
