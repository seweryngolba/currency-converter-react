import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    fetchCurrencyData();
    // eslint-disable-next-line
  }, []);

  const fetchCurrencyData = () => {
    fetch(`${apiUrl}${selectedCurrency}/`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.rates?.length > 0 && data.rates[0].mid) {
          const currencyValue = data.rates[0].mid;
          calculate(currencyValue);
        } else {
          alert("Failed to read currency converter");
        }
      })
      .catch((error) => alert(error));
  };

  const calculate = (currencyValue) => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      setResult("");
      return;
    }
    const calculatedValue = parsedAmount * currencyValue;
    if (parsedAmount <= 0) {
      setResult("");
      return;
    }
    setResult(calculatedValue.toFixed(2) + " PLN");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setResult("");
      setAmount("");
      alert("Enter a valid value greater than 0");
      return;
    }
    fetchCurrencyData();
  };

  return (
    <form className="converter" onSubmit={handleSubmit}>
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
        <div className="equal-sign">=</div>
        <ResultOutput result={result} />
      </div>
    </form>
  );
}

export default ConverterForm;
