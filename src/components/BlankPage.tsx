import React from 'react';
import { useLocation } from 'react-router-dom';
import ReturnButton from './ReturnButton';

interface BlankPageProps {
  pageName: string;
}

const BlankPage: React.FC<BlankPageProps> = ({ pageName }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return (
    <div className="flex-grow flex items-center justify-center relative">
      <ReturnButton />
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">{pageName}</h1>
        <p className="text-xl mb-4">Esta es una página en blanco para: {pageName}</p>
        <h2 className="text-2xl font-semibold mb-2">Parámetros recibidos:</h2>
        <ul>
          {Array.from(queryParams.entries()).map(([key, value]) => (
            <li key={key} className="text-lg">
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlankPage;