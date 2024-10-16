import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SpotTrading = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, params: Record<string, string>) => {
    const queryString = new URLSearchParams(params).toString();
    navigate(`${path}?${queryString}`);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 my-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button 
            className="text-yellow-500 font-bold"
            onClick={() => handleNavigation('/trading', { type: 'spot' })}
          >
            Spot
          </button>
          <button 
            className="text-gray-400"
            onClick={() => handleNavigation('/trading', { type: 'futures' })}
          >
            Futuros
          </button>
        </div>
        <button 
          className="bg-gray-700 p-2 rounded-full"
          onClick={() => handleNavigation('/search', { category: 'trading' })}
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
      <div className="flex space-x-2 mb-4 overflow-x-auto md:flex-wrap">
        <button 
          className="bg-gray-700 px-3 py-1 rounded-full text-sm whitespace-nowrap"
          onClick={() => handleNavigation('/market', { currency: 'USDT' })}
        >
          USDT
        </button>
        <button 
          className="text-gray-400 px-3 py-1 text-sm whitespace-nowrap"
          onClick={() => handleNavigation('/market', { currency: 'BTC' })}
        >
          BTC
        </button>
        <button 
          className="text-gray-400 px-3 py-1 text-sm whitespace-nowrap"
          onClick={() => handleNavigation('/market', { currency: 'ETH' })}
        >
          ETH
        </button>
        <button 
          className="text-gray-400 px-3 py-1 text-sm whitespace-nowrap"
          onClick={() => handleNavigation('/market', { currency: 'USDC' })}
        >
          USDC
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className="text-left">Divisa</th>
            <th className="text-right">Último precio</th>
            <th className="text-right">Cambio</th>
          </tr>
        </thead>
        <tbody>
          {[
            { pair: '1INCH/USDT', price: '0.3115', change: '+2.77%', changeColor: 'text-green-500' },
            { pair: 'AAVE/USDT', price: '170.10', change: '+2.89%', changeColor: 'text-green-500' },
            { pair: 'BNB/USDT', price: '310.50', change: '-1.23%', changeColor: 'text-red-500' },
            { pair: 'ETH/USDT', price: '1,850.75', change: '+0.95%', changeColor: 'text-green-500' },
          ].map((item, index) => (
            <tr key={index} onClick={() => handleNavigation('/trade', { pair: item.pair })} className="cursor-pointer hover:bg-gray-700">
              <td className="py-2">{item.pair}</td>
              <td className="text-right">{item.price}</td>
              <td className={`text-right ${item.changeColor}`}>{item.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpotTrading;