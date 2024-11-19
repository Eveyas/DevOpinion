
import Programacion from "../Niveles/assets/analisis.webp";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Tipos_Desarrollo() {
  const [tipoDesarrollo, setTipoDesarrollo] = useState("");
  const [nivel, setNivel] = useState("");
  const [mostrarAnuncio, setMostrarAnuncio] = useState(false);
  const navigate = useNavigate();

  const handleSeleccionar = () => {
    if (!tipoDesarrollo || !nivel) {
      setMostrarAnuncio(true);
      return;
    }
    navigate("/Tecnologias_Usuarios", { state: { tipoDesarrollo, nivel } });
  };

  return (
    <div>
      <Header />

      
      {mostrarAnuncio && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded shadow-lg z-50">
          <p className="text-center font-bold">
            ¡Por favor selecciona un tipo de desarrollo y un nivel!
          </p>
          <button
            onClick={() => setMostrarAnuncio(false)}
            className="block mx-auto mt-2 bg-white text-red-500 px-4 py-2 rounded shadow hover:bg-gray-200"
          >
            Entendido
          </button>
        </div>
      )}

      <div className="p-4">
        
        <div className="flex items-center bg-gray-300 p-4">
          <h1 className="text-2xl font-bold">Nuestros</h1>
          <h1 className="text-2xl font-bold text-green-500 ml-2">
            Tipos De Desarrollo
          </h1>
        </div>
        <div className="flex items-center mt-4 bg-gray-300 p-4">
          <h1 className="text-2xl font-bold">
            Selecciona según tus preferencias
          </h1>
        </div>

    
        <div className="mt-8 flex justify-center items-center mb-10">
          {["FRONTEND", "BACKEND", "FULLSTACK"].map((tipo) => (
            <div
              key={tipo}
              onClick={() => setTipoDesarrollo(tipo)}
              className={`m-5 cursor-pointer border-2 ${
                tipoDesarrollo === tipo ? "border-blue-500" : "border-gray-300"
              } rounded-lg hover:shadow-lg`}
            >
              <img
                src={Programacion}
                alt={tipo}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h1
                className={`flex bg-gray-200 items-center justify-start text-xl font-bold p-2 ${
                  tipoDesarrollo === tipo
                    ? "text-blue-500"
                    : "text-blue-300 hover:text-blue-500"
                }`}
              >
                {tipo}
              </h1>
            </div>
          ))}
        </div>

   
        <div className="flex items-center bg-gray-300 mb-6 p-4">
          <h1 className="text-2xl font-bold">Nuestros</h1>
          <h1 className="text-2xl font-bold text-green-500 ml-2">Niveles</h1>
        </div>
        <div className="mt-8 flex justify-center items-center mb-10">
          {["BÁSICO", "INTERMEDIO", "AVANZADO"].map((nivelOption) => (
            <div
              key={nivelOption}
              onClick={() => setNivel(nivelOption)}
              className={`m-5 cursor-pointer border-2 ${
                nivel === nivelOption ? "border-blue-500" : "border-gray-300"
              } rounded-lg hover:shadow-lg`}
            >
              <img
                src={Programacion}
                alt={nivelOption}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h1
                className={`flex bg-gray-200 items-center justify-start text-xl font-bold p-2 ${
                  nivel === nivelOption
                    ? "text-blue-500"
                    : "text-blue-300 hover:text-blue-500"
                }`}
              >
                {nivelOption}
              </h1>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center mb-10">
          <button
            onClick={handleSeleccionar}
            className="px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition duration-200"
          >
            Continuar
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Tipos_Desarrollo;
