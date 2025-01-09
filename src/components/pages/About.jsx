import React from 'react';
import { Award, Heart, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Nuestra Historia</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-600 mb-6">
            En Saga Store, nos apasiona encontrar y ofrecer soluciones innovadoras para la vida cotidiana.
            Nuestra misión comenzó en 2020 con una simple idea: hacer que la vida en la cocina sea más
            inteligente, eficiente y sostenible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
            <p className="text-gray-600">Solo productos de la más alta calidad.</p>
          </div>
          <div className="text-center p-6">
            <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Atención Personalizada</h3>
            <p className="text-gray-600">Servicio al cliente dedicado.</p>
          </div>
          <div className="text-center p-6">
            <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Compromiso Ambiental</h3>
            <p className="text-gray-600">Productos eco-friendly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;