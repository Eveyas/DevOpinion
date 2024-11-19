import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";
import Usuarios from "./assets/Usuarios.avif";
import Tecnologia from "./assets/Tecnologias.jpg";

const tecnologias = [
  {
    id: 1,
    titulo: ".NET",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    usuario: "Nombre del usuario 1",
    calificaciones: [5, 4, 3, 5, 4],
  },
  {
    id: 2,
    titulo: "React",
    descripcion:
      "Framework para construir interfaces de usuario dinámicas. Perfecto para aplicaciones web modernas.",
    usuario: "Nombre del usuario 2",
    calificaciones: [3, 3, 4, 2, 1],
  },
];

const usuarios = [
  {
    id: 1,
    nombre: "Juan Pérez",
    descripcion:
      "Desarrollador web con experiencia en frontend y backend. Amante de la tecnología y los retos.",
    especialidad: "React.js",
    calificaciones: [4, 5, 5, 4, 3],
  },
  {
    id: 2,
    nombre: "María González",
    descripcion:
      "Ingeniera en software apasionada por la inteligencia artificial y el desarrollo móvil.",
    especialidad: "Python",
    calificaciones: [3, 4, 4, 3, 5],
  },
];

const calcularPromedio = (calificaciones: any[]) => {
  const suma = calificaciones.reduce(
    (acumulador, calificacion) => acumulador + calificacion,
    0
  );
  return Math.round(suma / calificaciones.length);
};

function Tecnologias_Usuarios() {
  const [vistaActiva, setVistaActiva] = useState("tecnologias");
  const [busqueda, setBusqueda] = useState("");


  const tecnologiasFiltradas = tecnologias.filter((tecnologia) =>
    tecnologia.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const usuariosFiltrados = usuarios.filter(
    (usuario) =>
      usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      usuario.especialidad.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="w-11/12 mx-auto font-sans p-4">
        
        <div className="my-4 text-center">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por tecnología o usuario..."
            className="w-4/5 px-4 py-4 bg-gray-200 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

      
        <div className="flex justify-center gap-4 my-4">
          <button
            onClick={() => setVistaActiva("tecnologias")}
            className={`px-6 py-2 rounded-full font-semibold ${
              vistaActiva === "tecnologias"
                ? "bg-blue-200 text-blue-800"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Tecnologías
          </button>
          <button
            onClick={() => setVistaActiva("usuarios")}
            className={`px-6 py-2 rounded-full font-semibold ${
              vistaActiva === "usuarios"
                ? "bg-green-200 text-green-800"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Usuarios
          </button>
        </div>

        {/* Vista activa */}
        {vistaActiva === "tecnologias" ? (
          <div className="flex flex-col gap-4">
            {tecnologiasFiltradas.map((tecnologia) => {
              const promedioEstrellas = calcularPromedio(
                tecnologia.calificaciones
              );

              return (
                <div
                  key={tecnologia.id}
                  className="flex gap-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                >
                  <img
                    src={Tecnologia}
                    alt="Código"
                    className="w-44 h-44 object-cover rounded-lg"
                  />
                  <div className="flex-1 w-full h-44 object-cover bg-blue-200 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {tecnologia.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 my-2">
                      {tecnologia.descripcion}
                    </p>
                    <div className="text-yellow-500 text-lg my-2">
                      {"★".repeat(promedioEstrellas)}
                      {"☆".repeat(5 - promedioEstrellas)}
                    </div>
                    <span className="text-sm italic text-gray-500">
                      {tecnologia.usuario}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {usuariosFiltrados.map((usuario) => {
              const promedioEstrellas = calcularPromedio(
                usuario.calificaciones
              );

              return (
                <div
                  key={usuario.id}
                  className="flex gap-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                >
                  <img
                    src={Usuarios}
                    alt="Perfil de usuario"
                    className="w-44 h-44 object-cover rounded-lg"
                  />
                  <div className="flex-1 w-full h-44 object-cover bg-green-200 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-green-800">
                      {usuario.nombre}
                    </h3>
                    <p className="text-sm text-gray-600 my-2">
                      {usuario.descripcion}
                    </p>
                    <div className="text-yellow-500 text-lg my-2">
                      {"★".repeat(promedioEstrellas)}
                      {"☆".repeat(5 - promedioEstrellas)}
                    </div>
                    <span className="text-sm italic text-gray-500">
                      {usuario.especialidad}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Tecnologias_Usuarios;
