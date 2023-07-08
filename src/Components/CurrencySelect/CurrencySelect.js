import React from "react";
import "./CurrencySelect.css";

function CurrencySelect() {
  return (
    <select name="currencies" id="currencies" className="currency-select">
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="CHF">CHF</option>
    </select>
  );
}

export default CurrencySelect;
