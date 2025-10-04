import { Heart, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Paixão por Moda',
      description: 'Selecionamos cada peça com cuidado e dedicação para oferecer o melhor estilo urbano.'
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Trabalhamos apenas com fornecedores confiáveis e produtos de alta qualidade.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Nossa equipe está sempre pronta para ajudar você a encontrar o look perfeito.'
    },
    {
      icon: TrendingUp,
      title: 'Tendências Atuais',
      description: 'Acompanhamos as últimas tendências da moda para manter nosso catálogo sempre atualizado.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre a Moda Urbana
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma loja especializada em moda urbana, trazendo as melhores tendências em roupas e calçados para você expressar seu estilo único.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl hover:bg-indigo-50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* História da loja */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Nossa História
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Moda Urbana nasceu da paixão por moda e do desejo de oferecer peças estilosas e acessíveis para todos. Desde o início, nosso compromisso é proporcionar uma experiência de compra única, com produtos de qualidade e atendimento excepcional.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Acreditamos que a moda é uma forma de expressão pessoal, e por isso trabalhamos para oferecer uma variedade de estilos que atendam aos gostos mais diversos. Seja bem-vindo à nossa loja!
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" 
                alt="Nossa Loja" 
                className="rounded-xl shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
