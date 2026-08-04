import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [alert, setAlert] = useState(false);
  function handleToggle() {
    // if (alert) {
    //   setAlert(false);
    // } else {
    //   setAlert(true);
    // }

    setAlert(!alert);
  }
  return (
    <div>
      {alert ? <Message /> : null}
      <button onClick={handleToggle}>Toggle Alert</button>
    </div>
  );
};

function Message() {
  return <h2>Message...</h2>;
}

export default App;
