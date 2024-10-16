import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReturnButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-4 left-4 bg-gray-800 p-2 rounded-full shadow-lg"
    >
      <ArrowLeft className="w-6 h-6 text-white" />
    </button>
  );
};

export default ReturnButton;