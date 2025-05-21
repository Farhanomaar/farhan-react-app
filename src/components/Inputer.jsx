import React, { useState } from "react";

function Inputer() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>
        Enter text:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default Inputer;
