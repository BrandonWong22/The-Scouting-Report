import React from "react";
import { Radar } from "react-chartjs-2";

const FinancialRadarGraph: React.FC<FinancialRadarGraphProps> = (props) => {
  const {
    financialsRevenue,
    financialsCostOfRevenue,
    financialsGrossProfit,
    financialsNetIncome,
    financialsCostAndExpenses,
    financialsOperatingExpenses,
    financialsDates,
  } = props;

  const data = {
    labels: financialsDates,
    datasets: [
      {
        label: "Total Revenue",
        data: financialsRevenue,
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
      {
        label: "Cost of Revenue",
        data: financialsCostOfRevenue,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
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
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Radar Graph of Financial Statement",
    },
    scale: {
      reverse: false,
      gridLines: {
        color: [
          "black",
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "indigo",
          "violet",
        ],
      },
      ticks: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Radar data={data} options={options} />;
};

export default FinancialRadarGraph;
