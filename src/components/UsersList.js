import { useState, useEffect } from "react";

function UsersList() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color:green");

    fetch("https://fragance--life.herokuapp.com/api/users/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("%cse actualizó el componente", "color:yellow");
  }, [users]);

  useEffect(() => {
    return () => {
      console.log("%cse desmontó el componente", "color:red");
    };
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <h2>Estos son Usuarios en la Base de Datos</h2>
      <ul>
        {users.length === 0 && <p>Cargando...</p>}
        {users.map((user, i) => {
          return (
            <li key={i}>
              <h3>{user.name}</h3>
              <img src={user.avatar} alt="avatar" width={100} height={100} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UsersList;
