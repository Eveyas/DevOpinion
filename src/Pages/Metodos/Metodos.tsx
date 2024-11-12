function Metodos() {
  return (
    <div className="p-8">
      <div className="flex items-center bg-gray-300 p-4">
        <h1 className="text-2xl font-bold">Nuestros</h1>
        <h1 className="text-2xl font-bold text-green-500 ml-2">Métodos</h1>
      </div>

      <div className="flex justify-around mt-8">
        <div className="text-center">
          <img
            src="url_de_la_imagen_frontend"
            alt="Frontend"
            className="w-64 h-48 object-cover mb-4"
          />
          <h1 className="text-lg font-bold text-blue-400">FRONTEND</h1>
        </div>

        <div className="text-center">
          <img
            src="url_de_la_imagen_backend"
            alt="Backend"
            className="w-64 h-48 object-cover mb-4"
          />
          <h1 className="text-lg font-bold text-blue-400">BACKEND</h1>
        </div>

        <div className="text-center">
          <img
            src="url_de_la_imagen_fullstack"
            alt="Full Stack"
            className="w-64 h-48 object-cover mb-4"
          />
          <h1 className="text-lg font-bold text-blue-400">FULL STACK</h1>
        </div>
      </div>
    </div>
  );
}

export default Metodos;
