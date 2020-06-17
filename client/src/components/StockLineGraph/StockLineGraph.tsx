import React from "react";
import { Line } from "react-chartjs-2";

const StockLineGraph: React.FC<StockLineGraphProps> = (props) => {
  const { stockData, stockDataDateLabel, color, title, timeScaleTitle } = props;

  const data: { labels: Array<string>; datasets: Array<Object> } = {
    labels: stockDataDateLabel,
    datasets: [
      {
        label: "Stock Prices in USD",
        data: stockData,
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  let minRange: number = Math.min(...props.stockData);
  let maxRange: number = Math.max(...props.stockData);
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
      text: title,
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
            lineWidth: 0.45,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: timeScaleTitle,
            fontColor: color,
          },
          gridLines: {
            color: color,
            lineWidth: 0.45,
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
