import React from "react";
import "./ConvertButton.css";

function ConvertButton() {
  const handleConvert = (event) => {
    event.preventDefault();
  };

  return (
    <button className="convert-button" type="submit" onClick={handleConvert}>
      CONVERT
    </button>
  );
}

export default ConvertButton;
