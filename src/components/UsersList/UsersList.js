import { useState, useEffect } from "react";
import './UsersList.css'
function UsersList() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log("%cse montó el componente", "color:green");

    fetch("https://fragance--life.herokuapp.com/api/users/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // console.log("%cse actualizó el componente", "color:yellow");
  }, [users]);

  useEffect(() => {
    return () => {
      // console.log("%cse desmontó el componente", "color:red");
    };
  }, []);

  return (
    <div className="userlist">
      <h2>Estos son Usuarios en la Base de Datos</h2>
      <ul className="container-user">
        {users.length === 0 && <p>Cargando...</p>}
        {users.map((user, i) => {
          return (
            <li className="datessuser" key={i}>
              <div className="div-image">
              <img className="avatar" src={user.avatar} alt="avatar" width={100} height={100} />
              </div>
              
              <div className="date">
                <p>{user.name} {user.surname}</p>
                <p>{user.email}</p>
              </div>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UsersList;
