import Programacion from "./assets/img_Programacion.jpg";
function Niveles() {
  return (
    <div className="p-8">
      <div className="flex items-center bg-gray-300 p-4">
        <h1 className="text-2xl font-bold">Nuestros</h1>
        <h1 className="text-2xl font-bold text-green-500 ml-2">Niveles</h1>
      </div>

      <div className="space-y-4 mt-8">
        <div className="relative">
          <img
            src={Programacion}
            alt="Básico"
            className="w-full h-48 object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            BÁSICO
          </h1>
        </div>

        <div className="relative">
          <img
            src={Programacion}
            alt="Intermedio"
            className="w-full h-48 object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            INTERMEDIO
          </h1>
        </div>

        <div className="relative">
          <img
            src={Programacion}
            alt="Avanzado"
            className="w-full h-48 object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            AVANZADO
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Niveles;
