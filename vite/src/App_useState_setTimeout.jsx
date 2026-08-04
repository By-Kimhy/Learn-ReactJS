import { useState } from "react";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState(0);

  // increment number only 1 after 1 second
  // const handleIncrement = () => {
  //   setTimeout(() => {
  //     setNumber(number + 1);
  //   }, 1000);
  //   console.log(number);
  // };

  // cv is the current value
  const handleIncrement = () => {
    setTimeout(() => {
      setNumber((cv)=> cv + 1);
    }, 1000);
  };
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={handleIncrement}>Click me</button>
    </div>
  );
};
export default App;