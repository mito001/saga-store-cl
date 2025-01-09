import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card';
import { Star, ShoppingCart, Sparkles } from 'lucide-react';

const LivingProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    // Sofás y Sillones
    {
      id: 1,
      name: "SmartSofa Elite",
      category: "seating",
      price: 899.99,
      rating: 4.8,
      stock: 10,
      description: "Sofá inteligente con cargador inalámbrico",
      longDescription: "Sofá moderno con puertos USB integrados, cargador inalámbrico en los apoyabrazos y sistema de masajes. Control por app y tela antimanchas.",
      features: ["Smart", "USB", "Masajes"],
      image: "/api/placeholder/100/100",
      isNew: true
    },
    {
      id: 2,
      name: "ErgoPro Recliner",
      category: "seating",
      price: 599.99,
      rating: 4.7,
      stock: 8,
      description: "Sillón reclinable ergonómico",
      longDescription: "Sillón con ajuste eléctrico, soporte lumbar adaptativo y memoria de posición. Material premium resistente a manchas.",
      features: ["Eléctrico", "Memory", "Premium"],
      image: "/api/placeholder/100/100"
    },
    // Mesas
    {
      id: 3,
      name: "ModuTable Smart",
      category: "tables",
      price: 399.99,
      rating: 4.9,
      stock: 15,
      description: "Mesa inteligente modular",
      longDescription: "Mesa de centro con altura ajustable eléctricamente, superficie táctil y carga inalámbrica integrada. Diseño modular expandible.",
      features: ["Touch", "Ajustable", "Wireless"],
      image: "/api/placeholder/100/100",
      isNew: true
    },
    {
      id: 4,
      name: "NestTable Set",
      category: "tables",
      price: 299.99,
      rating: 4.6,
      stock: 12,
      description: "Set de mesas nido inteligentes",
      longDescription: "Conjunto de tres mesas nido con iluminación LED integrada y sensores de movimiento. Acabado premium anti-rayones.",
      features: ["LED", "Sensor", "Set 3"],
      image: "/api/placeholder/100/100"
    },
    // Iluminación
    {
      id: 5,
      name: "AmbientPro Light",
      category: "lighting",
      price: 199.99,
      rating: 4.8,
      stock: 20,
      description: "Sistema de iluminación ambiental",
      longDescription: "Sistema de iluminación inteligente que adapta el color y la intensidad según la hora del día. Control por voz y app.",
      features: ["RGB", "Voice", "Smart"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 6,
      name: "FlexLight Stand",
      category: "lighting",
      price: 159.99,
      rating: 4.7,
      stock: 18,
      description: "Lámpara de pie articulada",
      longDescription: "Lámpara de pie con brazo articulado y control gestual. Incluye modos preconfigurados para lectura y ambiente.",
      features: ["Gestos", "Flexible", "Modos"],
      image: "/api/placeholder/100/100",
      isNew: true
    },
    // Decoración
    {
      id: 7,
      name: "ArtScreen Pro",
      category: "decor",
      price: 299.99,
      rating: 4.9,
      stock: 10,
      description: "Marco digital artístico",
      longDescription: "Marco digital 4K con IA que selecciona arte según tu estado de ánimo. Suscripción a galerías de arte incluida.",
      features: ["4K", "AI", "Art"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 8,
      name: "HoloPlant Display",
      category: "decor",
      price: 179.99,
      rating: 4.6,
      stock: 15,
      description: "Planta artificial inteligente",
      longDescription: "Planta decorativa con iluminación LED y sensor de ambiente. Cambia de color según la temperatura de la habitación.",
      features: ["LED", "Sensor", "Auto"],
      image: "/api/placeholder/100/100"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'seating', name: 'Sofás y Sillones' },
    { id: 'tables', name: 'Mesas' },
    { id: 'lighting', name: 'Iluminación' },
    { id: 'decor', name: 'Decoración' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Living Room Innovation</h1>
        <p className="text-lg opacity-90">Descubre el futuro del confort y el diseño</p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(category => (
          <Button 
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="whitespace-nowrap text-sm rounded-full"
            size="sm"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredProducts.map(product => (
          <Card key={product.id} className="flex flex-col hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <CardHeader className="p-0 relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full aspect-square object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <p className="text-white text-xs">{product.longDescription}</p>
              </div>
              {/* New Badge */}
              {product.isNew && (
                <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Nuevo
                </div>
              )}
            </CardHeader>
            <CardContent className="flex-1 p-4">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-sm font-bold">{product.name}</CardTitle>
              </div>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="text-sm">{product.rating}</span>
              </div>
              <div className="text-lg font-bold text-primary mb-3">
                ${product.price}
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {product.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Agregar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LivingProducts;