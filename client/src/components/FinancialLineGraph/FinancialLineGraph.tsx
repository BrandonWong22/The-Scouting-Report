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
  const {
    financialsRevenue,
    financialsCostOfRevenue,
    financialsGrossProfit,
    financialsNetIncome,
    financialsCostAndExpenses,
    financialsOperatingExpenses,
  } = props;

  console.log(financialsNetIncome);

  const data = {
    labels: props.financialsDates,
    datasets: [
      {
        label: "Total Revenue",
        data: financialsRevenue,
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
      {
        label: "Cost of Rvenue",
        data: financialsCostOfRevenue,
        borderColor: ["rgba(54, 162, 235, 0.2)"],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBorderColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "Gross Profit",
        data: financialsGrossProfit,
        borderColor: ["rgba(161, 246, 161, 0.2)"],
        backgroundColor: ["rgba(161, 246, 161, 0.2)"],
        pointBackgroundColor: ["rgba(161, 246, 161, 0.2)"],
        pointBorderColor: ["rgba(161, 246, 161, 0.2)"],
      },
      {
        label: "Net Income",
        data: financialsNetIncome,
        borderColor: ["rgba(21, 21, 146, 0.2)"],
        backgroundColor: ["rgba(21, 21, 146, 0.2)"],
        pointBackgroundColor: "rgba(21, 21, 146, 0.2)",
        pointBorderColor: "rgba(21, 21, 146, 0.2)",
      },
      {
        label: "Cost and Expenses",
        data: financialsCostAndExpenses,
        borderColor: ["rgba(109, 64, 109, 0.2)"],
        backgroundColor: ["rgba(109, 64, 109, 0.2)"],
        pointBackgroundColor: "rgba(109, 64, 109, 0.2)",
        pointBorderColor: "rgba(109, 64, 109, 0.2)",
      },
      {
        label: "Operating Expenses",
        data: financialsOperatingExpenses,
        borderColor: ["rgba(248, 124, 124, 0.2)"],
        backgroundColor: ["rgba(248, 124, 124, 0.2)"],
        pointBackgroundColor: "rgba(248, 124, 124, 0.2)",
        pointBorderColor: "rgba(248, 124, 124, 0.2)",
      },
    ],
  };

  const options = {
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
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};

export default FinancialLineGraph;
