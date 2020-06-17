import React, { Component } from "react";
import "./AnnualFinancialStatement.scss";
import CompanyDataCardList from "../ComapnyDataCardList/CompanyDataCardList";

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
          {this.state.loadingState === "line" && <div>line</div>}
          {this.state.loadingState === "bar" && <div>bar</div>}
          {this.state.loadingState === "radar" && <div>radar</div>}
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
    // <div className="financials__data-ctn">
    //   <div className="financials__button-ctn">
    //     <button
    //       onClick={this.handleQuarterlyButtonClick}
    //       className={this.state.quarterlyClassName}
    //     >
    //       Quarterly
    //     </button>
    //     <button
    //       onClick={this.handleAnnualButtonClick}
    //       className={this.state.annualClassName}
    //     >
    //       Annual
    //     </button>
    //   </div>
    //   <div className="financials__button-ctn">
    //     <button
    //       onClick={this.handleLineButtonClick}
    //       className={this.state.buttonLine}
    //     >
    //       Line Graph
    //     </button>
    //     <button
    //       onClick={this.handleBarButtonClick}
    //       className={this.state.buttonBar}
    //     >
    //       Bar Graph
    //     </button>
    //     <button
    //       onClick={this.handleRadarButtonClick}
    //       className={this.state.buttonRadar}
    //     >
    //       Radar Graph
    //     </button>
    //     <button
    //       onClick={this.handleFinancialsButtonClick}
    //       className={this.state.buttonFinancials}
    //     >
    //       Financial Statement
    //     </button>
    //   </div>
    //   <div className="financials__graph-ctn">
    //     {this.state.loading === "line" && this.renderLineGraph()}
    //     {this.state.loading === "bar" && this.renderBarGraph()}
    //     {this.state.loading === "radar" && this.renderRadarGraph()}
    //     {this.state.loading === "financials" && (
    //       <CompanyDataCardList
    //         financialsDates={this.state.financialsAnnualDates}
    //         financialsRevenue={this.state.financialsAnnualRevenue}
    //         financialsCostOfRevenue={this.state.financialsAnnualCostOfRevenue}
    //         financialsGrossProfit={this.state.financialsAnnualGrossProfit}
    //         financialsNetIncome={this.state.financialsAnnualNetIncome}
    //         financialsCostAndExpenses={
    //           this.state.financialsAnnualCostAndExpenses
    //         }
    //         financialsOperatingExpenses={
    //           this.state.financialsAnnualOperatingExpenses
    //         }
    //       />
    //     )}
    //   </div>
    // </div>;
  }
}

export default AnnualFinancialStatement;
