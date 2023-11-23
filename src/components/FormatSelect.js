import React, { useState } from "react";

const FormatSelect = () => {
  const [selectedOption, setSelectedOption] = useState("default");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="classSelect">Selecciona una clase:</label>
      <select
        id="classSelect"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="default">Desktop</option>
        <option value="option1">Tablet 1</option>
        <option value="option2">Mobile 2</option>
      </select>
    </div>
  );
};

export default FormatSelect;
