import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua da Moda, 123 - Centro',
      subcontent: 'São Paulo - SP, CEP 01000-000'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999',
      subcontent: 'WhatsApp disponível'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@modaurbana.com.br',
      subcontent: 'Respondemos em até 24h'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sexta: 9h às 18h',
      subcontent: 'Sábado: 9h às 14h'
    }
  ];

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/modaurbana', '_blank');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999';
    const message = 'Olá! Gostaria de entrar em contato.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você! Entre em contato conosco através dos canais abaixo.
          </p>
        </div>

        {/* Grid de informações de contato */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium">{info.content}</p>
                <p className="text-gray-500 text-sm mt-1">{info.subcontent}</p>
              </div>
            );
          })}
        </div>

        {/* Seção de redes sociais e ações */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Siga-nos no Instagram
            </h3>
            <p className="text-gray-700 mb-8 text-lg">
              Acompanhe nossas novidades, promoções exclusivas e as últimas tendências da moda urbana!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleInstagramClick}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Seguir no Instagram
              </Button>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Mapa (opcional - pode ser substituído por um mapa real do Google Maps) */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
          <div className="bg-gray-200 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                Mapa da localização da loja
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Rua da Moda, 123 - Centro, São Paulo - SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
