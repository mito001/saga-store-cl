import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ setCurrentPage }) => {
  return (
    <div className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-teal-500/20 to-blue-500/20 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-purple-500/20 to-teal-500/20 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
               backgroundSize: '50px 50px',
               opacity: '0.05'
             }}>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            <span className="inline-block relative">
              SAGA STORE
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Descubre el futuro del hogar inteligente con nuestra exclusiva colección de productos innovadores.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              onClick={() => setCurrentPage('products')}
              className="bg-white text-black hover:bg-gray-100 font-semibold tracking-wide px-8 relative group"
            >
              <span className="relative z-10">Explorar Productos</span>
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
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
            <div className="group cursor-pointer">
              <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-400 transition-colors">Innovación</h3>
              <p className="text-gray-300 text-sm">Productos de última tecnología</p>
            </div>
            <div className="group cursor-pointer">
              <h3 className="text-lg font-semibold mb-1 group-hover:text-teal-400 transition-colors">Diseño</h3>
              <p className="text-gray-300 text-sm">Estética moderna y funcional</p>
            </div>
            <div className="group cursor-pointer">
              <h3 className="text-lg font-semibold mb-1 group-hover:text-purple-400 transition-colors">Calidad</h3>
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