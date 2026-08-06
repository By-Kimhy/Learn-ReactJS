import { useState,useEffect } from "react";
import "./App_toggle.css";

const App = () => {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>
        Toggle Counter
      </button>
      {showCounter && (
        <Counter />
      )}
    </div>
  );
};

// function Counter(){
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Component Mounted');
//   },[]);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </div>
//   );
// };

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    // cleanup function runs when component unmounts
    return () => {
      console.log("Component Unmounted");
    };
  }, []); // empty array = run only once on mount/unmount

  useEffect(() => {
    console.log("Component Updated");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}


export default App;
