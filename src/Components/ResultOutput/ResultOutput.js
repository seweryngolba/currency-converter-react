import React from "react";
import "./ResultOutput.css";

function ResultOutput({ result }) {
  return (
    <div className="total-amount">
      <output className="result-text">{result}</output>
    </div>
  );
}

export default ResultOutput;
