import React, { useRef, useState, useEffect } from "react";
export default function LocalStore() {
  const [counter, setCounter] = useState(() => {
    const saved = localStorage.getItem("counter");
    return saved ? Number(saved) : 0;
  });
  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);
  // Listen to localStorage changes in other tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "counter") {
        setCounter(Number(e.newValue));
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleCounter = (type) => {
    setCounter((prev) => {
      switch (type) {
        case "INC":
          return prev + 1;
        case "DEC":
          return prev > 0 ? prev - 1 : 0;
        case "RST":
          return 0;
        default:
          return prev;
      }
    });
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => handleCounter("INC")}>Increase</button>
      <button onClick={() => handleCounter("DEC")}>Decrease</button>
      <button onClick={() => handleCounter("RST")}>Reset</button>
    </>
  );
}
