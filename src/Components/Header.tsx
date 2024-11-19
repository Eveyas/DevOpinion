import React from 'react';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <span className="ml-2 text-xl font-bold">DevOpinion</span>
      </div>
      <nav className="flex items-center space-x-4">
        <Link to="/Nosotros" className="text-black hover:underline">Nosotros</Link>
        <Link to="/Metodos" className="text-black hover:underline">Métodos</Link>
        <Link to="/Niveles" className="text-black hover:underline">Niveles</Link>
        <a href="Login" className="text-black hover:underline">Iniciar sesión</a>
        <a href="Registro" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Registrarse</a>
      </nav>
    </header>
  );
};

export default Header;
