import React from "react";
import { Line } from "react-chartjs-2";

const FinancialLineGraph: React.FC<FinancialLineGraphProps> = (props) => {
  const {
    financialsRevenue,
    financialsCostOfRevenue,
    financialsGrossProfit,
    financialsNetIncome,
    financialsCostAndExpenses,
    financialsOperatingExpenses,
    financialsDates,
    title,
    color,
  } = props;

  const data = {
    labels: financialsDates,
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

  let maxRange: number = Math.max(
    ...props.financialsRevenue,
    ...props.financialsCostAndExpenses,
    ...props.financialsGrossProfit,
    ...props.financialsNetIncome,
    ...props.financialsOperatingExpenses,
    ...props.financialsCostOfRevenue
  );

  let minRange: number = Math.min(
    ...props.financialsRevenue,
    ...props.financialsCostAndExpenses,
    ...props.financialsGrossProfit,
    ...props.financialsNetIncome,
    ...props.financialsOperatingExpenses,
    ...props.financialsCostOfRevenue
  );

  let range: number = (maxRange - minRange) / 12;

  const options = {
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
            min: minRange - range / 2,
            max: maxRange + range / 2,
            stepSize: range,
            fontColor: color,
          },
          scaleLabel: {
            display: true,
            labelString: "Price in Billions (USD)",
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
            labelString: "Financial Quarter. Date in (YYYY-MM-DD)",
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

export default FinancialLineGraph;
