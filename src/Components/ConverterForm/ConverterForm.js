import React, { useState } from "react";
import ConvertButton from "../ConvertButton/ConvertButton";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import ResultOutput from "../ResultOutput/ResultOutput";
import "./ConverterForm.css";

const apiUrl = "https://api.nbp.pl/api/exchangerates/rates/a/";

function ConverterForm() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const fetchCurrencyData = () => {
    fetch(`${apiUrl}${selectedCurrency}/`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.rates?.length > 0 && data.rates[0].mid) {
          const currencyValue = data.rates[0].mid;
          calculate(currencyValue);
        } else {
          handleFetchError();
        }
      })
      .catch(() => handleFetchError());
  };

  const calculate = (currencyValue) => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setResult("");
      setError("Enter a valid value greater than 0");
      return;
    }
    const calculatedValue = parsedAmount * currencyValue;
    setResult(calculatedValue.toFixed(2) + " PLN");
    setError("");
  };

  const handleFetchError = () => {
    setError("Failed to read currency converter");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setResult("");
      setError("Enter a valid value greater than 0");
      return;
    }
    setError("");
    fetchCurrencyData();
  };

  return (
    <form className="converter" onSubmit={handleSubmit} noValidate>
      <div className="app-name">
        <h1 className="title">Currency Converter</h1>
        <i className="fa-solid fa-money-bill-transfer app-logo"></i>
      </div>
      <div className="amount-value">
        <CurrencyInput value={amount} onChange={setAmount} />
        <CurrencySelect
          value={selectedCurrency}
          onChange={setSelectedCurrency}
        />
        <ConvertButton />
        <div className="result-text">=</div>
        <ResultOutput result={result} />
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default ConverterForm;
