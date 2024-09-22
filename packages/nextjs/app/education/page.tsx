"use client";

import { useState } from "react";
import AstrabitTradingArticle from "./components/ArstrabitTradingArticle";
import AutomatedTradingArticle from "./components/AutomatedTradingArticle";
import AvoidingOverfittingArticle from "./components/AvoidingOverfittingArticle";
import RiskManagementArticle from "./components/RiskManagementArticle";
import type { NextPage } from "next";

const articles = [
  { id: 1, component: AutomatedTradingArticle, title: "Basics of Automated Trading" },
  { id: 2, component: AstrabitTradingArticle, title: "How Automated Trading with Astrabit Works" },
  { id: 3, component: RiskManagementArticle, title: "Risk Management" },
  { id: 4, component: AvoidingOverfittingArticle, title: "How to Avoid Overfitting" },
];

const Education: NextPage = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <div className="mt-4 bg-base-100 p-10">
        <h1 className="text-4xl mb-4-0">Blog</h1>

        {articles.map((article, index) => {
          const ArticleComponent = article.component;
          return (
            <ArticleComponent
              key={article.id}
              isExpanded={expandedIndex === index}
              toggleExpand={() => toggleExpand(index)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Education;
