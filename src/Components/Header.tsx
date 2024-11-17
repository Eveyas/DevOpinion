import React from 'react';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="w-10 h-10" />
        <span className="ml-2 text-xl font-bold">Mi Proyecto</span>
      </div>
      <nav className="flex items-center space-x-4">
        <Link to={'/Nosotros'}><a href="#nosotros" className="text-black hover:underline">Nosotros</a></Link>
        <Link to={'/Metodos'}><a href="#nosotros" className="text-black hover:underline">Metodos</a></Link>
        <Link to={'/Niveles'}><a href="#nosotros" className="text-black hover:underline">Niveles</a></Link>
        <a href="#iniciar-sesion" className="text-black hover:underline">Iniciar sesión</a>
        <a href="#registrarse" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Registrarse</a>
      </nav>
    </header>
  );
};

export default Header;
