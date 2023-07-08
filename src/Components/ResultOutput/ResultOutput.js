import React from "react";
import "./ResultOutput.css";

function ResultOutput({ result }) {
  return (
    <div className="total-amount">
      <output className="counted">{result}</output>
    </div>
  );
}

export default ResultOutput;
