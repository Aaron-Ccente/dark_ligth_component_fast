/*  **/
import { useState } from 'react'
/** Crear un formulario de contacto donde tenga los campos de nombre, 
    email,mensaje. Se debe de visualizar la validación y mostrar un 
    mensaje de envío exitoso. */

export default function Formulario() {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !user.nombre.trim() ||
      !user.email.trim() ||
      !user.mensaje.trim()
    ) {
      alert("Hay campos vacíos");
        setUser({ nombre: "", email: "", mensaje: "" });
      return;
    }

    setSuccess(true);
    setUser({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="w-full min-h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-blue-700 px-4 py-4 rounded text-white gap-2"
      >
        <p className="text-center text-2xl font-bold">Formulario</p>

        {success && (
          <p className="bg-green-600 text-center rounded p-1">
            Formulario enviado con éxito
          </p>
        )}

        <label>
          <span>Nombre:</span>
          <input
            type="text"
            name="nombre"
            value={user.nombre}
            onChange={handleChange}
            placeholder="Escriba su nombre aquí"
          />
        </label>

        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Escriba su email aquí"
          />
        </label>

        <label>
          <span>Mensaje:</span>
          <textarea
            name="mensaje"
            value={user.mensaje}
            onChange={handleChange}
            placeholder="Escriba su mensaje aquí"
          />
        </label>

        <div className="flex justify-center gap-4 mt-2">
          <button
            type="reset"
            className="bg-gray-500 px-3 py-1 rounded"
            onClick={() =>
              setUser({ nombre: "", email: "", mensaje: "" })
            }
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="bg-boton-send px-3 py-1 rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
