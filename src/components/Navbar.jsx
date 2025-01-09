import React from 'react';
import { Button } from './ui/button';
import { PhoneCall, Home, Info, Mail, ShoppingCart, Menu } from 'lucide-react';

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="bg-gray-50 py-1">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <a href="tel:+123456789" className="flex items-center hover:text-primary">
              <PhoneCall className="w-4 h-4 mr-1" />
              <span>+1 (234) 567-89</span>
            </a>
            <a href="mailto:info@sagastore.com" className="flex items-center hover:text-primary">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@sagastore.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-primary cursor-pointer">SAGA STORE</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => setCurrentPage('home')} className="flex items-center text-gray-600 hover:text-primary">
              <Home className="w-4 h-4 mr-1" />
              Inicio
            </button>
            <button onClick={() => setCurrentPage('products')} className="text-gray-600 hover:text-primary">
              Productos
            </button>
            <button onClick={() => setCurrentPage('about')} className="text-gray-600 hover:text-primary">
              Nosotros
            </button>
            <button onClick={() => setCurrentPage('contact')} className="text-gray-600 hover:text-primary">
              Contacto
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;