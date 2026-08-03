import React from "react";
import "./Poster.css";

// const Poster = (props) => {
//   const { imageSrc, name, text } = props;
//   return (
//     <article>
//       <img src={imageSrc} alt="profile" />
//       <h2>{name}</h2>
//       <p>{text}</p>
//     </article>
//   );
// };

// const Poster = (props) => {
//   return (
//     <article>
//       <img src={props.imageSrc} alt="profile" />
//       <h2>{props.name}</h2>
//       <p>{props.text}</p>
//     </article>
//   );
// };

const Poster = ({ imageSrc, name, text, children }) => {
  console.log(children);
  return (
    <article>
      <img src={imageSrc} alt="profile" />
      <h2>{name}</h2>
      {children}
      <p>{text}</p>
    </article>
  );
};
export default Poster;
