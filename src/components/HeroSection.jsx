import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ setCurrentPage }) => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">SAGA STORE</h1>
          <p className="text-xl mb-8 text-gray-200">
            Descubre el futuro del hogar inteligente con nuestra exclusiva colección de productos innovadores.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              onClick={() => setCurrentPage('products')}
              className="bg-white text-black hover:bg-gray-100 font-semibold"
            >
              Explorar Productos
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black"
              onClick={() => setCurrentPage('about')}
            >
              Conoce más
            </Button>
          </div>
        </div>
      </div>

      {/* Color strip */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500"></div>
    </div>
  );
};

export default HeroSection;