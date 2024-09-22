"use client";

import React from "react";

const AstrabitTradingArticle: React.FC<{ isExpanded: boolean; toggleExpand: () => void }> = ({
  isExpanded,
  toggleExpand,
}) => {
  return (
    <div className="my-5 border p-4 rounded-lg">
      <h3 className="text-xl">How Automated Trading with Astrabit Works 🧑‍🚀</h3>
      <button className="mt-2 mb-4 text-green-500" onClick={toggleExpand}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>

      {isExpanded && (
        <div>
          <p>
            An automated trading strategy operating through an API connected to a centralized exchange typically
            functions as follows:
          </p>
          <p>
            The strategy begins with a program or script running on a server or local machine. This program is coded to
            implement specific trading rules and algorithms. It continuously monitors market data and executes trades
            based on predefined conditions.
          </p>
          <p>
            The program connects to the exchange&apos;s API using secure authentication methods, usually involving API
            keys and secret keys provided by the exchange. This connection allows the program to receive real-time
            market data and send trading orders.
          </p>

          <h5>Key Functions of the Program:</h5>
          <ul>
            <li>
              <strong>Data Retrieval:</strong> It constantly fetches current market data such as price, volume, and
              order book information for the relevant trading pairs. This data forms the basis for the strategy&apos;s
              decision-making process.
            </li>
            <li>
              <strong>Analysis:</strong> The program processes this data according to its coded rules. This might
              involve calculating technical indicators, identifying patterns, or applying more complex statistical
              models.
            </li>
            <li>
              <strong>Decision Making:</strong> Based on the analysis, the program decides whether to enter a trade,
              exit an existing position, or hold current positions. These decisions are made in real-time as new data
              comes in.
            </li>
            <li>
              <strong>Order Execution:</strong> When a trading signal is generated, the program automatically sends the
              appropriate order (buy, sell, limit, market, etc.) to the exchange via the API. It then monitors the order
              status for confirmation of execution.
            </li>
            <li>
              <strong>Position and Risk Management:</strong> The program keeps track of open positions, account balance,
              and other key metrics. It may adjust positions or implement stop-losses and take-profit orders as needed.
            </li>
            <li>
              <strong>Logging and Reporting:</strong> Throughout its operation, the program typically logs all actions
              and results for later analysis and performance evaluation.
            </li>
          </ul>

          <p>
            This cycle of data retrieval, analysis, decision-making, and execution happens continuously, often many
            times per second, allowing the strategy to respond quickly to market changes. The speed and efficiency of
            this process is one of the key advantages of automated trading.
          </p>
          <p>
            It&apos;s important to note that while the strategy operates autonomously, it requires careful setup,
            monitoring, and periodic adjustment by the trader or developer. This includes setting appropriate risk
            parameters, ensuring the program can handle various market scenarios, and adapting the strategy as market
            conditions evolve.
          </p>
        </div>
      )}
    </div>
  );
};

export default AstrabitTradingArticle;
