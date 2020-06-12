import React from "react";
import { Line } from "react-chartjs-2";

interface StockLineGraphProps {
  stockData30: Array<number>;
  stockData30DateLabel: Array<string>;
}

const StockLineGraph: React.FC<StockLineGraphProps> = (props) => {
  const data: { labels: Array<string>; datasets: Array<Object> } = {
    labels: props.stockData30DateLabel.reverse(),
    datasets: [
      {
        label: "Sales 2020 (M)",
        data: props.stockData30.reverse(),
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  const options: { title: Object; scales: Object } = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: Math.min(...props.stockData30),
            max: Math.max(...props.stockData30),
            stepSize: 1,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};

export default StockLineGraph;
