import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
      <Link to ={'/'}>  <img
          src="./src/assets/Imagenes/logo_white.png"
          alt="Logo"
          className="w-10 h-10"
        /></Link>
        <span className="ml-2 text-xl font-bold text-blue-400">Dev</span>
        <span className="text-xl font-bold text-green-400">Opinion</span>
      </div>

      <div className="flex items-center">
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            to="/Nosotros"
            className="block px-4 py-2 text-black hover:underline"
          >
            Nosotros
          </Link>
          {/* <Link to="/Metodos" className="block px-4 py-2 text-black hover:underline">
            Métodos
          </Link>
          <Link to="/Niveles" className="block px-4 py-2 text-black hover:underline">
            Niveles
          </Link> */}
          <Link
            to="/Tipos_Desarrollo"
            className="block px-4 py-2 text-black hover:underline"
          >
            Desarrollo
          </Link>
          <Link
            to="/Resumen"
            className="block px-4 py-2 text-black hover:underline"
          >
            Comentar
          </Link>
          <Link
            to="/Login"
            className="block px-4 py-2 text-black hover:underline"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/Registro"
            className="block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Registrarse
          </Link>
        </nav>

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
      </div>

      {/* Menú de navegación móvil */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden space-y-4 absolute top-16 left-0 w-full bg-white z-10 shadow-lg`}
      >
        <Link
          to="/Nosotros"
          className="block px-4 py-2 text-black hover:underline"
        >
          Nosotros
          {/* </Link> */}
          {/* <Link to="/Metodos" className="block px-4 py-2 text-black hover:underline">
          Métodos
        </Link>
        <Link to="/Niveles" className="block px-4 py-2 text-black hover:underline">
          Niveles
        </Link>
        <Link to="/Tipos_Desarrollo" className="block px-4 py-2 text-black hover:underline"> */}
          Desarrollo
        </Link>
        <Link
          to="/Resumen"
          className="block px-4 py-2 text-black hover:underline"
        >
          Comentar
        </Link>
        <Link
          to="/Login"
          className="block px-4 py-2 text-black hover:underline"
        >
          Iniciar sesión
        </Link>
        <Link
          to="/Registro"
          className="block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Registrarse
        </Link>
      </nav>
    </header>
  );
};

export default Header;
