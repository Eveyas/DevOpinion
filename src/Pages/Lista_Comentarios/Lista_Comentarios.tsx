import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaUsers, FaCommentDots } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";
import Footer from '../../Components/Footer';

interface Comment {
  id: number;
  usuario: string;
  comentario: string;
}

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  useEffect(() => {
    // Fetch comments from backend
    axios.get('http://localhost:5259/api/Comentarios/obtener-comentarios/{idPublicacion}')
      .then(({ data }) => {
        setComments(data);
      })
      .catch(error => {
        console.error('¡Hubo un error al recuperar los comentarios!', error);
      });
  }, []);

  const handleDelete = (id: number) => {
    // Delete comment from backend
    axios.delete('http://localhost:5259/api/Comentarios/eliminar-comentario/{idComentario}')
      .then(() => {
        setComments(comments.filter(comment => comment.id !== id));
        setSelectedComment(null);
      })
      .catch(error => {
        console.error('¡Hubo un error al eliminar el comentario!', error);
      });
  };

  const handleSelect = (comment: Comment) => {
    setSelectedComment(comment);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-grow">
        <aside className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <div className="flex items-center mb-8">
              <img src="./src/assets/Imagenes/logo_white.png" alt="Logo" className="w-10 h-10" />
              <span className="ml-2 text-xl font-bold text-blue-400">Dev</span><span className="text-xl font-bold text-green-400">Opinion</span>
            </div>
            <nav>
              <ul>
                <li className="mb-4">
                </li>
                <li className="mb-4">
                  <a href="Lista_Usuario" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded">
                    <FaUsers className="mr-2" />
                    <span>Usuarios</span>
                  </a>
                </li>
                <li>
                  <a href="Lista_Comentarios" className="flex items-center p-2 bg-green-500 text-white rounded">
                    <FaCommentDots className="mr-2" />
                    <span>Comentarios</span>
                  </a>
                  <a href="Login" className="flex items-center p-2 text-blue-500 hover:bg-green-100 rounded">
                     <CiLogout className="mr-2" /> Cerrar sesión
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="flex-grow p-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                </div>
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/50" alt="Perfil" className="rounded-full w-10 h-10 mr-2" />
                  <div>
                    <p className="font-semibold">Evelin Yasmin</p>
                    <p className="text-sm text-gray-600">Moderador</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Lista de Comentarios</h2>
              <table className="min-w-full bg-white shadow rounded-lg mb-6">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b">ID</th>
                    <th className="py-3 px-4 border-b">Usuario</th>
                    <th className="py-3 px-4 border-b">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map(comment => (
                    <tr key={comment.id}>
                      <td className="py-2 px-4 border-b">{comment.id}</td>
                      <td className="py-2 px-4 border-b">{comment.usuario}</td>
                      <td className="py-2 px-4 border-b">
                        <button onClick={() => handleSelect(comment)} className="text-blue-500 hover:text-blue-700 mr-2">
                          Editar <FaEdit />
                        </button>
                        <button onClick={() => handleDelete(comment.id)} className="text-red-500 hover:text-red-700">
                          Eliminar <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {selectedComment && (
                <div className="bg-white p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Usuario</h3>
                  <p className="mb-2"><span className="font-semibold">Nombre:</span> {selectedComment.usuario}</p>
                  <p className="mb-4"><span className="font-semibold">Comentario:</span> {selectedComment.comentario}</p>
                  <button onClick={() => handleDelete(selectedComment.id)} className="bg-red-500 text-white px-4 py-2 rounded">Eliminar</button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CommentList;
