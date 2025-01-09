import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Info } from 'lucide-react';

const KitchenProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    {
      id: 1,
      name: "FreshTrack",
      category: "storage",
      price: 49.99,
      rating: 4.7,
      stock: 30,
      description: "Contenedor inteligente de alimentos",
      features: ["Sensor", "Alertas", "Smart"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "SpaceMax",
      category: "storage",
      price: 39.99,
      rating: 4.8,
      stock: 25,
      description: "Organizador modular magnético",
      features: ["Modular", "Imanes", "Apilable"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "QuickSeal",
      category: "lifehacks",
      price: 19.99,
      rating: 4.6,
      stock: 40,
      description: "Sellador de bolsas automático",
      features: ["Rápido", "Portátil", "USB"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 4,
      name: "MultiCut Pro",
      category: "lifehacks",
      price: 29.99,
      rating: 4.9,
      stock: 20,
      description: "Cortador 5 en 1 ajustable",
      features: ["5 en 1", "Ajustable", "Seguro"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 5,
      name: "EcoClean",
      category: "cleaning",
      price: 34.99,
      rating: 4.5,
      stock: 25,
      description: "Limpiador ecológico multisuperficie",
      features: ["Eco", "Natural", "Efectivo"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 6,
      name: "SteamPro",
      category: "cleaning",
      price: 44.99,
      rating: 4.7,
      stock: 15,
      description: "Limpiador a vapor portátil",
      features: ["Vapor", "Portátil", "Potente"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 7,
      name: "VacuumFresh",
      category: "storage",
      price: 24.99,
      rating: 4.4,
      stock: 35,
      description: "Set de bolsas al vacío reusables",
      features: ["Reusable", "Vacío", "Ahorro"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 8,
      name: "ChopMaster",
      category: "lifehacks",
      price: 15.99,
      rating: 4.8,
      stock: 50,
      description: "Tabla de corte 3 en 1 plegable",
      features: ["Plegable", "3 en 1", "Compacto"],
      image: "/api/placeholder/100/100"
    },
    {
      id: 9,
      name: "SprayClean",
      category: "cleaning",
      price: 27.99,
      rating: 4.6,
      stock: 28,
      description: "Atomizador con medidor inteligente",
      features: ["Medidor", "Preciso", "Eco"],
      image: "/api/placeholder/100/100"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'storage', name: 'Almacenamiento' },
    { id: 'lifehacks', name: 'Life Hacks' },
    { id: 'cleaning', name: 'Limpieza' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Productos Innovadores para Cocina</h1>
      
      {/* Categorías */}
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

      {/* Grid de productos */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
        {filteredProducts.map(product => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader className="p-0">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full aspect-square object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-1 p-1">
              <div className="flex justify-between items-start mb-1">
                <CardTitle className="text-xs font-semibold">{product.name}</CardTitle>
              </div>
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-3 h-3 fill-current text-yellow-400" />
                <span className="text-xs">{product.rating}</span>
              </div>
              <div className="text-sm font-semibold text-primary mb-1">
                ${product.price}
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {product.features.slice(0, 2).map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs px-1 py-0">
                    {feature}
                  </Badge>
                ))}
                {product.features.length > 2 && (
                  <Badge variant="outline" className="text-xs px-1 py-0">
                    +{product.features.length - 2}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-3 pt-0">
              <Button size="sm" className="w-full text-xs">
                <ShoppingCart className="w-3 h-3 mr-1" />
                Agregar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KitchenProducts;