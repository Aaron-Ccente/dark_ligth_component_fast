import React, { useEffect, useState } from 'react'

function BotonEstilo() {
    const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    if (modoOscuro) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [modoOscuro]);
  return (
    <div className=" bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Modo {modoOscuro ? 'Oscuro' : 'Claro'}</h1>
      <button
        className="mt-4 px-4 py-2 rounded bg-blue-500 text-white dark:bg-yellow-400 dark:text-black"
        onClick={() => setModoOscuro(!modoOscuro)}
      >
        Cambiar a modo {modoOscuro ? 'claro' : 'oscuro'}
      </button>
    </div>
  )
}

export default BotonEstilo