import React from 'react';
import { Button } from '../ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Contacto</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-bold mb-4">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+1 (234) 567-89</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span>info@sagastore.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span>123 Innovation Street</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Envíanos un Mensaje</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
              />
              <textarea
                placeholder="Mensaje"
                rows="4"
                className="w-full p-2 border rounded-md"
              ></textarea>
              <Button className="w-full">Enviar Mensaje</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;