import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaHome, FaUser, FaComment } from 'react-icons/fa';
import Footer from '../../Components/Footer';

interface User {
  id: number;
  nombre: string;
  correo: string;
  contrasena: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ nombre: '', correo: '', contrasena: '' });
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch users from backend
    axios.get('http://localhost:3000/api/users')
      .then(({ data }) => {
        setUsers(data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  const handleDelete = (id: number) => {
    // Delete user from backend
    axios.delete(`http://localhost:3000/api/users/${id}`)
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
      axios.put(`http://localhost:3000/api/users/${editingUser.id}`, editingUser)
        .then(() => {
          setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
          setEditingUser(null);
        })
        .catch(error => {
          console.error('There was an error updating the user!', error);
        });
    } else {
      // Create new user in backend
      axios.post('http://localhost:3000/api/users', newUser)
        .then(({ data }) => {
          setUsers([...users, data]);
          setNewUser({ nombre: '', correo: '', contrasena: '' });
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
              <FaHome className="text-blue-500 mr-2" />
              <h1 className="text-3xl font-bold text-blue-500">DevOpinion</h1>
            </div>
          <nav className="space-y-4">
            <a href="#" className="flex items-center p-2 text-blue-500 hover:bg-green-100 rounded">
              <FaHome className="mr-2" /> Inicio
            </a>
            <a href="#" className="flex items-center p-2 bg-green-500 text-white rounded">
              <FaUser className="mr-2" /> Usuarios
            </a>
            <a href="Lista_Comentarios" className="flex items-center p-2 text-blue-500 hover:bg-green-100 rounded">
              <FaComment className="mr-2" /> Comentarios
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
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="py-2 px-4 border-b">{user.id}</td>
                    <td className="py-2 px-4 border-b">{user.nombre}</td>
                    <td className="py-2 px-4 border-b">{user.correo}</td>
                    <td className="py-2 px-4 border-b">{user.contrasena}</td>
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
                <button type="button" onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">
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
