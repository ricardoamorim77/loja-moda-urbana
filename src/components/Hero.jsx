import { ShoppingBag, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-700 font-medium">Novidades toda semana</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Estilo e Conforto para o Seu Dia a Dia
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Descubra as melhores tendências em roupas e calçados. Moda urbana com qualidade e preços que cabem no seu bolso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={scrollToProducts}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Ver Produtos
              </Button>
              
              <Button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                Sobre Nós
              </Button>
            </div>
          </div>
          
          {/* Imagem/Ilustração */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=1000&fit=crop" 
                alt="Moda Urbana" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
