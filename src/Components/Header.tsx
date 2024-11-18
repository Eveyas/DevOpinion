import React from 'react';
import logo from './assets/logo.png';
const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
<img src={logo} alt="logo" className="w-10 h-10" />

        <span className="ml-2 text-xl font-bold">DevOpinion</span>
      </div>
      <nav className="flex items-center space-x-4">
        <a href="Nosotros" className="text-black hover:underline">Nosotros</a>
        <a href="Metodos" className="text-black hover:underline">Métodos</a>
        <a href="Niveles" className="text-black hover:underline">Niveles</a>
        <a href="Login" className="text-black hover:underline">Iniciar sesión</a>
        <a href="Registro" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Registrarse</a>
      </nav>
    </header>
  );
};

export default Header;
