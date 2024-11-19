import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="./src/assets/Imagenes/logo_white.png" alt="Logo" className="w-10 h-10" />
        <span className="ml-2 text-xl font-bold text-blue-400">Dev</span><span className="text-xl font-bold text-green-400">Opinion</span>

      </div>

      {/* Hamburguesa */}
      <button
        className="block md:hidden p-2 text-black"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menú de navegación */}
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 shadow-lg md:shadow-none`}
      >
        <Link to={'/Nosotros'}>
          <a href="#nosotros" className="block px-4 py-2 text-black hover:underline">
            Nosotros
          </a>
        </Link>
        <Link to={'/Tecnologias_Usuarios'}>
          <a
            href="#Tecnologias_Usuarios"
            className="block px-4 py-2 text-black hover:underline"
          >
            Desarrollo
          </a>
        </Link>
        <a
          href="#iniciar-sesion"
          className="block px-4 py-2 text-black hover:underline"
        >
          Iniciar sesión
        </a>
        <a
          href="#registrarse"
          className="block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Registrarse
        </a>
      </nav>
    </header>
  );
};

export default Header;
