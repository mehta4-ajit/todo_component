import { useRef, useState } from "react";

export default function Refo() {
  const [, forceRender] = useState(0);
  const counter = useRef(0);

  const handleCounter = (event, item) => {
    if (item === "INC") {
      counter.current++;
      forceRender((prev) => prev);
    } else if (item === "DEC" && counter.current > 0) {
      counter.current--;
      forceRender((prev) => prev + 1);
    } else if (item === "RST") {
      counter.current = 0;
      forceRender((prev) => prev + 1);
    }
  };

  return (
    <div>
      <p>Using useRef</p>
      <span>Counter: {counter.current}</span>
      <div>
        <button onClick={(e) => handleCounter(e, "INC")}>Increase</button>
        <button onClick={(e) => handleCounter(e, "DEC")}>Decrease</button>
        <button onClick={(e) => handleCounter(e, "RST")}>Reset</button>
      </div>
    </div>
  );
}
