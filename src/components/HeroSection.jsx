import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ setCurrentPage }) => {
  return (
    <div className="relative min-h-[85vh] flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2092&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">SAGA STORE</h1>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Descubre el futuro del hogar inteligente con nuestra exclusiva colección de productos innovadores.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              onClick={() => setCurrentPage('products')}
              className="bg-white text-black hover:bg-gray-100 font-semibold tracking-wide px-8"
            >
              Explorar Productos
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 tracking-wide px-8"
              onClick={() => setCurrentPage('about')}
            >
              Conócenos
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div>
              <h3 className="text-lg font-semibold mb-1">Innovación</h3>
              <p className="text-gray-300 text-sm">Productos de última tecnología</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Diseño</h3>
              <p className="text-gray-300 text-sm">Estética moderna y funcional</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Calidad</h3>
              <p className="text-gray-300 text-sm">Materiales premium</p>
            </div>
          </div>
        </div>
      </div>

      {/* Color strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500"></div>
    </div>
  );
};

export default HeroSection;