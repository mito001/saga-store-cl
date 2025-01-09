import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { PhoneCall, Mail, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+123456789" className="flex items-center hover:text-gray-300">
              <PhoneCall className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">+1 (234) 567-89</span>
            </a>
            <a href="mailto:info@sagastore.com" className="flex items-center hover:text-gray-300">
              <Mail className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">info@sagastore.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 
                onClick={() => setCurrentPage('home')} 
                className={`text-2xl font-bold cursor-pointer ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                SAGA STORE
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'products', 'about', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`text-sm font-medium hover:text-gray-600 transition-colors capitalize ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className={`w-5 h-5 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-5 h-5 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {['home', 'products', 'about', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-gray-900 hover:text-gray-600 transition-colors capitalize text-sm font-medium"
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;