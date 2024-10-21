import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Wrench } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bienvenido a Emergsys</h1>
      <p className="text-xl text-center mb-12">
        Líderes en seguridad electrónica, protegiendo lo que más importa.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Shield className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Protección Avanzada</h2>
          <p>Sistemas de seguridad de última generación para su tranquilidad.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Servicio Personalizado</h2>
          <p>Soluciones adaptadas a las necesidades específicas de cada cliente.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Wrench className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Instalación Profesional</h2>
          <p>Equipo de instaladores expertos para una implementación perfecta.</p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/client-login" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mr-4 hover:bg-blue-700 transition duration-300">
          Acceso Clientes
        </Link>
        <Link to="/installer-login" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
          Acceso Instaladores
        </Link>
      </div>
    </div>
  );
};

export default Home;