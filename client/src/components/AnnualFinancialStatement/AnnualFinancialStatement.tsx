import React, { Component } from "react";
import "./AnnualFinancialStatement.scss";
import CompanyDataCardList from "../ComapnyDataCardList/CompanyDataCardList";
import FinancialLineGraph from "../FinancialLineGraph/FinancialLineGraph";
import FinancialBarGraph from "../FinanacialBarGraph/FinancialBarGraph";
import FinancialRadarGraph from "../FinancialRadarGraph/FinancialRadarGraph";

interface AnnualFinancialStatementProps {
  financialsAnnualDates: Array<string>;
  financialsAnnualRevenue: Array<number>;
  financialsAnnualCostOfRevenue: Array<number>;
  financialsAnnualGrossProfit: Array<number>;
  financialsAnnualNetIncome: Array<number>;
  financialsAnnualCostAndExpenses: Array<number>;
  financialsAnnualOperatingExpenses: Array<number>;
}

interface AnnualFinancialStatementState {
  buttonLineAnnual: string;
  buttonBarAnnual: string;
  buttonRadarAnnual: string;
  buttonFinancialsAnnual: string;
  loadingState: string;
}

class AnnualFinancialStatement extends Component<
  AnnualFinancialStatementProps,
  AnnualFinancialStatementState
> {
  state = {
    buttonLineAnnual:
      "annual__button annual__button--line annual__button--selected",
    buttonBarAnnual: "annual__button annual__button--bar",
    buttonRadarAnnual: "annual__button annual__button--radar",
    buttonFinancialsAnnual: "annual__button annual__button--financials",
    loadingState: "line",
  };

  componentDidUpdate(_: any, prevState: { loadingState: string }) {
    if (this.state.loadingState !== prevState.loadingState) {
      if (this.state.loadingState === "line") {
        this.setState({
          buttonLineAnnual:
            "annual__button annual__button--line annual__button--selected",
          buttonBarAnnual: "annual__button annual__button--bar",
          buttonRadarAnnual: "annual__button annual__button--radar",
          buttonFinancialsAnnual: "annual__button annual__button--financials",
        });
      } else if (this.state.loadingState === "bar") {
        this.setState({
          buttonLineAnnual: "annual__button annual__button--line",
          buttonBarAnnual:
            "annual__button annual__button--bar annual__button--selected",
          buttonRadarAnnual: "annual__button annual__button--radar",
          buttonFinancialsAnnual: "annual__button annual__button--financials",
        });
      } else if (this.state.loadingState === "radar") {
        this.setState({
          buttonLineAnnual: "annual__button annual__button--line",
          buttonBarAnnual: "annual__button annual__button--bar",
          buttonRadarAnnual:
            "annual__button annual__button--radar annual__button--selected",
          buttonFinancialsAnnual: "annual__button annual__button--financials",
        });
      } else if (this.state.loadingState === "financials") {
        this.setState({
          buttonLineAnnual: "annual__button annual__button--line",
          buttonBarAnnual: "annual__button annual__button--bar",
          buttonRadarAnnual: "annual__button annual__button--radar",
          buttonFinancialsAnnual:
            "annual__button annual__button--financials annual__button--selected",
        });
      }
    }
  }

  renderLineGraph = () => {
    if (this.props.financialsAnnualRevenue.length !== 0) {
      return (
        <FinancialLineGraph
          financialsDates={this.props.financialsAnnualDates}
          financialsRevenue={this.props.financialsAnnualRevenue}
          financialsCostOfRevenue={this.props.financialsAnnualCostOfRevenue}
          financialsGrossProfit={this.props.financialsAnnualGrossProfit}
          financialsNetIncome={this.props.financialsAnnualNetIncome}
          financialsCostAndExpenses={this.props.financialsAnnualCostAndExpenses}
          financialsOperatingExpenses={
            this.props.financialsAnnualOperatingExpenses
          }
          title={"Financial Statement from the Past 5 Years"}
        />
      );
    }
  };

  renderBarGraph = () => {
    if (this.props.financialsAnnualRevenue.length !== 0) {
      return (
        <FinancialBarGraph
          financialsDates={this.props.financialsAnnualDates}
          financialsRevenue={this.props.financialsAnnualRevenue}
          financialsCostOfRevenue={this.props.financialsAnnualCostOfRevenue}
          financialsGrossProfit={this.props.financialsAnnualGrossProfit}
          financialsNetIncome={this.props.financialsAnnualNetIncome}
          financialsCostAndExpenses={this.props.financialsAnnualCostAndExpenses}
          financialsOperatingExpenses={
            this.props.financialsAnnualOperatingExpenses
          }
          title={"Financial Statement from the Past 5 Years"}
        />
      );
    }
  };

  renderRadarGraph = () => {
    if (this.props.financialsAnnualRevenue.length !== 0) {
      return (
        <FinancialRadarGraph
          financialsDates={this.props.financialsAnnualDates}
          financialsRevenue={this.props.financialsAnnualRevenue}
          financialsCostOfRevenue={this.props.financialsAnnualCostOfRevenue}
          financialsGrossProfit={this.props.financialsAnnualGrossProfit}
          financialsNetIncome={this.props.financialsAnnualNetIncome}
          financialsCostAndExpenses={this.props.financialsAnnualCostAndExpenses}
          financialsOperatingExpenses={
            this.props.financialsAnnualOperatingExpenses
          }
          title={"Financial Statement from the Past 5 Years"}
        />
      );
    }
  };

  handleLineButtonClick = () => {
    this.setState({
      loadingState: "line",
    });
  };

  handleBarButtonClick = () => {
    this.setState({
      loadingState: "bar",
    });
  };

  handleRadarButtonClick = () => {
    this.setState({
      loadingState: "radar",
    });
  };

  handleFinancialsButtonClick = () => {
    this.setState({
      loadingState: "financials",
    });
  };

  render() {
    return (
      <>
        <div className="annual__button-ctn">
          <button
            onClick={this.handleLineButtonClick}
            className={this.state.buttonLineAnnual}
          >
            Line Graph
          </button>
          <button
            onClick={this.handleBarButtonClick}
            className={this.state.buttonBarAnnual}
          >
            Bar Graph
          </button>
          <button
            onClick={this.handleRadarButtonClick}
            className={this.state.buttonRadarAnnual}
          >
            Radar Graph
          </button>
          <button
            onClick={this.handleFinancialsButtonClick}
            className={this.state.buttonFinancialsAnnual}
          >
            Financial Statement
          </button>
        </div>
        <div className="annual__graph-ctn">
          {this.state.loadingState === "line" && this.renderLineGraph()}
          {this.state.loadingState === "bar" && this.renderBarGraph()}
          {this.state.loadingState === "radar" && this.renderRadarGraph()}
          {this.state.loadingState === "financials" && (
            <CompanyDataCardList
              financialsDates={this.props.financialsAnnualDates}
              financialsRevenue={this.props.financialsAnnualRevenue}
              financialsCostOfRevenue={this.props.financialsAnnualCostOfRevenue}
              financialsGrossProfit={this.props.financialsAnnualGrossProfit}
              financialsNetIncome={this.props.financialsAnnualNetIncome}
              financialsCostAndExpenses={
                this.props.financialsAnnualCostAndExpenses
              }
              financialsOperatingExpenses={
                this.props.financialsAnnualOperatingExpenses
              }
            />
          )}
        </div>
      </>
    );
  }
}

export default AnnualFinancialStatement;
