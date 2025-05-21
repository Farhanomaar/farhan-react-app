import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className style={{ backgroundColor: "lightgray"}}>
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={decrement}
          className style={{ backgroundColor: "green", color: "red" }}
        >
          - Decrement
        </button>
        <button
          onClick={increment}
          className style= {{backgroundColor: "yellow", color: "red" }}
        >
          + Increment
        </button>
      </div>
    </div>
  );
}

export default Counter
