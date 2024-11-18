import chica from './assets/chica.jpg';
import google from './assets/google.png'
import facebu from './assets/facebu.jpg'
function Registro() { 
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white max-w-4xl shadow-lg rounded-lg overflow-hidden">
       
        <div className="w-full md:w-1/2">
          <img
            src={chica}
            alt="Registro"
            className="w-full h-full object-cover"
          />
        </div>

       
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-center text-2xl font-semibold mb-4">Registrarse con</h2>
          <div className="flex justify-center gap-4 mb-4">
            <button className="py-2 px-4 flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-lg transition">
            <img src={google} alt="google" className="w-10 h-10" />
              Continue with Google
            </button>
            <button className="py-2 px-4 flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-lg transition">
            <img src={facebu} alt="facebu" className="w-10 h-10" />
              Continue with Facebook
            </button>
          </div>
          <p className="text-center text-gray-500 mb-4">or</p>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-6 flex items-start">
              <input type="checkbox" id="terms" name="terms" className="mr-2 mt-1" />
              <label htmlFor="terms" className="text-sm font-medium text-gray-700">
                He leído y acepto los términos de servicio y nuestra política de privacidad.
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Registrarse
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            ¿Ya tienes una cuenta? <a href="/login" className="text-orange-600 hover:underline">Iniciar sesión</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registro;
