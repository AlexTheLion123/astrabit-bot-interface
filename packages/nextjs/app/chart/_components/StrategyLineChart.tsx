"use client";

import { FC } from "react";
import {
  Chart as ChartJS,
  ChartOptions,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface StrategyLineChartProps {
  timestamps: string[];
  usdValues: number[];
}

export const StrategyLineChart: FC<StrategyLineChartProps> = ({ timestamps, usdValues }: StrategyLineChartProps) => {
  // Determine background color based on whether the USD value increased or decreased
  const backgroundColor =
    usdValues[usdValues.length - 1] > usdValues[0]
      ? "rgba(0, 255, 0, 0.2)" // Green if the final value is higher
      : "rgba(255, 0, 0, 0.2)"; // Red if the final value is lower

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: "Total USD Value",
        data: usdValues,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: backgroundColor, // Set dynamic background color
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Strategy Performance (USD)",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        title: {
          display: true,
          text: "Timestamp",
        },
      },
      y: {
        title: {
          display: true,
          text: "Total USD Value",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};
