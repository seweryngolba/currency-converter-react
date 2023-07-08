import React from "react";
import "./ConverterForm.css";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import ConvertButton from "../ConvertButton/ConvertButton";
import ResultOutput from "../ResultOutput/ResultOutput";

function ConverterForm() {
  return (
    <form className="converter-form">
      <div className="app-name">
        <h1 className="title">Currency Converter</h1>
        <i className="fa-solid fa-money-bill-transfer app-logo"></i>
      </div>
      <div className="amount-value">
        <CurrencyInput />
        <CurrencySelect />
        <ConvertButton />
        <div className="equal-sign">=</div>
        <div className="total-amount">
          <ResultOutput />
        </div>
      </div>
    </form>
  );
}

export default ConverterForm;
