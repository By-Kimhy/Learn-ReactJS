import React from "react";

const Userss = (props) => {
  const { img, name, age, id, getId } = props;
  console.log(props);
  function handleClick() {
    getId(id);
  }
  return (
    <article>
      <img src={img} alt="Profile" />
      <h2>{name}</h2>
      <h2>{age}</h2>
      <button onClick={handleClick}>Click me</button>
    </article>
  );
};

export default Userss;
