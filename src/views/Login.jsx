import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import fondo from '/Login/fondoLogin.webp'
const Login = () => {
//   const navigate = useNavigate();
  const initialValues = {
    CIP: "",
    password_hash: "",
  };
  const [userDataForm, setUserDataForm] = useState(initialValues);

  const handleChange = (campo, value) => {
    setUserDataForm((prev) => ({ ...prev, [campo]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formulario enviado");
    console.log(userDataForm);
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a4d2e] to-[#2d7d4a] p-5">
      {/* Fondo con elementos decorativos en verde */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#2e8822] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#2e8822] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-[#2e8822] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>
      </div>
      {/* PARA EL BOTON DE MODO CLARO Y OSCURO */}

      <div className="bg-white rounded-2xl dark:bg-dark-surface shadow-2xl p-6 max-w-md relative overflow-hidden w-96 transition-colors z-20">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-5">
            <h1 className="text-3xl font-bold text-[#1a4d2e] dark:text-dark-text-primary mb-2">
              Iniciar Sesión
            </h1>
            <h2 className="text-lg text-gray-600 dark:text-dark-text-secondary">
              Acceso Administrativo
            </h2>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-5">
            <label
              htmlFor="CIP"
              className="block text-sm font-semibold text-gray-700 mb-2 dark:text-dark-text-secondary"
            >
              CIP
            </label>
            <input
              type="text"
              id="CIP"
              name="CIP"
              autoComplete="cip"
              value={userDataForm.CIP}
              onChange={(e) => handleChange("CIP", e.target.value)}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent dark:text-dark-text-secondary`}
              placeholder="Ingrese su CIP"
            />
            
          </div>

          <div className="mb-6">
            <label
              htmlFor="password_hash"
              className="block text-sm font-semibold text-gray-700 mb-2 dark:text-dark-text-secondary"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password_hash"
              name="password_hash"
              autoComplete="current-password"
              value={userDataForm.password_hash}
              onChange={(e) => handleChange("password_hash", e.target.value)}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d2e] focus:border-transparent dark:text-dark-text-secondary`}
              placeholder="Ingrese su contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#1a4d2e] to-[#2d7d4a] text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
      <div 
        className="w-96 flex flex-col justify-center gap-8 items-center z-20 bg-no-repeat bg-center" 
        style={{ backgroundImage: `url(${fondo})` }}
        >
        {/* Contenido */}
        <img src={fondo}/>
        </div>
      
    </div>
  );
};

export default Login;
