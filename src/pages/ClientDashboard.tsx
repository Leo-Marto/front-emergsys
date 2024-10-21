import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserAccess } from '../services/api';

interface AccessConfig {
  [key: string]: boolean;
}

const ClientDashboard: React.FC = () => {
  const [accessConfig, setAccessConfig] = useState<AccessConfig>({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/client-login');
      return;
    }

    const fetchAccess = async () => {
      try {
        const config = await getUserAccess(token);
        setAccessConfig(config);
      } catch (error) {
        console.error('Error fetching user access:', error);
        navigate('/client-login');
      }
    };

    fetchAccess();
  }, [navigate]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Panel de Cliente</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(accessConfig).map(([access, isEnabled]) => (
          <div key={access} className={`p-6 rounded-lg shadow-md ${isEnabled ? 'bg-white' : 'bg-gray-200'}`}>
            <h2 className="text-xl font-semibold mb-2">{access}</h2>
            <p>{isEnabled ? 'Acceso habilitado' : 'Acceso no disponible'}</p>
            {isEnabled && (
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                Acceder
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientDashboard;