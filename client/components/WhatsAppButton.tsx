import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '5500000000000';
  const message = 'Olá! Gostaria de agendar um serviço na Estética Automotiva.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-fade-in"
      aria-label="Chat via WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
