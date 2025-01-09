import React from 'react';
import { Button } from './ui/button';
import { ChefHat, Armchair, Bed, Gem, Bath } from 'lucide-react';

const CategoryNavigation = ({ setCurrentCategory }) => {
  const categories = [
    { id: 'kitchen', name: 'Cocina', icon: ChefHat },
    { id: 'living', name: 'Living', icon: Armchair },
    { id: 'bedroom', name: 'Dormitorios', icon: Bed },
    { id: 'master', name: 'King & Queen', icon: Gem },
    { id: 'bathroom', name: 'Baños', icon: Bath }
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