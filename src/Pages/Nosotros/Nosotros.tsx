import FNosotros from "./assets/fNosotros.jpg";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Nosotros() {
  return (
    <div className="w-full">
      <Header />
      <div className="relative">
        <img
          src={FNosotros}
          alt="DevOpinion"
          className="w-full h-56 md:h-72 object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start bg-black bg-opacity-50 px-4">
          <h1 className="text-white text-4xl md:text-7xl font-bold  md:mb-10 md:ml-10 mt-10">
            <span className="text-green-400">Dev</span>Opinion
          </h1>
          <div className="mt-4 md:absolute md:bottom-5 mb-5 md:left-10">
            <button className="bg-blue-600 rounded-full text-white py-2 px-4 hover:bg-blue-500">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 p-5">
        <h2 className="text-3xl md:text-4xl bg-gray-300 p-5 font-bold text-center md:text-left">
          ¿Quiénes <span className="text-green-500">somos</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <img
              src={FNosotros}
              alt="Imagen 1"
              className="w-full h-40 md:h-48 object-cover rounded shadow-lg"
            />
            <img
              src={FNosotros}
              alt="Imagen 2"
              className="w-full h-40 md:h-48 object-cover rounded shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Nosotros;
