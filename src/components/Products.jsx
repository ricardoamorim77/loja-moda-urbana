import { useState } from 'react';
import ProductCard from './ProductCard';
import { Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Dados dos produtos (exemplo - você pode substituir pelas suas imagens e produtos reais)
  const products = [
    {
      id: 1,
      name: 'Camiseta Oversized Preta',
      description: 'Camiseta oversized 100% algodão, confortável e estilosa',
      price: 89.90,
      oldPrice: 129.90,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
      category: 'roupas',
      badge: 'NOVO'
    },
    {
      id: 2,
      name: 'Tênis Casual Branco',
      description: 'Tênis casual branco com detalhes modernos, perfeito para o dia a dia',
      price: 199.90,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop',
      category: 'calcados'
    },
    {
      id: 3,
      name: 'Jaqueta Jeans Clássica',
      description: 'Jaqueta jeans tradicional, versátil e atemporal',
      price: 159.90,
      oldPrice: 219.90,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
      category: 'roupas',
      badge: 'OFERTA'
    },
    {
      id: 4,
      name: 'Tênis Esportivo Preto',
      description: 'Tênis esportivo com tecnologia de amortecimento',
      price: 249.90,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop',
      category: 'calcados'
    },
    {
      id: 5,
      name: 'Moletom com Capuz Cinza',
      description: 'Moletom confortável com capuz e bolso canguru',
      price: 129.90,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
      category: 'roupas',
      badge: 'NOVO'
    },
    {
      id: 6,
      name: 'Calça Cargo Bege',
      description: 'Calça cargo com múltiplos bolsos, estilo urbano',
      price: 149.90,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop',
      category: 'roupas'
    },
    {
      id: 7,
      name: 'Tênis Cano Alto Preto',
      description: 'Tênis cano alto estilo street wear',
      price: 179.90,
      oldPrice: 229.90,
      image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=600&h=800&fit=crop',
      category: 'calcados',
      badge: 'OFERTA'
    },
    {
      id: 8,
      name: 'Camisa Social Slim Fit',
      description: 'Camisa social slim fit, ideal para ocasiões formais',
      price: 119.90,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop',
      category: 'roupas'
    },
    {
      id: 9,
      name: 'Tênis Slip-On Azul',
      description: 'Tênis slip-on prático e confortável',
      price: 139.90,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=800&fit=crop',
      category: 'calcados',
      badge: 'NOVO'
    },
    {
      id: 10,
      name: 'Bermuda Jeans Destroyed',
      description: 'Bermuda jeans com efeito destroyed, estilo despojado',
      price: 99.90,
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop',
      category: 'roupas'
    },
    {
      id: 11,
      name: 'Bota Chelsea Marrom',
      description: 'Bota chelsea em couro sintético, elegante e versátil',
      price: 229.90,
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop',
      category: 'calcados'
    },
    {
      id: 12,
      name: 'Regata Fitness Preta',
      description: 'Regata fitness com tecido respirável',
      price: 59.90,
      oldPrice: 89.90,
      image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=800&fit=crop',
      category: 'roupas',
      badge: 'OFERTA'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'roupas', name: 'Roupas' },
    { id: 'calcados', name: 'Calçados' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira nossa seleção de roupas e calçados com os melhores preços
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-gray-700">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filtrar por:</span>
          </div>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mensagem se não houver produtos */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
