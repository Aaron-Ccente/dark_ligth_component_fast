import "./App.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login.jsx";
import ThemeBoton from "./components/ThemeBoton.jsx";
import Filter from "./components/Filter.jsx";
import Formulario from "./components/Formulario.jsx";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/theme" element={<ThemeBoton/>} />
          <Route path="/filter" element={<Filter/>} />
          <Route path="/form" element={<Formulario/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
