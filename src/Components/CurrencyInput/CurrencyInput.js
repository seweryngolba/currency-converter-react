import React from "react";
import "./CurrencyInput.css";

function CurrencyInput() {
  return (
    <input
      id="money"
      className="currency-input"
      type="text"
      placeholder="100"
      min="0"
    />
  );
}

export default CurrencyInput;
