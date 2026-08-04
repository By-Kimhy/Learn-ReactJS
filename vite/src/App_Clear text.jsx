import React from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = React.useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <h2>{value}</h2>
      <input
        onChange={handleChange}
        value={value}
        type="text"
        placeholder="Typing here..."
      />
      <button onClick={() => setValue("")}>Clear</button>
    </div>
  );
};

export default App;
