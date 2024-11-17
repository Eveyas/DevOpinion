
function Login() {
  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg">
      <h2 className="text-center text-2xl font-semibold mb-6">Iniciar Sesión</h2>
      <div className="flex justify-around mb-6">
        <button className="py-2 px-4 bg-blue-600 text-white rounded-md">Continuar con Google</button>
        <button className="py-2 px-4 bg-blue-800 text-white rounded-md">Continuar con Facebook</button>
      </div>
      <p className="text-center mb-4">o</p>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input type="password" id="password" name="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-green-600 text-white rounded-md">Iniciar Sesión</button>
      </form>
      <p className="text-center mt-6">
        ¿No tienes cuenta? <a href="/register" className="text-orange-600">Registrarse</a>
      </p>
    </div>
  );
}

export default Login;
