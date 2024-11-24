import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PerfilUsuario from "./Pages/Perfil_Usuario/Perfil_Usuario";  //ruta de usuario
import Registro from "./Pages/Registro/Registro";  //ruta pública
import Login from "./Pages/Login/Login";  //ruta pública
import Nosotros from "./Pages/Nosotros/Nosotros";  //ruta pública
import Tipos_Desarrollo from "./Pages/Tipos_Desarrollo/Tipos_Desarrollo";  //ruta de usuario e invitado
import Tecnologias_Usuarios from "./Pages/Tecnologias/Tecnologias_Usuarios";  //ruta de usuario
import Resumen from "./Pages/Resumen/Resumen";  //ruta de usuario
import UserList from "./Pages/Lista_Usuario/Lista_Usuario";  //ruta de administrador
import CommentList from "./Pages/Lista_Comentarios/Lista_Comentarios";  //ruta de moderador
import Header from "./Components/Header";  
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";

// import { AuthProvider } from './Route/AuthContext';
// import ProtectedRoute from './Route/ProtectedRoute';
// import Metodos from "./Pages/Metodos/Metodos";  //cancelada
// import Niveles from "./Pages/Niveles/Niveles";  //cancelada

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/Metodos" element={<Metodos />} />
        <Route path="/Niveles" element={<Niveles />} /> */}

<Route path="/" element={<Home />} />
        <Route path="/Perfil_Usuario" element={<PerfilUsuario />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Tipos_Desarrollo" element={<Tipos_Desarrollo />} />
        <Route path="/Tecnologias_Usuarios" element={<Tecnologias_Usuarios />} />
        <Route path="/Resumen" element={<Resumen />} />
        <Route path="/Lista_Usuario" element={<UserList/>} />
        <Route path="/Lista_Comentarios" element={<CommentList/>} />  
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />     
      </Routes>
    </Router>
  );
};

export default App;
