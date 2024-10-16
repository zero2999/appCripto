import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import ScrollingText from './components/ScrollingText';
import IconGrid from './components/IconGrid';
import SpotTrading from './components/SpotTrading';
import MobileMenu from './components/MobileMenu';
import Chart from './components/Chart';
import Markets from './pages/Markets';
import Trade from './pages/Trade';
import Futures from './pages/Futures';
import BlankPage from './components/BlankPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="flex-grow px-4 pb-16 md:pb-0 md:flex md:space-x-4">
              <div className="md:w-2/3">
                <Carousel />
                <ScrollingText />
                <div className="md:flex md:space-x-4">
                  <div className="md:w-1/2">
                    <IconGrid />
                  </div>
                  <div className="md:w-1/2">
                    <Chart />
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <SpotTrading />
              </div>
            </main>
          } />
          <Route path="/markets" element={<Markets />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/futures" element={<Futures />} />
          <Route path="/more" element={<BlankPage pageName="Más" />} />
          <Route path="/search" element={<BlankPage pageName="Búsqueda" />} />
          <Route path="/security" element={<BlankPage pageName="Seguridad" />} />
          <Route path="/notifications" element={<BlankPage pageName="Notificaciones" />} />
          <Route path="/login" element={<BlankPage pageName="Iniciar sesión" />} />
          <Route path="/link" element={<BlankPage pageName="Enlace de referido" />} />
          <Route path="/details" element={<BlankPage pageName="Detalles" />} />
          <Route path="/activity" element={<BlankPage pageName="Actividad" />} />
          <Route path="/invite" element={<BlankPage pageName="Invitar a usuarios" />} />
          <Route path="/guide" element={<BlankPage pageName="Guía del usuario" />} />
          <Route path="/mentor" element={<BlankPage pageName="Mentor" />} />
          <Route path="/home" element={<BlankPage pageName="Casa" />} />
          <Route path="/strategy" element={<BlankPage pageName="Estrategia" />} />
          <Route path="/circle" element={<BlankPage pageName="Círculo" />} />
          <Route path="/news" element={<BlankPage pageName="Noticias" />} />
          <Route path="/profile" element={<BlankPage pageName="Mi perfil" />} />
          <Route path="/trading" element={<BlankPage pageName="Trading" />} />
          <Route path="/market" element={<BlankPage pageName="Mercado" />} />
        </Routes>
        <MobileMenu />
      </div>
    </Router>
  );
}

export default App;