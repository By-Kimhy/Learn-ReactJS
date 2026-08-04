import Userss from "./Userss";
import people from "../data";
import {useState} from "react";
const UserssList = () => {
  const [user, setUser] = useState(people);

  function handleClear() {
    setUser([]);
  }

  function getIdUser(id) {
    const filterPeople = user.filter((u) => u.id !== id);
    setUser(filterPeople);
  }

  return (
    <div className="container">
      {user.map((person) => (
        <Userss {...person} getId={getIdUser} key={person.id} />
      ))}
      <button className="btn-clear" onClick={handleClear}>Clear All</button>
    </div>
  );
};

export default UserssList;
