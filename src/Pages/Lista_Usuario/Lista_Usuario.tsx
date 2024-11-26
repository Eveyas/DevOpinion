import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaUser, FaComment } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";
import Footer from '../../Components/Footer';

interface User {
  id: number;
  nombre: string;
  correo: string;
  contrasena: string;
  rol: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ nombre: '', correo: '', contrasena: '', rol: '' });
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch users from backend
    axios.get('http://localhost:5259/api/CRUD/listaUsuarios')
      .then(({ data }) => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Hubo un error al buscar a los usuarios!', error);
      });
  }, []);

  const handleDelete = (id: number) => {
    // Delete user from backend
    axios.delete(`http://localhost:5259/api/CRUD/eliminarUsuario/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error);
      });
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleSave = () => {
    if (editingUser) {
      // Update user in backend
      axios.put(`http://localhost:5259/api/CRUD/editarUsuario/${editingUser.id}`, editingUser)    
        .then(() => {
          setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
          setEditingUser(null);
        })
        .catch(error => {
          console.error('There was an error updating the user!', error);
        });
    } else {
      // Create new user in backend
      axios.post('http://localhost:5259/api/CRUD/nuevoUsuario/', newUser)
        .then(({ data }) => {
          setUsers([...users, data]);
          setNewUser({ nombre: '', correo: '', contrasena: '', rol: ''});
        })
        .catch(error => {
          console.error('There was an error creating the user!', error);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-lightblue-200 p-4 shadow-lg">
        <div className="flex items-center mb-8">
              <img src="./src/assets/Imagenes/logo_white.png" alt="Logo" className="w-10 h-10" />
              <span className="ml-2 text-xl font-bold text-blue-400">Dev</span><span className="text-xl font-bold text-green-400">Opinion</span>
            </div>
          <nav className="space-y-4">
            
            <a href="#" className="flex items-center p-2 bg-green-500 text-white rounded">
              <FaUser className="mr-2" /> Usuarios
            </a>
            <a href="Lista_Comentarios" className="flex items-center p-2 text-blue-500 hover:bg-green-100 rounded">
              <FaComment className="mr-2" /> Comentarios
            </a>
            <a href="Login" className="flex items-center p-2 text-blue-500 hover:bg-green-100 rounded">
              <CiLogout className="mr-2" /> Cerrar sesión
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/50" alt="Perfil" className="rounded-full w-10 h-10 mr-2" />
                  <div>
                    <p className="font-semibold">Evelin Yasmin</p>
                    <p className="text-sm text-gray-600">Administrador</p>
                  </div>
                </div>
              </div>
            </div>

            <table className="min-w-full bg-white shadow rounded-lg">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b">ID</th>
                  <th className="py-3 px-4 border-b">Nombre</th>
                  <th className="py-3 px-4 border-b">Correo</th>
                  <th className="py-3 px-4 border-b">Contraseña</th>
                  <th className="py-3 px-4 border-b">Acciones</th>
                  <th className="py-3 px-4 border-b">Rol</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="py-2 px-4 border-b">{user.id}</td>
                    <td className="py-2 px-4 border-b">{user.nombre}</td>
                    <td className="py-2 px-4 border-b">{user.correo}</td>
                    <td className="py-2 px-4 border-b">{user.contrasena}</td>
                    <td className="py-2 px-4 border-b">{user.rol}</td>
                    <td className="py-2 px-4 border-b">
                      <button onClick={() => handleEdit(user)} className="text-blue-500 hover:text-blue-700 mr-2">
                        Editar<FaEdit />
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-700">
                        Eliminar<FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">{editingUser ? 'Editar Usuario' : 'Nuevo Usuario'}</h2>
              <form className="bg-white p-4 shadow rounded-lg">
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    value={editingUser ? editingUser.nombre : newUser.nombre}
                    onChange={e => editingUser ? setEditingUser({ ...editingUser, nombre: e.target.value }) : setNewUser({ ...newUser, nombre: e.target.value })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
                  <input
                    type="email"
                    id="correo"
                    value={editingUser ? editingUser.correo : newUser.correo}
                    onChange={e => editingUser ? setEditingUser({ ...editingUser, correo: e.target.value }) : setNewUser({ ...newUser, correo: e.target.value })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contrasena" className="block text-sm font-medium text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    id="contrasena"
                    value={editingUser ? editingUser.contrasena : newUser.contrasena}
                    onChange={e => editingUser ? setEditingUser({ ...editingUser, contrasena: e.target.value }) : setNewUser({ ...newUser, contrasena: e.target.value })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                  <div className="mb-4">
                  <label htmlFor="rol" className="block text-sm font-medium text-gray-700">Rol</label>
                  <select
                    id="rol"
                    value={editingUser ? editingUser.rol : newUser.rol}
                    onChange={(e) => editingUser
                      ? setEditingUser({ ...editingUser, rol: e.target.value })
                      : setNewUser({ ...newUser, rol: e.target.value })
                    }
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="" disabled>Escoger un rol</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Moderador">Moderador</option>
                    <option value="User">Usuario</option>
                  </select>
                </div>


                <button type="button" onClick={handleSave} disabled={!newUser.rol && !editingUser?.rol} className="bg-green-500 text-white px-4 py-2 rounded">
                  {editingUser ? 'Actualizar' : 'Guardar'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserList;