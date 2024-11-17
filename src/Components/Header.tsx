import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="w-10 h-10" />
        <span className="ml-2 text-xl font-bold">Mi Proyecto</span>
      </div>
      <nav className="flex items-center space-x-4">
        <a href="#nosotros" className="text-black hover:underline">Nosotros</a>
        <a href="#metodos" className="text-black hover:underline">Métodos</a>
        <a href="#niveles" className="text-black hover:underline">Niveles</a>
        <a href="#iniciar-sesion" className="text-black hover:underline">Iniciar sesión</a>
        <a href="#registrarse" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Registrarse</a>
      </nav>
    </header>
  );
};

export default Header;
