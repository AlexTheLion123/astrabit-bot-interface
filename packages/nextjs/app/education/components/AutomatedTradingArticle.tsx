import React from "react";

const AutomatedTradingArticle: React.FC<{ isExpanded: boolean; toggleExpand: () => void }> = ({
  isExpanded,
  toggleExpand,
}) => {
  return (
    <div className="my-5 border p-4 rounded-lg">
      <h3 className="text-xl">Basics of Automated Trading 🪐</h3>
      <button className="mt-2 mb-4 text-green-500" onClick={toggleExpand}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>

      {isExpanded && (
        <div>
          <h4>Overview of Automated Trading</h4>
          <p>
            Automated trading, also known as algorithmic trading or algo-trading, is a method of executing trades using
            computer programs and specific instructions for entering and exiting positions. Below is an overview of the
            basics:
          </p>

          <h5>What is Automated Trading?</h5>
          <p>
            At its core, automated trading involves creating a set of rules for trade entries and exits that can be
            executed automatically by a computer. These rules can be based on various factors such as:
          </p>
          <ol>
            <li>Price action</li>
            <li>Technical indicators</li>
            <li>Fundamental data</li>
            <li>External events</li>
          </ol>
          <p>
            Once set up, the system can monitor the markets and place trades on behalf of the user without manual
            intervention.
          </p>

          <h5>Developing a Trading Strategy</h5>
          <p>
            The process typically begins with the trader or developer creating a trading strategy. This strategy is then
            translated into a computer program using a programming language that the trading platform supports. Common
            languages include:
          </p>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>Proprietary languages specific to certain trading platforms</li>
          </ul>

          <h5>Advantages of Automated Trading</h5>
          <p>One of the key advantages of automated trading is its ability to:</p>
          <ul>
            <li>
              <strong>Remove emotional decision-making</strong> from the trading process.
            </li>
            <li>
              <strong>Execute trades much faster</strong> than a human could, potentially capitalizing on small price
              movements.
            </li>
            <li>
              <strong>Simultaneously monitor and trade multiple markets and instruments</strong>, which would be
              challenging for a human trader.
            </li>
          </ul>

          <h5>Risks of Automated Trading</h5>
          <p>
            However, automated trading is not without risks. Systems need to be thoroughly tested before being used with
            real money. This usually involves:
          </p>
          <ul>
            <li>
              <strong>Backtesting:</strong> Testing the strategy on historical data.
            </li>
            <li>
              <strong>Forward testing:</strong> Running the strategy on a demo account with live market data.
            </li>
          </ul>
          <p>
            It is also crucial to regularly monitor the system to ensure it is performing as expected and to make
            adjustments as market conditions change.
          </p>

          <h5>Complexity of Trading Systems</h5>
          <p>
            Automated trading systems can range from simple strategies that execute based on moving average crossovers
            to highly complex systems that use machine learning algorithms to adapt to changing market conditions. The
            complexity of the system often depends on:
          </p>
          <ul>
            <li>The traders expertise</li>
            <li>The markets being traded</li>
            <li>The specific goals of the trading strategy</li>
          </ul>

          <h5>Conclusion</h5>
          <p>
            While automated trading can potentially be very profitable, it requires a significant investment of time in
            development, testing, and ongoing maintenance. It also requires a solid understanding of both trading
            concepts and programming principles.
          </p>
          <p>
            As with any form of trading, there is always the risk of financial loss, and past performance does not
            guarantee future results.
          </p>
        </div>
      )}
    </div>
  );
};

export default AutomatedTradingArticle;
