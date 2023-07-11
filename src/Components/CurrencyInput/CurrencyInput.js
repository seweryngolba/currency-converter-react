import React from "react";
import "./CurrencyInput.css";

function CurrencyInput({ value, onChange }) {
  return (
    <input
      className="amount-input"
      type="number"
      placeholder="100"
      min="0.01"
      step="0.01"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default CurrencyInput;
