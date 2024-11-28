import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Swal from 'sweetalert2';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import perfil from '../Perfil_Usuario/assets/Perfil.png';

const Comentar = () => {
  const [image, setImage] = useState<File & { preview: string } | null>(null);
  const [title, setTitle] = useState(''); // Para el título de la publicación

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

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('No estás autenticado. Por favor, inicia sesión.');
      return;
    }

    const formData = new FormData();
    formData.append('Titulo', title); // Asegúrate de enviar 'Titulo' tal como espera el backend
    if (image) formData.append('Archivo', image); // Asegúrate de enviar 'Archivo' para la imagen

    try {
      const response = await fetch('http://localhost:5259/api/Publicaciones/publicar', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Publicación exitosa',
          text: 'Tu publicación se realizó correctamente.',
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorData.mensaje || 'Hubo un problema al publicar la imagen.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error de conexión',
        text: 'No se pudo conectar con el servidor',
      });
    }
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
          </div>

          {/* Título */}
          <div className="bg-white shadow rounded-lg p-5 mb-6">
            <h3 className="text-lg font-semibold mb-3">Título de la publicación</h3>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Escribe el título de tu publicación"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Publicar
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Comentar;
