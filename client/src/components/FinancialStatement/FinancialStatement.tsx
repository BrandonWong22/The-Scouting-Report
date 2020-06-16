import React, { Component } from "react";
import "./FinancialStatement.scss";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FinancialLineGraph from "../FinancialLineGraph/FinancialLineGraph";
import FinancialBarGraph from "../FinanacialBarGraph/FinancialBarGraph";
import FinancialRadarGraph from "../FinancialRadarGraph/FinancialRadarGraph";
import CompanyDataCardList from "../ComapnyDataCardList/CompanyDataCardList";
import axios from "axios";

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
  };

  componentDidMount() {
    console.log(this.props.companySymbol);

    axios
      .get(
        `https://financialmodelingprep.com/api/v3/income-statement/${this.props.companySymbol}?apikey=d084cd25905084810ee3429ed54c83d9`
      )
      .then((response) => {
        console.log(response.data);
      });
  }

  componentDidUpdate(_: any, prevState: { loading: string; annual: boolean }) {
    if (this.state.loading !== prevState.loading) {
      if (this.state.loading === "line") {
        this.setState({
          buttonLine:
            "financials__button financials__button--line financials__button--selected",
          buttonBar: "financials__button financials__button--bar",
          buttonRadar: "financials__button financials__button--radar",
          buttonFinancials: "financials__button financials__button--financials",
        });
      } else if (this.state.loading === "bar") {
        this.setState({
          buttonLine: "financials__button financials__button--line",
          buttonBar:
            "financials__button financials__button--bar financials__button--selected",
          buttonRadar: "financials__button financials__button--radar",
          buttonFinancials: "financials__button financials__button--financials",
        });
      } else if (this.state.loading === "radar") {
        this.setState({
          buttonLine: "financials__button financials__button--line",
          buttonBar: "financials__button financials__button--bar",
          buttonRadar:
            "financials__button financials__button--radar financials__button--selected",
          buttonFinancials: "financials__button financials__button--financials",
        });
      } else if (this.state.loading === "financials") {
        this.setState({
          buttonLine: "financials__button financials__button--line",
          buttonBar: "financials__button financials__button--bar",
          buttonRadar: "financials__button financials__button--radar",
          buttonFinancials:
            "financials__button financials__button--financials financials__button--selected",
        });
      }
    }

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

  renderLineGraph = () => {
    if (this.props.financialsRevenue.length !== 0) {
      return (
        <FinancialLineGraph
          financialsDates={this.props.financialsDates}
          financialsRevenue={this.props.financialsRevenue}
          financialsCostOfRevenue={this.props.financialsCostOfRevenue}
          financialsGrossProfit={this.props.financialsGrossProfit}
          financialsNetIncome={this.props.financialsNetIncome}
          financialsCostAndExpenses={this.props.financialsCostAndExpenses}
          financialsOperatingExpenses={this.props.financialsOperatingExpenses}
        />
      );
    }
  };

  renderBarGraph = () => {
    if (this.props.financialsRevenue.length !== 0) {
      return (
        <FinancialBarGraph
          financialsDates={this.props.financialsDates}
          financialsRevenue={this.props.financialsRevenue}
          financialsCostOfRevenue={this.props.financialsCostOfRevenue}
          financialsGrossProfit={this.props.financialsGrossProfit}
          financialsNetIncome={this.props.financialsNetIncome}
          financialsCostAndExpenses={this.props.financialsCostAndExpenses}
          financialsOperatingExpenses={this.props.financialsOperatingExpenses}
        />
      );
    }
  };

  renderRadarGraph = () => {
    if (this.props.financialsRevenue.length !== 0) {
      return (
        <FinancialRadarGraph
          financialsDates={this.props.financialsDates}
          financialsRevenue={this.props.financialsRevenue}
          financialsCostOfRevenue={this.props.financialsCostOfRevenue}
          financialsGrossProfit={this.props.financialsGrossProfit}
          financialsNetIncome={this.props.financialsNetIncome}
          financialsCostAndExpenses={this.props.financialsCostAndExpenses}
          financialsOperatingExpenses={this.props.financialsOperatingExpenses}
        />
      );
    }
  };

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

  handleLineButtonClick = () => {
    this.setState({
      loading: "line",
    });
  };

  handleBarButtonClick = () => {
    this.setState({
      loading: "bar",
    });
  };

  handleRadarButtonClick = () => {
    this.setState({
      loading: "radar",
    });
  };

  handleFinancialsButtonClick = () => {
    this.setState({
      loading: "financials",
    });
  };

  render() {
    console.log(this.state.loading);

    return (
      <div className="financials__data-ctn">
        <div className="financials__button-ctn">
          <button
            onClick={this.handleQuarterlyButtonClick}
            className={this.state.quarterlyClassName}
          >
            Quarterly
          </button>
          <button
            onClick={this.handleAnnualButtonClick}
            className={this.state.annualClassName}
          >
            Annual
          </button>
        </div>
        <div className="financials__button-ctn">
          <button
            onClick={this.handleLineButtonClick}
            className={this.state.buttonLine}
          >
            Line Graph
          </button>
          <button
            onClick={this.handleBarButtonClick}
            className={this.state.buttonBar}
          >
            Bar Graph
          </button>
          <button
            onClick={this.handleRadarButtonClick}
            className={this.state.buttonRadar}
          >
            Radar Graph
          </button>
          <button
            onClick={this.handleFinancialsButtonClick}
            className={this.state.buttonFinancials}
          >
            Financial Statement
          </button>
        </div>
        <div className="financials__graph-ctn">
          {this.state.loading === "line" && this.renderLineGraph()}
          {this.state.loading === "bar" && this.renderBarGraph()}
          {this.state.loading === "radar" && this.renderRadarGraph()}
          {this.state.loading === "financials" && (
            <CompanyDataCardList
              financialsDates={this.props.financialsDates}
              financialsRevenue={this.props.financialsRevenue}
              financialsCostOfRevenue={this.props.financialsCostOfRevenue}
              financialsGrossProfit={this.props.financialsGrossProfit}
              financialsNetIncome={this.props.financialsNetIncome}
              financialsCostAndExpenses={this.props.financialsCostAndExpenses}
              financialsOperatingExpenses={
                this.props.financialsOperatingExpenses
              }
            />
          )}
        </div>
      </div>
    );
  }
}

export default FinancialStatement;
