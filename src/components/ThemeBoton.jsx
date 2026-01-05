import { useState } from "react";

export default function ThemeBoton() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    setTheme(newTheme);
  };

  return (
    <div>
      <p>Componente para cambiar el color</p>
      <div>
        <button
          type="button"
          onClick={handleChangeTheme}
          className="bg-background text-primary"
        >
          {theme === "light" ? "Modo oscuro" : "Modo Claro"}
        </button>
      </div>
    </div>
  );
}
