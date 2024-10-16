import React from 'react';
import { Link, DollarSign, FileText, Activity, Users, Folder, GraduationCap, Grid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IconGrid = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, params: Record<string, string>) => {
    const queryString = new URLSearchParams(params).toString();
    navigate(`${path}?${queryString}`);
  };

  const icons = [
    { Icon: Link, label: 'Enlace de...', color: 'bg-blue-500', path: '/link', params: { type: 'referral' } },
    { Icon: DollarSign, label: 'Detalles d...', color: 'bg-pink-500', path: '/details', params: { section: 'financial' } },
    { Icon: FileText, label: 'Detalles d...', color: 'bg-green-500', path: '/details', params: { section: 'documents' } },
    { Icon: Activity, label: 'Activo', color: 'bg-orange-500', path: '/activity', params: { period: 'today' } },
    { Icon: Users, label: 'Invitar a u...', color: 'bg-yellow-500', path: '/invite', params: { method: 'email' } },
    { Icon: Folder, label: 'Guía del u...', color: 'bg-red-500', path: '/guide', params: { topic: 'getting-started' } },
    { Icon: GraduationCap, label: 'Mentor', color: 'bg-purple-500', path: '/mentor', params: { level: 'beginner' } },
    { Icon: Grid, label: 'Más', color: 'bg-green-500', path: '/more', params: { view: 'grid' } },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 my-4 md:grid-cols-4 lg:grid-cols-4">
      {icons.map(({ Icon, label, color, path, params }, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigation(path, params)}
        >
          <div className={`${color} p-3 rounded-full`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs mt-1 text-center">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;