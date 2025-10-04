import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ProductCard = ({ product }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Número do WhatsApp da loja (substitua pelo número real)
    const message = `Olá! Tenho interesse no produto:\n\n*${product.name}*\nPreço: R$ ${product.price.toFixed(2)}\n\nPoderia me dar mais informações?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Imagem do produto */}
      <div className="relative overflow-hidden h-80">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {product.badge}
          </div>
        )}
      </div>

      {/* Informações do produto */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold text-indigo-600">
                R$ {product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">
                  R$ {product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Botão de compra via WhatsApp */}
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Comprar via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
