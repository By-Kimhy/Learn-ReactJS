import react from "react";
import "./App.css";

const App = () => {
  // const arr = react.useState(0);
  // const count =arr[0];
  // const setCount = arr[1];
  // function handleIncrement() {
  //   setCount(count + 1);
  // }

  const [count, setCount] = react.useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default App