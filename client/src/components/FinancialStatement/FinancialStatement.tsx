import React, { Component } from "react";
import "./FinancialStatement.scss";
import axios from "axios";
import FinancialStatementGraphs from "../FinancialStatementGraphs/FinancialStatementGraphs";

class FinancialStatement extends Component<
  FinancialStatementProps,
  FinancialStatementState
> {
  state = {
    tabIndex: 0,
    loading: "line",
    buttonLine:
      "financials__button financials__button--line financials__button--selected",
    buttonBar: "financials__button financials__button--bar",
    buttonRadar: "financials__button financials__button--radar",
    buttonFinancials: "financials__button financials__button--financials",
    annual: false,
    quarterlyClassName:
      "financials__button financials__button--quarterly financials__button--selected",
    annualClassName: "financials__button financials__button--annual",
    financialsAnnualDates: [],
    financialsAnnualRevenue: [],
    financialsAnnualCostOfRevenue: [],
    financialsAnnualGrossProfit: [],
    financialsAnnualNetIncome: [],
    financialsAnnualCostAndExpenses: [],
    financialsAnnualOperatingExpenses: [],
    financialsQuarterlyDates: [],
    financialsQuarterlyRevenue: [],
    financialsQuarterlyCostOfRevenue: [],
    financialsQuarterlyGrossProfit: [],
    financialsQuarterlyNetIncome: [],
    financialsQuarterlyCostAndExpenses: [],
    financialsQuarterlyOperatingExpenses: [],
  };

  componentDidMount() {
    this.fetchAnnualFinancials(this.props.companySymbol);
    this.fetchQuarterlyFinancials(this.props.companySymbol);
  }

  fetchQuarterlyFinancials = (symbol: string) => {
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/income-statement/${symbol}?period=quarter&apikey=d084cd25905084810ee3429ed54c83d9`
      )
      .then((response) => {
        //filter response data to only get the last 8 quarters of data
        let filteredFinancialData: Array<object> = response.data.splice(0, 5);

        let datesArr: Array<string> = [];
        let revenueArr: Array<number> = [];
        let costOfRevenueArr: Array<number> = [];
        let grossProfitArr: Array<number> = [];
        let netIncomeArr: Array<number> = [];
        let costAndExpensesArr: Array<number> = [];
        let operatingExpensesArr: Array<number> = [];

        //append data to respective dummy arrays
        filteredFinancialData.forEach((element: any) => {
          datesArr.push(element.date);
          revenueArr.push(element.revenue / 1000000000);
          costOfRevenueArr.push(element.costOfRevenue / 1000000000);
          grossProfitArr.push(element.grossProfit / 1000000000);
          netIncomeArr.push(element.netIncome / 1000000000);
          costAndExpensesArr.push(element.costAndExpenses / 1000000000);
          operatingExpensesArr.push(element.operatingExpenses / 1000000000);
        });

        this.setState({
          financialsQuarterlyDates: datesArr.reverse(),
          financialsQuarterlyRevenue: revenueArr.reverse(),
          financialsQuarterlyCostOfRevenue: costOfRevenueArr.reverse(),
          financialsQuarterlyGrossProfit: grossProfitArr.reverse(),
          financialsQuarterlyNetIncome: netIncomeArr.reverse(),
          financialsQuarterlyCostAndExpenses: costAndExpensesArr.reverse(),
          financialsQuarterlyOperatingExpenses: operatingExpensesArr.reverse(),
        });
      });
  };

  fetchAnnualFinancials = (symbol: string) => {
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/income-statement/${symbol}?apikey=d084cd25905084810ee3429ed54c83d9`
      )
      .then((response) => {
        console.log(response.data);
        let filteredFinancialData: Array<object> = response.data.splice(0, 5);

        let annualDatesArr: Array<string> = [];
        let annualRevenueArr: Array<number> = [];
        let annualCostOfRevenueArr: Array<number> = [];
        let annualGrossProfitArr: Array<number> = [];
        let annualNetIncomeArr: Array<number> = [];
        let annualCostAndExpensesArr: Array<number> = [];
        let annualOperatingExpensesArr: Array<number> = [];

        //append data to respective dummy arrays
        filteredFinancialData.forEach((element: any) => {
          annualDatesArr.push(element.date);
          annualRevenueArr.push(element.revenue / 1000000000);
          annualCostOfRevenueArr.push(element.costOfRevenue / 1000000000);
          annualGrossProfitArr.push(element.grossProfit / 1000000000);
          annualNetIncomeArr.push(element.netIncome / 1000000000);
          annualCostAndExpensesArr.push(element.costAndExpenses / 1000000000);
          annualOperatingExpensesArr.push(
            element.operatingExpenses / 1000000000
          );
        });

        this.setState({
          financialsAnnualDates: annualDatesArr.reverse(),
          financialsAnnualRevenue: annualRevenueArr.reverse(),
          financialsAnnualCostOfRevenue: annualCostOfRevenueArr.reverse(),
          financialsAnnualGrossProfit: annualGrossProfitArr.reverse(),
          financialsAnnualNetIncome: annualNetIncomeArr.reverse(),
          financialsAnnualCostAndExpenses: annualCostAndExpensesArr.reverse(),
          financialsAnnualOperatingExpenses: annualOperatingExpensesArr.reverse(),
        });
      });
  };

  componentDidUpdate(_: any, prevState: { annual: boolean }) {
    if (this.state.annual !== prevState.annual) {
      if (this.state.annual) {
        this.setState({
          quarterlyClassName:
            "financials__button financials__button--quarterly",
          annualClassName:
            "financials__button financials__button--annual financials__button--selected",
        });
      } else {
        this.setState({
          quarterlyClassName:
            "financials__button financials__button--quarterly financials__button--selected",
          annualClassName: "financials__button financials__button--annual",
        });
      }
    }
  }

  handleQuarterlyButtonClick = () => {
    this.setState({
      annual: false,
    });
  };

  handleAnnualButtonClick = () => {
    this.setState({
      annual: true,
    });
  };

  render() {
    const { darkMode } = this.props;
    return (
      <div className="financials__data-ctn">
        <div className="financials__button-ctn">
          <button
            onClick={this.handleQuarterlyButtonClick}
            className={
              darkMode
                ? this.state.quarterlyClassName + " financials__button--dark"
                : this.state.quarterlyClassName + " financials__button--light"
            }
          >
            Quarterly
          </button>
          <button
            onClick={this.handleAnnualButtonClick}
            className={
              darkMode
                ? this.state.annualClassName + " financials__button--dark"
                : this.state.annualClassName + " financials__button--light"
            }
          >
            Annual
          </button>
        </div>

        {!this.state.annual && (
          <>
            <FinancialStatementGraphs
              financialsDates={this.state.financialsQuarterlyDates}
              financialsRevenue={this.state.financialsQuarterlyRevenue}
              financialsCostOfRevenue={
                this.state.financialsQuarterlyCostOfRevenue
              }
              financialsGrossProfit={this.state.financialsQuarterlyGrossProfit}
              financialsNetIncome={this.state.financialsQuarterlyNetIncome}
              financialsCostAndExpenses={
                this.state.financialsQuarterlyCostAndExpenses
              }
              financialsOperatingExpenses={
                this.state.financialsQuarterlyOperatingExpenses
              }
              darkMode={darkMode}
              title={"Financial Statement for the Past 5 Quarters"}
            />
          </>
        )}
        {this.state.annual && (
          <FinancialStatementGraphs
            financialsDates={this.state.financialsAnnualDates}
            financialsRevenue={this.state.financialsAnnualRevenue}
            financialsCostOfRevenue={this.state.financialsAnnualCostOfRevenue}
            financialsGrossProfit={this.state.financialsAnnualGrossProfit}
            financialsNetIncome={this.state.financialsAnnualNetIncome}
            financialsCostAndExpenses={
              this.state.financialsAnnualCostAndExpenses
            }
            financialsOperatingExpenses={
              this.state.financialsAnnualOperatingExpenses
            }
            darkMode={darkMode}
            title={"Financial Statement for the Past 5 Years"}
          />
        )}
      </div>
    );
  }
}

export default FinancialStatement;
