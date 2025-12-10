import { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
    acceptTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    'Polimento Técnico',
    'Vitrificação de Pintura',
    'Higienização Interna',
    'Limpeza do Motor',
    'Lavagem Detalhada',
    'Correção de Pintura',
    'Revitalização de Plásticos',
    'Pacote Premium',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert('Por favor, aceite os termos antes de enviar');
      return;
    }

    setLoading(true);

    try {
      const formElement = e.currentTarget;
      const fd = new FormData(formElement);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(fd as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          service: '',
          message: '',
          acceptTerms: false,
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert('Erro ao enviar o formulário. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-900 text-blue-300 text-sm font-semibold rounded-full">
              Entre em Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agende seu Serviço
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato em breve
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500">
                    <MapPin size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Endereço</h3>
                  <p className="text-gray-400">
                    Rua Exemplo, 123<br />
                    Bairro, Cidade - UF 00000-000<br />
                    Brasil
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500">
                    <Phone size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Telefone</h3>
                  <p className="text-gray-400">
                    <a href="https://wa.me/5500000000000" className="hover:text-blue-400 transition-colors">
                      WhatsApp: +55 (00) 00000-0000
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500">
                    <Mail size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-400">
                    <a href="mailto:contato@exemplo.com" className="hover:text-blue-400 transition-colors">
                      contato@exemplo.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mt-8">
                <h3 className="text-lg font-bold text-white mb-3">Horário de Atendimento</h3>
                <div className="text-gray-300 text-sm space-y-2">
                  <p>Terça a Sexta: 8h - 18:30h</p>
                  <p>Sábado: 8h - 12h</p>
                  <p>Segunda e Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-8 text-center animate-slide-up">
                <div className="flex justify-center mb-4">
                  <CheckCircle size={64} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Formulário Enviado com Sucesso!</h3>
                <p className="text-green-200 mb-4">
                  Obrigado por sua solicitação. Nossa equipe entrará em contato em breve.
                </p>
                <p className="text-gray-400 text-sm">
                  Enquanto isso, você pode nos contatar pelo WhatsApp para atendimento mais rápido.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="bg-gray-800 rounded-lg p-8 space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />

                {/* Name */}
                <div>
                  <label className="block text-white font-semibold mb-3">Nome Completo*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-ring"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white font-semibold mb-3">Telefone*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-ring"
                    placeholder="(11) 9999-9999"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-white font-semibold mb-3">Tipo de Serviço*</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-ring"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-semibold mb-3">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-ring resize-none"
                    placeholder="Conte-nos mais sobre seu veículo e necessidades..."
                  />
                </div>

                {/* LGPD Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 rounded border-gray-600 text-blue-500 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="acceptTerms" className="text-gray-300 text-sm cursor-pointer">
                    Aceito os termos de uso e política de privacidade (LGPD). Meus dados serão
                    usados apenas para responder sua solicitação.*
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {loading ? 'Enviando...' : 'Enviar Solicitação'}
                </button>

                <p className="text-gray-400 text-sm text-center">
                  * Campos obrigatórios. Responderemos em até 24 horas.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-lg overflow-hidden h-96">
          <iframe
            src="https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Brasil&t=&z=4&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Estética Automotiva - Localização"
          />
        </div>
      </div>
    </section>
  );
}
