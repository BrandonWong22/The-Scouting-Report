import React from "react";
import "./FinancialLineGraph.scss";
import { Line } from "react-chartjs-2";

interface FinancialLineGraphProps {
  financialsDates: Array<string>;
  financialsRevenue: Array<number>;
  financialsCostOfRevenue: Array<number>;
  financialsGrossProfit: Array<number>;
  financialsNetIncome: Array<number>;
  financialsCostAndExpenses: Array<number>;
  financialsOperatingExpenses: Array<number>;
}

const FinancialLineGraph: React.FC<FinancialLineGraphProps> = (props) => {
  console.log(props.financialsRevenue);

  const data = {
    labels: props.financialsDates,
    datasets: [
      {
        label: "Sales 2020 (M)",
        data: props.financialsRevenue,
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
      // {
      //   label: "Sales 2019 (M)",
      //   data: [1, 3, 2, 2, 3],
      //   borderColor: ["rgba(54, 162, 235, 0.2)"],
      //   backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      //   pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
      //   pointBorderColor: "rgba(54, 162, 235, 0.2)",
      // },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};

export default FinancialLineGraph;
