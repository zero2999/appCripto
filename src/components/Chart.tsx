import React from 'react';

const Chart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-4">
      <h2 className="text-lg font-semibold mb-2">Gráfico de ejemplo</h2>
      <div className="h-48 bg-gray-200 flex items-end justify-around">
        <div className="w-8 bg-blue-500 h-1/4"></div>
        <div className="w-8 bg-blue-500 h-2/4"></div>
        <div className="w-8 bg-blue-500 h-3/4"></div>
        <div className="w-8 bg-blue-500 h-full"></div>
      </div>
    </div>
  );
};

export default Chart;