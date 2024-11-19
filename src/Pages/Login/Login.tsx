import computador from './assets/computador.jpeg';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white max-w-4xl shadow-lg rounded-lg overflow-hidden">
      
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-left text-xl font-light mb-2">Iniciar sesión</h2>
          <div className="text-left text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-green-400">
            DevOpinion
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-2 border-b border-gray-400 focus:outline-none focus:border-green-600"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full p-2 border-b border-gray-400 focus:outline-none focus:border-green-600"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Iniciar sesión
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            No tienes cuenta? <a href="/Registro" className="text-orange-600 hover:underline">Registrarse</a>
          </p>
        </div>

      
        <div className="w-full md:w-1/2">
          <img
            src={computador}
            alt="Computador"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
