
import Analisis from './assets/analisis.webp';
import Desarrollo from './assets/desarrollo.webp';
import Programacion from './assets/programacion.png';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Metodos() {
  return (
    <div>
      <Header />
      <div className="p-8">
        <div className="flex items-center bg-gray-300 p-4">
          <h1 className="text-2xl font-bold">Nuestros</h1>
          <h1 className="text-2xl font-bold text-green-500 ml-2">Métodos</h1>
        </div>

        <div className="flex justify-center items-center flex-col mt-8 space-y-8">
          <div className="w-full text-center">
            <img
              src={Programacion}
              alt="Frontend"
              className="w-full h-48 object-cover"
            />
            <h1 className="text-lg font-bold p-2 bg-gray-300 text-blue-400 w-full">FRONTEND</h1>
          </div>

          <div className="w-full text-center">
            <img
              src={Analisis}
              alt="Backend"
              className="w-full h-48 object-cover"
            />
            <h1 className="text-lg font-bold p-2 bg-gray-300 text-blue-400 w-full">BACKEND</h1>
          </div>

          <div className="w-full text-center">
            <img
              src={Desarrollo}
              alt="Full Stack"
              className="w-full h-48 object-cover"
            />
            <h1 className="text-lg font-bold p-2 bg-gray-300 text-blue-400 w-full">FULL STACK</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Metodos;
