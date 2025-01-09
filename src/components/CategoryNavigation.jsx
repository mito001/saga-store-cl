import React from 'react';
import { Button } from './ui/button';
import { Kitchen, Sofa, Bed, Crown, Shower } from 'lucide-react';

const CategoryNavigation = ({ setCurrentCategory }) => {
  const categories = [
    { id: 'kitchen', name: 'Cocina', icon: Kitchen },
    { id: 'living', name: 'Living', icon: Sofa },
    { id: 'bedroom', name: 'Dormitorios', icon: Bed },
    { id: 'master', name: 'King & Queen', icon: Crown },
    { id: 'bathroom', name: 'Baños', icon: Shower }
  ];

  return (
    <div className="container mx-auto px-4 mb-8">
      <h2 className="text-2xl font-bold mb-4">Explora nuestras categorías</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant="outline"
              className="h-auto py-6 flex flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => setCurrentCategory(category.id)}
            >
              <Icon className="w-8 h-8" />
              <span>{category.name}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavigation;