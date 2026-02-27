import { BrowserRouter, Routes, Route } from "react-router-dom";
import NuevaPagina from "./NuevaPagina";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<NuevaPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
