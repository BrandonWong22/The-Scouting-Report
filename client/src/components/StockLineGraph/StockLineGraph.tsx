import React from "react";
import { Line } from "react-chartjs-2";

interface StockLineGraphProps {
  stockData30: any;
  stockData30DateLabel: Array<string>;
}

const StockLineGraph: React.FC<StockLineGraphProps> = (props) => {
  const { stockData30, stockData30DateLabel } = props;

  const data: { labels: Array<string>; datasets: Array<Object> } = {
    labels: stockData30DateLabel,
    datasets: [
      {
        label: "Stock Prices",
        data: stockData30,
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  const options: {
    title: Object;
    scales: Object;
    responsive: boolean;
    maintainAspectRatio: boolean;
  } = {
    title: {
      display: true,
      text: "Stock Prices for the Past 30 Days",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: Math.min(...props.stockData30) - 10,
            max: Math.max(...props.stockData30) + 10,
            stepSize: 5,
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
            labelString: "Date in (YYYY-MM-DD)",
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
