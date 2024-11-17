import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Metodos from "./Pages/Metodos/Metodos";
import Niveles from "./Pages/Niveles/Niveles";
import PerfilUsuario from "./Pages/Perfil_Usuario/Perfil_Usuario";
import Registro from "./Pages/Registro/Registro";
import Login from "./Pages/Login/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nosotros from "./Pages/Nosotros/Nosotros";
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
      </Routes>
    </Router>
  );
};

export default App;
