import Programacion from "../Niveles/assets/analisis.webp";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
function Tipos_Desarrolo() {
  return (
    <div className="">
      <Header></Header>
      <div className="p-4">
        <div className="flex items-center bg-gray-300 p-4">
          <h1 className="text-2xl font-bold">Nuestros</h1>
          <h1 className="text-2xl font-bold text-green-500 ml-2">
            Tipos De Desarrollo
          </h1>
        </div>
        <div className="flex items-center mt-4 bg-gray-300 p-4">
          <h1 className="text-2xl font-bold">
            Selecciona segun tus preferencias
          </h1>
        </div>

        <div className=" mt-8 flex  justify-center items-center mb-10 ">
          <div className="m-5">
            <img
              src={Programacion}
              alt="Básico"
              className="w-full h-48 object-cover"
            />
            <h1 className=" flex bg-gray-200 items-center justify-start text-blue-300 text-xl font-bold">
              FRONTEND
            </h1>
          </div>

          <div className=" m-5">
            <img
              src={Programacion}
              alt="Intermedio"
              className="w-full h-48 object-cover"
            />
            <h1 className="flex bg-gray-200 items-center justify-start text-blue-300 text-xl font-bold">
              BACKEND
            </h1>
          </div>

          <div className=" m-5 ">
            <img
              src={Programacion}
              alt="Avanzado"
              className="w-full h-48 object-cover"
            />
            <h1 className="flex bg-gray-200 items-center justify-start text-blue-300 text-xl font-bold">
              FULLSTACK
            </h1>
          </div>
        </div>
        <div className="flex items-center bg-gray-300 mb-6 p-4">
          <h1 className="text-2xl font-bold">Nuestros</h1>
          <h1 className="text-2xl font-bold text-green-500 ml-2">Niveles</h1>
        </div>
        <div className=" mt-8 flex  justify-center items-center mb-10 ">
          <div className=" m-5">
            <img
              src={Programacion}
              alt="Básico"
              className="w-full h-48 object-cover"
            />
            <h1 className=" flex bg-gray-200 items-center justify-start text-blue-300 text-xl font-bold">
              BÁSICO
            </h1>
          </div>

          <div className="m-5">
            <img
              src={Programacion}
              alt="Intermedio"
              className="w-full h-48 object-cover"
            />
            <h1 className="flex bg-gray-200 items-center justify-start text-blue-300 text-xl font-bold">
              INTERMEDIO
            </h1>
          </div>

          <div className="m-5 ">
            <img
              src={Programacion}
              alt="Avanzado"
              className="w-full h-48 object-cover"
            />
            <h1 className="flex bg-gray-200 items-center justify-start text-blue-300 text-xl font-bold">
              AVANZADO
            </h1>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Tipos_Desarrolo;
