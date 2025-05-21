import React from "react";

function Clicker() {
  const handleClick = () => {
    alert("You have clicked the button!");
  };

  return (
    <div>
      <h2>Click The Button</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Clicker;
