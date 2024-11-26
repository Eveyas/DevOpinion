import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Frontend from "./assets/Frontend.webp";
import Backend from "./assets/Backend.png";
import FullStack from "./assets/Full-stack.webp";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import {
  AcademicCapIcon,
  FaceSmileIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

type TipoDesarrollo = "FRONTEND" | "BACKEND" | "FULLSTACK";

const tipoDesarrolloImagenes: Record<TipoDesarrollo, string> = {
  FRONTEND: Frontend,
  BACKEND: Backend,
  FULLSTACK: FullStack,
};

const nivelesConfig = {
  BÁSICO: {
    color: "bg-green-500 text-white",
    icon: <AcademicCapIcon className="h-12 w-12" />,
  },
  INTERMEDIO: {
    color: "bg-yellow-500 text-white",
    icon: <FaceSmileIcon className="h-12 w-12" />,
  },
  AVANZADO: {
    color: "bg-red-500 text-white",
    icon: <StarIcon className="h-12 w-12" />,
  },
};

function Tipos_Desarrollo() {
  const [tipoDesarrollo, setTipoDesarrollo] = useState<TipoDesarrollo | "">("");
  const [nivel, setNivel] = useState<string>("");
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
    <div className="min-h-screen flex flex-col">
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

      <div className="p-4 flex-grow">
        <div className="flex flex-col items-center bg-gray-300 p-4 text-center">
          <h1 className="text-2xl font-bold">Nuestros</h1>
          <h1 className="text-2xl font-bold text-green-500">
            Tipos De Desarrollo
          </h1>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {(["FRONTEND", "BACKEND", "FULLSTACK"] as TipoDesarrollo[]).map(
            (tipo) => (
              <div
                key={tipo}
                onClick={() => setTipoDesarrollo(tipo)}
                className={`cursor-pointer border-2 ${
                  tipoDesarrollo === tipo
                    ? "border-blue-500"
                    : "border-gray-300"
                } rounded-lg hover:shadow-lg transition transform hover:scale-105`}
              >
                <img
                  src={tipoDesarrolloImagenes[tipo]}
                  alt={tipo}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h1
                  className={`flex bg-gray-200 items-center justify-center text-xl font-bold p-2 ${
                    tipoDesarrollo === tipo
                      ? "text-blue-500"
                      : "text-blue-300 hover:text-blue-500"
                  }`}
                >
                  {tipo}
                </h1>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col items-center bg-gray-300 p-4 mt-10">
          <h1 className="text-2xl font-bold">Nuestros</h1>
          <h1 className="text-2xl font-bold text-green-500">Niveles</h1>
        </div>
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(nivelesConfig).map(([nivelOption, config]) => (
            <div
              key={nivelOption}
              onClick={() => setNivel(nivelOption)}
              className={`cursor-pointer border-2 ${
                nivel === nivelOption ? "border-blue-500" : "border-gray-300"
              } rounded-lg hover:shadow-lg transition transform hover:scale-105`}
            >
              <div
                className={`w-full h-48 flex flex-col items-center justify-center ${config.color} rounded-t-lg`}
              >
                {config.icon}
                <span className="text-2xl font-bold mt-2">{nivelOption}</span>
              </div>
              <h1
                className={`flex bg-gray-200 items-center justify-center text-xl font-bold p-2 ${
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

        <div className="flex justify-center mt-10">
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
