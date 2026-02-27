import { BrowserRouter, Routes, Route } from "react-router-dom";
import NuevaPagina from "./NuevaPagina";
import Home from "./Home";
import CargaArchivos from "./CargaArchivos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<NuevaPagina />} />
        <Route path="/carga-archivos" element={<CargaArchivos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
