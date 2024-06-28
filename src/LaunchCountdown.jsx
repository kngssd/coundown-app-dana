import { useState } from "react";
import "./App.css";
import React from "react";

export default function Countdown() {
  const [count, setCount] = useState(5);

  function decrement() {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  }

  function reset() {
    setCount(5);
  }

  function numberDisplay(count) {
    if (count === 1) {
      return "🧑🏻‍🚀";
    }
    if (count === 0) {
      return "🚀";
    }
    return count;
  }

  const display = numberDisplay(count);

  return (
    <div>
      <h1 className="display">{display}</h1>
      <span className="miniCount">{count}</span>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
