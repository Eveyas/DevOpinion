import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Metodos from "./Pages/Metodos/Metodos";
import Niveles from "./Pages/Niveles/Niveles";
import PerfilUsuario from "./Pages/Perfil_Usuario/Perfil_Usuario";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Metodos" element={<Metodos />} />
        <Route path="/Niveles" element={<Niveles />} />
        <Route path="/Perfil_Usuario" element={<PerfilUsuario />} />
      </Routes>
    </Router>
  );
};

export default App;
