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
    // console.log("Clicked id:", id);

    // noted: find method returns the first element that matches the condition. example: { id: 1, name: "Kimhy", position: "Frontend Developer" }
    // noted: filter method returns an array of all elements that match the condition example: [{ id: 1, name: "Kimhy", position: "Frontend Developer" }, { id: 2, name: "Alice", position: "Frontend Developer" }]
    const newUser = UserData.filter(user => user.id !== id);
    console.log(newUser);
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
