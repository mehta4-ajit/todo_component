import React, { useState } from "react";
import "./styles.css";
import Refo from "./Refo";
import LocalStore from "./localStore";
export default function App() {
  const [counter, setCounter] = useState(0);
  const handleCounter = (event, item) => {
    if (item == "INC") {
      setCounter((prev) => prev + 1);
    } else if (item == "DEC") {
      setCounter((prev) => (prev > 0 ? prev - 1 : 0));
    } else {
      setCounter(0);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Counter {counter}</h2>
      <button onClick={(e) => handleCounter(e, "INC")}>Increase</button>
      <button onClick={(e) => handleCounter(e, "DEC")}>Decrease</button>
      <button onClick={(e) => handleCounter(e, "RST")}>Reset</button>
      {/* <Refo /> */}
      <LocalStore />
    </div>
  );
}
