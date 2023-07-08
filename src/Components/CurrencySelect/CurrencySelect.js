import React from "react";
import "./CurrencySelect.css";

function CurrencySelect({ value, onChange }) {
  return (
    <select
      name="currencies"
      id="currencies"
      className="currency-options"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="CHF">CHF</option>
    </select>
  );
}

export default CurrencySelect;
