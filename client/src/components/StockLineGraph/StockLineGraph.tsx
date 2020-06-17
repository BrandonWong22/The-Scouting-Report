import React from "react";
import { Line } from "react-chartjs-2";

interface StockLineGraphProps {
  stockData30: any;
  stockData30DateLabel: Array<string>;
  color: string;
}

const StockLineGraph: React.FC<StockLineGraphProps> = (props) => {
  const { stockData30, stockData30DateLabel, color } = props;

  const data: { labels: Array<string>; datasets: Array<Object> } = {
    labels: stockData30DateLabel,
    datasets: [
      {
        label: "Stock Prices in USD",
        data: stockData30,
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  let minRange: number = Math.min(...props.stockData30);
  let maxRange: number = Math.max(...props.stockData30);
  let range: number = (maxRange - minRange) / 5;

  const options: {
    title: Object;
    scales: Object;
    responsive: boolean;
    maintainAspectRatio: boolean;
    legend: Object;
  } = {
    legend: {
      labels: {
        fontColor: color,
      },
    },
    title: {
      display: true,
      text: "Stock Prices for the Past 30 Days",
      fontColor: color,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            min: minRange - range,
            max: maxRange + range,
            stepSize: range,
            fontColor: color,
          },
          scaleLabel: {
            display: true,
            labelString: "Price in USD",
            fontColor: color,
          },
          gridLines: {
            color: color,
            lineWidth: 1,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Date in (YYYY-MM-DD)",
            fontColor: color,
          },
          gridLines: {
            color: color,
            lineWidth: 1,
          },
          ticks: {
            fontColor: color,
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};

export default StockLineGraph;
