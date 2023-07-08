import React from "react";
import "./CurrencyInput.css";

function CurrencyInput({ value, onChange }) {
  return (
    <input
      id="money"
      className="amount-input"
      type="text"
      placeholder="100"
      min="0"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default CurrencyInput;
