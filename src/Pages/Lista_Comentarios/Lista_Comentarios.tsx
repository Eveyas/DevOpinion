import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import { FaEdit, FaTrash, FaUsers, FaCommentDots } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";
import Footer from '../../Components/Footer';

interface Comment {
  idComentario: number;
  idPublicacion: number;
  comentario: string;
  fechaComentario: string;
  usuario: {
    idUsuario: number;
    nombre: string;
  };
}

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [editedComment, setEditedComment] = useState<string>("");

  useEffect(() => {
    // Fetch all comments from backend
    axios.get('http://localhost:5259/api/Comentarios/obtener-todos-comentarios')
      .then(({ data }) => {
        if (Array.isArray(data)) {
          setComments(data);
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .catch(error => {
        console.error('¡Hubo un error al recuperar los comentarios!', error);
      });
  }, []);

  const handleDelete = (idComentario: number) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el comentario de forma permanente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5259/api/Comentarios/eliminar-comentario/${idComentario}`)
          .then(() => {
            Swal.fire(
              'Eliminado',
              'El comentario ha sido eliminado exitosamente.',
              'success'
            );
            setComments(comments.filter(comment => comment.idComentario !== idComentario));
            setSelectedComment(null);
          })
          .catch(error => {
            Swal.fire(
              'Error',
              'Hubo un problema al eliminar el comentario.',
              'error'
            );
            console.error('There was an error deleting the comment!', error);
          });
      }
    });
  };

  const handleSelect = (comment: Comment) => {
    setSelectedComment(comment);
    setEditedComment(comment.comentario); // Pre-fill with the existing comment
  };

  const handleEditSubmit = () => {
    if (!selectedComment) return;

    axios.put(`http://localhost:5259/api/Comentarios/actualizar-comentario/${selectedComment.idComentario}`, {
      comentario: editedComment,
    })
      .then(() => {
        setComments(comments.map(comment =>
          comment.idComentario === selectedComment.idComentario
            ? { ...comment, comentario: editedComment }
            : comment
        ));
        setSelectedComment(null); // Clear the selection
        setEditedComment(""); // Reset the edited comment
        Swal.fire(
          'Actualizado',
          'El comentario ha sido actualizado exitosamente.',
          'success'
        );
      })
      .catch(error => {
        Swal.fire(
          'Error',
          'Hubo un problema al actualizar el comentario.',
          'error'
        );
        console.error('There was an error updating the comment!', error);
      });
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
              <h2 className="text-2xl font-bold mb-4">Lista de Comentarios</h2>
              <table className="min-w-full bg-white shadow rounded-lg mb-6">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b">ID</th>
                    <th className="py-3 px-4 border-b">Usuario</th>
                    <th className="py-3 px-4 border-b">Comentario</th>
                    <th className="py-3 px-4 border-b">Fecha</th>
                    <th className="py-3 px-4 border-b">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map(comment => (
                    <tr key={comment.idComentario}>
                      <td className="py-2 px-4 border-b">{comment.idComentario}</td>
                      <td className="py-2 px-4 border-b">{comment.usuario.nombre}</td>
                      <td className="py-2 px-4 border-b">{comment.comentario}</td>
                      <td className="py-2 px-4 border-b">{new Date(comment.fechaComentario).toLocaleString()}</td>
                      <td className="py-2 px-4 border-b">
                        <button onClick={() => handleSelect(comment)} className="text-blue-500 hover:text-blue-700 mr-2">
                          Editar <FaEdit />
                        </button>
                        <button onClick={() => handleDelete(comment.idComentario)} className="text-red-500 hover:text-red-700">
                          Eliminar <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {selectedComment && (
                <div className="bg-white p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Editar Comentario</h3>
                  <textarea
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                    className="w-full border rounded p-2 mb-4"
                  />
                  <button onClick={handleEditSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                    Guardar Cambios
                  </button>
                  <button onClick={() => setSelectedComment(null)} className="bg-gray-300 text-black px-4 py-2 rounded">
                    Cancelar
                  </button>
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
