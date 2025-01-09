import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Saga Store</h1>
        <p className="text-lg text-gray-600 mb-6">
          Descubre productos innovadores que transformarán tu experiencia en el hogar.
          Soluciones inteligentes para una vida moderna.
        </p>
        <Button 
          className="text-lg"
          onClick={() => setCurrentPage('products')}
        >
          Explorar Productos
          <ArrowRight className="ml-2" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Productos Innovadores</h3>
          <p className="text-gray-600">Seleccionamos cuidadosamente cada producto.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Envío Gratuito</h3>
          <p className="text-gray-600">En compras superiores a $50.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Soporte 24/7</h3>
          <p className="text-gray-600">Estamos aquí para ayudarte.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;