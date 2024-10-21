import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Shield size={32} />
          <span className="text-2xl font-bold">Emergsys</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/client-login" className="hover:text-blue-200">Cliente</Link></li>
            <li><Link to="/installer-login" className="hover:text-blue-200">Instalador</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;