"use client";

import React from "react";

const AvoidingOverfittingArticle: React.FC<{ isExpanded: boolean; toggleExpand: () => void }> = ({
  isExpanded,
  toggleExpand,
}) => {
  return (
    <div className="my-5 border p-4 rounded-lg">
      <h3 className="text-xl">How to Avoid Overfitting 🚀</h3>
      <button className="mt-2 mb-4 text-green-500" onClick={toggleExpand}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>

      {isExpanded && (
        <div>
          <p>
            Overfitting in trading strategies happens when a model is excessively tailored to past data, leading to
            unreliable performance in real-world conditions.
          </p>

          <h5>To mitigate this risk:</h5>
          <ul>
            <li>
              Employ out-of-sample testing and cross-validation methods to verify your strategy&rsquo;s adaptability and
              resilience.
            </li>
            <li>Avoid excessive parameter optimization, as this can diminish real-world effectiveness.</li>
            <li>
              Test your strategy across various trading pairs and timeframes. If performance significantly deteriorates,
              it may indicate overfitting.
            </li>
          </ul>

          <h5>Overfitting in trading algorithms can stem from several factors:</h5>
          <ul>
            <li>
              <strong>Over-optimization:</strong> Excessive parameter tuning or frequent strategy adjustments to
              maximize historical performance often lead to overfitting. This results in strategies that are too
              specialized for past data and struggle with new market conditions.
            </li>
            <li>
              <strong>Data limitations:</strong> Using insufficient or non-representative data samples can cause an
              algorithm to become overly attuned to specific data characteristics. This highlights the importance of
              diverse, comprehensive, and high-quality datasets for strategy development.
            </li>
            <li>
              <strong>Model complexity:</strong> Overly intricate models with numerous variables risk fitting to noise
              rather than genuine market patterns. Simpler models often demonstrate better adaptability to new data and
              changing market conditions.
            </li>
            <li>
              <strong>Neglecting real-world costs:</strong> Failing to account for trading fees, slippage, and other
              transaction costs during development can create a significant gap between backtested and live trading
              results. These costs can substantially impact actual performance.
            </li>
          </ul>

          <p>
            By addressing these issues, traders can develop more robust and generalizable strategies that perform
            consistently across various market scenarios. A robust strategy should maintain relatively consistent
            performance across different market conditions and instruments. Substantial variability in results often
            suggests the strategy may be overfitted to specific historical patterns rather than capturing genuine market
            dynamics.
          </p>
        </div>
      )}
    </div>
  );
};

export default AvoidingOverfittingArticle;
