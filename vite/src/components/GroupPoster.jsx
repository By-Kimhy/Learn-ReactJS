import React from "react";
import Poster from "./Poster.jsx";
import p1 from "../assets/img/1-1.webp";
import p2 from "../assets/img/2-1.webp";
import p3 from "../assets/img/3-1.webp";

const GroupPoster = () => {
  return (
    <React.Fragment>
      <Poster imageSrc={p1} name="Kimhy" text="Hello, React!">
        <button>Click me</button>
      </Poster>
      <Poster imageSrc={p2} name="Alice" text="Hi there!" />
      <Poster imageSrc={p3} name="Bob" text="What's up?" />
    </React.Fragment>
  )
};

export default GroupPoster;
