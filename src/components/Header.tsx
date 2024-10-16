import React from 'react';
import { Shield, Bell, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, params: Record<string, string>) => {
    const queryString = new URLSearchParams(params).toString();
    navigate(`${path}?${queryString}`);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="Logo" className="w-8 h-8" />
        <Link to="/" className="text-xl font-bold">Casa</Link>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/markets?type=all" className="hover:text-yellow-500">Mercados</Link>
        <Link to="/trade?mode=spot" className="hover:text-yellow-500">Comercio</Link>
        <Link to="/futures?contract=quarterly" className="hover:text-yellow-500">Futuros</Link>
        <Link to="/more?section=overview" className="hover:text-yellow-500">Más</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="w-6 h-6 hidden md:block cursor-pointer" onClick={() => handleNavigation('/search', { q: '' })} />
        <Shield className="w-6 h-6 cursor-pointer" onClick={() => handleNavigation('/security', { status: 'overview' })} />
        <Bell className="w-6 h-6 cursor-pointer" onClick={() => handleNavigation('/notifications', { filter: 'all' })} />
        <button 
          className="hidden md:block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold"
          onClick={() => handleNavigation('/login', { source: 'header' })}
        >
          Iniciar sesión
        </button>
      </div>
    </header>
  );
};

export default Header;