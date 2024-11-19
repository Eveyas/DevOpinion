import React, { useState } from 'react';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <span className="ml-2 text-xl font-bold">DevOpinion</span>
      </div>

      {/* Hamburguesa */}
      <button
        className="block md:hidden p-2 text-black"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
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
        } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4 absolute md:relative top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 shadow-lg md:shadow-none`}
      >
        <Link to="/Nosotros" className="block px-4 py-2 text-black hover:underline">
          Nosotros
        </Link>
        <Link to="/Metodos" className="block px-4 py-2 text-black hover:underline">
          Métodos
        </Link>
        <Link to="/Niveles" className="block px-4 py-2 text-black hover:underline">
          Niveles
        </Link>
        <a href="#iniciar-sesion" className="block px-4 py-2 text-black hover:underline">
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
