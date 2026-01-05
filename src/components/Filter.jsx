// Crear una lista donde se pueda hacer un buscador y filtrar.
import { useState } from "react";

export default function Filter() {
  const [usersfilter, setUsersFilter] = useState([]);

  const users = ["Aaron", "Antonio", "Carlos", "Jazmin", "Eulogio", "Ivan"];

  const handleFilterUsers = (event) => {
    const { value } = event.target;
    const usersFiltered = users.filter((user) => user === value);
    setUsersFilter(usersFiltered);
  };

  if (usersfilter.length>0) {
    return (
      <div>
        <div>Usuarios filtrados</div>
        {usersfilter.map((user) => (
          <div>{user}</div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p>Componente para filtrar</p>
      <div>
        <p>Buscar </p>
        <input
          type="text"
          placeholder="buscar por nombre"
          name="search"
          onChange={handleFilterUsers}
        />
      </div>
      {users.map((user, index) => (
        <div key={index}>{user}</div>
      ))}
    </div>
  );
}
