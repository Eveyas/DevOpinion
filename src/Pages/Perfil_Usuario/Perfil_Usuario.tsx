import Perfil from "./assets/Perfil.png";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";

function PerfilUsuario() {
  const [descripcion, setDescripcion] = useState(''); // Estado para la descripción

  // Función para manejar el cambio en la descripción
  const handleDescripcionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescripcion(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="p-4 sm:p-8 max-w-4xl mx-auto m-4 bg-white shadow-md rounded-lg">
        {/* Sección del perfil */}
        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
          <img
            src={Perfil}
            alt="Usuario"
            className="rounded-full border-4 border-green-400 w-28 h-28 mx-auto sm:mx-0 sm:mr-4"
          />
          <div className="flex flex-col text-center sm:text-left mt-4 sm:mt-0">
            <h1 className="text-2xl font-bold">NOMBRE DEL USUARIO</h1>
            <p className="text-gray-600">Correo@example.com</p>
            <div className="flex items-center justify-center sm:justify-start mt-2">
              <span className="text-3xl font-bold">4.8</span>
              <span className="text-sm text-gray-500 ml-2">(1.3 reviews)</span>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div className="mb-8">
          <h2 className="text-lg font-bold">Descripción</h2>
          <textarea
            value={descripcion}
            onChange={handleDescripcionChange}
            className="w-full p-2 border border-gray-300 rounded-lg resize-none"
            placeholder="Escribe algo sobre ti..."
            style={{ minHeight: '100px' }}
          />
        </div>

        {/* Comentarios */}
        <div className="mb-8">
          <h2 className="text-lg font-bold">Comentarios</h2>
          {[1, 2].map((comentario) => (
            <div
              key={comentario}
              className="flex flex-col sm:flex-row items-center sm:items-start my-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="bg-green-200 w-full sm:w-40 h-24 sm:mr-4 mb-2 sm:mb-0"></div>
              <p className="text-gray-700 flex-grow text-sm text-center sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default PerfilUsuario;
