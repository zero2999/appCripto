import React from 'react';

const Carousel = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg my-4 md:flex md:items-center md:justify-between">
      <div>
        <h2 className="text-lg font-bold mb-2">Mantenga la plataforma a salvo</h2>
        <p className="text-sm text-gray-300">lavado de dinero y los intercambios ilegales</p>
      </div>
      <div className="flex justify-center mt-2 md:mt-0">
        <div className="w-2 h-2 bg-blue-500 rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full mx-1"></div>
      </div>
    </div>
  );
};

export default Carousel;