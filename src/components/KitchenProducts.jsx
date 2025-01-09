import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Star, ShoppingCart, Info } from 'lucide-react';

// Importar imágenes SVG
import freshTrack from '../assets/fresh-track.svg';
import spaceMax from '../assets/space-max.svg';
import quickSeal from '../assets/quick-seal.svg';
import multiCut from '../assets/multi-cut.svg';
import ecoClean from '../assets/eco-clean.svg';
import steamPro from '../assets/steam-pro.svg';

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
      longDescription: "Sistema innovador que monitorea la frescura de tus alimentos en tiempo real. Incluye sensores de temperatura y humedad, notificaciones móviles y estimación de vida útil de los alimentos. Perfecto para reducir el desperdicio y mantener tus alimentos frescos por más tiempo.",
      features: ["Sensor", "Alertas", "Smart"],
      image: freshTrack
    },
    {
      id: 2,
      name: "SpaceMax",
      category: "storage",
      price: 39.99,
      rating: 4.8,
      stock: 25,
      description: "Organizador modular magnético",
      longDescription: "Sistema de organización revolucionario con módulos magnéticos intercambiables. Adapta el espacio según tus necesidades, incluye etiquetas inteligentes y es compatible con cualquier superficie metálica. La solución perfecta para mantener tu cocina ordenada y aprovechada al máximo.",
      features: ["Modular", "Imanes", "Apilable"],
      image: spaceMax
    },
    {
      id: 3,
      name: "QuickSeal",
      category: "lifehacks",
      price: 19.99,
      rating: 4.6,
      stock: 40,
      description: "Sellador de bolsas automático",
      longDescription: "Sellador portátil recargable por USB que cierra cualquier tipo de bolsa en segundos. Con tecnología de sellado térmico que garantiza un cierre hermético. Incluye cortador integrado y es perfecto para mantener los alimentos frescos y organizados.",
      features: ["Rápido", "Portátil", "USB"],
      image: quickSeal
    },
    {
      id: 4,
      name: "MultiCut Pro",
      category: "lifehacks",
      price: 29.99,
      rating: 4.9,
      stock: 20,
      description: "Cortador 5 en 1 ajustable",
      longDescription: "Herramienta multifuncional con 5 cuchillas intercambiables para diferentes tipos de corte. Sistema de ajuste de grosor patentado y mecanismo de seguridad avanzado. Incluye recipiente recolector y es apto para lavavajillas.",
      features: ["5 en 1", "Ajustable", "Seguro"],
      image: multiCut
    },
    {
      id: 5,
      name: "EcoClean",
      category: "cleaning",
      price: 34.99,
      rating: 4.5,
      stock: 25,
      description: "Limpiador ecológico multisuperficie",
      longDescription: "Limpiador concentrado biodegradable que se activa con agua. Formula patentada que elimina el 99.9% de bacterias sin químicos agresivos. Cada botella concentrada equivale a 5 botellas de limpiador tradicional, reduciendo significativamente el uso de plástico.",
      features: ["Eco", "Natural", "Efectivo"],
      image: ecoClean
    },
    {
      id: 6,
      name: "SteamPro",
      category: "cleaning",
      price: 44.99,
      rating: 4.7,
      stock: 15,
      description: "Limpiador a vapor portátil",
      longDescription: "Limpiador a vapor compacto con tecnología de alta presión. Desinfecta y limpia sin químicos, usando solo agua. Incluye 6 accesorios diferentes para todas las superficies de la cocina y se calienta en solo 30 segundos.",
      features: ["Vapor", "Portátil", "Potente"],
      image: steamPro
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
            <CardHeader className="p-0 relative group">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full aspect-square object-contain p-2 bg-gray-50 rounded-t-lg"
              />
              {/* Overlay con descripción */}
              <div className="absolute inset-0 bg-black/70 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 overflow-y-auto rounded-t-lg">
                <p className="text-xs leading-tight">{product.longDescription}</p>
              </div>
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