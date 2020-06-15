import React from "react";
import { Line } from "react-chartjs-2";

interface StockDailyGraphProps {
  stockDailyPrices: Array<number>;
  stockDailyTimes: Array<string>;
}

const StockDailyGraph: React.FC<StockDailyGraphProps> = (props) => {
  const { stockDailyPrices, stockDailyTimes } = props;

  const data: { labels: Array<string>; datasets: Array<Object> } = {
    labels: stockDailyTimes,
    datasets: [
      {
        label: "Stock Prices in USD",
        data: stockDailyPrices,
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  let minRange: number = Math.min(...props.stockDailyPrices);
  let maxRange: number = Math.max(...props.stockDailyPrices);
  let range: number = (maxRange - minRange) / 5;

  const options: {
    title: Object;
    scales: Object;
    responsive: boolean;
    maintainAspectRatio: boolean;
  } = {
    title: {
      display: true,
      text: "Daily Stock Price Tracker",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: minRange - range,
            max: maxRange + range,
            stepSize: range,
          },
          scaleLabel: {
            display: true,
            labelString: "Price in USD",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Time is Set in Military Time",
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};

export default StockDailyGraph;
