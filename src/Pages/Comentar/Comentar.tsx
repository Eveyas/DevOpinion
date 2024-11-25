import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import perfil from '../Perfil_Usuario/assets/Perfil.png';

const Comentar = () => {
  const [selectedTechnology, setSelectedTechnology] = useState('Backend');
  const [selectedLevel, setSelectedLevel] = useState('Medio');
  const [image, setImage] = useState<File & { preview: string } | null>(null);
  const [comment, setComment] = useState('');
  const [technologyName, setTechnologyName] = useState('');

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage(Object.assign(file, { preview: URL.createObjectURL(file) }));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 1,
  });
  const handleRemoveImage = () => {
    setImage(null);
  };
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const handleTechnologyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechnologyName(e.target.value);
  };
  const handleInputResize = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  };

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
            <div
              {...getRootProps()}
              className={`h-48 rounded mb-4 border-dashed border-2 flex items-center justify-center cursor-pointer relative ${
                isDragActive ? 'bg-green-200 border-green-500' : 'bg-green-100 border-green-300'
              }`}
            >
              <input {...getInputProps()} />
              {image ? (
                <div className="relative flex justify-center items-center">
                  <img
                    src={image.preview}
                    alt="Imagen subida"
                    className="max-w-32 max-h-32 object-contain"
                  />
                  {/* Eliminar la imagen */}
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 text-white bg-blue-400 rounded-full p-1 text-sm"
                  >
                    ✖
                  </button>
                </div>
              ) : (
                <p className="text-gray-600">{isDragActive ? 'Suelta la imagen aquí...' : 'Arrastra una imagen aquí o haz clic para subir'}</p>
              )}
            </div>
            {image && (
              <div className="text-center text-gray-600 mt-4">
                <p>Arrastra una imagen aquí o haz clic para subir</p>
              </div>
            )}
          </div>

          {/* Comentario */}
          <div className="bg-white shadow rounded-lg p-5 mb-6">
            <h3 className="text-lg font-semibold mb-3">Comentario</h3>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              onInput={handleInputResize} // Llamada a la función de ajuste de altura
              className="w-full p-2 border border-gray-300 rounded-lg resize-none"
              placeholder="Escribe tu comentario"
              style={{ minHeight: '100px' }}
            />
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
            <input
              type="text"
              value={technologyName}
              onChange={handleTechnologyNameChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Escribe el nombre de la tecnología"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Enviar</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Comentar;
