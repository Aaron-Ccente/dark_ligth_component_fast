import { useState } from "react";

function Boton() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [disabled2, setDisabled2] = useState(false);

  const handleIncrement = () => {
    setCount((prev) => {
      if(prev >= 20){
        setDisabled(true)
        return alert("No se puede incrementar mas"), prev
      }
      else{
        setDisabled2(false);
        return prev +1;
      }
    });
  };

  const handleDecrement = () => {
    setCount((prev) => {
      if(prev <= 0){
        setDisabled2(true)
        return alert("No se puede disminuir menos"), prev
      }
      else{
        setDisabled(false);
        return prev - 1;
      }
    });
  };

  return (
    <div className="text-center text-white bg-blue-900 px-4 py-6 w-[260px] grid gap-6 rounded-2xl shadow-[0px_0px_20px_10px_#2b1f54]">
      <p className="text-2xl">Contador simple</p>
      <div className="grid gap-6">
        <p className="font-bold text-3xl">{count}</p>
        <div className="flex justify-around">
          <button
            onClick={handleIncrement}
            type="button"
            className="px-2 py-1 cursor-pointer bg-blue-600 rounded-lg text-white hover:bg-blue-700"
            disabled={disabled}
          >
            Aumentar
          </button>
          <button
            onClick={handleDecrement}
            type="button"
            className="px-2 py-1 cursor-pointer bg-green-600 rounded-lg text-white hover:bg-green-700"
            disabled={disabled2}
          >
            Disminuir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Boton;
