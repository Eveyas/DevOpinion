import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";

function Tecnologias_Usuarios() {
  const [vistaActiva, setVistaActiva] = useState("tecnologias");
  const [busqueda, setBusqueda] = useState("");
  const [tecnologias, setTecnologias] = useState([]);
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("No estás autenticado. Por favor, inicia sesión.");
      return;
    }

    // Obtener publicaciones
    fetch("http://localhost:5259/api/Publicaciones/obtener-publicaciones", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error al cargar publicaciones");
        return response.json();
      })
      .then((data) => {
        console.log("Datos de tecnologías:", data);
        setTecnologias(data);
      })
      .catch((error) => console.error("Error al cargar tecnologías:", error));

    // Obtener comentarios
    fetch("http://localhost:5259/api/Comentarios/obtener-todos-comentarios", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error al cargar comentarios");
        return response.json();
      })
      .then((data) => {
        console.log("Datos de comentarios:", data);
        setComentarios(data);
      })
      .catch((error) => console.error("Error al cargar comentarios:", error));
  }, []);

  const tecnologiasFiltradas = tecnologias.filter((tecnologia) =>
    tecnologia.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const comentariosFiltrados = comentarios.filter((comentario) =>
    comentario.usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="w-11/12 mx-auto font-sans p-4">
        {/* Barra de búsqueda */}
        <div className="my-4 text-center">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por tecnología o usuario..."
            className="w-full sm:w-4/5 px-4 py-2 bg-gray-200 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Botones de selección */}
        <div className="flex justify-center gap-2 sm:gap-4 my-4">
          <button
            onClick={() => setVistaActiva("tecnologias")}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold ${
              vistaActiva === "tecnologias"
                ? "bg-blue-200 text-blue-800"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Tecnologías
          </button>
          <button
            onClick={() => setVistaActiva("usuarios")}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold ${
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
            {tecnologiasFiltradas.map((tecnologia) => (
              <div
                key={tecnologia.idPublicacion}
                className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
              >
                <img
                  src={tecnologia.imagenUrl}
                  alt={tecnologia.titulo}
                  className="w-full sm:w-44 h-44 object-cover rounded-lg"
                />
                <div className="flex-1 bg-blue-200 rounded-lg p-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {tecnologia.titulo}
                  </h3>
                  <span className="text-sm italic text-gray-500">
                    ID de Publicación: {tecnologia.idPublicacion}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {comentariosFiltrados.map((comentario) => (
              <div
                key={comentario.idComentario}
                className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
              >
                <div className="flex-1 bg-green-200 rounded-lg p-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-green-800">
                    {comentario.usuario.nombre}
                  </h3>
                  <p className="text-sm text-gray-600 my-2">
                    {comentario.comentario}
                  </p>
                  <span className="text-sm italic text-gray-500">
                    Fecha:{" "}
                    {new Date(comentario.fechaComentario).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Tecnologias_Usuarios;
