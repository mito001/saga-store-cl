import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card';
import { Star, ShoppingCart } from 'lucide-react';

const LivingProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    {
      id: 1,
      name: "SmartSofa Elite",
      category: "sofas",
      price: 899.99,
      rating: 4.8,
      stock: 10,
      description: "Sofá inteligente con cargador inalámbrico",
      longDescription: "Sofá moderno con puertos USB integrados, cargador inalámbrico en los apoyabrazos y sistema de masajes. Control por app y tela antimanchas de última generación.",
      features: ["Carga Inalámbrica", "Masajes", "Smart"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "ModuTable",
      category: "tables",
      price: 299.99,
      rating: 4.7,
      stock: 15,
      description: "Mesa modular ajustable",
      longDescription: "Mesa de centro transformable con altura ajustable, superficies giratorias y almacenamiento oculto. Perfecta para espacios pequeños y multifuncionales.",
      features: ["Ajustable", "Modular", "Storage"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "LuxLight Pro",
      category: "lighting",
      price: 159.99,
      rating: 4.9,
      stock: 20,
      description: "Lámpara inteligente ambiental",
      longDescription: "Lámpara de pie con control de voz, cambio de colores y programación horaria. Incluye modos de luz para lectura, relajación y energía.",
      features: ["Smart", "RGB", "Voice Control"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 4,
      name: "ComfortPlus Recliner",
      category: "chairs",
      price: 499.99,
      rating: 4.6,
      stock: 8,
      description: "Sillón reclinable eléctrico",
      longDescription: "Sillón reclinable con control eléctrico, calefacción lumbar y soporte ergonómico ajustable. Incluye portavasos con control de temperatura.",
      features: ["Eléctrico", "Calefacción", "Ergonómico"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 5,
      name: "WallArt Display",
      category: "decor",
      price: 199.99,
      rating: 4.5,
      stock: 25,
      description: "Marco digital interactivo",
      longDescription: "Marco digital con pantalla 4K que cambia automáticamente el arte según la hora del día o tu estado de ánimo. Control por gestos y sincronización con galerías de arte.",
      features: ["4K", "Smart", "Gestos"],
      image: "/api/placeholder/100/100"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'sofas', name: 'Sofás' },
    { id: 'tables', name: 'Mesas' },
    { id: 'lighting', name: 'Iluminación' },
    { id: 'chairs', name: 'Sillas' },
    { id: 'decor', name: 'Decoración' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map(category => (
          <Button 
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="whitespace-nowrap text-sm"
            size="sm"
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredProducts.map(product => (
          <Card key={product.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0 relative group">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full aspect-square object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black/70 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 overflow-y-auto rounded-t-lg">
                <p className="text-xs leading-tight">{product.longDescription}</p>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-3">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-sm font-semibold">{product.name}</CardTitle>
              </div>
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="text-sm">{product.rating}</span>
              </div>
              <div className="text-lg font-bold text-primary mb-2">
                ${product.price}
              </div>
              <div className="flex flex-wrap gap-1">
                {product.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-3 pt-0">
              <Button className="w-full">
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