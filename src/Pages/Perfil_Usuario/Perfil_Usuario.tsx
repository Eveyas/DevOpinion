function PerfilUsuario() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <div className="flex items-start mb-6">
        <img
          src="https://via.placeholder.com/120"
          alt="Usuario"
          className="rounded-full border-4 border-green-400 w-28 h-28 mr-4"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">NOMBRE DEL USUARIO</h1>
          <p className="text-gray-600">Correo@example.com</p>
        </div>

        <div className="place-items-end text-sm text-gray-700 w-full ">
          <div className="flex items-center mt-2">
            <span className="text-3xl font-bold">4.8</span>
            <span className="text-sm text-gray-500 ml-2">(1.3 reviews)</span>
          </div>
          <div className="flex items-center mb-1">
            <span className="text-gray-600 mr-2">5</span>
            <div className="w-28 bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-400 h-3 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
            <span className="ml-2 text-gray-600">20%</span>
          </div>
          <div className="flex items-center mb-1">
            <span className="text-gray-600 mr-2">4</span>
            <div className="w-28 bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-400 h-3 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
            <span className="ml-2 text-gray-600">20%</span>
          </div>
          <div className="flex items-center mb-1">
            <span className="text-gray-600 mr-2">3</span>
            <div className="w-28 bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-400 h-3 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
            <span className="ml-2 text-gray-600">20%</span>
          </div>
          <div className="flex items-center mb-1">
            <span className="text-gray-600 mr-2">2</span>
            <div className="w-28 bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-400 h-3 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
            <span className="ml-2 text-gray-600">20%</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">1</span>
            <div className="w-28 bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-400 h-3 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
            <span className="ml-2 text-gray-600">20%</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold">Descripción</h2>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold">Comentarios</h2>
        <div className="flex items-center my-4 p-4 bg-white rounded-lg">
          <div className="bg-green-200  w-40 h-24 mr-4"></div>
          <p className="text-gray-700 flex-grow text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <button className="text-green-500 font-bold ml-4">Ir</button>
        </div>
        <div className="flex items-center my-4 p-4 bg-white rounded-lg">
          <div className="bg-green-200 w-40 h-24 mr-4"></div>
          <p className="text-gray-700 flex-grow text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <button className="text-green-500 font-bold ml-4">Ir</button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold">Recomendaciones</h2>
        <div className="flex items-center my-4 p-4 bg-white rounded-lg">
          <div className="bg-blue-200  w-40 h-24 mr-4"></div>
          <p className="text-gray-700 flex-grow text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <button className="text-blue-500 font-bold ml-4"></button>
        </div>
        <div className="flex items-center my-4 p-4 bg-white rounded-lg">
          <div className="bg-blue-200  w-40 h-24 mr-4"></div>
          <p className="text-gray-700 flex-grow text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <button className="text-blue-500 font-bold ml-4"></button>
        </div>
      </div>
    </div>
  );
}

export default PerfilUsuario;
