
import { useState } from "react";

export default function Contador() {
  const [value, setvalue] = useState(0);

  const handleIncrement = () => {
    setvalue((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setvalue((prev) => prev - 1);
  };

  return (
    <div style={{ color: "white" }}>
      <p>Contador Simple</p>
      <p>Valor: {value}</p>
      <div>
        <button
          className="button-contador"
          onClick={handleIncrement}
          type="button"
          disabled={value === 10}
        >
          Incrementar
        </button>
        <button
          className="button-contador"
          onClick={handleDecrement}
          type="button"
          disabled={value === 0}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
}
