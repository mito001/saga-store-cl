import React, { useState } from 'react';
import CategoryNavigation from '../CategoryNavigation';
import KitchenProducts from '../KitchenProducts';
import LivingProducts from './categories/LivingProducts';

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState('kitchen');

  const renderCategoryProducts = () => {
    switch(currentCategory) {
      case 'kitchen':
        return <KitchenProducts />;
      case 'living':
        return <LivingProducts />;
      case 'bedroom':
        return <div className="text-center p-8 text-gray-500">Próximamente: Productos para Dormitorios</div>;
      case 'master':
        return <div className="text-center p-8 text-gray-500">Próximamente: Colección King & Queen</div>;
      case 'bathroom':
        return <div className="text-center p-8 text-gray-500">Próximamente: Productos para Baños</div>;
      default:
        return <KitchenProducts />;
    }
  };

  return (
    <div className="py-8">
      <CategoryNavigation setCurrentCategory={setCurrentCategory} />
      {renderCategoryProducts()}
    </div>
  );
};

export default Products;