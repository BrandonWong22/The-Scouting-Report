import React from "react";
import "./FinancialBarGraph.scss";
import { Bar } from "react-chartjs-2";

interface FinancialBarGraphProps {
  financialsDates: Array<string>;
  financialsRevenue: Array<number>;
  financialsCostOfRevenue: Array<number>;
  financialsGrossProfit: Array<number>;
  financialsNetIncome: Array<number>;
  financialsCostAndExpenses: Array<number>;
  financialsOperatingExpenses: Array<number>;
}

const FinancialBarGraph: React.FC<FinancialBarGraphProps> = (props) => {
  const {
    financialsRevenue,
    financialsCostOfRevenue,
    financialsGrossProfit,
    financialsNetIncome,
    financialsCostAndExpenses,
    financialsOperatingExpenses,
    financialsDates,
  } = props;

  console.log(financialsRevenue);

  const data = {
    labels: financialsDates,
    datasets: [
      {
        label: "Total Revenue",
        data: financialsRevenue,
        borderColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
      },
      {
        label: "Cost of Revenue",
        data: financialsCostOfRevenue,
        borderColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
      },
      {
        label: "Gross Profit",
        data: financialsGrossProfit,
        borderColor: [
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
        ],
        backgroundColor: [
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
          "rgba(161, 246, 161, 0.2)",
        ],
      },
      {
        label: "Net Income",
        data: financialsNetIncome,
        borderColor: [
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
        ],
        backgroundColor: [
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
          "rgba(21, 21, 146, 0.2)",
        ],
      },
      {
        label: "Cost and Expenses",
        data: financialsCostAndExpenses,
        borderColor: [
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
        ],
        backgroundColor: [
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
          "rgba(109, 64, 109, 0.2)",
        ],
      },
      {
        label: "Operating Expenses",
        data: financialsOperatingExpenses,
        borderColor: [
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
        ],
        backgroundColor: [
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
          "rgba(248, 124, 124, 0.2)",
        ],
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
      text: "Financial Statement from the Past 8 Quarters",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min:
              Math.min(
                ...props.financialsRevenue,
                ...props.financialsCostAndExpenses,
                ...props.financialsGrossProfit,
                ...props.financialsNetIncome,
                ...props.financialsOperatingExpenses,
                ...props.financialsCostOfRevenue
              ) - 400,
            max:
              Math.max(
                ...props.financialsRevenue,
                ...props.financialsCostAndExpenses,
                ...props.financialsGrossProfit,
                ...props.financialsNetIncome,
                ...props.financialsOperatingExpenses,
                ...props.financialsCostOfRevenue
              ) + 400,
            stepSize: 1000,
            scaleLabel: {
              display: true,
              labelString: "Price in USD",
            },
          },
          scaleLabel: {
            display: true,
            labelString: "Price in USD (In $$$)",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Financial Quarter. Date in (YYYY-MM-DD)",
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  return <Bar data={data} options={options} />;
};

export default FinancialBarGraph;
