import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Metodos from "./Pages/Metodos/Metodos";
import Niveles from "./Pages/Niveles/Niveles";
import PerfilUsuario from "./Pages/Perfil_Usuario/Perfil_Usuario";
import Registro from "./Pages/Registro/Registro";
import Login from "./Pages/Login/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nosotros from "./Pages/Nosotros/Nosotros";
import Tipos_Desarrollo from "./Pages/Tipos_Desarrollo/Tipos_Desarrollo";
import Tecnologias_Usuarios from "./Pages/Tecnologias/Tecnologias_Usuarios";
import Resumen from "./Pages/Resumen/Resumen";
import UserList from "./Pages/Lista_Usuario/Lista_Usuario";
import CommentList from "./Pages/Lista_Comentarios/Lista_Comentarios";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Metodos" element={<Metodos />} />
        <Route path="/Niveles" element={<Niveles />} />
        <Route path="/Perfil_Usuario" element={<PerfilUsuario />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Tipos_Desarrollo" element={<Tipos_Desarrollo />} />
        <Route path="/Tecnologias_Usuarios" element={<Tecnologias_Usuarios />} />
        <Route path="/Resumen" element={<Resumen />} />
        <Route path="/Lista_Usuario" element={<UserList/>} />
        <Route path="/Lista_Comentarios" element={<CommentList/>} />
       
      </Routes>
    </Router>
  );
};

export default App;
