import React from "react";
import Profiles from "./Profiles";

const UserData = [
  {
    id: 1,
    name: "Kimhy",
    position: "Frontend Developer",
  },
  {
    id: 2,
    name: "Alice",
    position: "Frontend Developer",
  },
  {
    id: 3,
    name: "Bob",
    position: "Frontend Developer",
  },
];

function getIdUser(id) {
    console.log("Clicked id:", id);
}

const Users = () => {
  return (
    <div>
      {UserData.map(user => (
        <Profiles {...user} getId={getIdUser} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
