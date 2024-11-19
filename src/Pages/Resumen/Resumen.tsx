import { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import perfil from '../Perfil_Usuario/assets/Perfil.png'; // Asegúrate de que esta ruta es correcta

const Resumen = () => {
  const [selectedTechnology, setSelectedTechnology] = useState('Backend');
  const [selectedLevel, setSelectedLevel] = useState('Medio');
  const technologyName = 'JAVASCRIPT'; // Ejemplo de nombre de la tecnología

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6 w-full bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <header className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img src={perfil} alt="Usuario" className="rounded-full w-10 h-10 mr-3" />
              <span className="font-bold">Nombre del Usuario</span>
            </div>
          </header>

          {/* Contenido Principal */}
          <div className="bg-white shadow rounded-lg p-5 mb-6">
            <h2 className="text-lg font-semibold mb-3">Imagen referente</h2>
            <div className="bg-green-100 h-32 rounded mb-4"></div>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>
          </div>

          {/* Comentario */}
          <div className="bg-white shadow rounded-lg p-5 mb-6">
            <h3 className="text-lg font-semibold mb-3">Comentario</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>

          {/* Tecnología y Nivel */}
          <div className="flex flex-col md:flex-row bg-white p-5 rounded-lg shadow mb-6">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Tecnología</h4>
              <div className="space-y-4">
                {['Frontend', 'Backend', 'Full stack'].map((tech) => (
                  <div key={tech} className="flex items-center">
                    <input
                      type="radio"
                      id={`tech-${tech}`}
                      name="technology"
                      value={tech}
                      checked={selectedTechnology === tech}
                      onChange={() => setSelectedTechnology(tech)}
                      className="mr-2"
                    />
                    <label htmlFor={`tech-${tech}`}>{tech}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="font-semibold mb-2">Nivel</h4>
              <div className="space-y-4">
                {['Básico', 'Medio', 'Avanzado'].map((level) => (
                  <div key={level} className="flex items-center">
                    <input
                      type="radio"
                      id={`level-${level}`}
                      name="level"
                      value={level}
                      checked={selectedLevel === level}
                      onChange={() => setSelectedLevel(level)}
                      className="mr-2"
                    />
                    <label htmlFor={`level-${level}`}>{level}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nombre de la Tecnología */}
          <div className="bg-white shadow rounded-lg p-5 mb-6">
            <h4 className="font-semibold mb-2">Nombre de la Tecnología</h4>
            <div className="bg-gray-100 p-4 rounded">
              <span className="text-lg font-bold">{technologyName}</span>
            </div>
          </div>

          {/* Ejemplo */}
          <div className="bg-white shadow rounded-lg p-5 mb-6">
            <h4 className="font-semibold mb-2">Ejemplo</h4>
            <div className="bg-gray-100 h-32 rounded"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resumen;
