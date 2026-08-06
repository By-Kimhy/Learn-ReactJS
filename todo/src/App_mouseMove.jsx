import { useState, useEffect } from "react";
import "./App_mouseMove.css";

const App = () => {
  return (
    <div>
      <CleanupExample />
    </div>
  );
};

function CleanupExample() {
  const [x, setX] = useState(0);
  useEffect(() => {
    function handleMove(e) {
      setX(e.clientX);
    }
    window.addEventListener("mousemove", handleMove);

    // cleanup runs on unmount or dependency change
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []); // subscribe once
  return <p>Mouse X: {x}</p>;
}
export default App;
